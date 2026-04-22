import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, User, Mail, Link as LinkIcon, FileText, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';
import SEO from '../components/SEO';

const jobs = [
  { title: 'Senior Full-Stack Developer', type: 'Full-time', location: 'Remote / Accra', salary: '$60k - $90k' },
  { title: 'UI/UX Brand Designer', type: 'Full-time', location: 'Accra Office', salary: '$40k - $65k' },
  { title: 'Growth Marketing Lead', type: 'Contract', location: 'Remote', salary: 'Competitive' }
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: `Job Application: ${selectedJob.title}`,
      message: `
        NEW APPLICATION:
        Role: ${selectedJob.title}
        Candidate: ${formData.get('name')}
        Email: ${formData.get('email')}
        -----------------------------------
        RESUME/PORTFOLIO:
        ${formData.get('resume')}
        -----------------------------------
        COVER LETTER/NOTES:
        ${formData.get('notes')}
      `,
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
    };

    emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      data,
      EMAIL_CONFIG.PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setSelectedJob(null);
      }, 3000);
    }).catch(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-dark-950">
      <SEO 
        title="Careers & Engineering Opportunities" 
        description="Join the Stuccord team. We are looking for non-linear thinkers, technical masters, and creative obsessives to build the future of digital business." 
      />
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 noise z-0 opacity-20"></div>
      <div className="absolute top-[10%] right-[-5%] w-[700px] h-[700px] bg-primary-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"></div>

      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-4 py-1.5 rounded-full glass border border-primary-500/20 text-primary-400 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-8 inline-block">
             Strategic Evolution
          </span>
          <h1 className="text-5xl lg:text-8xl font-black text-white italic leading-[0.85] tracking-tight mb-8">
            Build the <br />
            <span className="text-gradient">Future.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
            We are looking for non-linear thinkers, technical masters, and creative obsessives to join the Stuccord family.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              
              <div className="relative glass p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2rem] border border-white/5 group-hover:border-primary-500/30 transition-all duration-500">
                <div className="text-left flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-3xl font-black text-white italic tracking-tight group-hover:text-primary-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-primary-500" /> {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary-500" /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-primary-500" /> {job.salary}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="px-10 py-5 bg-primary-500 text-dark-950 font-black uppercase text-[11px] tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl shadow-primary-500/20"
                >
                  Initiate Career <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-950/80 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative glass w-full max-w-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 rounded-[3rem]"
            >
              <div className="p-10 lg:p-14">
                 <div className="flex items-center justify-between mb-12">
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-500 mb-2 block">Application Protocol</span>
                       <h2 className="text-4xl lg:text-5xl font-black text-white italic tracking-tight italic">Enter the <br/><span className="text-gradient">Laboratory.</span></h2>
                       <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-widest mt-4">Position: {selectedJob.title}</p>
                    </div>
                    <button onClick={() => setSelectedJob(null)} className="p-3 bg-white/5 rounded-full text-neutral-500 hover:text-white hover:bg-white/10 transition-all">
                       <X className="w-6 h-6" />
                    </button>
                 </div>

                 {isSent ? (
                   <div className="py-20 text-center">
                      <div className="w-24 h-24 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                         <CheckCircle className="w-12 h-12" />
                      </div>
                      <h3 className="text-3xl font-black text-white italic mb-4">Frequency Received.</h3>
                      <p className="text-neutral-400 font-medium">Our intelligence team will analyze your profile and transmit a response within 48 cycles (hours).</p>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="relative group/field">
                            <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 group-focus-within/field:text-primary-500 transition-colors" />
                            <input required name="name" type="text" placeholder="Full Identity" className="w-full bg-dark-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-neutral-700" />
                         </div>
                         <div className="relative group/field">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 group-focus-within/field:text-primary-500 transition-colors" />
                            <input required name="email" type="email" placeholder="Communication Port (Email)" className="w-full bg-dark-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-neutral-700" />
                         </div>
                      </div>
                      <div className="relative group/field">
                         <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 group-focus-within/field:text-primary-500 transition-colors" />
                         <input required name="resume" type="url" placeholder="Intelligence Archive (Portfolio or Resume Link)" className="w-full bg-dark-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-neutral-700" />
                      </div>
                      <div className="relative group/field">
                         <FileText className="absolute left-6 top-6 w-4 h-4 text-neutral-600 group-focus-within/field:text-primary-500 transition-colors" />
                         <textarea name="notes" placeholder="Transmission Notes: Why are you a non-linear thinker?" className="w-full bg-dark-950/50 border border-white/10 rounded-2xl py-6 pl-14 pr-6 text-sm text-white h-40 focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-neutral-700 resize-none"></textarea>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        className="w-full py-6 bg-primary-500 text-dark-950 font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl shadow-xl shadow-primary-500/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                         {isSubmitting ? 'Transmitting Data Array...' : 'Submit Application Protocol'}
                         {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                      </button>
                   </form>
                 )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="mt-20 relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 lg:p-16 text-center border border-primary-500/10 rounded-[3rem] group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
          <h2 className="text-3xl lg:text-4xl font-black text-white italic mb-6 tracking-tight">Open Transmission.</h2>
          <p className="text-neutral-400 mb-12 text-lg font-medium leading-relaxed">
            Don't see a fit? Send your intelligence archive and a link to your best work to <br />
            <span className="text-primary-400 font-black tracking-wider block mt-4">CAREERS@STUCCORD.COM</span>
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
             <span className="hover:text-primary-500 transition-colors">Design</span>
             <span>+</span>
             <span className="hover:text-primary-500 transition-colors">Engineering</span>
             <span>+</span>
             <span className="hover:text-primary-500 transition-colors">Growth</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CareersPage;
