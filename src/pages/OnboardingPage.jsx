import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Globe, Cpu, Briefcase, BarChart3, Clock, Loader2, Terminal, Activity, Lock, Wifi, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { EMAIL_CONFIG } from '../config/emailConfig';
import emailjs from '@emailjs/browser';

const questions = [
  {
    id: 'identity',
    title: "Client Identification",
    label: "Who are we partnering with?",
    sublabel: "Establishing secure communication channels.",
    fields: [
      { id: 'name', label: 'Full Name *', placeholder: 'Enter your name', type: 'text', required: true },
      { id: 'email', label: 'Work Email *', placeholder: 'name@company.com', type: 'email', required: true },
      { id: 'whatsapp', label: 'WhatsApp (Optional)', placeholder: '+1 234 567 8900', type: 'tel', required: false },
      { id: 'company', label: 'Organization *', placeholder: 'Entity Name', type: 'text', required: true },
      { id: 'social', label: 'Social Media / Website (Optional)', placeholder: '@username or URL', type: 'text', required: false },
      { id: 'logo', label: 'Brand Logo URL (Optional)', placeholder: 'https://...', type: 'url', required: false }
    ],
    type: "form"
  },
  {
    id: 'mission',
    title: "Service Vertical",
    label: "Select your primary requirement.",
    sublabel: "Aligning agency resources for your mission.",
    options: [
      { value: 'web-design', label: 'Web Design', icon: <Globe className="w-6 h-6" /> },
      { value: 'software-dev', label: 'Software Dev', icon: <Cpu className="w-6 h-6" /> },
      { value: 'ecommerce', label: 'E-commerce', icon: <Zap className="w-6 h-6" /> },
      { value: 'branding', label: 'Brand Identity', icon: <Shield className="w-6 h-6" /> }
    ],
    type: "choice"
  },
  {
    id: 'goals',
    title: "Strategic Objectives",
    label: "What defines success?",
    sublabel: "Select multiple KPIs for this engagement.",
    options: [
      { value: 'revenue', label: 'Revenue Growth', icon: <BarChart3 className="w-6 h-6" /> },
      { value: 'retention', label: 'User Retention', icon: <Clock className="w-6 h-6" /> },
      { value: 'performance', label: 'Speed/Performance', icon: <Zap className="w-6 h-6" /> },
      { value: 'automation', label: 'Process Automation', icon: <Cpu className="w-6 h-6" /> }
    ],
    type: "multi-choice"
  },
  {
    id: 'investment',
    title: "Capital Allocation",
    label: "Define your investment range.",
    sublabel: "Resource mapping based on project scale.",
    options: [
      { value: '10-25', label: '$10k - $25k' },
      { value: '25-50', label: '$25k - $50k' },
      { value: '50-100', label: '$50k - $100k' },
      { value: '100+', label: '$100k+' }
    ],
    type: "choice"
  },
  {
    id: 'brief',
    title: "Intelligence Brief",
    label: "Project Context.",
    sublabel: "Additional parameters for our engineering team.",
    placeholder: "Vision, technical constraints, or specific targets...",
    type: "textarea"
  }
];

