import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <img 
           src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1500" 
           className="w-full h-full object-cover grayscale"
           alt=""
         />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8">
            Pioneering the <span className="text-gradient-primary">Digital Frontier.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Stuccord started with a simple belief: mediocrity is the enemy of growth. Today, we are a global team of specialists dedicated to building the future of digital business.
          </p>
        </motion.div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-20 bg-dark-800/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Users className="text-primary-500" />, label: 'Global Specialists', val: '25+' },
            { icon: <Globe className="text-blue-500" />, label: 'Countries Served', val: '12' },
            { icon: <Award className="text-purple-500" />, label: 'Design Awards', val: '08' },
            { icon: <Shield className="text-amber-500" />, label: 'Project Success', val: '100%' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{item.val}</h3>
              <p className="text-neutral-500 font-medium uppercase tracking-wider text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              To empower ambitious brands by engineering world-class digital experiences that don't just exist—they dominate. We turn technical complexity into competitive advantage.
            </p>
          </div>
          <div className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              To be the definitive global benchmark for digital transformation, setting the standard for design excellence and engineering integrity in every industry we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-32 px-6 lg:px-8 bg-primary-600/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10">Why Stuccord Exists.</h2>
            <p className="text-xl text-neutral-400 italic font-medium leading-relaxed">
              "We saw too many businesses settling for 'good enough' software and websites that functioned but failed to inspire. We founded Stuccord to bridge the gap between technical expertise and high-end brand storytelling."
            </p>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-500 mb-4"></div>
              <p className="text-white font-bold">The Stuccord Leadership Team</p>
              <p className="text-neutral-500 text-sm italic">Innovation & Strategy</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
