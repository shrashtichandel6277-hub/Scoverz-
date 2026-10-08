/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TechnologySection } from './components/TechnologySection';
import { WhyScoverzSection } from './components/WhyScoverzSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [customBriefMessage, setCustomBriefMessage] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
  };

  const handleApplyEstimate = (summary: string) => {
    setCustomBriefMessage(summary);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-purple-600/20 selection:text-purple-900">
      {/* Top Bar Navigation */}
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Our Services (9 Interactive Services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. How We Help (6-Stage Methodology) */}
        <ProcessSection />

        {/* 5. Portfolio / Solutions (5 Comprehensive Case Studies) */}
        <PortfolioSection onSelectProject={(projectTitle) => setSelectedServiceForInquiry(projectTitle)} />

        {/* 6. Technology / Expertise */}
        <TechnologySection />

        {/* 7. Why Scoverz (5 Strategic Cards) */}
        <WhyScoverzSection />

        {/* 8. Final CTA Section */}
        <FinalCtaSection onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* 9. Contact / Project Inquiry Section */}
        <ContactSection
          initialService={selectedServiceForInquiry}
          initialMessage={customBriefMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Scope & Budget Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />
    </div>
  );
}
