import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SPEAKING_TOPICS } from '../data/content';
import { trackEvent } from '../utils/analytics';

interface SpeakingProps {
  onInviteSpeaking: (topicTitle?: string) => void;
}

export const Speaking: React.FC<SpeakingProps> = ({ onInviteSpeaking }) => {
  const handleInvite = (topicTitle?: string) => {
    trackEvent('speaking_cta_click', { topic: topicTitle || 'General Speaking Inquiry' });
    onInviteSpeaking(topicTitle);
  };

  return (
    <section id="speaking" className="py-24 lg:py-32 hairline-b bg-[#F0ECE4]" aria-label="Speaking and Lectures">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-3">
              <span>Lectures & Keynotes</span>
              <span aria-hidden="true">·</span>
              <span>Global & Pan-African Dialogues</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#1C1917] font-normal tracking-tight">
              Conversations That Move Ideas Forward.
            </h2>
            <p className="text-base text-[#57534E] max-w-2xl mt-4">
              Crystal delivers lectures and participates in curated panel conversations addressing sustainable
              urbanization, climate-responsive tectonics, contemporary African product design, and holistic creative leadership.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => handleInvite()}
              className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>Invite Crystal to speak</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Speaking Keynotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPEAKING_TOPICS.map((topic, idx) => (
            <div
              key={topic.id}
              className="bg-[#F8F7F4] border border-[#1C1917]/15 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#78716C] mb-4">
                  <span className="font-editorial text-xl text-[#1C1917]">0{idx + 1}</span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9A3412]">
                    {topic.theme}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#1C1917] mb-3 leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                  {topic.description}
                </p>

                <div className="pt-4 hairline-t">
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-[#78716C] mb-2">
                    Key Exploration Themes
                  </p>
                  <ul className="space-y-1 text-xs text-[#44403C]">
                    {topic.keyThemes.map((theme, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#1C1917]/50" />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 hairline-t mt-6">
                <button
                  onClick={() => handleInvite(topic.title)}
                  className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1C1917] hover:bg-[#E7E5E4] border border-[#1C1917]/20 transition-colors cursor-pointer text-center"
                >
                  Book Keynote on This Topic
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
