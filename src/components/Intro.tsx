import React from 'react';
import { ASSETS } from '../data/content';
import { BrandLogo } from './BrandLogo';

export const Intro: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F0ECE4] hairline-b" aria-label="Positioning and Philosophy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Section Marker & Editorial Index */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A3412] block mb-3">
              Core Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
              One person.<br />
              <span className="italic">Many ways of building.</span>
            </h2>
            <div className="mt-6 w-12 h-px bg-[#1C1917]/30" aria-hidden="true" />
            
            <div className="mt-8 space-y-3 text-xs tracking-wide text-[#78716C] uppercase font-medium">
              <p className="flex items-center gap-2">
                <span className="text-[#1C1917] font-bold">01</span>
                <span>Contextual Materiality</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#1C1917] font-bold">02</span>
                <span>Pedagogical Generosity</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#1C1917] font-bold">03</span>
                <span>Civic Agency & Faith</span>
              </p>
            </div>
          </div>

          {/* Right: Editorial Narrative Block */}
          <div className="lg:col-span-8 space-y-6">
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] font-normal leading-snug">
              “Architecture is not merely the drawing of physical envelopes. It is the deliberate orchestration of
              materials, economic access, living rituals, and educational agency. To design well in Africa today
              requires building across every layer of society.”
            </blockquote>

            <p className="text-base text-[#57534E] leading-relaxed pt-2">
              Crystal Kizor does not treat her diverse initiatives as isolated enterprises. Instead, each venture is a
              specialized instrument addressing a distinct dimension of the African built environment. From the
              stabilized earth of a residential pavilion to the hand-woven cord of an armchair, the youth workshops of
              AKO Alliance to the digital masterclasses of The Effective Architect—Crystal serves as the unifying
              creative director and intellectual anchor.
            </p>

            {/* Linear Continuum Diagram */}
            <div className="pt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-4">
                The Continuity of Practice
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#44403C] font-medium py-3 px-4 bg-[#F8F7F4] border border-[#1C1917]/10">
                <span className="font-semibold text-[#1C1917]">Architecture</span>
                <span className="text-[#A8A29E]">→</span>
                <span>Design</span>
                <span className="text-[#A8A29E]">→</span>
                <span>Education</span>
                <span className="text-[#A8A29E]">→</span>
                <span>Media</span>
                <span className="text-[#A8A29E]">→</span>
                <span>Community</span>
                <span className="text-[#A8A29E]">→</span>
                <span>Research</span>
                <span className="text-[#A8A29E]">→</span>
                <span className="font-semibold text-[#9A3412]">Ideas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monograph Studio Feature: Crystal Kizor in Studio */}
        <div className="pt-12 hairline-t grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412]">
              <span>Studio Practice & Tectonics</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] leading-tight">
              Rooted in Drawing, Models & Physical Materiality.
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Every Studio COKA commission begins with physical tactile exploration: casting rammed earth cubes,
              testing local clay shrinkage, cutting timber joinery, and assembling scale models before digital drafting
              takes place. This commitment preserves the tactile intimacy of African craftsmanship within high-performance contemporary architecture.
            </p>
            
            {/* Signature Mark */}
            <div className="pt-4">
              <span className="text-[11px] text-[#78716C] block uppercase tracking-wider mb-1">Creative Director & Founder</span>
              <BrandLogo variant="signature" className="text-3xl text-[#1C1917]" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-[#E7E5E4] p-3 border border-[#1C1917]/10 shadow-sm">
              <div className="aspect-4/3 sm:aspect-16/10 overflow-hidden bg-[#D6D3CD]">
                <img
                  src={ASSETS.standingTravertinePortrait}
                  alt="Crystal Kizor standing by the travertine drafting table with architectural blueprints and physical building models"
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-2 px-1 flex items-baseline justify-between text-xs text-[#78716C]">
                <span className="font-medium text-[#1C1917]">Studio COKA Atelier</span>
                <span className="italic font-editorial">Drafting & Prototyping Workshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
