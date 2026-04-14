import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-dark-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-black">
                <img src="/favicon.png" alt="Stuccord Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">Stuccord</span>
            </div>
            <p className="text-neutral-400 max-w-sm mb-6 leading-relaxed">
              We engineer premium digital experiences, scale-ready SaaS solutions, and data-driven growth strategies.
            </p>
            <div className="space-y-3 mb-8 text-sm text-neutral-400">
               <p className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer">
                 <span className="w-4 h-4 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 text-[10px]">📞</span>
                 (+233) 054-530-6677
               </p>
               <p className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer">
                 <span className="w-4 h-4 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 text-[10px]">✉️</span>
                 contact@stuccord.com
               </p>
            </div>
            <div className="flex gap-4">
               <a href="https://twitter.com/stuccord" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all">
                 <Twitter className="w-4 h-4" />
               </a>
               <a href="https://linkedin.com/company/stuccord" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all">
                 <Linkedin className="w-4 h-4" />
               </a>
               <a href="https://instagram.com/stuccord" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all">
                 <Instagram className="w-4 h-4" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'FAQs', path: '/faqs' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-neutral-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-neutral-500 text-sm">
             &copy; {new Date().getFullYear()} Stuccord. All rights reserved.
           </p>
           <p className="text-neutral-500 text-sm">
             Designed for conversion. Built for scale.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
