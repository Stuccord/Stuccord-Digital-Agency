import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Shield, Zap, Target, CheckCircle } from 'lucide-react';

const projects = {
  'finscale-pro': {
    title: 'FinScale Pro Strategy',
    desc: 'An enterprise-grade financial modeling platform built for accuracy and high-concurrency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
    category: 'SaaS Engineering',
    liveUrl: '#',
    metrics: ['85% Reduction in Ops Time', '2M+ Monthly API Calls', '99.9% Uptime SLA'],
    challenge: 'Scaling a legacy monolithic architecture to handle 500k+ concurrent transactions without latency spikes.',
    solution: 'Migrated to a serverless microservices architecture with a global edge-caching layer.'
  },
  'apex-market': {
    title: 'Apex Market Ecosystem',
    desc: 'High-conversion e-commerce ecosystem designed for rapid scaling and global reach.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    category: 'E-commerce',
    liveUrl: '#',
    metrics: ['340% Increase in Conversions', '$12M ARR Growth', '1.2s Average Load Time'],
    challenge: 'Re-imagining a physical luxury experience for a digital-first audience while maintaining brand exclusivity.',
    solution: 'Utilized Next.js for sub-second page transitions and localized currency routing.'
  },
  'nova-global': {
    title: 'Nova Global Identity',
    desc: 'Complete brand identity overhaul for an international AI research laboratory.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
    category: 'Brand Strategy',
    liveUrl: '#',
    metrics: ['Industry Leading UX Score', '40 Countries Reached', 'PCI-DSS Compliance'],
    challenge: 'Building a trust-less ledger system that complies with diverse regional fin-reg policies simultaneously.',
    solution: 'Implemented a distributed ledger with automated compliance auditing.'
  },
  'luxe-real-estate': {
    title: 'Luxe Real Estate Portal',
    desc: 'Immersive premium real estate listing portal with VR integration capabilities.',
    image: 'https://images.unsplash.com/photo-1454165833767-139366d2f347?auto=format&fit=crop&q=80&w=2000',
    category: 'Web Design',
    liveUrl: '#',
    metrics: ['95% User Engagement Rate', 'VR Tours Integrated', 'Mobile First Design'],
    challenge: 'Creating a seamless VR experience on mobile web browsers for luxury properties.',
    solution: 'Developed a WebGL-based viewer with optimized assets for rapid loading.'
  },
  'orbit-design': {
    title: 'Orbit Design System',
    desc: 'Space-tech landing system and visual branding for a satellite launch startup.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000',
    category: 'Brand Identity',
    liveUrl: '#',
    metrics: ['100% Brand Recognition', 'Venture Capital Ready', 'Modular Component Library'],
    challenge: 'Designing a visual language that communicates precision, orbit, and reliability.',
    solution: 'Created a mathematical grid system based on planetary orbits for all design elements.'
  }
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 pb-32 text-center text-white container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Case Study Not Found</h1>
        <Link to="/portfolio" className="text-primary-400 font-bold hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/portfolio" className="flex items-center gap-2 text-primary-400 font-bold mb-12 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{project.category}</span>
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">{project.title}</h1>
              <p className="text-xl text-neutral-400 mb-12 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                 {project.metrics.map((metric, i) => (
                   <div key={i} className="px-6 py-3 glass rounded-full text-white font-bold text-sm flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-primary-400" /> {metric}
                   </div>
                 ))}
              </div>

              {/* REAL LIVE BUTTON */}
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-xl shadow-emerald-500/20 group"
              >
                Launch Live Project <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="glass-card p-4 border border-white/10 rounded-[2.5rem] overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full aspect-[4/5] object-cover rounded-[2rem]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-32 border-t border-white/10 pt-32">
             <div className="glass-card p-12 hover:bg-white/5 transition-colors">
                <Target className="w-10 h-10 text-primary-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">The Business Challenge</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{project.challenge}</p>
             </div>
             <div className="glass-card p-12 border border-primary-500/20 bg-primary-500/5">
                <Zap className="w-10 h-10 text-primary-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">The Stuccord Solution</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{project.solution}</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
