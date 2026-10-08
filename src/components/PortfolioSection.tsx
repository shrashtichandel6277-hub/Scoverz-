import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, X } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  highlight?: string;
  category: string;
  description: string;
  keyFeatures: string[];
  imageSrc: string;
}

export const portfolioProjects: ProjectData[] = [
  {
    id: 'plant-management',
    title: 'Plant Management Software',
    category: 'Enterprise Operations',
    description:
      'A complete plant management solution designed to monitor day-to-day business operations, reporting, production and overall performance. The system helps businesses monitor productivity, maintain profit and loss information, track operational performance and make better decisions for sustainable growth.',
    keyFeatures: [
      'Daily work monitoring',
      'Production monitoring',
      'Reporting',
      'Profit & loss tracking',
      'Performance monitoring',
      'Business growth analysis',
      'Operational management',
    ],
    imageSrc: '/src/assets/images/plant_management_preview_1791482472516.jpg',
  },
  {
    id: 'sales-crm',
    title: 'Customisable Sale CRM Software',
    highlight: 'Tailored to your business name & workflows',
    category: 'Revenue & Client Operations',
    description:
      'A customisable CRM tailored according to your business name and your specific requirements. Build your own CRM and manage your own leads, deals, and clients through a user-friendly interface with modern features.',
    keyFeatures: [
      'Custom business branding & company name integration',
      'Lead management & acquisition tracking',
      'Deal & sales pipeline stages',
      'Client relationship & history management',
      'Follow-ups & automated reminders',
      'Sales reporting & performance metrics',
      'User-friendly modern dashboard interface',
    ],
    imageSrc: '/src/assets/images/crm_sales_platform_preview_1791482498016.jpg',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Digital Commerce',
    description:
      'Easy-to-use e-commerce platforms that connect customers with products through a simple journey from product discovery and purchase to doorstep delivery.',
    keyFeatures: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Order management',
      'Customer management',
      'Delivery tracking',
      'Business dashboard',
    ],
    imageSrc: '/src/assets/images/ecommerce_platform_preview_1791482508251.jpg',
  },
];

interface PortfolioSectionProps {
  onSelectProject?: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleInquireProject = (title: string) => {
    setActiveProject(null);
    if (onSelectProject) {
      onSelectProject(`Inquiry for ${title}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-[#f8fafc] overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Featured Solutions & Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance font-display">
            Proven Digital Solutions In Action
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Real enterprise software, custom CRM solutions, and digital commerce platforms built to solve specific operational challenges.
          </p>
        </div>

        {/* Project Cards List without numbering */}
        <div className="space-y-12">
          {portfolioProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-purple-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)] shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 font-display group-hover:text-purple-800 transition-colors">
                      {project.title}
                    </h3>

                    {project.highlight && (
                      <div className="inline-block px-3 py-1 rounded-lg bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-4">
                        ★ {project.highlight}
                      </div>
                    )}

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key features checklist */}
                    <div className="mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                        Key Capabilities & Architecture:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.keyFeatures.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-purple-700 hover:bg-purple-800 transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect System</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleInquireProject(project.title)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors cursor-pointer"
                      >
                        <span>Request Similar Solution</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Visual / Screenshot Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group-hover:border-purple-300 transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.imageSrc}
                          alt={`${project.title} software interface overview`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Overlay badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#050814]/85 backdrop-blur-md border border-purple-500/30 text-[10px] font-bold text-purple-200">
                        SCOVERZ Engineered
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Inspector Modal in Light Theme */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          />
          <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 font-display">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
              <img
                src={activeProject.imageSrc}
                alt={activeProject.title}
                className="w-full h-auto object-cover max-h-72"
              />
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                  Comprehensive Feature Specification
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.keyFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-purple-50/60 border border-purple-100">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close View
              </button>
              <button
                type="button"
                onClick={() => handleInquireProject(activeProject.title)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-sm"
              >
                Inquire For This System
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
