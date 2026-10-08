import React from 'react';
import { Sparkles, ArrowRight, Layers, ShieldCheck, Database } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CopilotBannerProps {
  onOpenCopilot: () => void;
}

export const CopilotBanner: React.FC<CopilotBannerProps> = ({ onOpenCopilot }) => {
  const handleClick = () => {
    trackEvent('copilot_modal_open');
    onOpenCopilot();
  };

  return (
    <section className="py-16 bg-[#F8F7F4] hairline-b" aria-label="AI Product Proposal Section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-8 sm:p-12 bg-[#F0ECE4] border border-[#1C1917]/20 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412]">
                <Sparkles className="w-4 h-4" />
                <span>AI Product Thinking Initiative · The Effective Architect</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] font-normal">
                TEA Career & Practice Copilot
              </h3>

              <p className="text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed">
                As part of our commitment to accessible built-environment pedagogy, we have designed an AI companion
                powered by Retrieval-Augmented Generation (RAG). It equips architects and students to evaluate design
                portfolios, navigate complex fee structures, and master tropical climate-adaptive physics using verified
                TEA knowledge assets.
              </p>

              {/* Pillars list */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#44403C]">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>TEA Grounded Vector DB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>Adaptive Skill Roadmaps</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>Strict Structural & Legal Disclaimers</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={handleClick}
                className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs group"
              >
                <span>Explore Technical Proposal & Simulator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
