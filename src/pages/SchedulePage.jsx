import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Video, Globe, ArrowRight, CheckCircle, User, Mail, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';
import SEO from '../components/SEO';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // April 2026
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handleMonthChange = (e) => {
    setCurrentDate(new Date(year, parseInt(e.target.value), 1));
    setSelectedTime(null);
  };

  const handleYearChange = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
    setSelectedTime(null);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedTime(null);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      from_name: formData.get('name') || 'Prospect',
      from_email: formData.get('email'),
      subject: 'Strategy Call Request',
      message: `
        STRATEGY CALL BOOKED:
        Client: ${formData.get('name')}
        Email: ${formData.get('email')}
        -----------------------------------
        DATE: ${months[month]} ${selectedDay}, ${year}
        TIME: ${selectedTime}
        -----------------------------------
        OBJECTIVES:
        ${formData.get('notes') || 'None provided'}
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
      setIsBooked(true);
    }).catch(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    });
  };

  if (isBooked) {
    return (
      <div className="pt-32 pb-32 min-h-screen flex items-center justify-center container mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 lg:p-20 text-center max-w-2xl border border-primary-500/30">
          <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mx-auto mb-8">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Booking Confirmed!</h1>
          <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
            Your strategy call for **{months[month]} {selectedDay}, {year} at {selectedTime}** has been successfully scheduled.
          </p>
          <Link to="/" className="px-10 py-4 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 transition-all inline-block">
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen container mx-auto px-6 lg:px-8">
      <SEO 
        title="Schedule a Strategy Call" 
        description="Book a discovery session with Stuccord's leadership team to discuss your next digital breakthrough." 
      />
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
           <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
             Schedule Your <br/><span className="text-gradient-primary">Strategy Call.</span>
           </h1>
           <p className="text-xl text-neutral-400 mb-12">
             Book a 30-minute discovery session with our executive team.
           </p>

           <div className="space-y-6">
              {[
                { icon: <Clock className="w-5 h-5" />, text: '30 Minute Session' },
                { icon: <Video className="w-5 h-5" />, text: 'Google Meet / Zoom' },
                { icon: <Globe className="w-5 h-5" />, text: 'Real-time Dropdown Selection' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white font-medium">
                   <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary-400">{item.icon}</div>
                   {item.text}
                </div>
              ))}
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="glass-card p-2 border border-primary-500/20 shadow-2xl overflow-hidden rounded-[2.5rem]">
            <div className="bg-dark-900/50 rounded-[2rem] p-8 lg:p-12">
               <AnimatePresence mode="wait">
                 {!selectedTime ? (
                   <motion.div key="selector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <span className="font-bold text-white uppercase text-xs tracking-[0.2em]">Select Date & Time</span>
                        <div className="flex items-center gap-2">
                           <button onClick={handlePrevMonth} className="p-1 hover:text-primary-500 transition-colors"><ChevronLeft className="w-3 h-3" /></button>
                           
                           {/* Month Dropdown */}
                           <select 
                             value={month} 
                             onChange={handleMonthChange}
                             className="bg-transparent text-primary-400 font-bold text-xs border-none focus:outline-none cursor-pointer hover:text-white transition-colors"
                           >
                              {months.map((m, i) => <option key={m} value={i} className="bg-dark-800 text-white">{m}</option>)}
                           </select>

                           {/* Year Dropdown */}
                           <select 
                             value={year} 
                             onChange={handleYearChange}
                             className="bg-transparent text-primary-400 font-bold text-xs border-none focus:outline-none cursor-pointer hover:text-white transition-colors"
                           >
                              {years.map(y => <option key={y} value={y} className="bg-dark-800 text-white">{y}</option>)}
                           </select>

                           <button onClick={handleNextMonth} className="p-1 hover:text-primary-500 transition-colors"><ChevronRight className="w-3 h-3" /></button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 mb-10">
                         {['M','T','W','T','F','S','S'].map(d => <div key={d} className="text-center text-[10px] text-neutral-600 font-bold">{d}</div>)}
                         {Array.from({length: adjustedFirstDay}).map((_, i) => <div key={`empty-${i}`} />)}
                         {Array.from({length: daysInMonth}).map((_, i) => (
                           <button 
                             key={i} 
                             onClick={() => setSelectedDay(i+1)}
                             className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                               selectedDay === i+1 
                               ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40 scale-110' 
                               : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                             }`}
                           >
                             {i+1}
                           </button>
                         ))}
                      </div>

                      <div className="space-y-3">
                         <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Available Slots (GMT)</p>
                         {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(time => (
                           <button key={time} onClick={() => setSelectedTime(time)} className="w-full py-4 rounded-xl border border-white/5 bg-white/0 hover:bg-primary-500/10 hover:border-primary-500 text-neutral-400 hover:text-white font-bold transition-all flex justify-between px-6 items-center group">
                             {time}
                             <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                           </button>
                         ))}
                      </div>
                   </motion.div>
                 ) : (
                   <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <button onClick={() => setSelectedTime(null)} className="text-xs text-primary-400 font-bold mb-8 flex items-center gap-2 hover:text-white transition-colors">← Change Time ({selectedTime})</button>
                      <form onSubmit={handleBooking} className="space-y-6">
                         <div className="space-y-4">
                            <div className="relative">
                               <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                               <input name="name" type="text" required placeholder="Full Name" className="w-full bg-dark-800 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500 shadow-inner" />
                            </div>
                            <div className="relative">
                               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                               <input name="email" type="email" required placeholder="Work Email" className="w-full bg-dark-800 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500 shadow-inner" />
                            </div>
                            <textarea name="notes" placeholder="Briefly describe your objectives..." className="w-full bg-dark-800 border border-white/10 rounded-xl py-4 px-4 text-white h-32 focus:outline-none focus:border-primary-500 resize-none shadow-inner"></textarea>
                         </div>
                         <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-primary-500 text-white font-bold rounded-xl shadow-xl shadow-primary-500/20 hover:bg-primary-600 transition-all">
                            {isSubmitting ? 'Securing Slot...' : 'Confirm Strategy Session'}
                         </button>
                      </form>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SchedulePage;
