import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, Home, Briefcase, Info, MessageCircle, FileText, Puzzle, Palette, Calendar } from 'lucide-react';

const SitemapPage = () => {
  const sections = [
    {
      title: 'Navigation',
      icon: <Home className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'Home', path: '/', desc: 'Stuccord Agency HQ' },
        { name: 'Services', path: '/services', desc: 'Our Technical Capabilities' },
        { name: 'Portfolio', path: '/portfolio', desc: 'Verified Results & Case Studies' },
        { name: 'About', path: '/about', desc: 'The Stuccord Philosophy' },
        { name: 'Testimonials', path: '/testimonials', desc: 'Client Success Stories' },
      ]
    },
    {
      title: 'Services',
      icon: <Puzzle className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'Web Design', path: '/services/web-design', desc: 'High-Conversion Interfaces' },
        { name: 'Web Development', path: '/services/web-development', desc: 'Scalable Software Engineering' },
        { name: 'E-commerce', path: '/services/ecommerce', desc: 'Revenue-Optimized Stores' },
        { name: 'UI/UX Design', path: '/services/ux-design', desc: 'Psychology-Driven Experience' },
        { name: 'Maintenance', path: '/services/maintenance', desc: 'Elite Technical Support' },
      ]
    },
    {
      title: 'Company',
      icon: <Info className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'Our Process', path: '/methodology', desc: 'How We Engineer Success' },
        { name: 'Investment', path: '/investment', desc: 'Pricing & Partnership Levels' },
        { name: 'Insights', path: '/insights', desc: 'Technical & Business Wisdom' },
        { name: 'Careers', path: '/careers', desc: 'Join the Engineering Team' },
        { name: 'FAQs', path: '/faqs', desc: 'Common Inquiries' },
      ]
    },
    {
      title: 'Case Studies',
      icon: <Briefcase className="w-6 h-6 text-primary-400" />,
      links: [
        { name: 'BearGuard', path: '/portfolio/bearguard', desc: 'SaaS Referral Ecosystem' },
        { name: 'UniPast Platform', path: '/portfolio/unipast-new', desc: 'Cinematic EdTech Portal' },
        { name: 'UniPast Control', path: '/portfolio/unipast-admin', desc: 'Admin Governance Dashboard' },
        { name: 'Rich Dream Consult', path: '/portfolio/rich-dream-consult', desc: 'Premium Consultancy Site' },
        { name: 'YAA Initiative', path: '/portfolio/yaa', desc: 'Community Hub' },
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
