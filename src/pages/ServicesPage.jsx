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
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            Our Expertise. Your <span className="text-gradient-primary">Competitive Edge.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-16">
            Every service we provide is designed as a modular building block for your business growth. We combine technical rigor with world-class aesthetics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 flex flex-col h-full border border-white/5 hover:border-primary-500/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-8 border border-white/5 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{service.desc}</p>
              
              <ul className="mb-10 space-y-3">
                 {service.features.map(f => (
                   <li key={f} className="text-sm text-neutral-500 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-500" /> {f}
                   </li>
                 ))}
              </ul>

              <Link 
                to="/schedule" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors group/link"
              >
                Discuss Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internal Lead Capture Section */}
      <section className="py-24 bg-dark-800/50 border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Built for Ambitious Teams.</h2>
            <p className="text-neutral-400 mb-12 text-lg">We don't just fill seats; we solve problems. Tell us about your technical challenges and let's engineer a solution together.</p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/schedule" className="px-10 py-5 bg-primary-500 text-white font-bold rounded-full shadow-xl shadow-primary-500/20 hover:bg-primary-600 transition-all">
                  Book a Strategy Session
               </Link>
               <Link to="/portfolio" className="px-10 py-5 glass border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                  Browse Success Stories
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
