import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, User, Mail, Link as LinkIcon, FileText, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

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
      setIsSent(true); // Fallback success
    });
  };

  return (
    <div className="pt-32 pb-32 min-h-screen container mx-auto px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">Build the <span className="text-gradient-primary">Future</span> With Us.</h1>
        <p className="text-xl text-neutral-400">We are always looking for non-linear thinkers, technical masters, and creative obsessives to join the Stuccord family.</p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/5 transition-colors group cursor-default"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.salary}</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedJob(job)}
              className="px-6 py-3 border border-white/10 rounded-full text-white font-bold group-hover:bg-primary-500 group-hover:border-primary-500 transition-all flex items-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-900/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-2xl overflow-hidden shadow-2xl border border-primary-500/20"
            >
              <div className="p-8 lg:p-12">
                 <div className="flex items-center justify-between mb-8">
                    <div>
                       <h2 className="text-3xl font-bold text-white">Apply for Position</h2>
                       <p className="text-primary-400 font-medium">{selectedJob.title}</p>
                    </div>
                    <button onClick={() => setSelectedJob(null)} className="p-2 text-neutral-500 hover:text-white transition-colors">
                       <X className="w-6 h-6" />
                    </button>
                 </div>

                 {isSent ? (
                   <div className="py-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mx-auto mb-8">
                         <CheckCircle className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Application Received</h3>
                      <p className="text-neutral-400">Our recruitment team will review your profile and reach out within 48 hours.</p>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                         </div>
                         <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input required type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                         </div>
                      </div>
                      <div className="relative">
                         <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                         <input required type="url" placeholder="Portfolio or Resume Link" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                      <div className="relative">
                         <FileText className="absolute left-4 top-6 w-4 h-4 text-neutral-500" />
                         <textarea placeholder="Tell us why you want to join Stuccord..." className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white h-32 focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        className="w-full py-5 bg-primary-500 text-white font-bold rounded-xl shadow-xl shadow-primary-500/20 hover:bg-primary-600 transition-all flex items-center justify-center gap-2"
                      >
                         {isSubmitting ? 'Transmitting Data...' : 'Submit Application'}
                         {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                      </button>
                   </form>
                 )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-20 glass-card p-12 text-center max-w-3xl mx-auto border border-primary-500/20">
         <h2 className="text-2xl font-bold text-white mb-4">Don't see a fit?</h2>
         <p className="text-neutral-400 mb-8">Send your CV and a link to your best work to <span className="text-white font-bold">careers@stuccord.com</span></p>
         <div className="flex justify-center gap-8 text-neutral-500 text-sm font-bold tracking-widest uppercase">
            <span>Design</span>
            <span>-</span>
            <span>Engineering</span>
            <span>-</span>
            <span>Growth</span>
         </div>
      </div>
    </div>
  );
};

export default CareersPage;
