import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Lock, Zap, Layers, Code2 } from 'lucide-react';

const Arsenal = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stack = [
    { name: 'Core Architecture', tech: 'React / Next.js 15', icon: <Layers className="w-6 h-6" /> },
    { name: 'Data Infrastructure', tech: 'Supabase / PostgreSQL', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Performance Engine', tech: 'Vercel Edge / CDN', icon: <Zap className="w-6 h-6" /> },
    { name: 'Security Protocol', tech: 'AES-256 / OAuth 2.0', icon: <Lock className="w-6 h-6" /> }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen lg:min-h-[120vh] bg-dark-950 flex items-center overflow-hidden">
      {/* Cinematic Background - The Dashboard Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-10"></div>
        <div className="absolute inset-0 bg-dark-950/20 z-10 backdrop-blur-[1px]"></div>
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical Infrastructure" 
          className="w-full h-full object-cover filter brightness-[0.5] grayscale-[0.5]"
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em]">Arsenal // Tech Stack</span>
               </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] italic mb-12">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Dominance.</span>
            </h2>
            
            <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-md mb-16">
              Our tech stack is a synchronized ecosystem engineered for sub-second latency and global scalability.
            </p>

            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Uptime Metric</p>
                  <p className="text-4xl font-black text-white">99.99%</p>
               </div>
               <div className="space-y-2">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Average Latency</p>
                  <p className="text-4xl font-black text-white">&lt;80ms</p>
               </div>
            </div>
          </motion.div>

          {/* Stack Right */}
          <div className="space-y-4">
             {stack.map((item, idx) => (
               <motion.div
                 key={item.name}
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className="group glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/20 transition-all duration-500 hover:bg-white/[0.04] relative overflow-hidden"
               >
                  <div className="relative z-10 flex items-center justify-between">
                     <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 transition-all duration-500">
                           {item.icon}
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">{item.name}</p>
                           <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic">{item.tech}</h4>
                        </div>
                     </div>
                     <Code2 className="w-6 h-6 text-neutral-700 group-hover:text-primary-500 transition-colors" />
                  </div>
                  
                  {/* Internal Progress Bar */}
                  <div className="mt-8 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                     <motion.div
                       initial={{ width: 0 }}
                       whileInView={{ width: '100%' }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                       className="h-full bg-primary-500/50"
                     />
                  </div>
                  
                  <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-5 transition-opacity"></div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>

      {/* Global Status HUD */}
      <div className="absolute bottom-12 left-12 z-30 hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-widest text-neutral-500">
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
            <span>Status: Synchronized</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span>Nodes: Global Edge</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span>Security: AES-256</span>
         </div>
      </div>

      {/* Side HUD Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 px-12 z-30 hidden xl:block">
         <div className="flex flex-col gap-2">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className={`h-1 w-8 rounded-full ${i % 3 === 0 ? 'bg-primary-500' : 'bg-white/10'}`}></div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Arsenal;
