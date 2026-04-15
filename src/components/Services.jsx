import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Palette, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom SaaS Development',
    desc: 'Scalable, secure, and intuitive web applications tailored to streamline your operations and delight your users.'
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'High-Performance Web Design',
    desc: 'Lightning-fast, conversion-optimized websites that serve as your best 24/7 salesperson.'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Brand Identity',
    desc: 'Distinctive, premium visual branding that commands attention and builds instant trust.'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Growth-Driven SEO',
    desc: 'Data-backed strategies that turn organic traffic into loyal, paying customers across all digital channels.'
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full py-24 container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Our Core <br/><span className="text-gradient">Specializations.</span></h2>
          <p className="text-neutral-400 text-lg">
            We don't offer everything. We offer the best. Our services are engineered for high-growth companies requiring technical precision.
          </p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to="/services" className="text-primary-400 font-semibold flex items-center gap-2 hover:text-primary-300 transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`glass p-8 rounded-[2rem] hover:bg-neutral-800/50 transition-all duration-500 group cursor-default border border-white/5`}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-8 border border-white/5 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-lg shadow-primary-500/0 group-hover:shadow-primary-500/20"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">{service.desc}</p>
            <Link to="/services" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-primary-400 transition-colors">
              Explore Service <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
