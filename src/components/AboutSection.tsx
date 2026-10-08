import React, { useState } from 'react';
import { Lightbulb, Wrench, RefreshCw, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface StageInfo {
  id: string;
  step: string;
  name: string;
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
}

export const AboutSection: React.FC = () => {
  const stages: StageInfo[] = [
    {
      id: 'idea',
      step: '01',
      name: 'IDEA',
      icon: Lightbulb,
      title: 'Conceptualization & Architecture',
      description: 'We unpack your vision, define system requirements, and craft a clear engineering roadmap tailored to your specific commercial goals.',
      deliverables: ['Discovery & requirement mapping', 'System architecture blueprint', 'User journey wireframing', 'Tech stack recommendation'],
    },
    {
      id: 'build',
      step: '02',
      name: 'BUILD',
      icon: Wrench,
      title: 'High-Performance Engineering',
      description: 'We code custom software, modern web platforms, and mobile apps with clean architecture, enterprise security, and intuitive UX.',
      deliverables: ['Custom frontend & backend development', 'Database design & optimization', 'Responsive UX design', 'Quality assurance & security testing'],
    },
    {
      id: 'automate',
      step: '03',
      name: 'AUTOMATE',
      icon: RefreshCw,
      title: 'Streamlined Operations & Integrations',
      description: 'We eliminate manual bottlenecks by weaving together API pipelines, automated CRM syncs, and intelligent business workflows.',
      deliverables: ['Repetitive workflow elimination', 'Cross-platform API integrations', 'Sales & CRM pipeline automation', 'Automated reporting dashboards'],
    },
    {
      id: 'grow',
      step: '04',
      name: 'GROW',
      icon: TrendingUp,
      title: 'Scalability & Digital Expansion',
      description: 'We help you launch, scale your customer base, and expand your operations with reliable infrastructure and digital growth strategies.',
      deliverables: ['Cloud auto-scaling readiness', 'Conversion rate optimization', 'Performance analytics', 'Continuous feature evolution'],
    },
  ];

  const [activeStageId, setActiveStageId] = useState<string>('idea');
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden border-t border-slate-200/60">
      {/* Subtle ambient light glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>About SCOVERZ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 text-balance font-display">
            Building Digital Solutions That Work For Your Business
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Scoverz is a technology and digital solutions company helping small businesses and enterprises build, automate, and grow their digital operations. From websites and mobile applications to custom software, CRM systems, business automation, e-commerce platforms, AI/ML solutions, and digital marketing, we create practical, scalable, and user-friendly solutions designed around the way your business works.
          </p>
        </div>

        {/* Visual Workflow: IDEA → BUILD → AUTOMATE → GROW */}
        <div className="rounded-3xl bg-[#f8fafc] border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                Our Core Lifecycle
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                From Vision to Sustainable Scale
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Select any stage below to inspect our methodology
            </span>
          </div>

          {/* Interactive Flow Bar: IDEA -> BUILD -> AUTOMATE -> GROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-700 to-indigo-700 text-white border-purple-600 shadow-[0_8px_24px_rgba(124,58,237,0.3)]'
                      : 'bg-white border-slate-200/90 text-slate-700 hover:border-purple-300 hover:bg-purple-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-purple-200' : 'text-slate-400'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? 'text-white' : 'text-purple-600'
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`font-display text-lg sm:text-xl font-black tracking-wider ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {stage.name}
                    </span>
                    {idx < stages.length - 1 && (
                      <ArrowRight className={`hidden md:inline w-3.5 h-3.5 ml-auto ${
                        isActive ? 'text-purple-200' : 'text-slate-300'
                      }`} />
                    )}
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-indigo-700 rotate-45 border-r border-b border-indigo-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                  <span>Stage {activeStage.step}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStage.name} Phase</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-display">
                  {activeStage.title}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeStage.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-purple-700 font-semibold">
                  <span className="text-slate-900">Guaranteed Outcome:</span>
                  <span>Measurable progress with production-ready deliverables.</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-purple-50/60 rounded-2xl p-6 border border-purple-100">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                  Key Deliverables
                </p>
                <ul className="space-y-2.5">
                  {activeStage.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
