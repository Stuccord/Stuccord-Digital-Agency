import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Shield, Zap, Target, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const projects = {
  'bearguard': {
    title: 'BearGuard Referral Ecosystem',
    desc: 'A specialized support and referral platform designed for community leaders and medical professionals to manage accident victim assistance and commissions.',
    image: '/bearguard-shot.png',
    category: 'SaaS Platform',
    liveUrl: 'https://bearguard-project-new.vercel.app',
    metrics: [
      { label: 'Commission Tracking', val: 'Real-time' },
      { label: 'Network Growth', val: '+240%' },
      { label: 'Security Grade', val: 'Enterprise' }
    ],
    challenge: 'Building a transparent and secure referral system that simplifies complex commission structures for thousands of community supporters.',
    solution: 'We engineered a bespoke tracking engine with a high-fidelity dashboard, automated payout logic, and encrypted data layers.',
    nextId: 'unipast-new'
  },
  'unipast-new': {
    title: 'UniPast Platform',
    desc: 'A futuristic, dark-mode EdTech platform with a cinematic UI providing secure access to Ghana\'s largest academic past question database.',
    image: '/unipast-shot.png',
    category: 'EdTech / Web App',
    liveUrl: 'https://stuccord.github.io/unipast_new',
    metrics: [
      { label: 'Active Users', val: '200k+' },
      { label: 'Load Speed', val: '< 0.8s' },
      { label: 'Data Security', val: 'JWT/SSL' }
    ],
    challenge: 'Transforming a massive legacy database into a fast, mobile-first experience that inspires students and ensures maximum performance under load.',
    solution: 'We built a sci-fi-inspired React platform with optimized CDN routing, server-side caching, and a cinematic glassmorphic interface.',
    nextId: 'rich-dream-consult'
  },
  'rich-dream-consult': {
    title: 'Rich Dream Consult',
    desc: "Ghana's premier consultancy delivering excellence across Travel & Visa Services, Information Technology, and Business Strategy.",
    image: '/rich-dream-shot.png',
    category: 'Premium Consultancy',
    liveUrl: 'https://stuccord.github.io/Rich-Dream-Consult-Website/',
    metrics: [
      { label: 'Market Position', val: '#1' },
      { label: 'Inquiry Rate', val: '+180%' },
      { label: 'Global Reach', val: '12+ Countries' }
    ],
    challenge: 'Creating an authoritative digital presence that seamlessly bridges Travel, IT, and Business strategy under one premium umbrella.',
    solution: 'We crafted a bold, brutalist-inspired website using gold accents and cinematic layouts to establish instant credibility and drive conversions.',
    nextId: 'unipast-admin'
  },
  'unipast-admin': {
    title: 'UniPast Control',
    desc: 'Advanced governance dashboard and administrative engine for the UniPast ecosystem, featuring real-time data visualization and user management.',
    image: '/unipast-admin-shot.png',
    category: 'SaaS / Admin Systems',
    liveUrl: '#',
    metrics: [
      { label: 'Admin Efficiency', val: '+300%' },
      { label: 'Data Latency', val: '< 100ms' },
      { label: 'System Uptime', val: '99.99%' }
    ],
    challenge: 'Designing a high-density data environment that remains intuitive and performant for administrative teams managing hundreds of thousands of records.',
    solution: 'We engineered a modular dashboard with real-time sync, custom analytics widgets, and a high-integrity security layer.',
    nextId: 'yaa'
  },
  'yaa': {
    title: 'YAA Initiative',
    desc: 'A dynamic community platform and digital hub empowering youth advancement through engagement, resources, and global networking.',
    image: '/hero_cinematic_bg.png',
    category: 'Community / Brand',
    liveUrl: '#',
    metrics: [
      { label: 'User Engagement', val: '+400%' },
      { label: 'Mobile Traffic', val: '85%' },
      { label: 'Resource Access', val: 'Instant' }
    ],
    challenge: 'Building a vibrant, engaging platform that resonates with a younger demographic while maintaining technical stability and scalability.',
    solution: 'We developed a mobile-first, high-motion community portal with real-time updates and interactive resource directories.',
    nextId: 'bearguard'
  }
};

