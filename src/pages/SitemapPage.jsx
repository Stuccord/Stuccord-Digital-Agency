import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, Home, Briefcase, Info, MessageCircle, FileText, Puzzle, Palette, Calendar } from 'lucide-react';

const SitemapPage = () => {
  const sections = [
    {
      title: 'Main Navigation',
      icon: <Home className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'Home', path: '/', desc: 'Stuccord Agency Landing Page' },
        { name: 'Services', path: '/services', desc: 'Our Full Stack Digital Solutions' },
        { name: 'Portfolio', path: '/portfolio', desc: 'Curated Gallery of Excellence' },
        { name: 'About', path: '/about', desc: 'Our Vision, Mission and Team' },
      ]
    },
    {
      title: 'Company',
      icon: <Info className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'FAQs', path: '/faqs', desc: 'Common Questions & Answers' },
        { name: 'Careers', path: '/careers', desc: 'Join the Stuccord Engineering Team' },
        { name: 'Schedule Call', path: '/schedule', desc: 'Book a Strategy Consultation' },
        { name: 'Contact', path: '/contact', desc: 'Get in Touch with our Experts' },
      ]
    },
    {
      title: 'Tools & Assets',
      icon: <Palette className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'Brand Assets', path: '/brand-assets', desc: 'Generate Premium Brand Identities' },
      ]
    },
    {
      title: 'Case Studies',
      icon: <Briefcase className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'FinScale Pro', path: '/portfolio/finscale-pro', desc: 'SaaS Fintech Transformation' },
        { name: 'Apex Market', path: '/portfolio/apex-market', desc: 'E-commerce Ecosystem' },
        { name: 'Nova Global', path: '/portfolio/nova-global', desc: 'Minimalist AI Branding' },
        { name: 'Luxe Real Estate', path: '/portfolio/luxe-real-estate', desc: 'Premium Listing Portal' },
        { name: 'Orbit Design', path: '/portfolio/orbit-design', desc: 'Space-tech Digital Presence' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-500/10 rounded-2xl border border-primary-500/20">
              <Map className="w-10 h-10 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 italic">
            Direct <span className="text-gradient">Links.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive directory of every page on stuccord.com for better navigation and SEO performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                {section.icon}
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="grid gap-4">
                {section.links.map(link => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="flex items-center justify-between group p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                  >
                    <div>
                      <h3 className="text-white font-bold mb-1 group-hover:text-primary-400 transition-colors uppercase text-sm tracking-widest">{link.name}</h3>
                      <p className="text-neutral-500 text-xs">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
