import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Zap, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const WebDev = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      <SEO 
        title="Scalable Web Development & SaaS Engineering" 
        description="We build mission-critical software and high-performance SaaS platforms designed for global scale and sub-second performance." 
      />

      {/* Cinematic Hero Header */}
      <section className="relative h-[90vh] lg:h-[110vh] w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="/web_dev_technical.png" 
            alt="Advanced Software Engineering" 
            className="w-full h-full object-cover filter brightness-[0.35] grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950"></div>
        </motion.div>

        {/* Technical HUD Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
           <div className="absolute top-1/2 right-12 w-32 h-[1px] bg-primary-500"></div>
           <div className="absolute top-1/2 right-12 translate-y-4 text-[8px] font-black tracking-widest text-primary-500 uppercase italic">Status: System_Compiled</div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 backdrop-blur-xl text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-12 inline-block">
              Full-Stack Engineering Excellence
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">
              Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-600">Dev.</span>
            </h1>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-4xl lg:mx-0 mx-auto mb-16 font-medium leading-tight">
              We engineer scalable foundations and complex technical infrastructures that power the next generation of digital giants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Pillars Section */}
      <section className="py-32 px-6 lg:px-12 bg-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000" 
                alt="Technical Architecture" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay"></div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 italic">
                Scalable <span className="text-primary-500">Systems.</span> <br/>Zero Bloat.
              </h2>
              <div className="space-y-12">
                {[
                  { title: "Modern Tech Stack", desc: "We utilize React, Next.js, Node.js, and Supabase to build lightning-fast applications that scale with your user base without breaking.", icon: <Code2 className="w-8 h-8" /> },
                  { title: "API-First Architecture", desc: "Our systems are built as modular building blocks, ensuring seamless integration with third-party tools and future expansion.", icon: <Zap className="w-8 h-8" /> },
                  { title: "DevOps & Scale", desc: "We deploy using CI/CD pipelines on global edge networks, ensuring 99.9% uptime and sub-second global response times.", icon: <Target className="w-8 h-8" /> }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-48 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic">
            Build for <br/><span className="text-primary-500">Future.</span>
          </h2>
          <Link 
            to="/onboarding" 
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-dark-950 font-black uppercase tracking-[0.2em] text-sm overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500"
          >
            Engineer Your Product
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDev;
