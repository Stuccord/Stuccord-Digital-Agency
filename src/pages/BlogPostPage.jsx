import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, MessageSquare, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const posts = {
  'future-of-saas-2026': {
    title: 'The Future of SaaS: Brutalist Engineering and Cognitive Efficiency',
    category: 'Engineering',
    author: 'Stuccord Intel',
    date: 'Apr 24, 2026',
    readTime: '8 min read',
    image: '/hero_cinematic_bg.png',
    content: `
      <p>The era of "soft" SaaS is over. As we approach 2027, the digital landscape is being redefined by a return to high-integrity, brutalist engineering principles. Users are no longer looking for rounded corners and pastel gradients; they are looking for speed, authority, and cognitive efficiency.</p>
      
      <h2>The Cognitive Load Problem</h2>
      <p>Modern interfaces have become cluttered with "helpful" features that actually increase cognitive load. Every extra click, every unnecessary animation, and every generic layout pull the user away from their primary objective. At Stuccord, we call this the "UI Friction Index."</p>
      
      <blockquote>
        "The most advanced interface is the one that minimizes the distance between thought and execution."
      </blockquote>
      
      <h2>Brutalist Utility as a Solution</h2>
      <p>Brutalism in web design isn't about being ugly; it's about being honest. It's about showing the raw structure of the application and prioritizing data over decoration. By using high-contrast typography, fixed grid systems, and technical HUD overlays, we create environments that feel authoritative and mission-critical.</p>
      
      <p>When a user enters a Stuccord-engineered platform, they don't feel like they are "browsing." They feel like they are "operating." This psychological shift is the key to enterprise-level retention in the next decade.</p>
    `
  }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = posts[id] || posts['future-of-saas-2026']; // Fallback for demo
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950">
      <SEO 
        title={`${post.title} | Stuccord Intel`} 
        description="Technical deep dive into mission-critical software engineering and digital strategy." 
      />

      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <section className="relative h-[70vh] lg:h-[80vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover filter brightness-[0.35] grayscale-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950"></div>
        </motion.div>

        {/* Technical HUD */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <div className="absolute top-1/3 left-0 w-full h-[1px] bg-primary-500/50"></div>
           <div className="absolute top-0 left-1/3 w-[1px] h-full bg-primary-500/50"></div>
           <div className="absolute bottom-24 left-12 translate-y-4 text-[8px] font-black tracking-widest text-primary-500 uppercase italic">Doc_ID: {id.toUpperCase()}</div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-3 text-primary-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:text-white transition-all group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
              Back to Intel Feed
            </Link>
            
            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-8">
                 <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-500 rounded-full">{post.category}</span>
                 <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                 <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic mb-12">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white">{post.author}</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-neutral-500">Platform Architect</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-24">
               {/* Main Content */}
               <motion.article 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="prose prose-invert prose-2xl max-w-4xl font-medium leading-relaxed text-neutral-300
                            prose-h2:text-4xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-white prose-h2:mt-24
                            prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-white prose-blockquote:italic
                            prose-strong:text-white prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline"
                 dangerouslySetInnerHTML={{ __html: post.content }}
               />

               {/* Sidebar Widgets */}
               <aside className="lg:w-96 flex flex-col gap-12">
                  <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl sticky top-32">
                     <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary-500 mb-8">Share Intelligence</h3>
                     <div className="flex gap-4 mb-12">
                        {[Share2, MessageSquare].map((Icon, i) => (
                           <button key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-dark-950 transition-all">
                              <Icon className="w-5 h-5" />
                           </button>
                        ))}
                     </div>
                     
                     <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary-500 mb-8">Related Intel</h3>
                     <div className="space-y-8">
                        {[1, 2].map((_, i) => (
                           <Link key={i} to="#" className="group block">
                              <h4 className="text-sm font-black uppercase tracking-tight italic mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">The Psychology of Digital Scarcity in E-commerce</h4>
                              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Strategy // 5 min read</p>
                           </Link>
                        ))}
                     </div>
                  </div>
               </aside>
            </div>
         </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-24 border-t border-white/5 px-6 lg:px-12">
         <div className="container mx-auto">
            <Link to="/blog" className="group flex flex-col lg:flex-row items-center justify-between gap-8 p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-primary-500/30 transition-all duration-500">
               <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-4">Up Next</p>
                  <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">Scaling UniPast to 200k Users</h3>
               </div>
               <div className="w-20 h-20 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-dark-950 transition-all">
                  <ChevronRight className="w-10 h-10" />
               </div>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
