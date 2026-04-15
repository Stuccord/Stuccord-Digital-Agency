import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Stuccord transformed our outdated system into a modern SaaS powerhouse. Their team is communicative, relentless, and brilliant.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, InnovateCorp"
  },
  {
    quote: "Our new website paid for itself in the first month. The spike in organic traffic and conversion rates is absolutely phenomenal.",
    author: "David Morgan",
    role: "Founder, Apex Retail"
  },
  {
    quote: "It's rare to find an agency that perfectly balances world-class aesthetics with deeply technical development chops.",
    author: "Elena Rodriguez",
    role: "CMO, FinScale"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-dark-800/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white">Don't Just Take<br/><span className="text-gradient">Our Word For It.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col justify-between h-full group"
            >
              <div>
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.15 + 0.3 }}
                   className="flex gap-1 mb-6"
                >
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />)}
                </motion.div>
                <motion.p 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.15 + 0.4 }}
                   className="text-lg text-white font-medium leading-relaxed mb-8"
                >
                  "{t.quote}"
                </motion.p>
              </div>
              <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.15 + 0.5 }}
                 className="flex items-center gap-4 border-t border-white/10 pt-6"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                   <span className="text-neutral-400 font-bold group-hover:text-primary-400">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-neutral-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
