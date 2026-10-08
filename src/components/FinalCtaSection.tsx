import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { ScoverzLogo } from './ScoverzLogo';

interface FinalCtaSectionProps {
  onOpenEstimator?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEstimator }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden border-t border-slate-200/60">
      {/* Light subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/08 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Signature Deep Midnight Showcase Container (Matching the attached logo background) */}
        <div className="relative rounded-[36px] bg-[#050814] p-8 sm:p-14 lg:p-16 border border-purple-500/30 overflow-hidden shadow-[0_25px_60px_rgba(5,8,20,0.4)] text-center">
          
          {/* Subtle animated purple S-shaped visual inspired by the attached logo */}
          <div className="absolute -right-16 -top-16 w-80 h-80 opacity-20 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <path
                d="M 68 28 C 66 23, 40 18, 30 32 C 21 44, 46 51, 54 55 C 70 63, 76 72, 68 82 C 58 93, 30 87, 26 78"
                stroke="#c084fc"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute -left-16 -bottom-16 w-80 h-80 opacity-15 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <path
                d="M 68 28 C 66 23, 40 18, 30 32 C 21 44, 46 51, 54 55 C 70 63, 76 72, 68 82 C 58 93, 30 87, 26 78"
                stroke="#818cf8"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Displaying ONLY the original Scoverz purple S emblem */}
            <div className="inline-flex items-center justify-center mb-6">
              <ScoverzLogo size="lg" showWordmark={false} />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 text-balance font-display">
              Your Idea.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300">
                Our Technology.
              </span>
            </h2>

            {/* Text */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you need a website, application, custom software, automation system or digital growth strategy, let's build something that moves your business forward.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:shadow-[0_0_45px_rgba(168,85,247,0.65)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-purple-300" />
                <span>Talk To Us</span>
              </button>
            </div>

            {/* Small reassurance footer */}
            <div className="mt-10 pt-6 border-t border-purple-900/40 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span>✓ Direct technical consultation</span>
              <span>✓ Clear architectural roadmap</span>
              <span>✓ Rapid prototype & deployment</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
