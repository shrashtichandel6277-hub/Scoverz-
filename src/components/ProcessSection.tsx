import React, { useState } from 'react';
import { Compass, Lightbulb, Code2, Cpu, Rocket, ShieldCheck, CheckCircle } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  detailedInsight: string;
  milestones: string[];
}

export const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Understand',
      shortDesc: 'We understand your business, challenges and goals.',
      icon: Compass,
      detailedInsight: 'Deep discovery sessions to map organizational workflows, identify manual bottlenecks, understand customer touchpoints, and define measurable KPIs.',
      milestones: ['Stakeholder alignment', 'Process friction audit', 'Objective & KPI definition'],
    },
    {
      number: '02',
      title: 'Strategize',
      shortDesc: 'We design the right technology and digital strategy for your needs.',
      icon: Lightbulb,
      detailedInsight: 'Architectural planning, tech stack selection, user journey blueprints, and project milestone roadmaps built around practical ROI.',
      milestones: ['System architecture specification', 'UX flow & wireframes', 'Technology stack selection'],
    },
    {
      number: '03',
      title: 'Build',
      shortDesc: 'We develop scalable and user-friendly digital solutions.',
      icon: Code2,
      detailedInsight: 'High-velocity, clean-code engineering following modern modular paradigms, automated test suites, and strict responsive design benchmarks.',
      milestones: ['Frontend & backend development', 'Continuous integration & testing', 'Design system implementation'],
    },
    {
      number: '04',
      title: 'Automate',
      shortDesc: 'We simplify repetitive processes and improve operational efficiency.',
      icon: Cpu,
      detailedInsight: 'Bridging data silos with custom webhooks, CRM synchronization, automated notifications, and seamless business logic pipelines.',
      milestones: ['Data synchronization triggers', 'CRM & ERP integration', 'Automated reporting dashboards'],
    },
    {
      number: '05',
      title: 'Grow',
      shortDesc: 'We help your business improve its digital presence, sales and customer experience.',
      icon: Rocket,
      detailedInsight: 'Go-to-market optimization, search engine visibility, conversion enhancements, and data-backed performance scaling.',
      milestones: ['Conversion rate optimization', 'Technical SEO & analytics', 'Launch & operational training'],
    },
    {
      number: '06',
      title: 'Support',
      shortDesc: 'We provide ongoing technical support and improvements.',
      icon: ShieldCheck,
      detailedInsight: 'Long-term reliability through proactive monitoring, security updates, cloud optimization, and continuous feature evolution as you scale.',
      milestones: ['24/7 infrastructure monitoring', 'Regular security patching', 'Feature roadmap iteration'],
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section id="process" className="relative py-28 bg-white overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>How We Help</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance font-display">
            A Proven Six-Stage Engineering Methodology
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            From initial business alignment to lifelong infrastructure maintenance, every phase is structured for transparency, momentum, and business growth.
          </p>
        </div>

        {/* Six Steps Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = idx === activeStepIndex;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-3xl p-7 transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-br from-purple-700 to-indigo-700 text-white border-purple-600 shadow-[0_10px_30px_rgba(124,58,237,0.3)]'
                    : 'bg-[#f8fafc] border-slate-200/90 text-slate-800 hover:border-purple-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                {/* Step number & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-purple-200' : 'text-purple-700'
                    }`}>
                      STEP
                    </span>
                    <span className={`font-mono text-base font-extrabold ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-2 font-display ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 font-normal ${
                  isSelected ? 'text-purple-100' : 'text-slate-600'
                }`}>
                  {step.shortDesc}
                </p>

                <div className={`pt-3 border-t flex items-center justify-between ${
                  isSelected ? 'border-white/20' : 'border-slate-200'
                }`}>
                  <span className={`text-[11px] font-semibold ${
                    isSelected ? 'text-purple-200' : 'text-purple-700'
                  }`}>
                    {isSelected ? 'Active Focus' : 'Click to inspect'}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-white animate-ping' : 'bg-slate-300'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Detailed Stage Showcase in Light Theme */}
        <div className="rounded-3xl bg-[#f8fafc] border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
                <span>Phase {activeStep.number} in Detail</span>
                <span aria-hidden="true">·</span>
                <span>{activeStep.title}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                {activeStep.title} Phase Architecture
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {activeStep.detailedInsight}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                Key Phase Milestones
              </p>
              <ul className="space-y-2.5">
                {activeStep.milestones.map((m, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
