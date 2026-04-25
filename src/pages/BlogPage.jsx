import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search, Filter } from 'lucide-react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: 'future-of-saas-2026',
    title: 'The Future of SaaS: Brutalist Engineering and Cognitive Efficiency',
    excerpt: 'How the shift from generic UI to mission-critical architecture is redefining user retention in the enterprise sector.',
    image: '/hero_cinematic_bg.png',
    category: 'Engineering',
    author: 'Stuccord Intel',
    date: 'Apr 24, 2026',
    readTime: '8 min read',
    tags: ['SaaS', 'UX', 'Brutalism']
  },
  {
    id: 'scaling-unipast-to-200k',
    title: 'Case Study: Scaling UniPast to 200,000 Concurrent Users',
    excerpt: 'A deep dive into the technical infrastructure and edge-routing strategies that power Ghana\'s largest academic database.',
    image: '/unipast-shot.png',
    category: 'Architecture',
    author: 'Dev Ops Team',
    date: 'Apr 20, 2026',
    readTime: '12 min read',
    tags: ['Scaling', 'PostgreSQL', 'CDN']
  },
  {
    id: 'luxury-commerce-psychology',
    title: 'The Psychology of Luxury E-commerce',
    excerpt: 'Why cinematic motion and typographic authority drive higher conversions for premium digital storefronts.',
    image: '/ecommerce_luxury_ui.png',
    category: 'Strategy',
    author: 'Brand Design',
    date: 'Apr 15, 2026',
    readTime: '6 min read',
    tags: ['E-commerce', 'Psychology', 'Design']
  }
];

const BlogPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Engineering', 'Architecture', 'Strategy', 'Design'];
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950">
      <SEO 
        title="Intel Feed | Stuccord Agency Blog" 
        description="Deep dives into software engineering, digital strategy, and the future of mission-critical design systems." 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/10 via-dark-950/20 to-dark-950 z-10"></div>
          <img 
            src="/web_dev_technical.png" 
            alt="Agency Intel" 
            className="w-full h-full object-cover filter brightness-[0.4] grayscale-[0.5]"
          />
        </motion.div>

        {/* Technical HUD Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute bottom-1/4 right-12 w-32 h-[1px] bg-primary-500"></div>
           <div className="absolute bottom-1/4 right-12 translate-y-4 text-[8px] font-black tracking-widest text-primary-500 uppercase italic">Stream: Intel_Feed_v2.0</div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8 italic">
              Intel <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Feed.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-tight">
              A high-density technical repository for builders, strategists, and mission-critical visionaries.
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
          <div className="relative group lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input 
              type="text" 
              placeholder="Search Intelligence..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-6 text-xs font-bold focus:outline-none focus:border-primary-500/50 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {blogPosts.filter(post => filter === 'All' || post.category === filter).map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
              >
                <Link to={`/blog/${post.id}`} className="flex-grow flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-dark-950 text-[8px] font-black uppercase tracking-widest rounded-full">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-6">
                      <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-primary-500" /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary-500" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-400 font-medium leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                             <User className="w-4 h-4 text-primary-500" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">{post.author}</span>
                       </div>
                       <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-primary-500 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 lg:py-48 px-6 bg-white text-dark-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-primary-500"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic">Stay <br/>Informed.</h2>
          <p className="text-xl md:text-2xl font-medium mb-16 text-neutral-600">Join 5,000+ engineers and founders receiving weekly technical intelligence.</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
             <input 
               type="email" 
               placeholder="Transmit Email Address"
               className="flex-grow bg-dark-950/5 border-2 border-dark-950/10 px-8 py-6 rounded-sm text-sm font-black uppercase tracking-widest focus:outline-none focus:border-dark-950 transition-all"
               required
             />
             <button className="bg-dark-950 text-white px-12 py-6 font-black uppercase tracking-[0.3em] text-xs hover:scale-105 active:scale-95 transition-all">
                Subscribe
             </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
