import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    category: 'Engineering Mastery',
    title: 'Transforming Ideas into \nScale-Ready Architecture.',
    desc: 'We engineer premium digital experiences and resilient SaaS solutions that command your market and convert your audience.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000'
  },
  {
    category: 'Visual Authority',
    title: 'Design That Breathes \nConfidence and Luxury.',
    desc: 'Our branding systems are built for businesses that refuse to settle for average. We create identities that build instant legacy.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000'
  },
  {
    category: 'Growth Engineering',
    title: 'Data-Backed Strategies \nThat Accelerate Revenue.',
    desc: 'Stop guessing. We use advanced analytics and high-performance SEO to turn organic traffic into a compounding business asset.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-dark-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slides[current].image} 
              alt="Stuccord Background" 
              className="w-full h-full object-cover grayscale opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-4xl pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary-500"></div>
                  <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-xs">
                    {slides[current].category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tighter italic">
                  {slides[current].title}
                </h1>
                
                <p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                  {slides[current].desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                  <Link to="/contact" className="group flex items-center justify-center gap-2 px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all shadow-2xl shadow-primary-500/20">
                    Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/schedule" className="group flex items-center justify-center gap-2 px-10 py-5 glass border border-white/10 hover:border-white/20 text-white font-bold rounded-full transition-all">
                     Schedule Strategy Call <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 transition-colors"><div className="w-3 h-3 border-2 border-current rounded-sm"></div></div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Container */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group py-4 px-2"
          >
            <div className={`h-1.5 transition-all duration-500 rounded-full ${
              current === i ? 'w-16 bg-primary-500 shadow-lg shadow-primary-500/50' : 'w-8 bg-white/10 group-hover:bg-white/30'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Side Counter */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20">
         <span className="text-white font-black text-2xl">0{current + 1}</span>
         <div className="w-[1px] h-20 bg-white/10"></div>
         <span className="text-neutral-600 font-black text-2xl italic">03</span>
      </div>
    </section>
  );
};

export default Hero;
