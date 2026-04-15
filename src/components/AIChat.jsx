import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, Bot, User, Sparkles, Loader2, Minus, Maximize2, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Welcome to Stuccord Digital. I am your AI strategist. How can I help you dominate your market today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, showHandoff]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI Logic
    setTimeout(() => {
      let botText = '';
      let needsHandoff = false;
      const input = inputValue.toLowerCase();

      if (input.includes('service') || input.includes('do you do')) {
        botText = "We specialize in Custom SaaS Development, High-Performance Web Design, Brand Identity, and Growth-Driven SEO. Which one should we dive into first?";
      } else if (input.includes('price') || input.includes('cost')) {
        botText = "Our engineering solutions are custom-tailored for high ROI. For a precise quote, I recommend scheduling a strategy call with our leadership.";
      } else if (input.includes('contact') || input.includes('talk') || input.includes('expert') || input.includes('human')) {
        botText = "I understand. To get you the most accurate strategic advice, I'll connect you with our human directors. Please leave your details below so we can reach out immediately.";
        needsHandoff = true;
      } else if (input.includes('hello') || input.includes('hi')) {
        botText = "Hello! I'm the Stuccord AI Engine. How can I assist with your digital transformation today?";
      } else {
        botText = "That's an interesting challenge. At Stuccord, we solve complex problems with elite engineering. Would you like to speak with a human expert about this?";
        needsHandoff = true;
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botText }]);
      setIsTyping(false);
      if (needsHandoff) setShowHandoff(true);
    }, 1500);
  };

  const handleHandoffSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_contact: formData.contact,
      message: messages.map(m => `${m.type.toUpperCase()}: ${m.text}`).join('\n\n'),
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        type: 'bot', 
        text: `Thank you, ${formData.name}. Our leadership team has been notified and will review your challenge. Expect a response shortly.` 
      }]);
      setShowHandoff(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(10px)' }}
            className="absolute bottom-16 right-0 w-[85vw] sm:w-[310px] h-[440px] flex flex-col glass overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {/* Header */}
            <div className="shrink-0 p-3 sm:p-3.5 bg-gradient-to-r from-primary-500/5 to-transparent border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/10">
                  <Bot className="w-4 h-4 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] tracking-tight leading-none">AI Strategist</h3>
                  <div className="flex items-center gap-1 leading-none mt-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[7px] text-emerald-500 font-bold uppercase tracking-widest opacity-80">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 text-neutral-500 hover:text-white transition-colors"
                aria-label="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-3 sm:p-4 space-y-3.5 custom-scrollbar"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-2.5 max-w-[90%] ${msg.type === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-7 h-7 rounded-md flex-shrink-0 flex items-center justify-center border ${
                      msg.type === 'bot' ? 'bg-primary-500/10 border-primary-500/20 text-primary-500' : 'bg-white/5 border-white/10 text-white'
                    }`}>
                      {msg.type === 'bot' ? <Sparkles className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed ${
                      msg.type === 'bot' ? 'bg-white/5 text-neutral-300 rounded-tl-none' : 'bg-primary-500 text-dark-950 font-medium rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {showHandoff && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-3"
                >
                  <h4 className="text-white font-bold text-[12px] uppercase tracking-wider text-center">Expert Intersection</h4>
                  <form onSubmit={handleHandoffSubmit} className="space-y-2">
                    <input 
                      required
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-primary-500/50"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required
                      type="text" 
                      placeholder="Email or Phone"
                      className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-primary-500/50"
                      value={formData.contact}
                      onChange={e => setFormData({...formData, contact: e.target.value})}
                    />
                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full py-2.5 bg-primary-500 text-dark-950 font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-xs"
                    >
                      {isSending ? <Loader2 className="w-3 h-3 animate-spin" /> : <><Mail className="w-3 h-3" /> Connect Expert</>}
                    </button>
                  </form>
                  <a 
                    href={`https://wa.me/233547581168?text=Hi, I'm reaching out from Stuccord AI. I have a question about...`}
                    target="_blank"
                    className="w-full py-2.5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <Phone className="w-3 h-3" /> WhatsApp Line
                  </a>
                </motion.div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 flex-row items-center">
                    <div className="w-7 h-7 rounded-md bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center">
                      <Loader2 className="w-3 h-3 animate-spin" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="shrink-0 p-3.5 border-t border-white/5 bg-dark-950/20">
              <div className="relative flex items-center">
                <input
                  type="text"
                  disabled={showHandoff}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={showHandoff ? "Form active..." : "Type strategy request..."}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-5 pr-12 text-[13px] text-white focus:outline-none focus:border-primary-500/40 transition-all placeholder:text-neutral-600 disabled:opacity-50"
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || showHandoff}
                  className="absolute right-1.5 p-2 bg-primary-500 text-dark-950 rounded-full hover:scale-110 active:scale-90 disabled:opacity-50 disabled:scale-100 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 animate-glow ${
          isOpen ? 'bg-white text-dark-900 border-none' : 'bg-primary-500 text-dark-950'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-[2.5px] border-dark-900"></span>
        )}
      </motion.button>


    </div>
  );
};

export default AIChat;
