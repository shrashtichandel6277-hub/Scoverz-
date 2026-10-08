import React, { useState } from 'react';
import { Terminal, Code, Cpu, Server, Database, Globe, Layers, Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  role: string;
  ecosystem: string[];
  description: string;
}

export const TechnologySection: React.FC = () => {
  const coreTechnologies: TechItem[] = [
    {
      name: 'Java',
      category: 'Enterprise Backend',
      role: 'Mission-critical enterprise software, robust concurrency, and high-throughput systems.',
      ecosystem: ['Spring Boot', 'Microservices', 'JVM Optimization', 'Enterprise Security'],
      description: 'Used for large-scale enterprise workflows, resilient transaction handling, and scalable backends that require strict type safety and uptime.',
    },
    {
      name: 'Python',
      category: 'AI, Data & Automation',
      role: 'Business automation scripts, machine learning models, and data analytics pipelines.',
      ecosystem: ['FastAPI', 'Pandas', 'Automated Workflows', 'Scikit-Learn'],
      description: 'Powers intelligent data extraction, predictive modeling, background process automation, and rapid API prototyping.',
    },
    {
      name: 'Node.js',
      category: 'Scalable Services',
      role: 'Real-time API services, lightweight microservices, and event-driven architectures.',
      ecosystem: ['Express', 'TypeScript', 'WebSockets', 'REST & GraphQL'],
      description: 'Enables high-performance asynchronous microservices, seamless third-party webhooks, and unified JavaScript full-stack development.',
    },
    {
      name: 'React.js',
      category: 'Modern Frontend',
      role: 'Interactive web applications, SaaS dashboards, and modern user interfaces.',
      ecosystem: ['Next.js', 'React Native', 'Tailwind CSS', 'State Architecture'],
      description: 'Powers fast, responsive interfaces, intuitive touch experiences, and custom dashboards designed for frictionless user interaction.',
    },
    {
      name: 'AI / ML',
      category: 'Applied Intelligence',
      role: 'Automated intelligence, document parsing, predictive algorithms, and smart search.',
      ecosystem: ['Vector Embeddings', 'Natural Language', 'Document Parsing', 'Decision Logic'],
      description: 'Integrates practical artificial intelligence directly into day-to-day business tools to automate tasks and accelerate decision-making.',
    },
  ];

  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);
  const activeTech = coreTechnologies[activeTechIndex];

  return (
    <section id="expertise" className="relative py-28 bg-white overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Engineering Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance font-display">
            Technology Behind Your Digital Future
          </h2>

          {/* Prompt required banner quote */}
          <p className="text-purple-700 font-bold text-lg mb-4">
            “Custom technology. Practical solutions. Measurable impact.”
          </p>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            We deliberately choose mature, battle-tested technologies that ensure your platforms run fast, maintain rock-solid stability, and scale seamlessly as your user base expands.
          </p>
        </div>

        {/* 5 Core Technologies Badges in Light Theme */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {coreTechnologies.map((tech, idx) => {
            const isSelected = idx === activeTechIndex;

            return (
              <button
                key={tech.name}
                type="button"
                onClick={() => setActiveTechIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-purple-700 to-indigo-700 text-white border-purple-600 shadow-[0_8px_24px_rgba(124,58,237,0.25)]'
                    : 'bg-[#f8fafc] border-slate-200/90 text-slate-800 hover:border-purple-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                    isSelected ? 'text-purple-200' : 'text-purple-700'
                  }`}>
                    CORE 0{idx + 1}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-slate-300'}`} />
                </div>

                <p className={`text-xl font-bold font-display mb-1 ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {tech.name}
                </p>

                <p className={`text-xs line-clamp-1 ${
                  isSelected ? 'text-purple-200' : 'text-slate-500'
                }`}>
                  {tech.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deep Dive on Active Selected Stack in Light Theme */}
        <div className="rounded-3xl bg-[#f8fafc] p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
                <span>Featured Technology</span>
                <span aria-hidden="true">·</span>
                <span>{activeTech.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 font-display">
                {activeTech.name} in Production
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 font-semibold">
                {activeTech.role}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {activeTech.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                Integrated Frameworks & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {activeTech.ecosystem.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                Architected with modern software standards, security hardening, and high-availability deployment.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
