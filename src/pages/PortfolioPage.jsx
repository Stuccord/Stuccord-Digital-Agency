import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const portfolioItems = [
  {
    id: 'bearguard',
    title: 'BearGuard Support',
    category: 'SaaS',
    desc: 'High-impact referral and commission platform for community-based support services.',
    meta: 'Referral Ecosystem',
    image: '/bearguard-shot.png'
  },
  {
    id: 'unipast-new',
    title: 'UniPast Platform',
    category: 'Web',
    desc: 'Futuristic, dark-mode EdTech platform with cinematic UI and secure academic resource access.',
    meta: 'EdTech Innovation',
    image: '/unipast-shot.png'
  },
  {
    id: 'unipast-admin',
    title: 'UniPast Control',
    category: 'SaaS',
    desc: 'Advanced governance dashboard with real-time analytics and user management systems.',
    meta: 'SaaS Governance',
    image: '/unipast-admin-shot.png'
  },
  {
    id: 'rich-dream-consult',
    title: 'Rich Dream',
    category: 'Web',
    desc: "Ghana's premier multi-award winning consultancy for Travel, Visa, IT & Business Strategy.",
    meta: 'Consultancy Excellence',
    image: '/rich-dream-shot.png'
  },
  {
    id: 'yaa',
    title: 'YAA Initiative',
    category: 'Brand',
    desc: 'Dynamic community platform empowering youth advancement and engagement globally.',
    meta: 'Community Growth',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'SaaS', 'Web', 'Brand'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-dark-950">
      <SEO 
        title="Portfolio & Success Stories" 
        description="Explore our curated gallery of premium digital products, high-conversion ecosystems, and transformative brand identities." 
      />
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 noise z-0 opacity-20"></div>
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>

      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-4 py-1.5 rounded-full glass border border-primary-500/20 text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-8 inline-block">
             Digital Dominance
          </span>
          <h1 className="text-5xl lg:text-8xl font-black text-white italic leading-[0.85] tracking-tight mb-8">
            Defining the <br />
            <span className="text-gradient">Standard.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Explore our curated gallery of high-performance digital products and premium brand transformations engineering to disrupt the market.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all border duration-500 ${
                  filter === cat 
                  ? 'bg-primary-500 border-primary-500 text-dark-950 shadow-[0_15px_30px_rgba(16,185,129,0.3)]' 
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20 hover:text-white backdrop-blur-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 blur transition-all duration-700"></div>

                <div className="relative aspect-[4/5.5] rounded-[3rem] overflow-hidden border border-white/10 glass-card transition-all duration-700 group-hover:border-primary-500/30">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="overflow-hidden mb-2">
                       <p className="text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                         {item.meta}
                       </p>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 italic leading-none tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 line-clamp-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                      {item.desc}
                    </p>
                    <Link to={`/portfolio/${item.id}`} className="flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-widest group/btn border-b border-white/10 w-fit pb-1 hover:border-primary-500 transition-all">
                       Examine Work <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform color-primary-500" />
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
