import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-primary-500 flex flex-col justify-between pt-32 pb-16 px-6 lg:px-12 overflow-hidden selection:bg-dark-950 selection:text-white">
      {/* Decorative large noise */}
      <div className="absolute inset-0 opacity-30 pointer-events-none noise mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-md"
        >
          <div className="w-12 h-12 rounded-full border-2 border-dark-950 flex items-center justify-center mb-6">
            <ArrowRight className="w-6 h-6 text-dark-950 -rotate-45" />
          </div>
          <p className="text-dark-950 text-xl md:text-2xl font-bold leading-snug">
            Stop settling for average. Let's engineer a digital product that commands your market.
          </p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <Link to="/onboarding" className="inline-flex items-center gap-4 px-10 py-5 bg-dark-950 text-white text-sm font-black uppercase tracking-widest hover:bg-dark-800 transition-colors group overflow-hidden relative">
            <span className="relative z-10">Start Your Application</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 w-full mt-32 md:mt-auto border-t border-dark-950/20 pt-8">
        <Link to="/onboarding" className="group block w-full flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[10vw] font-black text-dark-950 leading-[0.75] tracking-tighter uppercase group-hover:text-white transition-colors duration-700 break-words"
          >
            Let's Build.
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="flex w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-dark-950 items-center justify-center group-hover:bg-dark-950 group-hover:border-dark-950 transition-colors duration-500 shrink-0"
          >
             <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-dark-950 -rotate-45 group-hover:text-white group-hover:rotate-0 transition-all duration-500" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
