import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsPage = () => {
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
            Engagement <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">Terms.</span>
          </motion.h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            Legal framework for high-integrity digital partnerships.
          </p>
        </div>

        <div className="max-w-3xl space-y-16 text-neutral-400 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">01. Partnership Alignment</h2>
            <p>
              By applying to partner with Stuccord, you acknowledge that we operate on a selective capacity basis. Project acceptance is dependent on technical alignment, timeline viability, and budget requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">02. IP Ownership</h2>
            <p>
              Unless otherwise specified in a signed Master Service Agreement (MSA), all custom engineering, designs, and assets created by Stuccord become the intellectual property of the client upon final payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">03. Project Iteration</h2>
            <p>
              We engineer with precision. Our standard process includes predefined cycles for feedback and refinement. Scope modifications requested outside the technical blueprint may require investment adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">04. Global Governance</h2>
            <p>
              Stuccord operates as a global entity. These terms are governed by the digital commerce laws applicable to our core leadership operations in Ghana, as well as international digital service standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
