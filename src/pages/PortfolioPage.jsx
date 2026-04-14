import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 'finscale-pro',
    title: 'FinScale Pro',
    category: 'SaaS',
    desc: 'An enterprise-grade financial modeling platform built for accuracy and high-concurrency.',
    meta: 'Fintech Transformation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'apex-market',
    title: 'Apex Market',
    category: 'Web',
    desc: 'High-conversion e-commerce ecosystem designed for rapid scaling and global reach.',
    meta: 'E-commerce Mastery',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nova-global',
    title: 'Nova Global',
    category: 'Brand',
    desc: 'Complete brand identity overhaul for an international AI research laboratory.',
    meta: 'Minimalist Branding',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'finscale-pro', // Using same for now
    title: 'Crypta Vault',
    category: 'SaaS',
    desc: 'Multi-layer encrypted storage solution with instant retrieval architecture.',
    meta: 'Privacy Redefined',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'luxe-real-estate',
    title: 'Luxe Real Estate',
    category: 'Web',
    desc: 'Immersive premium real estate listing portal with VR integration capabilities.',
    meta: 'Digital Presence',
    image: 'https://images.unsplash.com/photo-1454165833767-139366d2f347?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'orbit-design',
    title: 'Orbit Design',
    category: 'Brand',
    desc: 'Space-tech landing system and visual branding for a satellite launch startup.',
    meta: 'Futuristic Identity',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800'
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'SaaS', 'Web', 'Brand'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8">
            Work That Defines the <span className="text-gradient-primary">Standard.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
            Explore our curated gallery of premium digital products and brand transformations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                  filter === cat 
                  ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30' 
                  : 'bg-dark-800 border-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass-card">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/10 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-2">{item.meta}</p>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {item.desc}
                    </p>
                    <Link to={`/portfolio/${item.id}`} className="flex items-center gap-2 text-white font-bold group/btn">
                       View Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioPage;
