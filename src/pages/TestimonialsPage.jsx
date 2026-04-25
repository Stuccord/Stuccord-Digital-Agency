import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const testimonials = [
  {
    name: "Alex Mensah",
    role: "CEO, BearGuard",
    photo: "https://i.pravatar.cc/150?img=11",
    review: "Stuccord transformed our referral system from a manual headache into a high-performance engine. Their design eye is unmatched in the region.",
    metrics: "240% Increase in Referrals"
  },
  {
    name: "Sarah Boakye",
    role: "Director, Rich Dream Consult",
    photo: "https://i.pravatar.cc/150?img=25",
    review: "The level of professionalism and technical rigor Stuccord brings is world-class. They built an authoritative platform that instantly builds trust with our global clients.",
    metrics: "180% Growth in Inquiries"
  },
  {
    name: "John Doe",
    role: "Product Lead, UniPast",
    photo: "https://i.pravatar.cc/150?img=33",
    review: "The UniPast platform is a technical masterpiece. It's fast, secure, and visually stunning. Stuccord is our go-to partner for all things digital.",
    metrics: "200k+ Active Users"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-dark-950 pt-32 pb-24 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <div className="fixed inset-0 noise opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-none"
          >
            Social <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Proof.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            Real impact. Measured results. See what happens when world-class engineering meets ambitious brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-12 h-12 text-primary-500/20 mb-8" />
                <p className="text-2xl font-medium leading-relaxed text-neutral-200 mb-12 italic">
                  "{t.review}"
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex items-center gap-6">
                  <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full border-2 border-primary-500 shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-widest text-white">{t.name}</h4>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                   <div className="text-primary-500 font-black text-xl leading-none">{t.metrics}</div>
                   <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mt-2">Verified Result</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white text-dark-950 p-12 lg:p-24 rounded-[3rem]"
        >
          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Your Success is <br/>Next.</h2>
          <Link 
            to="/onboarding" 
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-dark-950 text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-500 rounded-sm"
          >
            Apply to Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
