import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="philosophy" className="w-full py-32 lg:py-48 bg-primary-500 selection:bg-dark-950 selection:text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-dark-950 uppercase tracking-tighter leading-[0.85] mb-4">
              Agencies design <br/> for designers.
            </h2>
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white mix-blend-difference uppercase tracking-tighter leading-[0.85]">
              We engineer <br/> for revenue.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-dark-950 border-t-2 border-dark-950 pt-12 lg:pt-16">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col gap-4"
            >
              <span className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">$50M+</span>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-widest max-w-[200px]">Client Revenue Generated</span>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex flex-col gap-4 md:pl-8 lg:pl-16 md:border-l-2 border-dark-950"
            >
              <span className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">99%</span>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-widest max-w-[200px]">Partner Retention Rate</span>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex flex-col gap-4 md:pl-8 lg:pl-16 md:border-l-2 border-dark-950"
            >
              <span className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">15+</span>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-widest max-w-[200px]">Global Startups Scaled</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
