import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Stuccord transformed our outdated system into a modern SaaS powerhouse. Their team is communicative, relentless, and brilliant.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, InnovateCorp"
  },
  {
    quote: "Our new website paid for itself in the first month. The spike in organic traffic and conversion rates is absolutely phenomenal.",
    author: "David Morgan",
    role: "Founder, Apex Retail"
  },
  {
    quote: "It's rare to find an agency that perfectly balances world-class aesthetics with deeply technical development chops.",
    author: "Elena Rodriguez",
    role: "CMO, FinScale"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
               <div className="px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em]">Client Validation</span>
               </div>
            </div>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.8] italic text-white">
            Market <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Verification.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group glass p-8 lg:p-12 rounded-[3rem] border border-white/10 flex flex-col justify-between h-full hover:border-primary-500/30 transition-all duration-500"
            >
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 group-hover:text-primary-500/10 transition-colors" />
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary-500 text-primary-500" />)}
                </div>
                <p className="text-lg lg:text-xl text-neutral-300 font-medium leading-relaxed mb-12 relative z-10">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-all">
                   <span className="text-white font-black group-hover:text-primary-500">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px]">{t.author}</h4>
                  <p className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
