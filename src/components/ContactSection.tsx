import React, { useState, useEffect } from 'react';
import { Mail, Clock, ShieldCheck, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Website Development',
    budget: '$5,000 – $15,000',
    timeline: '1–2 Months',
    message: initialMessage || '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const servicesList = [
    'Website Development',
    'App Development',
    'Custom Software Development',
    'Customisable Sale CRM Software',
    'E-commerce Solutions',
    'AI & Machine Learning',
    'Digital Marketing & Branding',
    'Technical Support',
    'Full Digital Transformation',
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 – $15,000',
    '$15,000 – $35,000',
    '$35,000+',
    'Flexible / Undecided',
  ];

  const timelineOptions = [
    'Immediate (< 3 weeks)',
    '1–2 Months',
    '2–4 Months',
    'Strategic Ongoing',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief summary of your project or requirements (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopySummary = () => {
    const text = `SCOVERZ Project Inquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nRequirements: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#f8fafc] overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Connect With Scoverz</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance font-display">
            Let’s Build Something That Moves Your Business Forward
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Have a project in mind, need process automation, or want to discuss digital strategy? Fill in the details below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct channels & trust details in Light Theme */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                Direct Communication Channels
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We work directly with founders, CTOs, and operations leaders worldwide.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">General & Technical Inquiries</span>
                    <a
                      href="mailto:contact@scoverz.com"
                      className="text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors"
                    >
                      contact@scoverz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Typical Response SLA</span>
                    <span className="text-sm font-bold text-slate-900">Under 24 Business Hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Privacy & Confidentiality</span>
                    <span className="text-sm font-bold text-slate-900">Mutual NDA Available Upon Request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Scoverz Guarantee Pill in Light Theme */}
            <div className="rounded-3xl bg-purple-50/70 p-6 border border-purple-200">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-1.5 block">
                The Scoverz Promise
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Practical, scalable, and user-friendly solutions designed around the way your business works. No inflated hours, no vendor lock-in.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form in Light Theme */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    Project Inquiry Received!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. A senior solutions architect from SCOVERZ will review your requirements for <strong className="text-purple-700">{formData.service}</strong> and reach out to you within 24 hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Service:</span>
                      <span className="font-bold text-slate-900">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Budget Range:</span>
                      <span className="font-bold text-slate-900">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Timeline:</span>
                      <span className="font-bold text-slate-900">{formData.timeline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer"
                    >
                      {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBrief ? 'Copied Brief to Clipboard' : 'Copy Inquiry Summary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: 'Website Development',
                          budget: '$5,000 – $15,000',
                          timeline: '1–2 Months',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Henderson"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-300 focus:border-purple-600 focus:bg-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-300 focus:border-purple-600 focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company or Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Logistics"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell Us About Your Project & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="What is your business goal? What specific processes or features would you like to build or automate?"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-300 focus:border-purple-600 focus:bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_22px_rgba(124,58,237,0.45)] transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Brief</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    We respect your privacy. No spam, ever. Response delivered within 24 hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
