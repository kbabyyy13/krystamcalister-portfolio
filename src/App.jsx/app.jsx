import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import CaseStudyCarousel from '../components/CaseStudyCarousel';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import SkillsPreview from '../components/SkillsPreview';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const profilePic = "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2F69b4cf24b9504468a1f9578aa4d96154?format=webp&width=800";

const kwCaseStudyData = {
  title: "KW Plumbing TX",
  subtitle: "Building a Business, Not Just a Website",
  slides: [
    {
      title: "The Client & Challenge",
      image: "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2Fddb17b6462ca45aab2d6acf5cd5a436b?format=webp&width=800",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            <strong className="text-[#E0218A]">The Client:</strong> KW Plumbing, a new plumbing service founded by my best friend, a passionate and highly skilled entrepreneur, Kenny Wolfe Jr.
          </p>
          <p>
            <strong className="text-[#E0218A]">The Challenge:</strong> Kenny was an expert in his trade, but faced the daunting challenge of turning that craft into a <strong className="text-[#E0218A]">legitimate, customer-facing business.</strong> I saw his struggle firsthand. He needed more than a website; he needed a <strong className="text-[#E0218A]">complete business launchpad</strong> to establish immediate credibility, attract new customers, and create a seamless way for clients to book his services online.
          </p>
        </div>
      ),
      imageLabel: "KW Plumbing Homepage"
    },
    {
      title: "My Partnership & Solution",
      image: "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2F8b001b7086464f4391dc50a7b6c57791?format=webp&width=800",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            The story of KW Plumbing is the heart of why I created <strong className="text-[#E0218A]">The Grey Canvas.</strong> It began while I was still in school, living the startup grind right alongside my best friend. This wasn't just a client project; it was a partnership forged through shared challenges.
          </p>
          <p className="font-bold text-black font-playfair">My comprehensive solution included:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-[#E0218A]">Business Formation:</strong> Navigating state paperwork to legally establish KW Plumbing in Texas.</li>
            <li><strong className="text-[#E0218A]">Brand Identity:</strong> Designing a strong, trustworthy logo and cohesive brand identity.</li>
            <li><strong className="text-[#E0218A]">Custom E-commerce Website:</strong> A fully custom, mobile-first website built from scratch.</li>
          </ul>
        </div>
      ),
      imageLabel: "Brand Identity Assets"
    },
    {
      title: "Key Features Delivered",
      image: "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2Ff29fc357e43941d4a36c6136ef513629?format=webp&width=800",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p className="font-bold text-black font-playfair">Comprehensive Feature Set:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-[#E0218A]">Intuitive Online Booking:</strong> Customers can select services and schedule 24/7.</li>
            <li><strong className="text-[#E0218A]">Secure Online Payments:</strong> Integrated payment gateway for seamless processing.</li>
            <li><strong className="text-[#E0218A]">Mobile-First Design:</strong> Flawless experience on phones—critical for emergency services.</li>
            <li><strong className="text-[#E0218A]">Service & Pricing Showcase:</strong> Transparent layout detailing all available services.</li>
          </ul>
        </div>
      ),
      imageLabel: "Mobile Booking Interface"
    },
    {
      title: "Service Area & Reach",
      image: "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2Fd3cd42f667cc4889b158bac9aa06155f?format=webp&width=800",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            <strong className="text-[#E0218A]">Serving DFW:</strong> The website features an <strong className="text-[#E0218A]">interactive service area map</strong> that clearly communicates coverage across the metroplex.
          </p>
          <p>
            This transparent approach builds <strong className="text-[#E0218A]">immediate trust</strong> by setting clear expectations. The integration showcases local expertise and makes it easy for customers to confirm eligibility, reducing friction in the customer journey.
          </p>
        </div>
      ),
      imageLabel: "Interactive Map Feature"
    },
    {
      title: "Seamless Booking Experience",
      image: "https://cdn.builder.io/api/v1/image/assets%2F6f5d5f7446c045e8b269afa20dfd86a5%2Fc84e51fb18274ef2a5e031eec161ebe6?format=webp&width=800",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            The centerpiece is the <strong className="text-[#E0218A]">custom-built booking system</strong> that transforms how customers interact with the business.
          </p>
          <p className="font-bold text-black font-playfair">Key Features:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Standard and <strong className="text-[#E0218A]">emergency appointment</strong> options</li>
            <li>Date and time picker for flexible scheduling</li>
            <li>Problem description field for better preparation</li>
            <li><strong className="text-[#E0218A]">Instant confirmation</strong> and direct communication</li>
          </ul>
        </div>
      ),
      imageLabel: "Booking Form Logic"
    },
    {
      title: "The Outcome & Impact",
      image: "https://placehold.co/800x600/E0218A/FFFFFF?text=Client+Testimonial",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            <strong className="text-[#E0218A]">The Outcome:</strong> KW Plumbing launched with a professional brand and a powerful digital tool from day one, allowing Kenny to compete with established local businesses immediately.
          </p>
          <div className="mt-6 p-6 bg-white/50 rounded-xl border border-[#E0218A]/20 relative">
            <svg className="absolute top-4 left-4 text-[#E0218A]/20 w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.75-2.5-7-2.5S0 3.75 0 5c0 5 0 7 1 8s1 2-1 2c-1 0-4 0-4 1s2 1 4 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.75-2.5-7-2.5S8 3.75 8 5c0 5 0 7 1 8s1 2-1 2c-1 0-4 0-4 1s2 1 4 1z" />
            </svg>
            <p className="italic mb-3 relative z-10 font-playfair text-black/80">
              "I couldn't have launched my business without her... She was more than just a web developer; she was a true partner... She understood my dream and handled all the digital complexities so I could focus on my work."
            </p>
            <p className="font-bold text-[#E0218A] text-sm relative z-10">
              — Kenny Wolfe Jr., Founder
            </p>
          </div>
        </div>
      ),
      imageLabel: "Client Testimonial"
    }
  ]
};

