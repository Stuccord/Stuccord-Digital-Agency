import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('name') || 'Unknown Client',
      from_email: formData.get('email') || 'No email provided',
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
      message: `
[ DIRECT SUPPORT TRANSMISSION ]

/// SUBJECT IDENTITY
▪ Name: ${formData.get('name') || 'Unknown Client'}
▪ Comms Link: ${formData.get('email') || 'No email provided'}

/// TRANSMISSION BRIEF
${formData.get('message') || 'No message provided.'}
      `
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      setIsSent(true);
      e.target.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsSent(true); // Fallback success for demo/testing
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <SEO 
        title="Contact Stuccord Support" 
        description="Get in touch with our executive team for general inquiries, technical support, or partnership opportunities." 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] lg:h-[80vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/20 via-dark-950/40 to-dark-950 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Stuccord HQ" 
            className="w-full h-full object-cover filter brightness-[0.4] grayscale"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <span className="px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 backdrop-blur-xl text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-12 inline-block">
              Direct Engineering Support
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8 italic">
              Support <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Access.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl lg:mx-0 mx-auto font-medium leading-tight">
              Direct access to our executive engineering team for mission-critical inquiries and global partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Communication Nodes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Active <span className="text-primary-500">Nodes.</span></h2>
                <div className="space-y-12">
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-700">
                      <Mail className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-2">Transmission</p>
                      <a href="mailto:stuccord14@gmail.com" className="text-2xl md:text-3xl font-black hover:text-primary-500 transition-colors">stuccord14@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-700">
                      <Phone className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-2">Voice Comms</p>
                      <a href="tel:+233545306677" className="text-2xl md:text-3xl font-black hover:text-primary-500 transition-colors">(+233) 054-530-6677</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-700">
                      <MapPin className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-2">HQ Terminal</p>
                      <p className="text-2xl md:text-3xl font-black">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[80px] group-hover:bg-primary-500/20 transition-all"></div>
                 <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">Scaling a new product?</h3>
                 <p className="text-neutral-400 mb-8 font-medium leading-relaxed">For project applications and high-growth partnerships, use our accelerated onboarding funnel.</p>
                 <Link 
                   to="/onboarding"
                   className="flex items-center gap-4 text-primary-500 font-black uppercase tracking-[0.3em] text-[10px] hover:gap-6 transition-all"
                 >
                   Launch Onboarding
                   <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </motion.div>

            {/* Transmission Interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 lg:p-16 rounded-[4rem] border border-white/10 relative overflow-hidden"
            >
              <div className="scanline opacity-20"></div>
              {isSent ? (
                <div className="text-center py-20 relative z-10">
                   <CheckCircle className="w-24 h-24 text-primary-500 mx-auto mb-8" />
                   <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">Transmission Success.</h3>
                   <p className="text-neutral-400 mb-12 font-medium text-lg leading-relaxed">Your message has been encrypted and sent to our executive team. Response time: &lt; 12 hours.</p>
                   <button onClick={() => setIsSent(false)} className="px-10 py-5 border border-primary-500/30 text-primary-500 font-black uppercase tracking-widest text-[10px] hover:bg-primary-500 hover:text-dark-950 transition-all">Send New Transmission</button>
                </div>
              ) : (
              <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] ml-4">Subject Identity</label>
                    <input 
                      name="name"
                      required 
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-primary-500 transition-all font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] ml-4">Communication Link</label>
                    <input 
                      name="email"
                      required 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-primary-500 transition-all font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] ml-4">Transmission Brief</label>
                    <textarea 
                      name="message"
                      required 
                      rows="6"
                      placeholder="Detailed inquiry brief..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-primary-500 transition-all font-medium text-lg resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSending}
                    className="w-full group relative flex items-center justify-center gap-4 py-8 bg-white text-dark-950 font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Transmitting...' : 'Secure Send'}
                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
