import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  Users2,
  ShoppingBag,
  Sparkles,
  Megaphone,
  Headphones,
  ArrowUpRight,
  Check,
  X
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  category: 'engineering' | 'intelligence' | 'growth';
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  highlights: string[];
  technologies: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    category: 'engineering',
    title: 'Website Development',
    shortDesc: 'Modern, responsive and high-performance websites designed around your business goals.',
    fullDesc: 'We build conversion-driven corporate websites, modern web portals, and landing experiences optimized for high speed, search engine visibility, and seamless multi-device responsiveness.',
    icon: Globe,
    highlights: ['Next-gen responsive UI', 'SEO & Core Web Vitals optimization', 'Tailored CMS integrations', 'High-conversion lead capture'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'app-dev',
    category: 'engineering',
    title: 'App Development',
    shortDesc: 'Custom mobile and web applications designed for seamless user experiences and business efficiency.',
    fullDesc: 'From high-performance native-feel mobile applications to interactive web apps, we develop scalable software with offline sync, clean state architecture, and intuitive human touch navigation.',
    icon: Smartphone,
    highlights: ['iOS & Android cross-platform apps', 'Progressive Web Apps (PWA)', 'Real-time syncing & offline support', 'Intuitive UX flow design'],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Node.js'],
  },
  {
    id: 'custom-software',
    category: 'engineering',
    title: 'Custom Software Development',
    shortDesc: 'Business-specific software solutions built to simplify complex workflows and improve productivity.',
    fullDesc: 'Tailor-made software architectures engineered for your unique operations. We replace clunky legacy software with robust, scalable systems that reduce bottlenecks and boost organizational productivity.',
    icon: Cpu,
    highlights: ['Custom internal business tools', 'Complex data pipeline handling', 'Microservices & REST/GraphQL APIs', 'Enterprise role-based security'],
    technologies: ['Node.js', 'Java', 'Python', 'PostgreSQL'],
  },
  {
    id: 'sales-crm',
    category: 'intelligence',
    title: 'Sales & CRM Solutions',
    shortDesc: 'Centralize leads, follow-ups, email campaigns, deals, customer interactions and sales reporting in one easy-to-use platform.',
    fullDesc: 'A centralized operational hub for your entire sales journey. Never lose track of a prospect again with pipeline tracking, automated follow-up cadences, and crystal-clear revenue forecasting.',
    icon: Users2,
    highlights: ['Unified lead & deal pipeline', 'Automated email sequence cadences', 'Customer interaction history', 'Real-time sales velocity reporting'],
    technologies: ['PostgreSQL', 'React', 'Node.js', 'SendGrid/Postmark'],
  },
  {
    id: 'ecommerce',
    category: 'engineering',
    title: 'E-commerce Solutions',
    shortDesc: 'Build user-friendly e-commerce platforms that take customers from product discovery to checkout and doorstep delivery.',
    fullDesc: 'High-converting online shopping platforms built for frictionless customer experiences. Comprehensive product catalogs, fast 1-click checkouts, integrated payment gateways, and automated delivery tracking.',
    icon: ShoppingBag,
    highlights: ['High-speed catalog filtering', 'Secure frictionless payment gateways', 'Automated inventory & shipping sync', 'Merchant analytics dashboard'],
    technologies: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'ai-ml',
    category: 'intelligence',
    title: 'AI & Machine Learning',
    shortDesc: 'Use AI/ML solutions to improve automation, analytics, decision-making and business processes.',
    fullDesc: 'Practical, production-grade intelligence that moves the needle. Implement predictive demand analytics, intelligent document parsing, smart automated customer categorization, and conversational support engines.',
    icon: Sparkles,
    highlights: ['Predictive business analytics', 'Intelligent document extraction', 'Recommendation & sorting engines', 'Custom model fine-tuning'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Vector Databases'],
  },
  {
    id: 'digital-marketing',
    category: 'growth',
    title: 'Digital Marketing & Branding',
    shortDesc: 'SEO, social media management, branding, content creation, video editing, customer support and digital growth strategies.',
    fullDesc: 'Holistic digital presence engineering. We combine technical SEO, compelling visual branding, multimedia video production, social strategy, and customer care to build sustainable organic and paid pipeline.',
    icon: Megaphone,
    highlights: ['Technical & local SEO dominance', 'High-impact video editing & motion graphics', 'Brand positioning & identity systems', 'Customer retention & support ops'],
    technologies: ['Analytics', 'Search Console', 'Creative Suite', 'Growth Funnels'],
  },
  {
    id: 'technical-support',
    category: 'growth',
    title: 'Technical Support',
    shortDesc: 'Reliable technical support, maintenance and continuous improvements for your digital systems.',
    fullDesc: 'Peace of mind with proactive technical management. We provide continuous system uptime monitoring, security patching, cloud optimization, performance tuning, and on-demand feature iterations.',
    icon: Headphones,
    highlights: ['24/7 proactive system monitoring', 'Security audits & regular updates', 'Cloud hosting & performance tuning', 'Rapid SLA incident resolution'],
    technologies: ['Docker', 'AWS/GCP', 'SLA Monitoring', 'CI/CD Pipelines'],
  },
];

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'intelligence' | 'growth'>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const handleInquire = (title: string) => {
    setSelectedModalService(null);
    if (onSelectService) {
      onSelectService(title);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#f8fafc] overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance font-display">
              Our Digital Solutions & Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
              Practical, scalable, and tailored to the exact rhythm of your operations.
            </p>
          </div>

          {/* Interactive Filter Control in Light Theme */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Services (8)
            </button>
            <button
              type="button"
              onClick={() => setFilter('engineering')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === 'engineering'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Engineering & Web
            </button>
            <button
              type="button"
              onClick={() => setFilter('intelligence')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === 'intelligence'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              CRM & AI
            </button>
            <button
              type="button"
              onClick={() => setFilter('growth')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === 'growth'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Marketing & Support
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between shadow-sm hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(124,58,237,0.08)] transition-all duration-300"
              >
                <div>
                  {/* Top line with Icon and index number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-250">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-700 transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-display group-hover:text-purple-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card with action triggers */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-purple-600 hover:text-white border border-slate-200 hover:border-purple-600 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal in Light Theme */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedModalService(null)}
          />
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                  {React.createElement(selectedModalService.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">{selectedModalService.title}</h4>
                  <span className="text-xs text-purple-700 font-semibold capitalize">{selectedModalService.category} Solutions</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalService(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {selectedModalService.fullDesc}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2">
                  Key Scope & Capabilities
                </h5>
                <ul className="space-y-2">
                  {selectedModalService.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2">
                  Core Technologies
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModalService.technologies.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleInquire(selectedModalService.title)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-sm cursor-pointer"
              >
                Inquire About {selectedModalService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
