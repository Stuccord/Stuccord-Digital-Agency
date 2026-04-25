import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Activity, Globe, Shield, Zap, Code2, TrendingUp, Monitor, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[110vh] lg:h-[150vh] w-full overflow-hidden bg-dark-950">
      {/* Cinematic Deep Background */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/20 to-dark-950 z-10"></div>
        <img 
          src="/hero_cinematic_bg.png" 
          alt="Stuccord Agency Digital Architecture" 
          className="w-full h-full object-cover filter brightness-[0.25] grayscale-[0.2] transition-all duration-1000"
        />
        <div className="absolute inset-0 z-20 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </motion.div>

      {/* Terminal Scanline Effect */}
      <div className="scanline z-30"></div>

      {/* Hero Content */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-24 lg:pt-32 z-40 px-6">
        <motion.div 
          style={{ opacity }}
          className="text-center max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 backdrop-blur-xl mb-8 lg:mb-12"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </div>
            <span className="text-[8px] lg:text-[10px] font-black text-primary-400 uppercase tracking-[0.3em]">System Active // Q3 2026 Availability</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 lg:mb-12 italic">
            <motion.span 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block text-white"
            >
              Websites Built
            </motion.span>
            <motion.span 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500"
            >
              To Perform.
            </motion.span>
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block text-neutral-500 text-3xl md:text-5xl mt-2 font-black italic"
            >
              For High-Growth Brands.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-4xl mx-auto mb-12 lg:mb-16 font-medium leading-tight relative z-50 px-4"
          >
            Fast, beautiful designs made to grow your business. High-quality digital products that turn visitors into loyal customers.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 relative z-50 px-6 flex-wrap"
          >
            <Link 
              to="/onboarding" 
              className="group relative inline-flex items-center gap-4 px-10 py-5 lg:px-14 lg:py-6 bg-primary-500 text-white font-black uppercase tracking-[0.2em] text-xs lg:text-sm overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500 w-full sm:w-auto justify-center shadow-[0_20px_50px_rgba(31,239,147,0.1)] rounded-2xl"
            >
              <span className="relative z-10">Start My Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <style>{`.group:hover span { color: #000; } .group:hover svg { color: #000; }`}</style>
            </Link>

            <Link 
              to="/schedule" 
              className="group relative inline-flex items-center gap-4 px-10 py-5 lg:px-14 lg:py-6 bg-transparent border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs lg:text-sm overflow-hidden hover:border-primary-500 active:scale-95 transition-all duration-500 w-full sm:w-auto justify-center rounded-2xl"
            >
              <span className="relative z-10">Book a Free Call</span>
              <Video className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10 text-primary-500" />
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            
            <Link 
              to="/portfolio" 
              className="group inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-xs lg:text-sm hover:text-primary-400 transition-all duration-300 py-4"
            >
              <span className="border-b border-white/20 group-hover:border-primary-500 transition-colors pb-1">View Archive</span>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-500 group-hover:bg-white/5 transition-all">
                <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Interface Cards - XL Screen Only */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* Metric Card 1 - Top Right */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[15%] right-[5%] w-72 glass p-6 rounded-3xl border border-white/10 hidden xl:block animate-float"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-500">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Revenue Growth</p>
              <p className="text-2xl font-black text-white">+240%</p>
            </div>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-primary-500"
            />
          </div>
        </motion.div>

        {/* Valuation Chart Card - Middle Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-[45%] right-[2%] w-64 glass p-6 rounded-3xl border border-white/10 hidden 2xl:block animate-float"
          style={{ animationDelay: '1s' }}
        >
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                 <TrendingUp className="w-4 h-4 text-emerald-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Valuation</span>
              </div>
              <span className="text-[10px] font-black text-emerald-500">+$2.4M</span>
           </div>
           <div className="flex items-end gap-1 h-12">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 2 + i * 0.1 }}
                  className="flex-1 bg-primary-500/40 rounded-t-sm"
                />
              ))}
           </div>
        </motion.div>

        {/* Global Node Card - Bottom Left */}
        <motion.div 
          style={{ y: y1, animationDelay: '2s' }}
          className="absolute bottom-[10%] left-[5%] w-80 glass p-6 rounded-3xl border border-white/10 hidden xl:block animate-float"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Active Nodes</p>
              <p className="text-2xl font-black text-white">Global Edge</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="w-12 h-2 bg-white/10 rounded-full"></div>
              <div className="w-20 h-2 bg-white/10 rounded-full"></div>
              <div className="w-16 h-2 bg-primary-500/50 rounded-full"></div>
            </div>
            <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-tighter">Status: Synchronized</div>
          </div>
        </motion.div>

        {/* Code Snippet Card - Far Left Middle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-[35%] left-[2%] w-72 glass p-6 rounded-3xl border border-white/10 hidden 2xl:block animate-float"
          style={{ animationDelay: '4s' }}
        >
          <div className="flex items-center gap-3 mb-4">
             <Code2 className="w-5 h-5 text-primary-500" />
             <span className="text-[10px] font-black uppercase tracking-widest text-white">Deployment Protocol</span>
          </div>
          <div className="space-y-2 font-mono text-[9px] text-neutral-500 leading-tight">
            <p className="text-primary-400">const ecosystem = await engineer({'{'}</p>
            <p className="pl-4">scale: 'global',</p>
            <p className="pl-4 text-white">dominance: true,</p>
            <p className="pl-4">performance: 'sub-second'</p>
            <p className="text-primary-400">{'}'});</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Cinematic Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-950 to-transparent z-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
