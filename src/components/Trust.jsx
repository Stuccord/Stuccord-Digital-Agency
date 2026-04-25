import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  const logos = [
    { name: 'BearGuard', url: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=100' },
    { name: 'UniPast', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=100' },
    { name: 'ApexMarket', url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=100' },
    { name: 'NovaGlobal', url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=100' },
    { name: 'LuxeRE', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=100' }
  ];

  return (
    <section className="py-24 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-4">Trusted by Ambitious Brands</h3>
            <p className="text-neutral-400 font-medium text-sm leading-relaxed">
              We partner with businesses, clinics, and shops to engineer digital assets that build trust and scale revenue.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {logos.map((logo, idx) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/50 transition-colors">
                  <img src={logo.url} alt={logo.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
