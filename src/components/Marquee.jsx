import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text }) => {
  return (
    <div className="w-full overflow-hidden bg-dark-950 py-10 lg:py-20 border-y border-white/5 relative z-10 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="flex items-center"
        >
          {/* Repeating content twice for seamless loop */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 lg:gap-20 px-6 lg:px-12">
              <span className="text-4xl lg:text-7xl font-black text-transparent uppercase tracking-tighter transition-all duration-700 hover:text-primary-500"
                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}>
                {text}
              </span>
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-primary-500 rounded-full blur-[2px]"></div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Side Vignettes for cinematic feel */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
