import React from 'react';
import { Target, Smile, TrendingUp, Cog, HeartHandshake, CheckCircle } from 'lucide-react';

interface ReasonItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  benefitTag: string;
}

export const WhyScoverzSection: React.FC = () => {
  const reasons: ReasonItem[] = [
    {
      id: 'business-focused',
      title: 'Business-Focused',
      desc: 'We build solutions around real business needs, not just technology.',
      icon: Target,
      benefitTag: 'Direct ROI Alignment',
    },
    {
      id: 'user-friendly',
      title: 'User-Friendly',
      desc: 'Our solutions are designed to be simple, intuitive and easy to use.',
      icon: Smile,
      benefitTag: 'Zero-Friction Adoption',
    },
    {
      id: 'scalable',
      title: 'Scalable',
      desc: 'Build today and grow tomorrow with technology that can evolve with your business.',
      icon: TrendingUp,
      benefitTag: 'Future-Proof Architecture',
    },
    {
      id: 'automation-driven',
      title: 'Automation-Driven',
      desc: 'Reduce repetitive work and improve operational efficiency.',
      icon: Cog,
      benefitTag: 'Eliminate Bottlenecks',
    },
    {
      id: 'long-term-support',
      title: 'Long-Term Support',
      desc: "We don't just build and leave. We provide ongoing technical support and improvements.",
      icon: HeartHandshake,
      benefitTag: 'Dedicated Partnership',
    },
  ];

  return (
    <section id="why-us" className="relative py-28 bg-[#f8fafc] overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>The Scoverz Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance font-display">
            Why Businesses Choose Scoverz
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            We partner with entrepreneurs, growing businesses, and enterprises to deliver dependable technology that drives sustainable commercial results.
          </p>
        </div>

        {/* 5 Premium Cards Layout in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(124,58,237,0.08)] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                      {item.benefitTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-purple-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-purple-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Scoverz Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.slice(3, 5).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(124,58,237,0.08)] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                      {item.benefitTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-purple-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-purple-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Scoverz Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
