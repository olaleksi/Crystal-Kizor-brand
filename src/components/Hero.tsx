import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/content';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hairline-b"
      aria-label="Crystal Kizor Introduction"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow: Unboxed text with subtle typographic separators */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-6">
              <span>Architect</span>
              <span aria-hidden="true" className="text-[#A8A29E]">·</span>
              <span>Designer</span>
              <span aria-hidden="true" className="text-[#A8A29E]">·</span>
              <span>Entrepreneur</span>
              <span aria-hidden="true" className="text-[#A8A29E]">·</span>
              <span>Speaker</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#1C1917] mb-8 text-balance">
              Designing spaces.
              <span className="block italic text-[#44403C]">Building possibilities.</span>
              <span className="block">Shaping ideas.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl mb-10 font-normal">
              Crystal Kizor is an architect, designer, and entrepreneur working across the built environment,
              education, product design, media, and community—creating rigorous work deeply rooted in people, place,
              materials, and contextual possibility.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  trackEvent('hero_explore_click');
                  onExploreClick();
                }}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
              >
                <span>Explore the ecosystem</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <button
                onClick={() => {
                  trackEvent('hero_contact_click');
                  onContactClick();
                }}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1C1917] bg-transparent hover:bg-[#E7E5E4] border border-[#1C1917]/25 transition-all cursor-pointer inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Quiet Quick Stats / Indicators */}
            <div className="mt-14 pt-8 hairline-t grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-editorial text-2xl lg:text-3xl text-[#1C1917] font-normal">07</p>
                <p className="text-xs text-[#78716C] tracking-wide mt-1 uppercase">Connected Initiatives</p>
              </div>
              <div>
                <p className="font-editorial text-2xl lg:text-3xl text-[#1C1917] font-normal">04</p>
                <p className="text-xs text-[#78716C] tracking-wide mt-1 uppercase">Pillars of Practice</p>
              </div>
              <div>
                <p className="font-editorial text-2xl lg:text-3xl text-[#1C1917] font-normal">01</p>
                <p className="text-xs text-[#78716C] tracking-wide mt-1 uppercase">Coherent Vision</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Architectural Border */}
              <div className="relative bg-[#E7E5E4] p-2.5 sm:p-3 shadow-md border border-[#1C1917]/10">
                <div className="aspect-[3/4] relative overflow-hidden bg-[#D6D3CD]">
                  <img
                    src={ASSETS.heroPortrait}
                    alt="Crystal Kizor — Architect, Designer, Entrepreneur and Speaker in her studio workshop"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-[1.01] transition-transform duration-700 ease-out"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image load error
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center p-8 bg-[#292524] text-[#F8F7F4] text-center">
                            <span class="font-editorial text-3xl mb-2">Crystal Kizor</span>
                            <span class="text-xs tracking-widest uppercase text-[#A8A29E]">Architect · Designer · Founder</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Editorial Caption Under Image */}
                <div className="pt-3 px-1 flex items-baseline justify-between text-xs text-[#78716C]">
                  <span className="font-medium tracking-tight text-[#1C1917]">Crystal Kizor</span>
                  <span className="italic font-editorial text-sm">Studio Practice, 2026</span>
                </div>
              </div>

              {/* Architectural Accent Tag */}
              <div className="mt-4 flex items-center gap-3 text-xs text-[#78716C]">
                <span className="w-2 h-2 rounded-full bg-[#9A3412]" aria-hidden="true"></span>
                <span>Spatial practice rooted in African cities, climate responsiveness & design discourse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
