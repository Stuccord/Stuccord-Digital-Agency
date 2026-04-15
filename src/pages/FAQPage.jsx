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

  // SEO Schema for Google "People Also Ask"
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-dark-950">
      {/* SEO Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />

      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 noise z-0 opacity-20"></div>
      <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"></div>

      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-4 py-1.5 rounded-full glass border border-primary-500/20 text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-8 inline-block">
             Knowledge Stratum
          </span>
          <h1 className="text-5xl lg:text-8xl font-black text-white italic leading-[0.85] tracking-tight mb-8">
            Frequently Asked <br />
            <span className="text-gradient">Questions.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
            Everything you need to know about partnering with Stuccord for your next digital breakthrough. Engineered for transparency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-transparent rounded-3xl blur transition-all duration-500 ${active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              
              <div className={`relative glass rounded-3xl border transition-all duration-500 overflow-hidden ${active === i ? 'border-primary-500/50' : 'border-white/5 group-hover:border-white/20'}`}>
                <button 
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors"
                >
                  <span className={`text-xl font-black italic tracking-tight transition-colors duration-500 ${active === i ? 'text-primary-400' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${active === i ? 'bg-primary-500 border-primary-500 text-dark-950 rotate-90' : 'bg-white/5 border-white/10 text-neutral-400 group-hover:text-white'}`}>
                    <Plus className={`w-5 h-5 transition-transform duration-500 ${active === i ? 'rotate-45' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 text-neutral-400 leading-relaxed font-medium text-lg border-t border-white/5 pt-6">
                        <motion.p
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.a}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative aspect-[16/6] md:aspect-[21/6] rounded-[3rem] overflow-hidden border border-white/10 glass p-12 flex items-center justify-center group"
        >
           <div className="absolute inset-0 bg-primary-500/5 z-0"></div>
           <div className="absolute inset-0 noise opacity-10 pointer-events-none"></div>
           
           <div className="relative z-10 text-center max-w-2xl px-6">
              <h2 className="text-3xl lg:text-5xl font-black text-white italic mb-6 tracking-tight">Still have <span className="text-gradient">questions?</span></h2>
              <p className="text-neutral-400 mb-10 text-lg font-medium">Our team at <span className="text-primary-400 font-bold">CONTACT@STUCCORD.COM</span> is ready to transmit answers.</p>
              <Link 
                to="/contact" 
                className="inline-flex px-10 py-5 bg-primary-500 text-dark-950 font-black uppercase text-[12px] tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-500/30"
              >
                Get in Touch
              </Link>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQPage;
