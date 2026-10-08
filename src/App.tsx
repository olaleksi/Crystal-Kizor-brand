/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Ecosystem } from './components/Ecosystem';
import { SelectedWork } from './components/SelectedWork';
import { CopilotBanner } from './components/CopilotBanner';
import { Ideas } from './components/Ideas';
import { Speaking } from './components/Speaking';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

// Modals
import { InitiativeModal } from './components/InitiativeModal';
import { ProjectModal } from './components/ProjectModal';
import { IdeaModal } from './components/IdeaModal';
import { CopilotProposalModal } from './components/CopilotProposalModal';
import { ContactModal } from './components/ContactModal';

// Types
import { Initiative, Project, IdeaItem } from './types';

export default function App() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedIdea, setSelectedIdea] = useState<IdeaItem | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitiative, setContactInitiative] = useState<string>('General Ecosystem Inquiry');

  const handleOpenContact = (initiativeName?: string) => {
    setContactInitiative(initiativeName || 'General Ecosystem Inquiry');
    setIsContactOpen(true);
  };

  const handleScrollToEcosystem = () => {
    const el = document.getElementById('ecosystem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1C1917] flex flex-col font-body selection:bg-[#292524] selection:text-[#F8F7F4]">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#1C1917] text-[#F8F7F4] text-xs uppercase tracking-wider font-semibold focus:outline-none focus:ring-2 focus:ring-[#9A3412]"
      >
        Skip to main content
      </a>

      {/* Top Bar Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero Section */}
        <Hero
          onExploreClick={handleScrollToEcosystem}
          onContactClick={() => handleOpenContact()}
        />

        {/* Editorial Positioning & Continuity */}
        <Intro />

        {/* The 7 Connected Initiatives Ecosystem */}
        <Ecosystem
          onSelectInitiative={(init) => setSelectedInitiative(init)}
          onInquire={(name) => handleOpenContact(name)}
        />

        {/* Selected Architecture & Design Work */}
        <SelectedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* AI Product Thinking Proposal */}
        <CopilotBanner
          onOpenCopilot={() => setIsCopilotOpen(true)}
        />

        {/* Research, Writing & Intellectual Work */}
        <Ideas
          onSelectIdea={(idea) => setSelectedIdea(idea)}
        />

        {/* Speaking & Keynotes */}
        <Speaking
          onInviteSpeaking={(topic) => handleOpenContact(topic ? `Speaking: ${topic}` : 'Speaking & Keynotes')}
        />

        {/* Final Editorial Call to Action */}
        <CTA
          onContactClick={() => handleOpenContact()}
          onExploreClick={handleScrollToEcosystem}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Detail & Action Modals */}
      <InitiativeModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onInquire={(name) => handleOpenContact(name)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleOpenContact(title)}
      />

      <IdeaModal
        idea={selectedIdea}
        onClose={() => setSelectedIdea(null)}
        onInquire={(topic) => handleOpenContact(topic)}
      />

      <CopilotProposalModal
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        defaultInitiative={contactInitiative}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