const greyCanvasData = {
  title: "The Grey Canvas",
  subtitle: "Full-Stack Architecture & Brand Studio",
  slides: [
    {
      title: "The Vision",
      image: "https://placehold.co/800x600/202020/E0218A?text=The+Grey+Canvas+Home",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            <strong className="text-[#E0218A]">Concept:</strong> The Grey Canvas is a fusion of creativity and code. It represents the balance between the structural (backend logic, wireframes) and the artistic (frontend design, branding).
          </p>
          <p>
            Unlike typical design portfolios, this is a fully functional <strong className="text-[#E0218A]">Full-Stack Web Application</strong>. It demonstrates that I don't just "make websites pretty"—I build the engines that run them.
          </p>
        </div>
      ),
      imageLabel: "The Grey Canvas Homepage"
    },
    {
      title: "The Tech Stack",
      image: "https://placehold.co/800x600/202020/E0218A?text=Admin+Dashboard",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            To ensure scalability and security, I architected a robust stack rather than relying on simple site builders.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
              <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                💻 Frontend
              </div>
              <p className="text-xs">React.js, Tailwind CSS, Vite for high-performance rendering.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
              <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                🖥️ Backend
              </div>
              <p className="text-xs">Python (Flask) serving a REST API for secure data handling.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
              <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                🗄️ Database
              </div>
              <p className="text-xs">SQLAlchemy with automated backups and migrations.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
              <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                🔒 Security
              </div>
              <p className="text-xs">Custom Admin Auth, CSRF protection, and secure headers.</p>
            </div>
          </div>
        </div>
      ),
      imageLabel: "Custom Admin Dashboard"
    },
    {
      title: "Admin & Content Management",
      image: "https://placehold.co/800x600/202020/E0218A?text=Backend+Logic",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            A key feature of this project is the <strong className="text-[#E0218A]">Custom Admin Portal</strong>. Instead of using a generic CMS, I built a Python-based dashboard that allows for:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-[#E0218A]">Blog Management:</strong> Create, edit, and delete posts dynamically.</li>
            <li><strong className="text-[#E0218A]">Analytics Tracking:</strong> Visualizing visitor data and engagement.</li>
            <li><strong className="text-[#E0218A]">Appointment Handling:</strong> Managing client intake forms and bookings directly from the backend.</li>
          </ul>
          <p className="text-sm italic mt-2">
            *Powered by <code>admin_views.py</code> and secure Flask routes.*
          </p>
        </div>
      ),
      imageLabel: "Backend Logic Visualization"
    },
    {
      title: "Social Impact",
      image: "https://placehold.co/800x600/202020/E0218A?text=DVAM+Awareness",
      content: (
        <div className="space-y-4 text-[#7A7A7A]">
          <p>
            Technology should serve a purpose. I integrated a specialized <strong className="text-[#E0218A]">Domestic Violence Awareness</strong> section directly into the platform.
          </p>
          <p>
            This feature uses a glassmorphic design to draw attention to critical resources without disrupting the user experience. It reflects my commitment to using my skills for community advocacy and support.
          </p>
        </div>
      ),
      imageLabel: "DVAM Awareness Section"
    }
  ]
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#7A7A7A] font-sans selection:bg-[#E0218A] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-signature { font-family: 'Dancing Script', cursive; }
        .glass-nav {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <NavigationBar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        onScrollToSection={scrollToSection}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <HeroSection profilePic={profilePic} onScrollToSection={scrollToSection} />
      <SkillsPreview />
      <AboutSection profilePic={profilePic} />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection onViewCaseStudy={(data) => setActiveCaseStudy(data)} kwCaseStudyData={kwCaseStudyData} greyCanvasData={greyCanvasData} />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white/90 backdrop-blur-xl w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-white">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-white rounded-full shadow-lg text-[#7A7A7A] hover:text-[#E0218A] transition-colors"
              aria-label="Close case study"
            >
              <X size={24} />
            </button>
            <div className="p-8 border-b border-pink-100 bg-white/50">
              <h2 className="text-3xl font-bold font-playfair text-black">{activeCaseStudy.title}</h2>
              <p className="text-[#E0218A] font-playfair italic">{activeCaseStudy.subtitle}</p>
            </div>
            <div className="flex-1 overflow-hidden relative bg-slate-50">
              <CaseStudyCarousel slides={activeCaseStudy.slides} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
