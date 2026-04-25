import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Launch your digital presence',
    price: '4,500',
    period: '/project',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-neutral-400 to-neutral-600',
    features: [
      'Up to 5 custom pages',
      'Mobile-responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Social media links',
      '2 revision rounds',
      '14-day delivery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Built for serious brands',
    price: '7,200',
    period: '/project',
    icon: <Star className="w-6 h-6" />,
    color: 'from-primary-400 to-emerald-500',
    features: [
      'Up to 10 custom pages',
      'Premium UI/UX design',
      'CMS / Blog integration',
      'Advanced SEO optimization',
      'WhatsApp & booking integration',
      'Google Analytics setup',
      'Speed & performance tuning',
      '4 revision rounds',
      '21-day delivery',
    ],
    cta: 'Scale Up',
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Full-stack digital dominance',
    price: '9,000',
    period: '/project',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-emerald-400 to-teal-500',
    features: [
      'Unlimited pages',
      'Custom web app / SaaS features',
      'E-commerce / payment integration',
      'Full brand identity system',
      'Email marketing setup',
      'Priority 24/7 support',
      'Custom domain & hosting setup',
      'Unlimited revisions',
      '30-day delivery',
    ],
    cta: 'Go Elite',
    popular: false,
  },
];

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    className={`relative flex flex-col rounded-[2.5rem] border transition-all duration-500 overflow-hidden group ${
      plan.popular
        ? 'bg-white/10 border-primary-500/60 shadow-[0_0_60px_rgba(16,185,129,0.15)] scale-[1.03] z-10'
        : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
    }`}
  >
    {/* Popular badge */}
    {plan.popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <span className="bg-primary-500 text-dark-950 px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap shadow-[0_4px_20px_rgba(16,185,129,0.4)]">
          Most Popular
        </span>
      </div>
    )}

    {/* Glow blob */}
    {plan.popular && (
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none" />
    )}

    <div className="p-8 lg:p-10 flex flex-col flex-1">
      {/* Icon + Plan name */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-dark-950 shadow-lg`}>
          {plan.icon}
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500 mb-0.5">Package</p>
          <h3 className="text-xl font-black uppercase tracking-tight text-white">{plan.name}</h3>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-neutral-400 text-sm font-medium mb-8 leading-relaxed">{plan.tagline}</p>

      {/* Price */}
      <div className="mb-8 pb-8 border-b border-white/10">
        <div className="flex items-end gap-1">
          <span className="text-2xl font-black text-neutral-400">¢</span>
          <span className={`text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r ${plan.color} bg-clip-text text-transparent leading-none`}>
            {plan.price}
          </span>
        </div>
        <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest mt-2">{plan.period}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3.5 mb-10 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-500' : 'text-neutral-500'}`} />
            <span className="text-sm text-neutral-300 font-medium leading-snug">{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/onboarding"
        className={`group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 ${
          plan.popular
            ? 'bg-primary-500 text-dark-950 hover:scale-105 shadow-[0_10px_40px_rgba(16,185,129,0.3)]'
            : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary-500/50'
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const Pricing = ({ standalone = false }) => {
  return (
    <section id="pricing" className={`w-full bg-dark-950 relative overflow-hidden ${standalone ? 'pt-40 pb-32' : 'py-24 lg:py-32'}`}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-primary-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-[9px] font-black text-primary-400 uppercase tracking-[0.4em]">Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-black uppercase tracking-tighter leading-[0.85] mb-6 italic ${standalone ? 'text-5xl md:text-7xl lg:text-9xl' : 'text-5xl lg:text-7xl'}`}
          >
            Invest In<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-500">
              Your Growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 font-medium max-w-xl mx-auto text-base leading-relaxed"
          >
            Simple, honest pricing. No hidden fees. Choose the package that fits your ambition.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-neutral-600 text-xs font-bold uppercase tracking-widest mt-16"
        >
          All prices in Ghana Cedis (GHS) · Custom quotes available for enterprise projects
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
