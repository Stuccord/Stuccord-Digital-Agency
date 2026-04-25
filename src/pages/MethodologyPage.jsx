import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business model, target audience, and market landscape. We don't just take orders; we challenge assumptions to find the most profitable digital path.",
    deliverables: ["Market Analysis", "User Personas", "Technical Blueprint", "KPI Mapping"]
  },
  {
    phase: "02",
    title: "UX/UI Architecture",
    description: "We craft wireframes and high-fidelity prototypes focused entirely on conversion logic and user psychology. Every pixel is engineered to reduce friction and drive action.",
    deliverables: ["Wireframes", "Interactive Prototypes", "Design System", "Conversion Strategy"]
  },
  {
    phase: "03",
    title: "Elite Engineering",
    description: "Our developers build scalable, lightning-fast digital products using modern tech stacks (React, Next.js, Node). We ensure your platform handles massive traffic without breaking a sweat.",
    deliverables: ["Frontend Development", "Backend Architecture", "CMS Integration", "Performance Optimization"]
  },
  {
    phase: "04",
    title: "Launch & Scale",
    description: "Post-launch isn't the end; it's the beginning. We monitor analytics, run A/B tests, and iterate relentlessly to maximize your ROI.",
    deliverables: ["Quality Assurance", "Analytics Setup", "Growth Hacking", "Continuous Iteration"]
  }
];

const MethodologyPage = () => {
  return (
    <div className="min-h-screen bg-dark-950 pt-32 pb-24 text-white selection:bg-primary-500 selection:text-dark-950 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 noise opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 inline-flex backdrop-blur-md"
          >
             <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Our Process</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none"
          >
            How We <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Engineer Growth.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-relaxed"
          >
            A rigorous, four-step methodology designed for one purpose: turning your digital presence into an elite revenue-generating machine.
          </motion.p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col space-y-12 lg:space-y-32 relative">
          
          {/* Vertical Line Connector */}
          <div className="absolute left-6 lg:left-12 top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent hidden md:block"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={step.phase}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row gap-8 lg:gap-24 md:pl-24 group"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-6 lg:left-12 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border-2 border-primary-500 group-hover:bg-primary-500 group-hover:scale-150 transition-all duration-500 z-10"></div>

              {/* Phase Number */}
              <div className="md:w-1/4 pt-2">
                <span className="text-primary-500 font-black text-6xl lg:text-8xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-500 block leading-none">
                  {step.phase}
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tighter mt-4 text-white">{step.title}</h2>
              </div>

              {/* Content */}
              <div className="md:w-3/4 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-colors duration-500">
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-10">
                  {step.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-6">Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.deliverables.map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-neutral-500 group-hover:text-primary-400 transition-colors" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-12 lg:p-24 bg-gradient-to-br from-primary-900/20 to-dark-900 rounded-[3rem] border border-primary-500/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 relative z-10">Ready to dominate?</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto relative z-10">
            Skip the generic templates and partner with a team that engineers digital products designed for maximum ROI.
          </p>
          <Link 
            to="/onboarding" 
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary-500 to-emerald-400 text-dark-950 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] rounded-sm overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10">Apply to Partner</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default MethodologyPage;
