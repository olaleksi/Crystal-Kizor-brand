import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IDEAS_ARTICLES } from '../data/content';
import { IdeaItem } from '../types';
import { trackEvent } from '../utils/analytics';

interface IdeasProps {
  onSelectIdea: (idea: IdeaItem) => void;
}

export const Ideas: React.FC<IdeasProps> = ({ onSelectIdea }) => {
  const handleIdeaClick = (idea: IdeaItem) => {
    trackEvent('idea_read_click', { idea: idea.title });
    onSelectIdea(idea);
  };

  return (
    <section id="ideas" className="py-24 lg:py-32 hairline-b" aria-label="Ideas, Writing and Research">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-3">
              <span>Intellectual Discourse</span>
              <span aria-hidden="true">·</span>
              <span>Research & Monograph Archive</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#1C1917] font-normal tracking-tight">
              Ideas in Progress.
            </h2>
            <p className="text-base text-[#57534E] max-w-xl mt-3">
              Investigating the intersections of tropical physics, vernacular craft dignity, urban policy, and the
              structural reform of architectural pedagogy in Africa.
            </p>
          </div>

          <div className="text-xs text-[#78716C] border-l-2 border-[#9A3412] pl-3 py-1">
            <span className="font-semibold block text-[#1C1917]">Open Scholarly Notes</span>
            <span>Working drafts & published essays</span>
          </div>
        </div>

        {/* Broadsheet / Editorial Articles List */}
        <div className="divide-y divide-[#1C1917]/15 border-y border-[#1C1917]/15">
          {IDEAS_ARTICLES.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => handleIdeaClick(item)}
              className="group py-8 sm:py-10 hover:bg-[#F2EFE9]/60 transition-colors cursor-pointer px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                {/* Number & Category Column */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-editorial text-2xl text-[#78716C] group-hover:text-[#9A3412] transition-colors">
                      0{idx + 1}.
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#78716C]">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs text-[#78716C] flex items-center gap-2">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Main Content Column */}
                <div className="lg:col-span-7 space-y-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-editorial italic text-sm sm:text-base text-[#44403C]">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed pt-1">
                    {item.summary}
                  </p>
                </div>

                {/* Read Action Column */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end items-center pt-2 lg:pt-0">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#1C1917] group-hover:underline underline-offset-4 flex items-center gap-1">
                    <span>Read Paper</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
