import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, MousePointer2, Sparkles } from 'lucide-react';
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const bgX = useTransform(dx, [-500, 500], [20, -20]);
  const bgY = useTransform(dy, [-500, 500], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden bg-dark-950 flex flex-col">
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise z-[1]"></div>
      
      {/* Mesh Gradients */}
      <div className="absolute inset-0 mesh-gradient z-0 opacity-40"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Parallax Background */}
          <motion.div 
            style={{ x: bgX, y: bgY, scale: 1.1 }}
            className="absolute inset-0"
          >
            <motion.img 
              key={`hero-img-${current}`}
              initial={{ scale: 1.2, filter: 'grayscale(100%) brightness(0.2)' }}
              animate={{ scale: 1, filter: 'grayscale(100%) brightness(0.4)' }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={slides[current].image} 
              alt="Stuccord Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex-grow container mx-auto px-6 lg:px-8 flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                exit: { opacity: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="px-4 py-1.5 rounded-full glass border border-primary-500/20 text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs glow-text flex items-center gap-2">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" /> {slides[current].category}
                </span>
              </motion.div>
              
              <div className="overflow-hidden mb-8">
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-[-0.04em] italic whitespace-pre-line"
                >
                  {slides[current].title.split('\n').map((line, i) => (
                    <span key={i} className={i === 1 ? "text-gradient block" : "block"}>
                      {line}
                    </span>
                  ))}
                </motion.h1>
              </div>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
                className="text-lg lg:text-xl text-neutral-400 mb-12 max-w-2xl leading-snug font-medium"
              >
                {slides[current].desc}
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
              >
                <Link to="/contact" className="group relative px-12 py-6 bg-primary-500 text-dark-950 font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span className="relative z-10 text-lg uppercase tracking-tight">Begin Transformation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
                
                <Link to="/schedule" className="group flex items-center justify-center gap-4 px-12 py-6 glass border border-white/10 hover:border-white/20 text-white font-bold rounded-full transition-all hover:bg-white/5">
                   <span className="text-lg uppercase tracking-tight">Secure a Consult</span>
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-500">
                     <MousePointer2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
                   </div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Pagination - Repositioned and redesigned for clarity */}
      <div className="relative z-20 pb-16 px-6 lg:px-8 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative h-10 flex items-center justify-center"
            >
              <div className={`transition-all duration-500 rounded-full ${
                current === i ? 'w-16 h-1 bg-primary-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'w-8 h-1 bg-white/10 group-hover:bg-white/30'
              }`}></div>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
           <AnimatePresence mode="wait">
             <motion.div 
               key={current}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               className="flex items-baseline gap-2"
             >
               <span className="text-4xl font-black text-white italic">0{current + 1}</span>
               <span className="text-neutral-600 font-bold text-sm tracking-widest">/ 03</span>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]"
            animate={{
              x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;


