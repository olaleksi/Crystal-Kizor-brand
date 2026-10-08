import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight, Camera } from 'lucide-react';
import { Project } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useModalA11y({
    isOpen: Boolean(project),
    onClose,
    dialogRef,
  });

  if (!project) return null;

  const currentImage =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[activeImageIndex]
      : { src: project.imageSrc, alt: project.imageAlt, caption: project.description };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] border border-[#1C1917]/20 shadow-2xl p-6 sm:p-10 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E5E4] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Close project monograph"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
            <span className="text-[#9A3412]">{project.initiative}</span>
            <span aria-hidden="true">·</span>
            <span className="px-2 py-0.5 bg-[#E7E5E4] text-[#1C1917] text-[10px] tracking-wider">
              {project.statusBadge}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>
          <h3 id="project-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#1C1917]">
            {project.title}
          </h3>
          {project.location && (
            <p className="text-xs sm:text-sm text-[#78716C] mt-1 italic">Location: {project.location}</p>
          )}
        </div>

        {/* Primary Monograph Visual Frame */}
        <div className="mb-4 overflow-hidden border border-[#1C1917]/10 bg-[#E7E5E4] aspect-[16/10] sm:aspect-[16/9]">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Gallery Image Selector if multiple images available */}
        {project.galleryImages && project.galleryImages.length > 1 && (
          <div className="mb-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78716C] flex items-center gap-1 mr-2">
                <Camera className="w-3.5 h-3.5" />
                <span>Monograph Perspectives:</span>
              </span>
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`px-3 py-1 text-xs font-medium border transition-colors cursor-pointer ${
                    activeImageIndex === idx
                      ? 'bg-[#1C1917] text-[#F8F7F4] border-[#1C1917]'
                      : 'bg-white text-[#57534E] border-[#1C1917]/15 hover:border-[#1C1917]'
                  }`}
                >
                  Plate 0{idx + 1}
                </button>
              ))}
            </div>
            {currentImage.caption && (
              <p className="text-xs text-[#78716C] italic font-editorial">
                {currentImage.caption}
              </p>
            )}
          </div>
        )}

        {/* Description & Spatial Critique */}
        <div className="space-y-4 mb-8 pt-2">
          <p className="text-base sm:text-lg font-editorial italic text-[#292524] leading-relaxed">
            "{project.description}"
          </p>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architectural Materials & Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-[#F0ECE4] border border-[#1C1917]/10 mb-8">
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-3">
              Material Palette & Tectonics
            </h4>
            <ul className="space-y-1.5 text-xs text-[#292524]">
              {project.materials.map((mat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-3">
              Spatial Scope & Tectonic Intent
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[#1C1917] leading-relaxed">
              {project.spatialScope || project.dimensions || 'Contextual Architectural Specification'}
            </p>
            <p className="text-xs text-[#78716C] mt-2">
              Designed for equatorial microclimates, contextual craft integration, and passive thermal comfort.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 hairline-t pt-6">
          <button
            onClick={() => {
              onClose();
              onInquire(`Project Inquiry: ${project.title}`);
            }}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Inquire About {project.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
