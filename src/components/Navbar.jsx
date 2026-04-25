import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Work', path: '/portfolio' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Web Design', path: '/services/web-design' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'E-commerce', path: '/services/ecommerce' },
        { name: 'UI/UX Design', path: '/services/ux-design' },
        { name: 'Maintenance', path: '/services/maintenance' },
        { name: 'Our Process', path: '/methodology' },
        { name: 'Investment', path: '/investment' }
      ]
    },
    { 
      name: 'Studio', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Intel Feed', path: '/blog' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Careers', path: '/careers' },
        { name: 'FAQs', path: '/faqs' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          isScrolled 
          ? 'py-4 bg-dark-950/40 backdrop-blur-2xl border-b border-white/5' 
          : 'py-10 bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="z-[110] relative group"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-primary-500/20 blur-xl group-hover:bg-primary-500/40 transition-all duration-700"></div>
                 <div className="text-3xl font-black text-white leading-none tracking-tighter relative z-10">S.</div>
              </div>
              <div className="flex flex-col">
                 <span className="text-lg font-black tracking-widest text-white uppercase leading-none">Stuccord</span>
                 <span className="text-[8px] font-black tracking-[0.4em] text-primary-500 uppercase mt-1">Digital Agency</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Professional Center Alignment */}
          <nav className="hidden xl:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, i) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-2 ${
                    location.pathname.startsWith(link.path) && link.path !== '/'
                    ? 'text-primary-500' 
                    : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[1px] bg-primary-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  animate={{ width: location.pathname.startsWith(link.path) && link.path !== '/' ? '100%' : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Advanced Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-dark-900/90 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl shadow-2xl"
                    >
                      <div className="flex flex-col gap-4">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-primary-500 transition-colors flex items-center justify-between group/item"
                          >
                            {subItem.name}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Section - Status & Action */}
          <div className="hidden lg:flex items-center gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4 px-4 py-2 rounded-full border border-white/5 bg-white/5"
            >
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
              </div>
              <span className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">Available Q3 2026</span>
            </motion.div>

            <Link 
              to="/schedule" 
              className="hidden 2xl:inline-flex group relative items-center gap-3 px-8 py-3 bg-transparent border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white/5 hover:border-white/40 active:scale-95"
            >
              <span className="relative z-10">Schedule Call</span>
            </Link>

            <Link 
              to="/onboarding" 
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-dark-950 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Start Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-white z-[110] relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-dark-950 z-[150] flex flex-col px-6 overflow-hidden"
          >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="absolute -top-[10%] -right-[10%] w-[120%] h-[120%] bg-gradient-to-br from-primary-500/10 via-transparent to-transparent blur-[120px] rounded-full"></div>
               <div className="absolute top-0 left-0 w-full h-full scanline opacity-5"></div>
            </div>

            {/* Menu Header - Logo & Close */}
            <div className="relative z-20 pt-10 flex items-center justify-between mb-12">
               <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4">
                  <div className="text-3xl font-black text-white tracking-tighter">S.</div>
                  <div className="flex flex-col">
                     <span className="text-lg font-black tracking-widest text-white uppercase leading-none">Stuccord</span>
                  </div>
               </Link>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                  <X className="w-8 h-8" />
               </button>
            </div>
            
            <nav className="relative z-10 flex flex-col h-full justify-between pb-12 overflow-y-auto no-scrollbar">
              <div className="flex flex-col gap-8 lg:gap-12">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center gap-6 mb-4"
                    >
                      <span className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-primary-500 transition-all duration-500 italic">
                        {link.name}
                      </span>
                      <div className="h-[2px] w-0 group-hover:w-12 bg-primary-500 transition-all duration-500"></div>
                    </Link>
                    
                    {link.dropdown && (
                      <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-sm">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 lg:mt-24 space-y-12">
                <div className="grid grid-cols-2 gap-4">
                   <Link 
                     to="/schedule" 
                     onClick={() => setMobileMenuOpen(false)}
                     className="col-span-2 group relative overflow-hidden px-8 py-6 bg-dark-900 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-white/5 transition-colors"
                   >
                     <span className="relative z-10">Schedule Zoom Call</span>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                   </Link>

                   <Link 
                     to="/onboarding" 
                     onClick={() => setMobileMenuOpen(false)}
                     className="col-span-2 group relative overflow-hidden px-8 py-6 bg-white text-dark-950 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-primary-500 transition-colors"
                   >
                     <span className="relative z-10">Initiate Project</span>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                   </Link>
                   
                   <a 
                     href="mailto:hello@stuccord.com"
                     className="flex flex-col gap-2 p-6 glass border border-white/5 hover:border-primary-500/30 transition-all"
                   >
                      <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest">Email Access</span>
                      <span className="text-xs font-bold text-white">hello@stuccord.com</span>
                   </a>
                   
                   <div className="flex flex-col gap-2 p-6 glass border border-white/5">
                      <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest">Global Status</span>
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                         <span className="text-[8px] font-black text-white uppercase">Operational</span>
                      </div>
                   </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                   <div className="flex gap-8">
                      {['TW', 'IG', 'LI'].map(s => (
                        <span key={s} className="text-[10px] font-black text-neutral-500 hover:text-white transition-colors tracking-widest cursor-pointer">{s}</span>
                      ))}
                   </div>
                   <span className="text-[8px] font-black text-neutral-700 uppercase tracking-[0.4em]">©2026 STUCCORD</span>
                </div>
              </div>
            </nav>

            {/* Vertical HUD Decor */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-0 opacity-20">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-1 w-12 bg-primary-500/50 rounded-full"></div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
