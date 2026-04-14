import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Eye, Target } from 'lucide-react';

const features = [
  {
    icon: <Eye className="w-8 h-8 text-primary-400" />,
    title: 'Uncompromising Design',
    desc: 'Aesthetics that build trust and drive action immediately.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary-400" />,
    title: 'Future-Proof Tech',
    desc: 'Architectures built to scale seamlessly with your ambition.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-400" />,
    title: 'Absolute Transparency',
    desc: 'Clear communication and deadlines that actually mean something.'
  },
  {
    icon: <Target className="w-8 h-8 text-primary-400" />,
    title: 'Relentless ROI Focus',
    desc: 'Every pixel and line of code is designed to generate revenue.'
  }
];

const Features = () => {
  return (
    <section className="w-full py-24 bg-dark-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">The <span className="text-primary-400">Stuccord</span> Standard.</h2>
          <p className="text-lg text-neutral-400">Why top-tier brands choose us to lead their digital transformations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6 relative hover:rotate-6 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl"></div>
                <div className="relative z-10">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
