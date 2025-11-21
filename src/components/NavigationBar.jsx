import React from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Work', id: 'projects' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

export default function NavigationBar({
  activeSection,
  isMenuOpen,
  scrolled,
  onScrollToSection,
  onToggleMenu
}) {
  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => onScrollToSection('home')}
          className="text-2xl font-bold tracking-tighter text-black font-playfair cursor-pointer hover:text-[#E0218A] transition-colors"
          aria-label="Go to home"
        >
          KM<span className="text-[#E0218A]">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-[#E0218A] ${
                activeSection === link.id ? 'text-[#E0218A] font-bold' : 'text-[#7A7A7A]'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-black hover:text-[#E0218A] transition-colors"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-slate-100">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollToSection(link.id)}
              className="text-left text-black font-medium py-2 border-b border-slate-100 last:border-0 hover:text-[#E0218A] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
