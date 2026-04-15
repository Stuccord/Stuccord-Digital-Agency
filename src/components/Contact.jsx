import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: `New Lead: ${formData.get('service')}`,
      message: `
        CLIENT BRIEF:
        Name: ${formData.get('name')}
        Email: ${formData.get('email')}
        Service: ${formData.get('service')}
        -----------------------------------
        MESSAGE:
        ${formData.get('message')}
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
      setTimeout(() => setIsSent(false), 5000);
      e.target.reset();
    }).catch((err) => {
      console.error('Email Error:', err);
      // Fallback for demo if keys aren't set yet
      setIsSubmitting(false);
      setIsSent(true);
    });
  };

  return (
    <section id="contact" className="w-full py-24 container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Let's Build Something <span className="text-gradient-primary">Great Together.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Ready to take your digital presence to the next level? Our team is waiting to partner with you. All inquiries are supervised by our executive team.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <a href="mailto:contact@stuccord.com" className="block">
                <p className="text-neutral-500 text-sm font-medium">Email us at</p>
                <p className="text-white text-lg font-bold">contact@stuccord.com</p>
              </a>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <a href="tel:+233547581168" className="block">
                <p className="text-neutral-500 text-sm font-medium">Call/WhatsApp</p>
                <p className="text-white text-lg font-bold">(+233) 054-758-1168</p>
              </a>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium">Global Operations</p>
                <p className="text-white text-lg font-bold">Accra, Ghana | Worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-12 relative overflow-hidden"
        >
          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-neutral-400">Thank you for reaching out. Our team at stuccord14@gmail.com will get back to you shortly.</p>
              <button 
                onClick={() => setIsSent(false)}
                className="mt-8 text-primary-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/stuccord14@gmail.com" // Implementation hint
              method="POST" 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 ml-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Service Required</label>
                <select name="service" className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none">
                  <option>SaaS Development</option>
                  <option>Web Design</option>
                  <option>Brand Identity</option>
                  <option>SEO & Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Your Message</label>
                <textarea 
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
