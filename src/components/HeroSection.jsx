import React from 'react';
import { Code, Palette, Database, Download } from 'lucide-react';

const SKILLS = [
  {
    icon: Code,
    title: 'Full-Stack Dev',
    description: 'React, Node, Python'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Figma, Logos, UI/UX'
  },
  {
    icon: Database,
    title: 'Backend & API',
    description: 'SQL, MongoDB, AWS'
  }
];

export default function HeroSection({ profilePic, onScrollToSection }) {
  const resumePath = '/assets/Krysta McAlister Resume 2025.pdf';

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-100 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold tracking-widest uppercase mb-2 border border-pink-100">
              Available for Hire
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight font-playfair">
              Krysta <br /><span className="text-[#E0218A] italic">McAlister</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#7A7A7A] font-light font-playfair">
              Website & Branding Specialist
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-xl leading-relaxed">
              I bridge the gap between <strong>visual storytelling</strong> and <strong>technical architecture</strong>.
              A Full-Stack Developer with a designer's eye, building scalable digital identities for businesses in DFW and beyond.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onScrollToSection('projects')}
                className="px-8 py-3 bg-[#E0218A] text-white rounded-lg font-medium hover:bg-pink-700 transition-transform transform hover:-translate-y-1 shadow-lg shadow-pink-200"
                aria-label="View my work"
              >
                View Work
              </button>
              <a
                href={resumePath}
                download="Krysta_McAlister_Resume_2025.pdf"
                className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:border-[#E0218A] hover:text-[#E0218A] transition-colors flex items-center gap-2"
                aria-label="Download resume"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center relative">
            <div className="absolute inset-0 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative glass-panel p-8 rounded-2xl shadow-2xl border border-white/60 w-full max-w-sm">
              <div className="space-y-6">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-baby-pink text-pink-custom rounded-lg">
                      <skill.icon size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black font-playfair text-lg">{skill.title}</h3>
                      <p className="text-sm text-[#7A7A7A]">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
