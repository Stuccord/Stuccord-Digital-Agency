import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'bearguard',
    title: 'BearGuard Support',
    category: 'Support Services',
    image: '/bearguard-shot.png',
    stats: 'Community Referral Ecosystem'
  },
  {
    id: 'unipast-new',
    title: 'UniPast Platform',
    category: 'EdTech & Web',
    image: '/unipast-shot.png',
    stats: '200k+ Active Students'
  },
  {
    id: 'rich-dream-consult',
    title: 'Rich Dream Consult',
    category: 'Consultancy Web',
    image: '/rich-dream-shot.png',
    stats: 'Multi-Award Winner'
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
            <Link to={`/portfolio/${project.id}`}>
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
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
