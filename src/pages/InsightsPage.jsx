import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "The ROI of Premium Motion Design",
    excerpt: "How subtle animations and high-end physics can increase user retention by up to 40% in digital products.",
    date: "June 12, 2026",
    author: "Studio Director",
    category: "Design Strategy",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Engineering for Scale: Beyond React",
    excerpt: "Exploring the architecture required to handle millions of requests while maintaining sub-second load times.",
    date: "May 28, 2026",
    author: "Technical Lead",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Brutalist UX: Why Less is More",
    excerpt: "How radical transparency and stark typography can build faster trust than complex graphics.",
    date: "April 15, 2026",
    author: "UI Specialist",
    category: "UX Research",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  }
];

const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-dark-950 pt-32 pb-24 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <div className="fixed inset-0 noise opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-none"
          >
            Studio <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Insights.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            Our raw perspective on design, technology, and the future of the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-white/10 group-hover:border-primary-500/50 transition-colors">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-dark-950/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-500 border border-primary-500/20">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3" /> {post.author}
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-neutral-400 font-medium leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest border-b border-white/10 pb-1 group-hover:border-primary-500 transition-all w-fit">
                Read Insight <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
