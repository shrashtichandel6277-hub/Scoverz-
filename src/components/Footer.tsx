import React from 'react';
import { ScoverzLogo } from './ScoverzLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    'Web Development',
    'App Development',
    'Custom Software',
    'Customizable CRM',
    'E-commerce',
    'AI/ML',
    'Digital Marketing',
    'Technical Support',
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050814] text-slate-400 pt-20 pb-12 border-t border-purple-500/20 overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-purple-900/30">
          
          {/* Brand Column with EXACT attached logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" onClick={scrollToTop} className="inline-flex items-center gap-3.5">
              <ScoverzLogo size="md" showWordmark={false} />
              <div className="flex flex-col text-left">
                <span className="font-display font-black tracking-[0.16em] text-white text-xl">
                  SCOVERZ
                </span>
                <span className="font-semibold tracking-[0.22em] text-purple-400 uppercase text-[9px] -mt-0.5">
                  CREATING YOUR DIGITAL UNIVERSE
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mt-3">
              Technology that turns ideas into growth. Scoverz helps small businesses and enterprises build, automate, and scale with smart digital solutions.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-medium">
              Corporate Headquarters: Digital Operations & Solutions Group
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-medium">
              {servicesLinks.map((srv) => (
                <a
                  key={srv}
                  href="#services"
                  onClick={handleServiceClick}
                  className="hover:text-purple-300 transition-colors truncate"
                >
                  {srv}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 SCOVERZ. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/25 text-purple-300 hover:text-white transition-all cursor-pointer shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
