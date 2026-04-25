import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WA_NUMBER = '233547581168';
const WA_MESSAGE = encodeURIComponent("Hello Stuccord! I'd like to discuss a project.");

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 3, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-[100] w-14 lg:w-16 h-14 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_50px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_20px_60px_rgba(37,211,102,0.6)] transition-all duration-500 cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 pointer-events-none"></div>
      
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
      
      {/* Notification Pulse */}
      <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
      </span>

      {/* Floating Status Label */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
         <div className="bg-white text-dark-950 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">
            Live Support Active
         </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
