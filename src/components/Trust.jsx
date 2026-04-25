import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Activity, Target } from 'lucide-react';

const partners = [
  { name: 'BearGuard', logo: '/logos/bearguard.png', category: 'Security' },
  { name: 'UniPast', logo: '/logos/unipast.png', category: 'EdTech' },
  { name: 'ApexMarket', logo: '/logos/apexmarket.png', category: 'Retail' },
  { name: 'NovaGlobal', logo: '/logos/novaglobal.png', category: 'SaaS' },
  { name: 'LuxeRE', logo: '/logos/luxere.png', category: 'Luxury' }
];

const Trust = () => {
  return (
    <section className="py-24 lg:py-32 bg-dark-950 border-y border-white/5 relative overflow-hidden select-none">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16 lg:mb-20">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
               <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500">Partner Ecosystem</span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] italic mb-8">
              Helping High-Growth <br/>Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Dominance.</span>
            </h3>
            <p className="text-neutral-500 font-medium text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              We partner with ambitious organizations to build mission-critical digital assets that drive measurable revenue and market authority.
            </p>
          </div>

          {/* Marquee Logic Embedded */}
          <div className="flex-grow w-full lg:w-auto overflow-hidden relative py-12">
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="flex items-center gap-8 lg:gap-16"
              >
                {[...partners, ...partners].map((partner, idx) => (
                  <div 
                    key={`${partner.name}-${idx}`}
                    className="group flex flex-col items-center gap-6 px-12 lg:px-16 transition-all duration-700"
                  >
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-600 group-hover:text-primary-500 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden">
                       <div className="relative z-10 w-full h-full p-4 transform group-hover:scale-110 transition-transform duration-500">
                          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                       </div>
                       {/* Subtle Background Glow */}
                       <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">{partner.name}</span>
                       <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600">{partner.category}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Side Vignettes */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Background Graphic Decor */}
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Trust;
