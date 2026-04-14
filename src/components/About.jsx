import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="w-full py-32 container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We Don't Just Build Websites. <br/>
            <span className="text-gradient">We Build Businesses.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            In a crowded digital landscape, blending in is failing. At Stuccord, we combine world-class design, robust engineering, and revenue-focused marketing to create digital touchpoints that dominate.
          </p>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
            We exist to make you the undeniable leader in your space—turning casual visitors into fiercely loyal customers through exceptional digital experiences.
          </p>
          
          <Link to="/about" className="group flex items-center gap-2 text-primary-400 font-bold text-lg hover:text-primary-300 transition-colors">
            Uncover Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-[3rem] p-12 lg:p-16 overflow-hidden aspect-square flex flex-col justify-end group shadow-2xl"
        >
          {/* Real Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1500" 
               className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000"
               alt="Leadership Studio"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mb-8 border border-primary-500/20">
              <Quote className="w-8 h-8" fill="currentColor" />
            </div>
            <p className="text-2xl lg:text-3xl font-medium text-white italic leading-relaxed mb-8">
              “The future belongs to brands that treat their digital presence like their most valuable asset.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/20">SL</div>
              <div>
                <p className="text-white font-bold">Stuccord Leadership</p>
                <p className="text-neutral-500 text-sm">Vision & Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
