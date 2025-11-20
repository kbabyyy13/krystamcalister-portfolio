import React from 'react';
import { Briefcase, Palette } from 'lucide-react';

const EXPERIENCES = [
  {
    icon: Briefcase,
    title: 'The Grey Canvas',
    role: 'Freelance Full-Stack Developer',
    period: 'Jun 2025 - Current',
    highlights: [
      'Architected full-stack applications using React.js frontends and Node.js/Python backends.',
      'Designed database schemas using SQL and MongoDB for optimized performance.',
      'Deployed secure, scalable applications to AWS and Heroku cloud platforms.',
      'Provided end-to-end digital consulting for small business clients.'
    ]
  },
  {
    icon: Palette,
    title: 'K.W. Plumbing TX',
    role: 'Director of Digital & Business Development',
    period: 'Jan 2024 - Feb 2025',
    highlights: [
      'Built the company\'s entire digital presence from scratch using React.js.',
      'Designed the full brand identity system (Logo, Colors, Typography, Voice).',
      'Developed custom internal APIs to track customer workflows and data.',
      'Managed project lifecycles using agile practices and cross-functional collaboration.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-baby-pink rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">Professional Experience</h2>
          <div className="w-24 h-1 bg-[#E0218A] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#7A7A7A] font-playfair italic text-lg">Where design meets development in the real world.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pink-200 before:to-transparent">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${
                index === 0 ? 'bg-[#E0218A] text-white' : 'bg-white text-[#E0218A]'
              }`}>
                <experience.icon size={16} aria-hidden="true" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-black font-playfair">{experience.title}</h3>
                    <p className="text-[#E0218A] font-medium">{experience.role}</p>
                  </div>
                  <span className="text-xs font-bold text-[#E0218A] bg-pink-50 px-2 py-1 rounded uppercase tracking-wide mt-1 md:mt-0">
                    {experience.period}
                  </span>
                </div>
                <ul className="space-y-2 text-[#7A7A7A] text-sm list-disc pl-4 marker:text-pink-300">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
