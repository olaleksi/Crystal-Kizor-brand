import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenCopilot: () => void;
  onOpenContact: (initiative?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCopilot, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F0ECE4] text-[#1C1917] hairline-t py-16 lg:py-24" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="badge" className="w-10 h-10 text-[#1C1917]" />
              <div>
                <span className="font-editorial text-2xl lg:text-3xl font-medium tracking-tight block">
                  CRYSTAL KIZOR
                </span>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#78716C]">
                  Architecture · Design · Ideas · Impact
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#57534E] max-w-sm leading-relaxed">
              Leading Studio COKA, ELEvated, AKO Alliance, and The Effective Architect. Building thoughtful spaces,
              contemporary objects, and pedagogical ecosystems rooted in the African context.
            </p>
          </div>

          {/* Connected Initiatives Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
              The Ecosystem
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
              <li>
                <button
                  onClick={() => onOpenContact('Studio COKA')}
                  className="hover:text-[#9A3412] transition-colors cursor-pointer text-left"
                >
                  Studio COKA (Architecture)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('ELEvated')}
                  className="hover:text-[#9A3412] transition-colors cursor-pointer text-left"
                >
                  ELEvated (Furniture Design)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('AKO Alliance')}
                  className="hover:text-[#9A3412] transition-colors cursor-pointer text-left"
                >
                  AKO Alliance (Education)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('Alive and Free')}
                  className="hover:text-[#9A3412] transition-colors cursor-pointer text-left"
                >
                  Alive and Free (Youth Movement)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('The Effective Architect')}
                  className="hover:text-[#9A3412] transition-colors cursor-pointer text-left"
                >
                  The Effective Architect (TEA)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links & AI Proposal Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
              Navigation & Assessment
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
              <li>
                <a href="#work" className="hover:text-[#9A3412] transition-colors">
                  Selected Architecture Monograph
                </a>
              </li>
              <li>
                <a href="#ideas" className="hover:text-[#9A3412] transition-colors">
                  Research Papers & Notes
                </a>
              </li>
              <li>
                <a href="#speaking" className="hover:text-[#9A3412] transition-colors">
                  Speaking & Keynotes
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCopilot}
                  className="hover:text-[#9A3412] text-[#9A3412] font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>AI Product Proposal (TEA Copilot)</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#9A3412]/10">View</span>
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => onOpenContact()}
                className="text-xs font-semibold tracking-wider uppercase text-[#1C1917] hover:underline underline-offset-4 cursor-pointer"
              >
                Inquiries & Studio Press →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hairline-t pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© {new Date().getFullYear()} Crystal Kizor & Studio COKA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-[#1C1917] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
