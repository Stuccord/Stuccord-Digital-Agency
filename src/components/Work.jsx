import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'FinScale Platform',
    category: 'SaaS Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: 'Reduced load times by 2.4s'
  },
  {
    title: 'Apex E-commerce',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    stats: '130% increase in conversions'
  },
  {
    title: 'Nova AI Suite',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    stats: 'Industry leading UX/UI'
  }
];

const Work = () => {
  return (
    <section id="work" className="w-full py-24 container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Work That Speaks <br/><span className="text-gradient">For Itself.</span></h2>
          <p className="text-neutral-400 text-lg">
            We don't just deliver projects; we deliver measurable business impact through technical excellence and design mastery.
          </p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to="/portfolio" className="text-primary-400 font-semibold flex items-center gap-2 hover:text-primary-300 transition-colors">
            View All Case Studies <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/5">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                 <div className="glass px-3 py-1 rounded-full text-xs font-bold text-primary-400 border-primary-500/20 inline-block mb-2">
                   {project.stats}
                 </div>
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.4 }}
              className="text-neutral-500 font-medium"
            >
              {project.category}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
