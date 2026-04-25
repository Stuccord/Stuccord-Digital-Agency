import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'zoe-dental',
    title: 'Zoe Dental',
    category: 'Web Engineering',
    image: '/web_design_showcase.png',
    metric: '+310% Leads'
  },
  {
    id: 'bearguard',
    title: 'BearGuard',
    category: 'SaaS Architecture',
    image: '/bearguard-shot.png',
    metric: '+240% Growth'
  },
  {
    id: 'unipast-new',
    title: 'UniPast',
    category: 'EdTech Systems',
    image: '/unipast-shot.png',
    metric: '50k+ Users'
  },
  {
    id: 'rich-dream-consult',
    title: 'Rich Dream',
    category: 'Luxury Identity',
    image: '/rich-dream-shot.png',
    metric: 'Elite Trust'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative"
    >
      <Link to={`/portfolio/${project.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 group-hover:border-primary-500/50 transition-all duration-700">
          <div className="absolute inset-0 z-10 bg-dark-950/40 group-hover:bg-dark-950/10 transition-all duration-700"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          
          {/* Floating Metric */}
          <div className="absolute top-6 left-6 z-20">
             <div className="glass px-4 py-2 rounded-full border border-primary-500/30 flex items-center gap-2 backdrop-blur-2xl">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">{project.metric}</span>
             </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
             <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary-500">{project.category}</span>
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter italic text-white group-hover:text-primary-500 transition-colors">
                  {project.title}.
                </h3>
             </div>
             
             <div className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-950">
                   <ArrowRight className="w-5 h-5" />
                </div>
             </div>
          </div>

          <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
        </div>
      </Link>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="w-full py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[8px] font-black text-primary-400 uppercase tracking-[0.3em]">Selected Proof</span>
               </div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.8] italic">
              Building Products. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Generating Growth.</span>
            </h2>
          </div>

          <Link to="/portfolio" className="group flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[8px] lg:text-[10px]">
             View Archive 
             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-500 group-hover:bg-primary-500/10 transition-all duration-500">
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </div>
          </Link>
        </div>

        {/* Reduced Size Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
