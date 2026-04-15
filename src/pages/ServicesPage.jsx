import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Palette, LineChart, Shield, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom SaaS Development',
    desc: 'Scalable, secure, and intuitive web applications tailored to streamline your operations and delight your users.',
    features: ['Microservices Architecture', 'Real-time Data Systems', 'Custom Admin Portals']
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'High-Performance Web Design',
    desc: 'Lightning-fast, conversion-optimized websites that serve as your best 24/7 salesperson.',
    features: ['Sub-second Load Times', 'Mobile-First UI/UX', 'SEO Optimized Structure']
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Brand Identity & Strategy',
    desc: 'Distinctive, premium visual branding that commands attention and builds instant trust.',
    features: ['Visual Systems', 'Brand Guidelines', 'Motion Identity']
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Growth-Driven SEO',
    desc: 'Data-backed strategies that turn organic traffic into loyal, paying customers.',
    features: ['Technical SEO Audits', 'Content Strategy', 'Backlink Ecosystems']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity & Compliance',
    desc: 'Mission-critical security implementations to protect your data and stay compliant.',
    features: ['Penetration Testing', 'GDPR/HIPAA Compliance', 'Encrypted Databases']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Cloud Infrastructure',
    desc: 'Resilient and scalable cloud hosting solutions designed for 99.99% uptime.',
    features: ['AWS/Azure Management', 'CI/CD Pipelines', 'Serverless Architecture']
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-dark-950">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 noise z-0 opacity-20"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>

      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-4 py-1.5 rounded-full glass border border-primary-500/20 text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-8 inline-block">
             Engineering Mastery
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white italic leading-[0.85] tracking-tight mb-8">
            Our Expertise. Your <br />
            <span className="text-gradient">Competitive Edge.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
            Every service we provide is designed as a modular building block for your business growth. We combine technical rigor with world-class aesthetics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              {/* Card Ambient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              
              <div className="relative h-full glass p-10 rounded-[2.5rem] border border-white/5 group-hover:border-primary-500/30 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Decorative Icon Background */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500"></div>

                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-500 shadow-2xl">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                </p>
                
                <ul className="mb-10 space-y-3.5">
                   {service.features.map(f => (
                     <li key={f} className="text-xs text-neutral-500 flex items-center gap-3 font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_#10b981]"></span>
                        {f}
                     </li>
                   ))}
                </ul>

                <Link 
                  to="/schedule" 
                  className="inline-flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest hover:text-primary-400 transition-all group/link"
                >
                  Initiate Strategy <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internal Lead Capture Section */}
      <section className="relative py-32 overflow-hidden">
         <div className="absolute inset-0 bg-primary-500/5 z-0"></div>
         <div className="absolute inset-0 border-y border-white/5 z-10 backdrop-blur-sm"></div>
         
         <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-black text-white italic mb-8 tracking-tight italic leading-tight">
                Built for <span className="text-gradient">Ambitious Teams.</span>
              </h2>
              <p className="text-neutral-400 mb-14 text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-normal">
                We don't just fill seats; we solve problems. Tell us about your technical challenges and let's engineer a solution together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
                 <Link to="/schedule" className="group relative px-10 py-5 bg-primary-500 text-dark-950 font-black rounded-full shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all overflow-hidden flex items-center justify-center gap-3">
                    <span className="relative z-10 uppercase tracking-tight">Book Strategy Session</span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                 </Link>
                 <Link to="/portfolio" className="px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-tight rounded-full hover:bg-white/5 transition-all flex items-center justify-center">
                    Browse Success Stories
                 </Link>
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
