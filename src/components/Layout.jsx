import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = ({ children }) => {
  const location = useLocation();
  const isOnboarding = location.pathname === '/onboarding';

  return (
    <div className="relative w-full bg-dark-950 min-h-screen font-sans selection:bg-primary-500 selection:text-dark-950 overflow-x-hidden">
      {/* Global Cinematic Layers */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[1] opacity-[0.15]"></div>
      
      {/* Background ambient drifting system */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary-600/10 rounded-full mix-blend-screen filter blur-[180px]"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[180px]"
        ></motion.div>

        {/* Technical Floating Particles */}
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: ["0%", "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
              className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"
            ></motion.div>
          ))}
        </div>
      </div>

      {!isOnboarding && <Navbar />}
      
      <main className={`relative flex flex-col w-full z-10 ${isOnboarding ? 'min-h-screen' : ''}`}>
        {children}
      </main>

      {!isOnboarding && <Footer />}
      {!isOnboarding && <FloatingWhatsApp />}
    </div>
  );
};

export default Layout;
