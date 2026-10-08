import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (summary: string) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [projectType, setProjectType] = useState<string>('Custom Software');
  const [scale, setScale] = useState<string>('Growing Business');
  const [features, setFeatures] = useState<string[]>([
    'Automated Workflows',
    'Custom Database & API',
  ]);
  const [urgency, setUrgency] = useState<string>('Standard (4-6 weeks)');

  if (!isOpen) return null;

  const projectTypes = [
    'Website Development',
    'Mobile / Web App',
    'Custom Software',
    'Customizable Sale CRM',
    'E-Commerce Platform',
    'AI / ML Solution',
    'Digital Marketing Suite',
    'Technical Support',
  ];

  const scaleOptions = [
    { label: 'Startup / MVP', desc: 'Lean initial launch with core functional features' },
    { label: 'Growing Business', desc: 'Robust infrastructure with multi-user workflows' },
    { label: 'Enterprise', desc: 'High-volume scale, strict compliance & deep integrations' },
  ];

  const featureOptions = [
    'Automated Workflows',
    'Custom Database & API',
    'Payment Gateway & Billing',
    'Role-Based Access Control',
    'Real-time Analytics Dashboard',
    'AI Data Extraction',
    'Third-Party CRM / ERP Sync',
    '24/7 Monitoring & Support',
  ];

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const handleTransferToContact = () => {
    const summary = `Project Scope Estimate:\n- Type: ${projectType}\n- Scale: ${scale}\n- Timeline: ${urgency}\n- Selected Features: ${features.join(
      ', '
    )}`;
    onApplyEstimate(summary);
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Interactive Project Scope Planner</h3>
              <p className="text-xs text-purple-700 font-semibold">Configure your parameters for a custom scope blueprint</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          
          {/* Step 1: Solution Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              1. What type of digital solution do you need?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                    projectType === type
                      ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scale */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              2. Business Organization Scale
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {scaleOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setScale(opt.label)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    scale === opt.label
                      ? 'bg-purple-50 border-purple-600 text-purple-900 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900 mb-0.5">{opt.label}</p>
                  <p className="text-[11px] text-slate-500 leading-snug">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Key Functional Features */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              3. Desired Modules & Integrations
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((feat) => {
                const isChecked = features.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs text-left border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-purple-50 border-purple-400 text-purple-900 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                      isChecked ? 'bg-purple-600 border-purple-600' : 'border-slate-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="truncate">{feat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Urgency */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              4. Target Timeline
            </label>
            <div className="flex flex-wrap gap-2">
              {['Accelerated (2-4 weeks)', 'Standard (4-6 weeks)', 'Flexible Roadmap'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setUrgency(t)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    urgency === t
                      ? 'bg-purple-700 text-white border-purple-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Scope Summary Preview */}
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Generated Project Blueprint
              </span>
              <span className="text-[11px] text-emerald-700 font-bold">Custom Tailored</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-900">{projectType}</strong> for a <strong className="text-purple-800">{scale}</strong> profile with {features.length} priority feature modules under a <strong className="text-slate-900">{urgency}</strong> target timeline.
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleTransferToContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>Transfer Scope To Contact Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
