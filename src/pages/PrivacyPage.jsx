import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPage = () => {
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
            Privacy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Protocol.</span>
          </motion.h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            Last Updated: June 2026. Your data integrity is mission-critical to our operations.
          </p>
        </div>

        <div className="max-w-3xl space-y-16 text-neutral-400 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">01. Data Transmission</h2>
            <p>
              We collect information that you transmit to us via our onboarding application, including your name, email, and project specifications. This data is encrypted at rest and in transit using industry-standard security protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">02. Intelligence Usage</h2>
            <p>
              Your project data is used exclusively for the purpose of evaluating partnership alignment and engineering your digital product. We do not sell, trade, or transmit your data to third-party marketing entities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">03. Security Layers</h2>
            <p>
              Stuccord implements multiple layers of security to prevent unauthorized access. This includes JWT authentication for all internal tools and regular technical audits of our infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">04. Cookie Registry</h2>
            <p>
              We use minimal, non-invasive cookies to monitor performance and optimize your experience on our platform. No tracking cookies are used for third-party advertising.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
