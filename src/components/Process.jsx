import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your DNA, audience, and market to map the perfect attack plan.'
  },
  {
    num: '02',
    title: 'Architecture & Design',
    desc: 'Prototyping premium, interactive interfaces that balance aesthetics with user logic.'
  },
  {
    num: '03',
    title: 'Engineering & Build',
    desc: 'Building scale-ready, mission-critical systems with clean, optimized code.'
  },
  {
    num: '04',
    title: 'Launch & Expansion',
    desc: 'Deployment is just the beginning. We optimize and scale your digital assets for growth.'
  }
];

const Process = () => {
  return (
    <section id="process" className="w-full py-32 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <img 
           src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500" 
           className="w-full h-full object-cover grayscale"
           alt=""
         />
         <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Seamless Execution. <br/><span className="text-gradient">Proven Results.</span></h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Our methodology is designed to eliminate uncertainty and maximize the business impact of every digital asset we build.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent -translate-x-1/2 hidden md:block"
          ></motion.div>

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                   <motion.div 
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                     className={`glass-card p-10 relative overflow-hidden ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                   >
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        className="text-primary-500 font-black text-sm mb-4 block"
                      >
                        {step.num}
                      </motion.span>
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                        className="text-2xl lg:text-3xl font-bold text-white mb-4"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.6 }}
                        className="text-neutral-400 leading-relaxed"
                      >
                        {step.desc}
                      </motion.p>
                   </motion.div>
                </div>

                {/* Point */}
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 + 0.2 }}
                   className="relative z-20"
                >
                   <div className="w-12 h-12 rounded-full bg-dark-900 border-4 border-primary-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                   </div>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
