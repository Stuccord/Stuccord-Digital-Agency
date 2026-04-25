import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Filter, Search } from 'lucide-react';
import SEO from '../components/SEO';

const portfolioItems = [
  {
    id: 'zoe-dental',
    title: 'Zoe Dental Clinic',
    desc: 'Complete digital overhaul for a high-traffic dental clinic. We repaired broken site architecture and optimized the booking flow, resulting in a massive increase in lead generation.',
    image: '/web_design_showcase.png',
    category: 'Clinic / Growth',
    tags: ['Site Fix', 'Booking Optimization', 'SEO'],
    metric: '+310% Leads'
  },
  {
    id: 'bearguard',
    title: 'BearGuard',
    desc: 'An elite SaaS referral ecosystem engineered for high-integrity lead tracking and automated reward distribution.',
    image: '/bearguard-shot.png',
    category: 'SaaS / Fintech',
    tags: ['React', 'Node.js', 'Supabase'],
    metric: '+240% Growth'
  },
  {
    id: 'unipast-new',
    title: 'UniPast Platform',
    desc: 'The next evolution of educational management. A cinematic, 3D-inspired portal for seamless academic orchestration.',
    image: '/unipast-shot.png',
    category: 'EdTech / Portal',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    metric: '50k+ Users'
  },
  {
    id: 'rich-dream-consult',
    title: 'Rich Dream Consult',
    desc: 'Premium digital presence for a world-class travel and business consultancy, bridging global markets with gold-standard aesthetics.',
    image: '/rich-dream-shot.png',
    category: 'Business / Luxury',
    tags: ['Brutalism', 'SEO', 'Conversion'],
    metric: '9.8 Trust Score'
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category.split(' / ')[0]))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.startsWith(filter));

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950">
      <SEO 
        title="Case Studies & Archive" 
        description="Explore our archive of high-performance digital ecosystems, SaaS platforms, and revenue-driven brand experiences." 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/10 via-dark-950/20 to-dark-950 z-10"></div>
          <img 
            src="/web_design_showcase.png" 
            alt="Agency Archive" 
            className="w-full h-full object-cover filter brightness-[0.4] grayscale-[0.3]"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8 italic">
              The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Archive.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-tight">
              A curated selection of mission-critical platforms and cinematic brand experiences engineered for dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-y border-white/5 bg-dark-950 sticky top-[72px] z-30 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-8">
          <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-primary-500 text-dark-950' 
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
             <Filter className="w-4 h-4" />
             <span className="text-[10px] font-black uppercase tracking-widest">{filteredItems.length} Projects Loaded</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx % 2 * 0.1 }}
                className="group cursor-none"
              >
                <Link to={`/portfolio/${item.id}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 mb-8">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div>
                        <p className="text-primary-500 font-black text-xs uppercase tracking-widest mb-2">{item.metric}</p>
                        <div className="flex gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-950">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 px-3 py-1 bg-primary-500/10 rounded-full">{item.category}</span>
                    </div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-primary-500 transition-colors">{item.title}</h3>
                    <p className="text-neutral-400 font-medium leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-48 px-6 text-center bg-white text-dark-950">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic">Your Project <br/>Is Next.</h2>
            <Link 
              to="/onboarding" 
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-dark-950 text-white font-black uppercase tracking-[0.2em] text-sm overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500"
            >
              Initiate Onboarding
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