const StatusItem = ({ label, value, active }) => (
  <div className={`flex flex-col gap-1 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-30'}`}>
    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600">{label}</span>
    <span className="text-[10px] font-bold text-white uppercase tracking-widest truncate max-w-[150px]">
      {value || 'PENDING_INPUT'}
    </span>
  </div>
);

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ goals: [] });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSending(true);
      setError(null);
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
          message: `
[ MISSION INTAKE REPORT ]

/// SUBJECT IDENTITY
▪ Name: ${formData.name || 'N/A'}
▪ Email: ${formData.email || 'N/A'}
▪ WhatsApp: ${formData.whatsapp || 'Not provided'}

/// ORGANIZATION DETAILS
▪ Company: ${formData.company || 'N/A'}
▪ Social/Website: ${formData.social || 'Not provided'}
▪ Logo URL: ${formData.logo || 'Not provided'}
▪ Primary Focus: ${formData.mission || 'N/A'}

/// STRATEGIC TARGETS
▪ Objectives: ${(formData.goals || []).join(', ') || 'N/A'}
▪ Allocated Budget: ${formData.investment || 'N/A'}

/// INTELLIGENCE BRIEF
${formData.brief || 'No brief provided.'}
          `,
          // Keeping original fields just in case the template uses them
          company: formData.company,
          mission_directive: formData.mission,
          objectives: (formData.goals || []).join(', '),
          budget_allocation: formData.investment,
          intelligence_brief: formData.brief,
          logo_url: formData.logo || ''
        };

        // 1. Primary Transmission: EmailJS (Verified)
        const emailResponse = await emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams, EMAIL_CONFIG.PUBLIC_KEY);
        
        // 2. Client WhatsApp Auto-Reply via Webhook Bridge
        // Note: Client-side JS cannot send to WhatsApp directly without a backend API (like Twilio, Meta, or Zapier).
        // This fires a webhook to a service like Zapier which will then send the message to the client's number.
        if (formData.whatsapp) {
          const clientWaMessage = `Hello ${formData.name}! We have received your Mission Intake. Our engineering team is currently reviewing your project requirements and will get back to you shortly. - Stuccord Agency`;
          
          try {
            // Placeholder for your automation webhook (Zapier/Make)
            // Replace with your actual webhook URL that connects to a WhatsApp sender
            await fetch('https://hooks.zapier.com/hooks/catch/your-webhook-id/auto-reply', {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                action: 'send_whatsapp_autoreply',
                client_phone: formData.whatsapp,
                client_name: formData.name,
                message: clientWaMessage 
              })
            });
          } catch (waErr) {
            console.warn("WhatsApp Webhook Failed:", waErr);
          }
        }

        if (emailResponse.status === 200) setIsSubmitted(true);
        else throw new Error("Transmission_Interrupted");
      } catch (err) {
        setError("Link_Failure: Transmission_Incomplete. Please retry.");
      } finally { setIsSending(false); }
    }
  };

  const updateField = (id, value) => setFormData(prev => ({ ...prev, [id]: value }));
  
  const handleFileUpload = (id, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Compress to JPEG to dramatically reduce payload size for EmailJS
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        updateField(id, dataUrl);
      };
    };
  };

  const toggleMultiChoice = (id, value) => setFormData(prev => {
    const current = prev[id] || [];
    return { ...prev, [id]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] };
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const isTextarea = e.target.tagName.toLowerCase() === 'textarea';
      if (isTextarea && !e.ctrlKey && !e.metaKey) {
        return; // Allow newlines in textarea, require Ctrl+Enter to submit
      }
      
      e.preventDefault();

      if (currentQ.type === 'form') {
        const currentIndex = currentQ.fields.findIndex(f => f.id === e.target.id);
        if (currentIndex !== -1 && currentIndex < currentQ.fields.length - 1) {
          const nextFieldId = currentQ.fields[currentIndex + 1].id;
          const nextField = document.getElementById(nextFieldId);
          if (nextField) {
            nextField.focus();
            return;
          }
        }
      }

      if (canProceed() && !isSending) {
        handleNext();
      }
    }
  };

  const handleChoiceSelection = (id, value) => {
    updateField(id, value);
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleNext();
      }
    }, 400); // Smooth delay to show selection state before advancing
  };

  const currentQ = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const canProceed = () => {
    if (currentQ.type === 'form') return currentQ.fields.filter(f => f.required).every(f => formData[f.id]?.length > 0);
    if (currentQ.type === 'choice') return formData[currentQ.id] !== undefined;
    if (currentQ.type === 'multi-choice') return (formData[currentQ.id] || []).length > 0;
    if (currentQ.type === 'textarea') return formData[currentQ.id]?.length > 10;
    return true;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
        <SEO title="Mission Start | Stuccord" description="Your intelligence has been received." />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <div className="w-20 h-20 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="w-10 h-10 text-primary-500" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic uppercase">Logged.</h1>
          <p className="text-xl text-neutral-400 max-w-xl mx-auto mb-16 leading-tight">Your project parameters are now being analyzed by our engineering team. Expect a response within <span className="text-white">24 Standard Hours</span>.</p>
          <Link to="/" className="px-12 py-6 bg-white text-dark-950 font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">Back to Command</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col lg:flex-row relative overflow-hidden">
      <SEO title="Onboarding | Stuccord Intelligence" description="Initialize your partnership." />

      {/* Global Abort/Home Button */}
      <Link to="/" className="absolute top-6 right-6 lg:top-12 lg:right-12 z-50 flex items-center gap-3 text-neutral-500 hover:text-white transition-all group">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Abort_Protocol</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-dark-950/50 backdrop-blur-sm group-hover:border-red-500/50 group-hover:text-red-500 transition-all duration-300">
          <X className="w-5 h-5" />
        </div>
      </Link>

      {/* Unique Left Status Terminal */}
      <div className="hidden lg:flex w-[350px] bg-dark-900/50 border-r border-white/5 flex-col p-12 relative z-20">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <Terminal className="w-5 h-5 text-primary-500" />
             <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Project_Intake</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative">
             <motion.div className="absolute top-0 left-0 h-full bg-primary-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" animate={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="space-y-12 flex-grow">
          <div className="grid grid-cols-1 gap-8">
            <StatusItem label="Identification" value={formData.name} active={currentStep >= 0} />
            <StatusItem label="Organization" value={formData.company} active={currentStep >= 0} />
            <StatusItem label="Service_Focus" value={formData.mission} active={currentStep >= 1} />
            <StatusItem label="Investment" value={formData.investment} active={currentStep >= 3} />
          </div>

          <div className="pt-12 border-t border-white/5 space-y-6">
            <div className="flex items-center justify-between text-neutral-600">
               <span className="text-[8px] font-black uppercase tracking-widest flex items-center gap-2"><Activity className="w-3 h-3" /> System_Health</span>
               <span className="text-[8px] font-black uppercase tracking-widest text-primary-500">Nominal</span>
            </div>
            <div className="flex items-center justify-between text-neutral-600">
               <span className="text-[8px] font-black uppercase tracking-widest flex items-center gap-2"><Lock className="w-3 h-3" /> Encryption</span>
               <span className="text-[8px] font-black uppercase tracking-widest text-primary-500">SSL_ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-neutral-600">
               <span className="text-[8px] font-black uppercase tracking-widest flex items-center gap-2"><Wifi className="w-3 h-3" /> Link_Status</span>
               <span className="text-[8px] font-black uppercase tracking-widest text-primary-500">Established</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-[10px] font-mono text-neutral-700 leading-tight">
            UTC: {currentTime.toISOString()}<br/>
            COORD: 5.6037° N, 0.1870° W<br/>
            NODE: STC_INTAKE_PRIME
          </p>
        </div>
      </div>

      {/* Interactive Right Input Field */}
      <div className="flex-grow flex flex-col relative z-10 pt-32 lg:pt-0">
        {/* Mobile Progress */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-1 bg-white/5 z-20">
           <motion.div className="h-full bg-primary-500" animate={{ width: `${progress}%` }} />
        </div>

        <div className="container mx-auto px-6 lg:px-24 flex-grow flex flex-col justify-center max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="mb-8 text-center flex flex-col items-center">
                 <span className="text-primary-500 font-black tracking-[0.5em] uppercase text-[10px] italic mb-4 block">
                   {currentQ.title} // Step_{currentStep + 1}
                 </span>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight uppercase italic text-center">
                   {currentQ.label}
                 </h2>
                 <p className="text-lg md:text-xl text-neutral-500 font-medium tracking-tight mt-4 max-w-2xl text-center">
                   {currentQ.sublabel}
                 </p>
              </div>

              <div className="mt-12">
                {currentQ.type === 'form' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                     {currentQ.fields.map((field) => (
                        <div key={field.id} className="relative group">
                           <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-3 block group-focus-within:text-primary-500 transition-colors">
                             {field.label}
                           </label>
                           <input
                             id={field.id}
                             type={field.type}
                             accept={field.accept}
                             placeholder={field.placeholder}
                             value={field.type === 'file' ? undefined : (formData[field.id] || '')}
                             onChange={(e) => {
                               if (field.type === 'file') {
                                 handleFileUpload(field.id, e.target.files[0]);
                               } else {
                                 updateField(field.id, e.target.value);
                               }
                             }}
                             onKeyDown={handleKeyDown}
                             className={`w-full bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl text-white placeholder-white/5 focus:outline-none focus:border-primary-500 transition-all font-bold ${field.type === 'file' ? 'file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:tracking-widest file:bg-primary-500/10 file:text-primary-500 hover:file:bg-primary-500 hover:file:text-dark-950 transition-all cursor-pointer' : ''}`}
                             autoFocus={field.id === 'name'}
                           />
                        </div>
                     ))}
                  </div>
                ) : currentQ.type === 'textarea' ? (
                   <textarea
                     id={currentQ.id}
                     placeholder={currentQ.placeholder}
                     value={formData[currentQ.id] || ''}
                     onChange={(e) => updateField(currentQ.id, e.target.value)}
                     onKeyDown={handleKeyDown}
                     className="w-full bg-white/[0.02] border border-white/10 p-8 rounded-3xl text-xl md:text-2xl text-white placeholder-white/5 focus:outline-none focus:border-primary-500 transition-all resize-none italic font-medium min-h-[250px]"
                     autoFocus
                   />
                ) : (currentQ.type === 'choice' || currentQ.type === 'multi-choice') ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {currentQ.options.map((opt) => {
                      const isSelected = currentQ.type === 'choice' ? formData[currentQ.id] === opt.value : (formData[currentQ.id] || []).includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          onClick={() => currentQ.type === 'choice' ? handleChoiceSelection(currentQ.id, opt.value) : toggleMultiChoice(currentQ.id, opt.value)}
                          className={`relative group flex items-center gap-6 p-8 rounded-[2rem] border transition-all duration-700 text-left ${
                            isSelected ? 'border-primary-500 bg-primary-500/10' : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-700 ${isSelected ? 'border-primary-500 bg-primary-500 text-dark-950' : 'border-white/10 text-neutral-400 group-hover:border-white/30'}`}>
                             {opt.icon || <span className="text-[10px] font-black">STC</span>}
                          </div>
                          <div className="flex flex-col">
                             <span className={`text-xl font-black uppercase tracking-tight italic ${isSelected ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-200'}`}>{opt.label}</span>
                             <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600 mt-1">Verified_Selection</span>
                          </div>
                          {isSelected && (
                            <motion.div layoutId="selection-glow" className="absolute inset-0 bg-primary-500/5 blur-3xl pointer-events-none" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>

          {error && <div className="text-center mb-12"><span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{error}</span></div>}
        </div>

        {/* Standard Centered Navigation */}
        <div className="mt-16 lg:mt-24 mb-16 flex items-center justify-center gap-6 w-full relative z-20">
           <button 
             onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)} 
             className={`group flex items-center gap-3 text-neutral-500 font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'}`}
           >
             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 bg-dark-900/50 backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
             </div>
             Back
           </button>

           <button 
             onClick={handleNext} 
             disabled={!canProceed() || isSending} 
             className="px-12 py-5 bg-white text-dark-950 font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-primary-500 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-4 group"
           >
              {isSending ? 'Transmitting...' : (currentStep === questions.length - 1 ? 'Execute Mission' : 'Next Phase')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      {/* Atmospheric Scanning Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-full scanline opacity-5"></div>
         <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-500/20 animate-scanline"></div>
      </div>
    </div>
  );
};

export default OnboardingPage;
