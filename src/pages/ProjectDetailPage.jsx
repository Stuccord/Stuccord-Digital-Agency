import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Shield, Zap, Target, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const projects = {
  'bearguard': {
    title: 'BearGuard Referral Ecosystem',
    desc: 'A specialized support and referral platform designed for community leaders and medical professionals to manage accident victim assistance and commissions.',
    image: '/bearguard-shot.png',
    category: 'Support Services',
    liveUrl: 'https://bearguard-project-new.vercel.app',
    metrics: ['Secure Commission Tracking', 'Real-time Referrals', 'Community Impact'],
    challenge: 'Building a transparent and secure referral system that simplifies commission payouts for community supporters.',
    solution: 'Developed an automated tracking engine with a high-conversion referral dashboard and secure payout integration.'
  },
  'unipast-new': {
    title: 'UniPast Platform',
    desc: 'A futuristic, dark-mode EdTech platform featuring a cinematic login experience and secure access to Ghana\'s largest academic past question database.',
    image: '/unipast-shot.png',
    category: 'EdTech',
    liveUrl: 'https://stuccord.github.io/unipast_new',
    metrics: ['Secure Authentication', 'Vast Question Library', 'Premium UX Design'],
    challenge: 'Creating a fast, secure, and visually memorable platform that makes accessing academic resources feel premium and effortless.',
    solution: 'Built a sci-fi-inspired glassmorphic UI with secure JWT authentication and an optimized content delivery system.'
  },
  'unipast-admin': {
    title: 'UniPast Control Center',
    desc: 'A glassmorphic administrative suite designed for total platform governance and real-time data visualization.',
    image: '/unipast-admin-shot.png',
    category: 'SaaS Admin',
    liveUrl: 'https://unipast-admin1-oeurpucko-stuccords-projects.vercel.app/',
    metrics: ['Real-time Analytics', 'Secure User Management', 'Automated Reporting'],
    challenge: 'Providing administrators with deep insights into user behavior while maintaining a clean, non-overwhelming interface.',
    solution: 'Designed a modular dashboard with customizable widgets and high-fidelity data visualizations.'
  },
  'rich-dream-consult': {
    title: 'Rich Dream Consult',
    desc: "Ghana's premier multi-award winning consultancy delivering excellence across Travel & Visa Services, Information Technology, and Business Strategy.",
    image: '/rich-dream-shot.png',
    category: 'Consultancy',
    liveUrl: 'https://stuccord.github.io/Rich-Dream-Consult-Website/',
    metrics: ['Multi-Award Winner', 'Est. 2020', 'Travel, IT & Strategy'],
    challenge: 'Building an authoritative digital presence that reflects a multi-disciplinary consultancy trusted by clients across multiple industries.',
    solution: 'Crafted a bold, cinematic website with gold accents, full-screen hero, and a clear service architecture that drives enquiries.'
  },
  'yaa': {
    title: 'YAA Initiative Platform',
    desc: 'Empowering the next generation through a dynamic, community-driven platform for youth advancement and engagement.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2000',
    category: 'NGO / Community',
    liveUrl: 'https://yaa-7ptf8t3d9-stuccords-projects.vercel.app/',
    metrics: ['Community Driven', 'High Engagement', 'Impact Focused'],
    challenge: 'Creating an inclusive digital space that encourages participation and effectively communicates the mission of the association.',
    solution: 'Developed an interactive community hub with integrated social features and a vibrant, energetic visual identity.'
  }
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 pb-32 text-center text-white container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Case Study Not Found</h1>
        <Link to="/portfolio" className="text-primary-400 font-bold hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <SEO 
        title={`${project.title} | Case Study`} 
        description={project.desc} 
      />
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/portfolio" className="flex items-center gap-2 text-primary-400 font-bold mb-12 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{project.category}</span>
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">{project.title}</h1>
              <p className="text-xl text-neutral-400 mb-12 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                 {project.metrics.map((metric, i) => (
                   <div key={i} className="px-6 py-3 glass rounded-full text-white font-bold text-sm flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-primary-400" /> {metric}
                   </div>
                 ))}
              </div>

              {/* REAL LIVE BUTTON */}
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-xl shadow-emerald-500/20 group"
              >
                Launch Live Project <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="glass-card p-4 border border-white/10 rounded-[2.5rem] overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full aspect-[4/5] object-cover rounded-[2rem]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-32 border-t border-white/10 pt-32">
             <div className="glass-card p-12 hover:bg-white/5 transition-colors">
                <Target className="w-10 h-10 text-primary-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">The Business Challenge</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{project.challenge}</p>
             </div>
             <div className="glass-card p-12 border border-primary-500/20 bg-primary-500/5">
                <Zap className="w-10 h-10 text-primary-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">The Stuccord Solution</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{project.solution}</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
