import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-pink-100">
      <div className="container mx-auto px-6 text-center text-[#7A7A7A] text-sm">
        <p>© {currentYear} Krysta McAlister. Designed & Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}
