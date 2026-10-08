import React, { useRef } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Initiative } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

interface InitiativeModalProps {
  initiative: Initiative | null;
  onClose: () => void;
  onInquire: (initiativeName: string) => void;
}

export const InitiativeModal: React.FC<InitiativeModalProps> = ({ initiative, onClose, onInquire }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: Boolean(initiative),
    onClose,
    dialogRef,
  });

  if (!initiative) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="initiative-modal-title"
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
          aria-label="Close initiative dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-2">
            <span>{initiative.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Initiative Profile</span>
          </div>
          <h3 id="initiative-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#1C1917]">
            {initiative.name}
          </h3>
          <p className="text-sm font-medium text-[#78716C] mt-1">{initiative.subtitle}</p>
        </div>

        {/* Visual if available */}
        {initiative.imageSrc && (
          <div className="mb-6 overflow-hidden border border-[#1C1917]/10 aspect-[16/9] bg-[#E7E5E4]">
            <img
              src={initiative.imageSrc}
              alt={initiative.imageAlt || initiative.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Tagline & Detailed Description */}
        <div className="space-y-4 mb-8">
          <p className="text-base sm:text-lg font-editorial italic text-[#292524] leading-relaxed">
            "{initiative.tagline}"
          </p>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            {initiative.description}
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-3">
            Core Competencies & Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2 text-xs text-[#292524]">
            {initiative.focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-[#E7E5E4] text-[#1C1917] border border-[#1C1917]/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-8 hairline-t pt-6">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-3">
            Distinctive Practices & Impact
          </h4>
          <ul className="space-y-2.5">
            {initiative.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#9A3412] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 hairline-t pt-6">
          <button
            onClick={() => {
              onClose();
              onInquire(initiative.name);
            }}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Inquire About {initiative.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
