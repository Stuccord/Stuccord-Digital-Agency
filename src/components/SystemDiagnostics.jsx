import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Terminal, Zap } from 'lucide-react';

const SystemDiagnostics = () => {
  const stats = [
    { label: 'Network Latency', value: '12ms', status: 'Optimal', icon: <Zap className="w-4 h-4" /> },
    { label: 'Security Protocol', value: 'AES-256', status: 'Active', icon: <Shield className="w-4 h-4" /> },
    { label: 'Active Deployments', value: '42', status: 'Live', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Compute Power', value: 'Elite', status: 'Stable', icon: <Activity className="w-4 h-4" /> }
  ];

  return (
    <section className="w-full bg-dark-950 border-y border-white/5 py-12 lg:py-16 relative z-30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-all duration-500">
                {stat.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[8px] font-black text-neutral-500 uppercase tracking-widest">{stat.label}</p>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20">
                    <div className="w-1 h-1 rounded-full bg-primary-500 animate-pulse"></div>
                    <span className="text-[7px] font-black text-primary-500 uppercase tracking-widest">{stat.status}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                  {stat.value}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* HUD Scanner Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-500/20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default SystemDiagnostics;
