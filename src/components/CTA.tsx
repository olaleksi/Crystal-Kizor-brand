import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CTAProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick, onExploreClick }) => {
  return (
    <section className="py-24 lg:py-36 bg-[#1C1917] text-[#F8F7F4] relative overflow-hidden" aria-label="Concluding Call to Action">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D6D3CD] block mb-4">
            Initiate Collaboration
          </span>

          {/* Main Statement */}
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight mb-8 text-balance">
            Have an idea worth building?
          </h2>

          <p className="text-base sm:text-lg text-[#A8A29E] leading-relaxed max-w-2xl mb-12">
            Whether it is an architectural space, a furniture collection, a youth learning hub, a university keynote,
            or an educational curriculum—let us shape the possibility together.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                trackEvent('contact_cta_click');
                onContactClick();
              }}
              className="px-7 py-4 text-xs font-semibold tracking-wider uppercase text-[#1C1917] bg-[#F8F7F4] hover:bg-[#E7E5E4] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-7 py-4 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-transparent hover:bg-white/10 border border-white/20 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Revisit the ecosystem</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet architectural footnote */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-[#A8A29E] gap-4">
          <p>Practicing across architecture, objects, education and community.</p>
          <p className="italic font-editorial text-sm">Studio COKA · Lagos & International</p>
        </div>
      </div>
    </section>
  );
};
