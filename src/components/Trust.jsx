import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Shield, Database } from 'lucide-react';

const brands = [
  { name: 'EQUINOX', icon: <Cpu className="w-5 h-5" /> },
  { name: 'GLOBALIA', icon: <Globe className="w-5 h-5" /> },
  { name: 'NEXUS', icon: <Zap className="w-5 h-5" /> },
  { name: 'FINSTREAM', icon: <Shield className="w-5 h-5" /> },
  { name: 'ULTRAVOLT', icon: <Database className="w-5 h-5" /> }
];

const stats = [
  { label: 'Digital Transformations', value: '150+' },
  { label: 'Client Retention Rate', value: '98%' },
  { label: 'Combined Expertise', value: '10+ Yrs' },
];

const Trust = () => {
  return (
    <section className="w-full border-y border-white/5 bg-dark-800/30 overflow-hidden relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-12">
          Trusted by Innovative Brands Worldwide
        </p>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 mb-20">
           {brands.map((brand, i) => (
             <motion.div 
               key={brand.name} 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default"
             >
               <div className="text-primary-500">
                 {brand.icon}
               </div>
               <span className="text-xl font-black tracking-tighter text-white">{brand.name}</span>
             </motion.div>
           ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-5xl lg:text-7xl font-black text-gradient-primary mb-2 italic tracking-tighter">{stat.value}</h3>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
