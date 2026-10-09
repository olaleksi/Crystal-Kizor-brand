import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SELECTED_PROJECTS } from '../data/content';
import { Project } from '../types';
import { trackEvent } from '../utils/analytics';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const dominantProject = SELECTED_PROJECTS[0];
  const supportingProjects = SELECTED_PROJECTS.slice(1);

  const handleProjectClick = (project: Project) => {
    trackEvent('project_view_click', { project: project.title });
    onSelectProject(project);
  };

  return (
    <section id="work" className="py-24 lg:py-32 hairline-b" aria-label="Selected Architecture and Design Work">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9A3412] mb-3">
            <span>Selected Projects</span>
            <span aria-hidden="true">·</span>
            <span>Architecture & Object Monographs</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#1C1917] font-normal tracking-tight">
              Spaces, Objects & Spatial Infrastructure.
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] max-w-sm">
              Each commission interrogates materiality, climatic response, and human dignity.
            </p>
          </div>
        </div>

        {/* Dominant Feature: Large Architectural Spread */}
        {dominantProject && (
          <article
            onClick={() => handleProjectClick(dominantProject)}
            className="group cursor-pointer mb-16 bg-[#F8F7F4] border border-[#1C1917]/15 hover:border-[#1C1917] transition-all duration-300 p-6 sm:p-10 shadow-xs hover:shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Media Container */}
              <div className="lg:col-span-8 overflow-hidden bg-[#E7E5E4] aspect-video border border-[#1C1917]/10">
                <img
                  src={dominantProject.imageSrc}
                  alt={dominantProject.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Editorial Description Column */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#78716C] mb-3">
                    <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
                      {dominantProject.initiative}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="px-2 py-0.5 bg-[#E7E5E4] text-[#1C1917] text-[10px] font-semibold uppercase tracking-wider">
                      {dominantProject.statusBadge}
                    </span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-tight">
                    {dominantProject.title}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1 italic">{dominantProject.category}</p>
                  <p className="text-sm text-[#57534E] leading-relaxed mt-4">
                    {dominantProject.description}
                  </p>
                </div>

                {/* Materials Snapshot */}
                <div className="pt-4 hairline-t">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                    Primary Tectonics
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#44403C]">
                    {dominantProject.materials.slice(0, 3).map((mat, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-[#E7E5E4]">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#1C1917]">
                  <span className="group-hover:underline underline-offset-4 flex items-center gap-1.5">
                    <span>Explore Project Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  {dominantProject.galleryImages && (
                    <span className="text-[11px] text-[#9A3412] font-medium tracking-normal normal-case">
                      {dominantProject.galleryImages.length} Monograph Plates
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Supporting Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer bg-[#F8F7F4] border border-[#1C1917]/15 hover:border-[#1C1917] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="overflow-hidden bg-[#E7E5E4] aspect-4/3 border border-[#1C1917]/10 mb-6">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#78716C] mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
                      {project.initiative}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="px-2 py-0.5 bg-[#E7E5E4] text-[#1C1917] text-[10px] font-semibold uppercase tracking-wider">
                      {project.statusBadge}
                    </span>
                  </div>
                  {project.galleryImages && (
                    <span className="text-[11px] text-[#9A3412] font-medium">
                      {project.galleryImages.length} Plates
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#78716C] italic mb-3">{project.category}</p>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 hairline-t mt-6 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#1C1917]">
                <span className="group-hover:underline underline-offset-4">View Specifications & Narrative</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
