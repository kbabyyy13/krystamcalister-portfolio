import React from 'react';
import { Award, Terminal, Briefcase, Download } from 'lucide-react';

const CERTIFICATIONS = [
  {
    icon: Award,
    title: 'Meta Certified',
    subtitle: 'Back-End Developer'
  },
  {
    icon: Terminal,
    title: 'Cybersecurity',
    subtitle: 'Ethical Hacking (In Progress)'
  },
  {
    icon: Briefcase,
    title: 'Experience',
    subtitle: 'Freelance & Director Roles'
  }
];

export default function AboutSection({ profilePic }) {
  const resumePath = '/assets/Krysta McAlister Resume 2025.pdf';

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-white to-transparent -z-10"></div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">About Me</h2>
          <div className="w-24 h-1 bg-[#E0218A] mx-auto rounded-full"></div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm border border-white/60 bg-white/50 backdrop-blur-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10 justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={profilePic}
                alt="Krysta McAlister"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl text-[#E0218A] font-signature transform -rotate-2">Krysta McAlister</p>
              <p className="text-sm text-[#7A7A7A] mt-1 font-playfair italic">Design. Code. Create.</p>
              <p className="text-black font-bold mt-2">Nevada, Texas</p>
            </div>
          </div>

          <div className="prose prose-lg text-[#7A7A7A] mx-auto space-y-6">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#E0218A] first-letter:mr-3 first-letter:float-left font-playfair first-letter:font-playfair">
              My journey into technology wasn't fueled by a classroom, but by a drive for clarity and truth.
              What started as a fascination with the logic and patterns behind digital systems evolved into a career-defining passion for development.
            </p>
            <p>
              Based in Nevada, Texas, I am a resilient problem-solver who believes that <strong>great design is functional</strong> and <strong>great code is invisible</strong>.
              After my father—my biggest supporter—passed away just before my graduation, I committed myself to honoring his legacy by building a career defined by excellence, continuous learning, and unwavering reliability.
            </p>
            <p>
              Today, I offer a unique hybrid skillset: the ability to design a brand's visual soul (logos, typography, color theory) and the technical prowess to build the robust, secure systems that power it (React, Python, SQL). I don't just make things look good; I make them work beautifully.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href={resumePath}
              download="Krysta_McAlister_Resume_2025.pdf"
              className="inline-flex items-center gap-2 text-[#E0218A] font-bold hover:underline font-playfair transition-colors"
            >
              <Download size={16} /> Download My Full Resume
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <cert.icon className="mx-auto text-[#E0218A] mb-3" size={32} aria-hidden="true" />
              <h3 className="font-bold text-black font-playfair text-lg">{cert.title}</h3>
              <p className="text-sm text-[#7A7A7A]">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
