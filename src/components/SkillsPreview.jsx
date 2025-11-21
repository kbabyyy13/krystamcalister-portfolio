import React from 'react';
import { Code, Palette, Database } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    icon: Code,
    title: 'Full-Stack Dev',
    description: 'React.js, Node.js, Python, SQL. Building robust, scalable applications.'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Figma, UI/UX, Logo Design. Crafting memorable digital experiences.'
  },
  {
    icon: Database,
    title: 'Backend Logic',
    description: 'API Development, Database Management, Cloud Deployment (AWS).'
  }
];

export default function SkillsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors"
            >
              <category.icon className="text-[#E0218A] mb-4" size={32} aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2 font-playfair text-black">{category.title}</h3>
              <p className="text-[#7A7A7A] text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
