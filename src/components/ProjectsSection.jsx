import React from 'react';
import { ChevronRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'kw-plumbing',
    title: 'K.W. Plumbing Rebrand & Web App',
    description: 'A comprehensive digital overhaul for a trade business. I managed the entire lifecycle from legal filing to logo design, finally delivering a React-based booking platform.',
    headerClass: 'bg-baby-pink',
    headerText: 'KW PLUMBING TX',
    headerEmoji: 'KW',
    tags: ['React.js', 'Branding', 'Custom APIs']
  },
  {
    id: 'grey-canvas',
    title: 'Freelance Studio Architecture',
    description: 'Designed scalable full-stack architecture for a boutique agency. Focused on secure client data handling via Python backends and high-performance React frontends.',
    headerClass: 'bg-black',
    headerText: 'CANVAS',
    headerEmoji: 'THE GREY',
    tags: ['Full Stack', 'Python/Flask', 'SQL']
  }
];

export default function ProjectsSection({ onViewCaseStudy, kwCaseStudyData, greyCanvasData }) {
  const caseStudies = {
    'kw-plumbing': kwCaseStudyData,
    'grey-canvas': greyCanvasData
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">Selected Work</h2>
            <div className="w-24 h-1 bg-[#E0218A] mb-2 rounded-full"></div>
            <p className="text-[#7A7A7A]">Recent projects showcasing brand and build.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-white/60"
            >
              <div className={`h-64 ${project.headerClass} flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-opacity-75 transition-all`}>
                <div className="text-center">
                  <div className="text-5xl font-black text-white/50 font-playfair">{project.headerEmoji}</div>
                  <div className="text-sm font-bold text-white/50 mt-2 tracking-widest">{project.headerText}</div>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col bg-white/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#E0218A] transition-colors font-playfair">
                  {project.title}
                </h3>
                <p className="text-[#7A7A7A] mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onViewCaseStudy(caseStudies[project.id])}
                    className="flex items-center text-[#E0218A] font-bold text-sm cursor-pointer hover:underline font-playfair italic transition-colors"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View {project.id === 'kw-plumbing' ? 'Case Study' : 'Architecture'} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
