import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const faqs = [
  {
    q: "What is your typical partnership investment?",
    a: "Our digital presence projects typically start at $10k, while full-scale SaaS engineering and product launches begin at $25k+. We focus on high-impact partnerships where our engineering drives significant market valuation."
  },
  {
    q: "How fast can we launch?",
    a: "For high-performance marketing sites, we typically move from strategy to launch in 4-6 weeks. Complex SaaS architectures require 3-6 months for a production-ready MVP."
  },
  {
    q: "Do you offer equity-based partnerships?",
    a: "We occasionally consider equity components for high-growth potential startups where we act as the primary technical partner, but our core model is project or retainer based."
  },
  {
    q: "Where is the team located?",
    a: "Stuccord is a global-first studio. Our core leadership is in Accra, Ghana, with specialist engineering and design talent distributed across 12 countries to ensure 24/7 technical coverage."
  },
  {
    q: "What is your technical stack?",
    a: "We specialize in the React/Next.js ecosystem for frontend, Node.js and Go for backend architectures, and Supabase or AWS for cloud infrastructure. We select tools based on scale and security requirements."
  }
];

const FAQPage = () => {
  const [active, setActive] = useState(null);

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
            Studio <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Knowledge.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            Everything you need to know about engineering the future with Stuccord.
          </p>
        </div>

        <div className="max-w-5xl">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-white/10"
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-10 lg:py-16 flex items-center justify-between group text-left"
              >
                <h3 className={`text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-all duration-500 ${active === i ? 'text-white' : 'text-neutral-500 group-hover:text-white'}`}>
                  {faq.q}
                </h3>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${active === i ? 'border-primary-500 bg-primary-500 text-dark-950 rotate-45' : 'border-white/20 text-white group-hover:border-white'}`}>
                  <Plus className="w-6 h-6" />
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-xl lg:text-2xl text-neutral-400 font-medium leading-relaxed pb-12 lg:pb-20 max-w-3xl pl-4 border-l-2 border-primary-500">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-24 bg-white/5 border border-white/10 rounded-[3rem] text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-8">Still Curious?</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto">
            Our team is ready to transmit answers for any technical or strategic queries you may have.
          </p>
          <Link 
            to="/onboarding" 
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-dark-950 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-500 rounded-sm"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
