import React, { useRef } from 'react';
import { X, BookOpen } from 'lucide-react';
import { IdeaItem } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

interface IdeaModalProps {
  idea: IdeaItem | null;
  onClose: () => void;
  onInquire: (topic: string) => void;
}

export const IdeaModal: React.FC<IdeaModalProps> = ({ idea, onClose, onInquire }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: Boolean(idea),
    onClose,
    dialogRef,
  });

  if (!idea) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="idea-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] border border-[#1C1917]/20 shadow-2xl p-6 sm:p-10 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E5E4] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Close reader"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
            <span className="text-[#9A3412]">{idea.status}</span>
            <span aria-hidden="true">·</span>
            <span>{idea.category}</span>
            <span aria-hidden="true">·</span>
            <span>{idea.readTime}</span>
          </div>
          <h3 id="idea-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#1C1917] leading-tight">
            {idea.title}
          </h3>
          <p className="text-sm sm:text-base text-[#57534E] mt-2 font-editorial italic">
            {idea.subtitle}
          </p>
        </div>

        {/* Hairline Divider */}
        <div className="hairline-b mb-6" />

        {/* Long-form Editorial Prose with Drop Cap */}
        <div className="space-y-4 text-base text-[#292524] leading-relaxed mb-8 max-w-prose">
          {idea.fullExcerpt.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-5xl first-letter:font-editorial first-letter:float-left first-letter:mr-3 first-letter:text-[#1C1917] first-letter:leading-none'
                  : ''
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Central Inquiries / Questions */}
        <div className="p-6 bg-[#F0ECE4] border border-[#1C1917]/10 mb-8">
          <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-3">
            <BookOpen className="w-4 h-4 text-[#9A3412]" />
            <span>Core Theoretical Questions Being Addressed</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
            {idea.keyQuestions.map((q, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-semibold text-[#9A3412] shrink-0 font-editorial text-base">
                  0{idx + 1}.
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footnote on Citation */}
        <p className="text-xs text-[#78716C] italic mb-6">
          Authored by Crystal Kizor. Part of ongoing architectural research, writing, and pedagogical discourse.
        </p>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 hairline-t pt-6">
          <button
            onClick={() => {
              onClose();
              onInquire(`Research Collaboration: ${idea.title}`);
            }}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer"
          >
            Discuss or Collaborate on This Inquiry
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
