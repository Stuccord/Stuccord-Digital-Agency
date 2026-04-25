import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowRight, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-dark-950 border-t border-white/5 pt-32 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
               <div className="text-4xl font-black text-white leading-none tracking-tighter">S.</div>
               <div className="flex flex-col">
                  <span className="text-xl font-black tracking-widest text-white uppercase leading-none">Stuccord</span>
                  <span className="text-[8px] font-black tracking-[0.4em] text-primary-500 uppercase mt-1">Digital Agency</span>
               </div>
            </div>
            
            <p className="text-neutral-500 text-lg lg:text-xl font-medium max-w-md mb-12 leading-relaxed">
              Engineering high-performance digital ecosystems for founders who demand market dominance.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
               <div className="flex gap-4">
                  {[
                    { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/stuccord" },
                    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/stuccord" },
                    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/stuccord" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-all duration-500"
                    >
                      {social.icon}
                    </a>
                  ))}
               </div>
               
               <div className="h-12 w-[1px] bg-white/5 hidden md:block"></div>
               
               <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest">Global Status</span>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Systems Active</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Work', path: '/portfolio' },
                  { name: 'Services', path: '/services' },
                  { name: 'Studio', path: '/about' },
                  { name: 'Intel Feed', path: '/blog' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[11px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary-500 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Capabilities</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Web Design', path: '/services/web-design' },
                  { name: 'SaaS Dev', path: '/services/web-development' },
                  { name: 'E-commerce', path: '/services/ecommerce' },
                  { name: 'UX Audit', path: '/services/ux-design' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[11px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary-500 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Protocol</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Methodology', path: '/methodology' },
                  { name: 'Investment', path: '/investment' },
                  { name: 'Privacy', path: '/privacy' },
                  { name: 'Terms', path: '/terms' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[11px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary-500 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] font-black text-neutral-600 uppercase tracking-widest">
              <span>© {new Date().getFullYear()} STUCCORD DIGITAL AGENCY</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span>ENGINEERED FOR CONVERSION</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span>ALL PROTOCOLS ACTIVE</span>
           </div>
           
           <div className="flex items-center gap-3">
              <Globe className="w-3 h-3 text-primary-500" />
              <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Region: Global / ACC</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

