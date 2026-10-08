import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { INITIATIVES } from '../data/content';
import { Initiative, EcosystemCategory } from '../types';
import { trackEvent } from '../utils/analytics';

interface EcosystemProps {
  onSelectInitiative: (initiative: Initiative) => void;
  onInquire: (initiativeName: string) => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ onSelectInitiative, onInquire }) => {
  const [activeCategory, setActiveCategory] = useState<EcosystemCategory | 'all'>('all');

  const filteredInitiatives =
    activeCategory === 'all'
      ? INITIATIVES
      : INITIATIVES.filter((init) => init.category === activeCategory);

  const getAnalyticsEventForInitiative = (id: string) => {
    switch (id) {
      case 'studio-coka':
        return 'ecosystem_studio_coka_click';
      case 'elevated':
        return 'ecosystem_elevated_click';
      case 'ako-alliance':
        return 'ecosystem_ako_click';
      case 'tea':
        return 'ecosystem_tea_click';
      case 'alive-and-free':
        return 'ecosystem_alive_and_free_click';
      default:
        return 'ecosystem_filter_change';
    }
  };

  const handleCardClick = (init: Initiative) => {
    const eventName = getAnalyticsEventForInitiative(init.id);
    trackEvent(eventName as any, { initiative: init.name });
    onSelectInitiative(init);
  };

  return (
    <section id="ecosystem" className="py-24 lg:py-32 hairline-b" aria-label="Brand Ecosystem">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-3">
              <span>The Ecosystem</span>
              <span aria-hidden="true">·</span>
              <span>7 Connected Initiatives</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#1C1917] font-normal tracking-tight">
              A Unified Body of Practice.
            </h2>
            <p className="text-base text-[#57534E] max-w-xl mt-3">
              Rather than disconnected enterprises, Crystal’s initiatives form an integrated continuum spanning
              spatial construction, object design, community empowerment, and intellectual inquiry.
            </p>
          </div>

          {/* Interactive Filter Control (Functional Segmented Button Bar) */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#E7E5E4] border border-[#1C1917]/10 self-start md:self-auto max-w-full">
            <button
              onClick={() => {
                setActiveCategory('all');
                trackEvent('ecosystem_filter_change', { category: 'all' });
              }}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#1C1917] text-[#F8F7F4] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              All (7)
            </button>
            <button
              onClick={() => {
                setActiveCategory('build');
                trackEvent('ecosystem_filter_change', { category: 'build' });
              }}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'build'
                  ? 'bg-[#1C1917] text-[#F8F7F4] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              BUILD
            </button>
            <button
              onClick={() => {
                setActiveCategory('empower');
                trackEvent('ecosystem_filter_change', { category: 'empower' });
              }}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'empower'
                  ? 'bg-[#1C1917] text-[#F8F7F4] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              EMPOWER
            </button>
            <button
              onClick={() => {
                setActiveCategory('share');
                trackEvent('ecosystem_filter_change', { category: 'share' });
              }}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'share'
                  ? 'bg-[#1C1917] text-[#F8F7F4] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              SHARE
            </button>
            <button
              onClick={() => {
                setActiveCategory('think');
                trackEvent('ecosystem_filter_change', { category: 'think' });
              }}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'think'
                  ? 'bg-[#1C1917] text-[#F8F7F4] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              THINK
            </button>
          </div>
        </div>

        {/* Ecosystem Grid: Differentiated, Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInitiatives.map((init) => {
            const hasImage = Boolean(init.imageSrc);

            return (
              <article
                key={init.id}
                onClick={() => handleCardClick(init)}
                className={`group flex flex-col justify-between p-6 sm:p-8 bg-[#F8F7F4] border border-[#1C1917]/15 hover:border-[#1C1917] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md relative ${
                  init.id === 'studio-coka' ? 'md:col-span-2 lg:col-span-2 bg-[#F3EFEA]' : ''
                }`}
              >
                <div>
                  {/* Unboxed Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-[#78716C] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
                        {init.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[200px]">{init.subtitle}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#1C1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] font-normal group-hover:text-[#9A3412] transition-colors">
                    {init.name}
                  </h3>
                  <p className="font-editorial italic text-sm sm:text-base text-[#44403C] mt-2 mb-4">
                    "{init.tagline}"
                  </p>

                  {/* Optional High-Fidelity Visual for Heroic Initiatives */}
                  {hasImage && (
                    <div className="my-5 overflow-hidden border border-[#1C1917]/10 bg-[#E7E5E4] aspect-[16/10]">
                      <img
                        src={init.imageSrc}
                        alt={init.imageAlt || init.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3 mb-6">
                    {init.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6 pt-4 hairline-t">
                    {init.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#44403C]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]/40 shrink-0 mt-1.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 hairline-t flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#1C1917]">
                  <span className="group-hover:underline underline-offset-4">{init.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1C1917] group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Narrative Connector Statement */}
        <div className="mt-16 p-8 bg-[#EBE7DF] border border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-editorial text-xl sm:text-2xl text-[#1C1917]">
              Looking to collaborate across one or more of these initiatives?
            </p>
            <p className="text-xs sm:text-sm text-[#57534E]">
              We frequently design custom engagements bridging architecture, education, and creative products.
            </p>
          </div>
          <button
            onClick={() => onInquire('General Ecosystem Inquiry')}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer shrink-0"
          >
            Start a cross-initiative dialogue
          </button>
        </div>
      </div>
    </section>
  );
};
