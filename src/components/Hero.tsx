import React from 'react';
import { ArrowRight, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ScoverzLogo } from './ScoverzLogo';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#f8fafc]">
      {/* Light subtle grid background */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />
      
      {/* Light ambient radial violet glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-indigo-500/08 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition in Crisp Light Aesthetic */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Tagline Badge / Brand Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-800 text-xs font-bold tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>SCOVERZ — Creating Your Digital Universe</span>
            </div>

            {/* Prominent Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-slate-900 leading-[1.08] mb-6 text-balance font-display">
              Technology That Turns <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600">
                Ideas Into Growth.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Scoverz helps small businesses and enterprises build, automate, and scale with smart digital solutions.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 shadow-[0_6px_22px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_28px_rgba(124,58,237,0.5)] transition-all duration-200 active:scale-95 text-center cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('portfolio');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-purple-300 shadow-sm transition-all duration-200 text-center cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </a>

              {onOpenEstimator && (
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-purple-700 hover:text-purple-900 bg-purple-50/80 hover:bg-purple-100/80 border border-purple-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Scope & Budget Calculator</span>
                </button>
              )}
            </div>

            {/* Strategic Value Pillars in Light Theme */}
            <div className="pt-6 border-t border-slate-200/90 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-slate-900">Full-Stack</p>
                <p className="text-xs text-slate-500 mt-0.5">Web, Mobile & Software</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-purple-700">Automated</p>
                <p className="text-xs text-slate-500 mt-0.5">Processes & Workflows</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-indigo-700">Scalable</p>
                <p className="text-xs text-slate-500 mt-0.5">Enterprise Architecture</p>
              </div>
            </div>

          </div>

          {/* Right Column: Prominently Displaying ONLY the Original Scoverz Purple "S" Emblem */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <ScoverzLogo size="hero" showWordmark={false} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
