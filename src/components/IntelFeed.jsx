import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const IntelFeed = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    const templateParams = {
      from_name: 'Intel Feed Subscriber',
      from_email: email,
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
      subject: 'New Intel Feed Subscription',
      message: `
[ NEW SUBSCRIPTION: INTEL FEED ]

▪ Subscriber Email: ${email}
▪ Source: Stuccord Homepage / Intel Feed Module

Please add this user to your mailing list.
      `
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="w-full py-24 bg-dark-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
         <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
               <div className="px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                  <span className="text-[8px] font-black text-primary-400 uppercase tracking-[0.3em]">Direct Frequency</span>
               </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] italic mb-6">
              Access the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Intel Feed.</span>
            </h2>
            <p className="text-neutral-500 font-medium max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">
              Get elite technical strategies, market-shifting insights, and agency-grade protocols delivered directly to your terminal.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <form onSubmit={handleSubmit} className="relative group">
               <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="ENTER TERMINAL EMAIL..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'success' || status === 'loading'}
                    className="w-full bg-white/[0.03] border border-white/10 px-8 py-6 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest placeholder:text-neutral-700 focus:outline-none focus:border-primary-500/50 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'success' || status === 'loading'}
                    className="absolute right-3 p-4 bg-white text-dark-950 rounded-xl hover:bg-primary-500 transition-all disabled:bg-neutral-800 disabled:text-neutral-500 group-hover:scale-105"
                  >
                    {status === 'loading' ? (
                       <div className="w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full animate-spin"></div>
                    ) : status === 'success' ? (
                       <CheckCircle2 className="w-5 h-5" />
                    ) : (
                       <Send className="w-5 h-5" />
                    )}
                  </button>
               </div>

               {/* Submission Feedback */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: (status === 'success' || status === 'error') ? 1 : 0, y: (status === 'success' || status === 'error') ? 0 : 10 }}
                 className="absolute top-full left-0 w-full pt-4 flex items-center gap-3"
               >
                  {status === 'error' ? (
                     <>
                        <ShieldAlert className="w-4 h-4 text-red-500" />
                        <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">Connection Failed. Please try again.</span>
                     </>
                  ) : (
                     <>
                        <CheckCircle2 className="w-4 h-4 text-primary-500" />
                        <span className="text-[8px] font-black text-primary-500 uppercase tracking-widest">Connection Established. Welcome to the Protocol.</span>
                     </>
                  )}
               </motion.div>
            </form>

            <div className="mt-12 grid grid-cols-2 gap-4">
               <div className="p-4 glass border border-white/5 rounded-2xl">
                  <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest block mb-1">Transmission</span>
                  <span className="text-[10px] font-bold text-white">Encrypted / SSL</span>
               </div>
               <div className="p-4 glass border border-white/5 rounded-2xl">
                  <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest block mb-1">Frequency</span>
                  <span className="text-[10px] font-bold text-white">Bi-Weekly Intel</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelFeed;
