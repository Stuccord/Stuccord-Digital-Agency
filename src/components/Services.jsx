import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    id: '01',
    title: 'SaaS Systems',
    icon: <Zap className="w-6 h-6" />,
    desc: 'Scalable, sub-second architectures engineered for global startups.',
    path: '/services/web-development'
  },
  {
    id: '02',
    title: 'Experiences',
    icon: <Globe className="w-6 h-6" />,
    desc: 'Cinematic, high-conversion web experiences that command attention.',
    path: '/services/web-design'
  },
  {
    id: '03',
    title: 'Brand ID',
    icon: <Shield className="w-6 h-6" />,
    desc: 'Elite visual positioning for high-ticket market dominance.',
    path: '/services/ux-design'
  },
  {
    id: '04',
    title: 'Growth Eng',
    icon: <Target className="w-6 h-6" />,
    desc: 'Data-backed technical strategies to scale valuations.',
    path: '/investment'
  }
];

const ServiceCard = ({ cap }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-10 lg:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:bg-white/[0.08] overflow-hidden"
    >
      <div className="flex flex-col h-full justify-between gap-16 relative z-10">
        <div>
          <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-primary-500/20">
             {cap.icon}
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black text-primary-500/40 uppercase tracking-[0.5em]">{cap.id}</span>
               <div className="h-[1px] w-8 bg-white/5"></div>
            </div>
            
            <div className="min-h-[90px] lg:min-h-[110px] flex flex-col justify-start">
              <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white italic group-hover:text-primary-500 transition-colors leading-[0.85] break-words">
                {cap.title}
              </h4>
            </div>
            
            <p className="text-neutral-400 font-medium leading-relaxed text-[11px] lg:text-xs min-h-[60px] opacity-80 group-hover:opacity-100 transition-opacity">
              {cap.desc}
            </p>
          </div>
        </div>
        
        <Link 
          to={cap.path}
          className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[8px] lg:text-[9px] hover:gap-6 transition-all group/btn"
        >
          <span className="relative">
            Explore Module
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-500 group-hover/btn:w-full transition-all duration-500"></div>
          </span>
          <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-500/5 blur-[80px] group-hover:bg-primary-500/10 transition-all rounded-full"></div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="capabilities" className="w-full py-24 lg:py-32 bg-dark-950">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em]">Core Competencies</span>
               </div>
            </div>
            <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] italic">
              Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Architectures.</span>
            </h3>
          </div>
          <div className="lg:pb-4">
             <p className="text-neutral-500 font-medium max-w-sm text-sm lg:text-right">
                We engineer high-performance digital ecosystems that command markets and scale valuations.
             </p>
          </div>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <ServiceCard key={cap.id} cap={cap} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
