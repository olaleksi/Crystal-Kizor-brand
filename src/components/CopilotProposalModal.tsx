import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COPILOT_PROPOSAL } from '../data/content';
import { useModalA11y } from '../hooks/useModalA11y';

interface CopilotProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopilotProposalModal: React.FC<CopilotProposalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'interactive-preview' | 'safeguards'>('blueprint');
  const dialogRef = useRef<HTMLDivElement>(null);

  // Interactive preview state
  const [queryInput, setQueryInput] = useState('How should an emerging architect structure milestone fees for a tropical residential commission?');
  const [simulatedOutput, setSimulatedOutput] = useState<{
    guidance: string;
    actionSteps: string[];
    retrievedTEAItems: Array<{ title: string; type: string; timestamp: string }>;
    guardrailNote: string;
  } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  useModalA11y({
    isOpen,
    onClose,
    dialogRef,
  });

  useEffect(() => {
    if (isOpen) {
      handleSimulate();
    }
  }, [isOpen]);

  const handleSimulate = (customPrompt?: string) => {
    const promptToUse = customPrompt || queryInput;
    setIsSimulating(true);
    setTimeout(() => {
      if (promptToUse.toLowerCase().includes('price') || promptToUse.toLowerCase().includes('fee') || promptToUse.toLowerCase().includes('commission')) {
        setSimulatedOutput({
          guidance:
            'In emerging African markets, pricing solely on fixed percentage can lead to severe scope creep during protracted permitting. The Effective Architect proposes a hybrid milestone model calibrated to tropical delivery phases.',
          actionSteps: [
            '1. Phase 00 Feasibility & Climate Modeling: Fixed upfront discovery fee covering sun-path & cross-ventilation analysis.',
            '2. Phase 01 Schematic & Tectonic Drawings: Milestone billing upon client sign-off of passive strategy.',
            '3. Site Supervisions & Material Guild Liaison: Monthly retainer or per-site-visit fee rather than percentage of unpredictable inflation-hit materials.'
          ],
          retrievedTEAItems: [
            { title: 'TEA Masterclass: Milestone Structures for Emerging Studios (Illustrative Course)', type: 'Curriculum Video', timestamp: '14:20' },
            { title: 'The Practical Architect Guide: Contract Administration & Retainers (Concept Resource)', type: 'Technical Guide', timestamp: 'Doc Section 4.2' }
          ],
          guardrailNote: 'Notice: This guidance is for practice pedagogy and commercial literacy. Consult local statutory professional institutes for mandatory fee gazettes in your territory.'
        });
      } else {
        setSimulatedOutput({
          guidance:
            'For portfolio curation and technical practice growth, The Effective Architect framework prioritizes demonstrating structural & climatic logic over decorative 3D rendering.',
          actionSteps: [
            '1. Foreground the Tectonic Story: Show exploded isometric details and local material joinery.',
            '2. Articulate Microclimate Response: Document wind orientation and daylight penetration diagrams.',
            '3. Contextual Realities: Highlight budget optimization and local artisan fabrication narratives.'
          ],
          retrievedTEAItems: [
            { title: 'TEA Case Study: Portfolio Narratives for High-Impact Practice (Illustrative Resource)', type: 'Curriculum Guide', timestamp: 'Vol. 2' },
            { title: 'Studio Practice Note: Documenting Passive Tectonics in Envelopes (Concept Guide)', type: 'Design Paper', timestamp: 'Sec. 3' }
          ],
          guardrailNote: 'Notice: Portfolio feedback is pedagogical and does not replace statutory certification by professional registration boards.'
        });
      }
      setIsSimulating(false);
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="copilot-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F8F7F4] border border-[#1C1917]/25 shadow-2xl p-6 sm:p-10 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E5E4] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Close proposal dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>AI Product Proposal · Stage 1 Assessment Concept</span>
          </div>
          <h3 id="copilot-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#1C1917] font-normal">
            {COPILOT_PROPOSAL.title}
          </h3>
          <p className="text-sm font-medium text-[#78716C] mt-1">{COPILOT_PROPOSAL.subtitle}</p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 border-b border-[#1C1917]/15 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-3 text-xs font-semibold tracking-wider uppercase transition-colors border-b-2 cursor-pointer ${
              activeTab === 'blueprint'
                ? 'border-[#1C1917] text-[#1C1917]'
                : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            System Blueprint & RAG Architecture
          </button>
          <button
            onClick={() => setActiveTab('interactive-preview')}
            className={`pb-3 text-xs font-semibold tracking-wider uppercase transition-colors border-b-2 cursor-pointer ${
              activeTab === 'interactive-preview'
                ? 'border-[#1C1917] text-[#1C1917]'
                : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Interactive Query Simulator (Demo)
          </button>
          <button
            onClick={() => setActiveTab('safeguards')}
            className={`pb-3 text-xs font-semibold tracking-wider uppercase transition-colors border-b-2 cursor-pointer ${
              activeTab === 'safeguards'
                ? 'border-[#1C1917] text-[#1C1917]'
                : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Safety Guardrails & Governance
          </button>
        </div>

        {/* Tab Content: Blueprint */}
        {activeTab === 'blueprint' && (
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              {COPILOT_PROPOSAL.overview}
            </p>

            {/* Architecture Flow Diagram */}
            <div className="p-6 bg-[#F0ECE4] border border-[#1C1917]/10">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-4">
                Conceptual Pipeline: Retrieval-Augmented Generation (RAG)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {COPILOT_PROPOSAL.architectureSteps.map((step) => (
                  <div key={step.step} className="p-4 bg-[#F8F7F4] border border-[#1C1917]/10">
                    <span className="font-editorial text-2xl text-[#9A3412] font-semibold">{step.step}</span>
                    <h5 className="font-semibold text-xs text-[#1C1917] uppercase tracking-wider mt-1 mb-2">
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-[#57534E] leading-normal">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-4">
                Core Capabilities for Spatial Designers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COPILOT_PROPOSAL.coreCapabilities.map((cap, idx) => (
                  <div key={idx} className="p-4 border border-[#1C1917]/15 bg-[#F8F7F4]">
                    <h5 className="font-semibold text-xs sm:text-sm text-[#1C1917] mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#9A3412] shrink-0" />
                      <span>{cap.title}</span>
                    </h5>
                    <p className="text-xs text-[#57534E] leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Interactive Preview */}
        {activeTab === 'interactive-preview' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="copilot-query" className="block text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
                Simulated Architect Inquiry (Prototype Demonstration)
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="copilot-query"
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                  placeholder="e.g. How do I balance passive earth cooling with high moisture humidity?"
                />
                <button
                  onClick={() => handleSimulate()}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1C1917] text-[#F8F7F4] hover:bg-[#292524] transition-colors cursor-pointer shrink-0"
                >
                  Run Query
                </button>
              </div>

              {/* Sample Prompts */}
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => {
                    const prompt = 'How should an emerging architect structure milestone fees for a tropical residential commission?';
                    setQueryInput(prompt);
                    handleSimulate(prompt);
                  }}
                  className="text-[11px] text-[#78716C] hover:text-[#1C1917] underline cursor-pointer"
                >
                  Example: Fee Structuring
                </button>
                <span className="text-xs text-[#A8A29E]">·</span>
                <button
                  onClick={() => {
                    const prompt = 'How do I structure a portfolio narrative emphasizing African vernacular materials?';
                    setQueryInput(prompt);
                    handleSimulate(prompt);
                  }}
                  className="text-[11px] text-[#78716C] hover:text-[#1C1917] underline cursor-pointer"
                >
                  Example: Portfolio Narrative
                </button>
              </div>
            </div>

            {/* Simulated Response Box */}
            {isSimulating ? (
              <div className="p-8 text-center bg-[#F0ECE4] text-[#78716C] text-xs">
                Searching The Effective Architect index & synthesizing citations...
              </div>
            ) : simulatedOutput ? (
              <div className="p-6 bg-[#F0ECE4] border border-[#1C1917]/15 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#9A3412] font-semibold tracking-wider uppercase">
                  <span>TEA Knowledge Retrieval Prototype</span>
                  <span>Grounded Model Response</span>
                </div>

                <p className="text-sm text-[#1C1917] leading-relaxed font-medium">
                  {simulatedOutput.guidance}
                </p>

                <div className="space-y-1.5 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Recommended Action Framework:
                  </p>
                  {simulatedOutput.actionSteps.map((step, idx) => (
                    <p key={idx} className="text-xs text-[#44403C] leading-normal pl-2 border-l border-[#9A3412]">
                      {step}
                    </p>
                  ))}
                </div>

                {/* Grounding Sources */}
                <div className="pt-3 hairline-t">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Illustrative Pedagogical Grounding (Concept Prototype References)</span>
                  </p>
                  <div className="space-y-1">
                    {simulatedOutput.retrievedTEAItems.map((ref, idx) => (
                      <div key={idx} className="text-xs text-[#1C1917] flex items-center justify-between bg-white/70 px-3 py-1.5 border border-[#1C1917]/10">
                        <span className="font-medium">{ref.title}</span>
                        <span className="text-[11px] text-[#78716C]">{ref.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-[#78716C] italic pt-1">
                  {simulatedOutput.guardrailNote}
                </p>
              </div>
            ) : null}
          </div>
        )}

        {/* Tab Content: Safeguards */}
        {activeTab === 'safeguards' && (
          <div className="space-y-6">
            <div className="p-6 bg-[#F0ECE4] border border-[#1C1917]/10">
              <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-4">
                <ShieldCheck className="w-4 h-4 text-[#9A3412]" />
                <span>Non-Negotiable Architecture Safeguards & Ethics</span>
              </h4>
              <ul className="space-y-3">
                {COPILOT_PROPOSAL.safeguards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                    <span className="font-editorial text-base text-[#9A3412] font-semibold shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 border border-[#1C1917]/15 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <span className="font-semibold text-[#1C1917] block mb-1">Human-in-the-Loop Governance:</span>
              All algorithmic career tracks and contract interpretation prompts undergo weekly peer audits by
              practicing architects in the TEA Community Circle. Any ambiguity automatically flags a senior mentor
              review instead of generating speculative advice.
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 hairline-t pt-6 flex items-center justify-between">
          <p className="text-xs text-[#78716C]">
            Conceptual AI Proposal authored for Stage 1 Web Developer Assessment · The Effective Architect
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1C1917] text-[#F8F7F4] hover:bg-[#292524] transition-colors cursor-pointer"
          >
            Close Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
