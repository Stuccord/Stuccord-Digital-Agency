import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Target, Zap, Shield, Cpu, Layers, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <SEO 
        title="Our Philosophy & Technical Arsenal" 
        description="Learn why the world's most ambitious startups trust Stuccord to engineer their digital dominance and revenue growth." 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[80vh] lg:h-[100vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/20 via-dark-950/40 to-dark-950 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Stuccord Philosophy" 
            className="w-full h-full object-cover filter brightness-[0.4] grayscale"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 backdrop-blur-xl text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-12 inline-block">
              Engineered for Dominance
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-8 italic">
              The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Philosophy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-tight">
              We don't sell services. We form technical partnerships with founders who demand measurable market impact and zero compromise on quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-32 px-6 lg:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 italic">
                Beyond <span className="text-primary-500">Design.</span> <br/>Absolute Performance.
              </h2>
              <div className="space-y-8 text-neutral-400 text-lg font-medium leading-relaxed">
                <p>
                  Founded on the principle that the digital landscape is increasingly cluttered with "good enough" work, Stuccord was built to provide the "extraordinary."
                </p>
                <p>
                  We are a small, elite squad of engineers and designers who treat every line of code as a critical business asset. Our goal isn't just to make you look good—it's to ensure you win.
                </p>
                <p>
                  Whether it's a sub-second load time on a complex SaaS platform or a cinematic brand identity that justifies a premium valuation, we deliver the technical edge.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
               {[
                 { label: 'Revenue Generated', val: '$50M+' },
                 { label: 'Global Partnerships', val: '15+' },
                 { label: 'System Uptime', val: '99.9%' },
                 { label: 'Client Retention', val: '98%' }
               ].map((stat, idx) => (
                 <motion.div 
                   key={stat.label}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
                 >
                   <p className="text-4xl font-black text-primary-500 mb-2">{stat.val}</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{stat.label}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Arsenal (Skills) */}
      <section className="py-32 px-6 lg:px-12 bg-white text-dark-950 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-24 italic text-center">
            The <span className="text-primary-500">Arsenal.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {[
              { name: 'Core Engine', items: ['React', 'Next.js', 'TypeScript', 'Node.js'], icon: <Cpu /> },
              { name: 'Motion Logic', items: ['Framer Motion', 'GSAP', 'Three.js', 'Canvas'], icon: <Layers /> },
              { name: 'Data Layer', items: ['PostgreSQL', 'Supabase', 'Redis', 'GraphQL'], icon: <BarChart3 /> },
              { name: 'Infrastructure', items: ['Vercel', 'AWS', 'Docker', 'Edge'], icon: <Globe /> }
            ].map((category, idx) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-6 p-4 bg-dark-950 text-white rounded-2xl w-fit">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{category.name}</h3>
                <ul className="space-y-4">
                  {category.items.map(item => (
                    <li key={item} className="flex items-center gap-3 font-bold uppercase tracking-widest text-xs">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-48 px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
         >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic">Join the <br/><span className="text-primary-500">Elite.</span></h2>
            <Link 
              to="/onboarding" 
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-dark-950 font-black uppercase tracking-[0.2em] text-sm overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
         </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
