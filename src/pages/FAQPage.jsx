import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "What services does Stuccord actually provide?",
    a: "We are a full-service digital agency specializing in premium SaaS development, high-performance web design, brand identity systems, and growth-driven SEO marketing."
  },
  {
    q: "How long does a typical project take?",
    a: "Standard website redesigns typically take 4-6 weeks. Complex SaaS platforms can range from 3-6 months depending on the architecture and feature requirements."
  },
  {
    q: "Do you work with startups or established enterprises?",
    a: "Both. We have a dedicated workflow for ambitious startups looking to launch fast, and high-integrity systems for enterprises requiring massive scale and security."
  },
  {
    q: "Where is Stuccord located?",
    a: "Our core operations are based in Accra, Ghana, but we operate as a global distributed team, serving clients in over 12 countries including the USA, UK, and UAE."
  },
  {
    q: "What is your pricing model?",
    a: "We offer both project-based fixed pricing for clearly defined scopes and monthly retainer models for ongoing development and growth marketing support."
  }
];

const FAQPage = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="pt-32 pb-32 min-h-screen container mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6">
           <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Frequently Asked <span className="text-primary-400">Questions.</span></h1>
        <p className="text-xl text-neutral-400 max-w-2xl">Everything you need to know about partnering with Stuccord for your next digital breakthrough.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden border border-white/5 transition-all hover:border-white/10">
            <button 
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left transition-colors"
            >
              <span className="text-lg font-bold text-white">{faq.q}</span>
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-neutral-400">
                {active === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      {/* Visual Support */}
      <div className="mt-32 relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 glass-card p-12 flex items-center justify-center text-center">
         <img 
           src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
           className="absolute inset-0 w-full h-full object-cover opacity-20"
           alt="Stuccord Office"
         />
         <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-neutral-400 mb-8">Out team at contact@stuccord.com is ready to help.</p>
            <a href="/contact" className="px-8 py-3 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20">
              Get in Touch
            </a>
         </div>
      </div>
    </div>
  );
};

export default FAQPage;
