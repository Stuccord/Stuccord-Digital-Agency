import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-8 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-primary-600 z-0 opacity-10">
          <div className="absolute inset-0 bg-dark-900/90"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/30 rounded-full blur-[120px] mix-blend-screen translate-x-1/2 -translate-y-1/2"></div>
       </div>

       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="relative z-10 max-w-4xl mx-auto text-center glass-card border border-primary-500/20 p-12 lg:p-20 rounded-[3rem] overflow-hidden"
       >
         <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
             Ready to Re-invent Your <br/>Digital Presence?
           </h2>
           <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
             Stop settling for average. Let's build something exceptional that commands your market and converts.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link 
               to="/contact" 
               className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-dark-900 text-lg font-bold rounded-full overflow-hidden hover:bg-neutral-200 transition-colors shadow-xl shadow-white/10"
             >
               Start Your Project
               <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
             <Link 
               to="/schedule" 
               className="group inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-white text-lg font-bold rounded-full overflow-hidden hover:bg-white/10 transition-colors"
             >
               Schedule a Call
             </Link>
           </div>
         </div>
       </motion.div>
    </section>
  );
};

export default CTA;