const stableId = (key) => {
  if (!key) return '01';
  const chars = key.split('');
  const sum = chars.reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return String((sum % 9) + 1).padStart(2, '0');
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects[id];
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-32 pb-32 min-h-screen bg-dark-950 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-black mb-8">Case Study Not Found</h1>
        <Link to="/portfolio" className="text-primary-500 font-bold hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <SEO 
        title={`${project.title} | Stuccord Case Study`} 
        description={project.desc} 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[90vh] lg:h-[110vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-[0.35] grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950"></div>
        </motion.div>

        {/* Technical Blueprint Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute top-1/2 right-12 w-32 h-[1px] bg-primary-500"></div>
           <div className="absolute top-1/2 right-12 translate-y-4 text-[8px] font-black tracking-widest text-primary-500 uppercase">Coord: 04.992X</div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-3 text-primary-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:text-white transition-all group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
              <span className="relative">
                Back to Archive
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-500 group-hover:w-full transition-all"></div>
              </span>
            </Link>
            
            <div className="max-w-6xl">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                 <span className="text-xs font-black uppercase tracking-[0.4em] text-neutral-400">{project.category} // SYSTEM_ID: {stableId(id)}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-16 italic overflow-hidden">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={`block ${i === 0 ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600'}`}>
                    {word}
                  </span>
                ))}
              </h1>
              
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-end">
                <p className="text-2xl md:text-3xl text-neutral-400 font-medium leading-[1.2] max-w-3xl">
                   <span className="text-white">The Objective:</span> {project.desc}
                </p>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-7 bg-white text-dark-950 font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all duration-500 rounded-sm w-full lg:w-auto"
                  >
                    Launch System
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="relative z-20 -mt-24 lg:-mt-40 px-6 lg:px-12 mb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-dark-950/40 p-12 lg:p-16 flex flex-col gap-6 border-r border-white/5 last:border-0 group hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-3">
                   <div className="w-1 h-1 rounded-full bg-primary-500"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500 group-hover:text-primary-500 transition-colors">{metric.label}</span>
                </div>
                <span className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-white leading-none">{metric.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-32 lg:py-56 px-6 lg:px-12 bg-white/[0.02] relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-48 items-start">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-2xl border border-primary-500/20 bg-primary-500/5 flex items-center justify-center text-primary-500 shadow-[0_0_30px_rgba(37,211,102,0.1)]">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-white">The Challenge</h2>
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1] text-neutral-500 italic">
                 <span className="text-white block mb-4">— 01</span>
                 {project.challenge}
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center text-dark-950 shadow-[0_10px_40px_rgba(37,211,102,0.3)]">
                  <Zap className="w-7 h-7" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-white">The Solution</h2>
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1] text-white italic">
                 <span className="text-primary-500 block mb-4">— 02</span>
                 {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Visual */}
      <section className="py-24 lg:py-48 px-4 lg:px-0">
        <div className="w-full h-[60vh] lg:h-[90vh] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            src={project.image} 
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* Next Case Study Funnel */}
      <section className="py-32 lg:py-64 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-30 z-0"></div>
        <div className="container mx-auto relative z-10">
          <Link 
            to={`/portfolio/${project.nextId}`}
            className="group block w-full text-center"
          >
             <span className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-8 block">Next Case Study</span>
             <h2 className="text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 group-hover:text-primary-500 transition-colors duration-700">
               {projects[project.nextId].title.split(' ')[0]} <br/> 
               <span className="text-neutral-500 group-hover:text-white transition-colors duration-700">{projects[project.nextId].title.split(' ').slice(1).join(' ')}</span>
             </h2>
             <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-500">
                  <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetailPage;
