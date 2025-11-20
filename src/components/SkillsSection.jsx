import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

const SKILL_GROUPS = [
  {
    icon: Layout,
    title: 'Front-End Design',
    skills: ['React.js', 'HTML5', 'CSS3 / Tailwind', 'Figma', 'UI/UX Principles', 'Responsive Design']
  },
  {
    icon: Server,
    title: 'Back-End & Cloud',
    skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'AWS', 'Heroku', 'Netlify']
  },
  {
    icon: Database,
    title: 'Data & Workflow',
    skills: ['SQL', 'MongoDB', 'Firebase', 'Git/GitHub', 'Agile/Scrum', 'WCAG Accessibility']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-600 rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-[#E0218A] mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#E0218A] transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-pink-300 group-hover:bg-[#E0218A] group-hover:text-white transition-colors">
                  <group.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold font-playfair">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
