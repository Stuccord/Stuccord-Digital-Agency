import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Digital Presence",
    price: "From $10,000",
    desc: "For startups looking to disrupt their market with a world-class landing page and brand identity.",
    features: [
      "Custom 3D Motion Design",
      "Conversion-First Architecture",
      "Brand Identity System",
      "Mobile-First Engineering",
      "Technical SEO Foundation"
    ]
  },
  {
    name: "Product Engineering",
    price: "From $25,000",
    desc: "End-to-end SaaS development and complex web applications designed for scale and performance.",
    features: [
      "Full-Stack Development",
      "Custom UI/UX Framework",
      "Scalable Cloud Backend",
      "Third-Party Integrations",
      "Priority Launch Support"
    ],
    popular: true
  },
  {
    name: "Enterprise Growth",
    price: "Custom Quote",
    desc: "Continuous growth engineering and technical partnership for established businesses scaling globally.",
    features: [
      "Dedicated Growth Team",
      "Relentless A/B Testing",
      "Custom Internal Tooling",
      "Advanced Data Analytics",
      "24/7 Strategic Advisory"
    ]
  }
];

const InvestmentPage = () => {
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
            Elite <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Investment.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            We don't sell websites. We engineer high-performance digital assets that deliver measurable ROI and long-term valuation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 lg:p-12 rounded-[2rem] border transition-all duration-500 ${
                pkg.popular 
                ? 'bg-white/10 border-primary-500/50 shadow-[0_0_50px_rgba(16,185,129,0.1)] scale-105 z-10' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 right-12 -translate-y-1/2 bg-primary-500 text-dark-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Requested
                </span>
              )}
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{pkg.name}</h2>
              <div className="text-primary-500 font-black text-2xl mb-6">{pkg.price}</div>
              <p className="text-neutral-400 font-medium mb-10 leading-relaxed">
                {pkg.desc}
              </p>
              
              <div className="space-y-4 mb-12">
                {pkg.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-bold text-neutral-200">{feat}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/onboarding" 
                className={`w-full group relative flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-widest text-sm transition-all duration-500 rounded-sm ${
                  pkg.popular ? 'bg-primary-500 text-dark-950' : 'bg-white text-dark-950 hover:scale-105'
                }`}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-500 font-medium uppercase tracking-widest text-xs">
            All partnerships are subject to internal capacity and project alignment.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentPage;
