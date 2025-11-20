import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Terminal, 
  Layout, 
  Database, 
  Server, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Menu, 
  X,
  ChevronRight,
  ChevronLeft,
  Award,
  Briefcase,
  Quote,
  Lock,
  Cpu,
  Star,
  TrendingUp,
  Users,
  Download
} from 'lucide-react';

// --- ASSET PLACEHOLDERS ---
// Replace these with actual imports in your local environment
// e.g., import kwImage1 from './assets/Screenshot 2025-11-19 154332.jpg';

const kwImage1 = "https://placehold.co/800x600/E0218A/FFFFFF?text=KW+Homepage+(Screenshot+154332)";
const kwImage2 = "https://placehold.co/800x600/E0218A/FFFFFF?text=About+Page+(Screenshot+154544)";
const kwImage3 = "https://placehold.co/800x600/E0218A/FFFFFF?text=Services+(Screenshot+154642)";
const kwImage4 = "https://placehold.co/800x600/E0218A/FFFFFF?text=Service+Map+(Screenshot+154719)";
const kwImage5 = "https://placehold.co/800x600/E0218A/FFFFFF?text=Booking+Form+(Screenshot+154754)";

const tgcImage1 = "https://placehold.co/800x600/202020/E0218A?text=The+Grey+Canvas+Home";
const tgcImage2 = "https://placehold.co/800x600/202020/E0218A?text=Python+Admin+Dashboard";
const tgcImage3 = "https://placehold.co/800x600/202020/E0218A?text=Services+%26+Packages";
const tgcImage4 = "https://placehold.co/800x600/202020/E0218A?text=DVAM+Awareness+Feature";

const profilePic = "https://placehold.co/400x400/E0218A/FFFFFF?text=KM";
// Placeholder for resume link - update path locally
const resumeFile = "#"; 

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
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

  // --- DATA OBJECTS ---
  const kwCaseStudyData = {
    title: "KW Plumbing TX",
    subtitle: "Building a Business, Not Just a Website",
    slides: [
      {
        title: "The Client & Challenge",
        image: kwImage1,
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
        image: kwImage2,
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
        image: kwImage3,
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
        image: kwImage4,
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
        image: kwImage5,
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
        image: kwImage1,
        content: (
          <div className="space-y-4 text-[#7A7A7A]">
            <p>
              <strong className="text-[#E0218A]">The Outcome:</strong> KW Plumbing launched with a professional brand and a powerful digital tool from day one, allowing Kenny to compete with established local businesses immediately.
            </p>
            <div className="mt-6 p-6 bg-white/50 rounded-xl border border-[#E0218A]/20 relative">
              <Quote className="absolute top-4 left-4 text-[#E0218A]/20" size={48} />
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
        image: tgcImage1,
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
        image: tgcImage2,
        content: (
          <div className="space-y-4 text-[#7A7A7A]">
             <p>
              To ensure scalability and security, I architected a robust stack rather than relying on simple site builders.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
                <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                   <Cpu size={16} /> Frontend
                </div>
                <p className="text-xs">React.js, Tailwind CSS, Vite for high-performance rendering.</p>
              </div>
              <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
                <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                   <Server size={16} /> Backend
                </div>
                <p className="text-xs">Python (Flask) serving a REST API for secure data handling.</p>
              </div>
              <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
                <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                   <Database size={16} /> Database
                </div>
                <p className="text-xs">SQLAlchemy with automated backups and migrations.</p>
              </div>
              <div className="bg-white/50 p-3 rounded-lg border border-pink-100">
                <div className="flex items-center gap-2 text-[#E0218A] font-bold mb-1">
                   <Lock size={16} /> Security
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
        image: tgcImage2,
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
        image: tgcImage4,
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

  return (
    <div className="min-h-screen bg-slate-50 text-[#7A7A7A] font-sans selection:bg-[#E0218A] selection:text-white">
      {/* Styling */}
      <style>
        {`
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
        `}
      </style>

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter text-black font-playfair cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            KM<span className="text-[#E0218A]">.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Skills', id: 'skills' },
              { name: 'Work', id: 'projects' },
              { name: 'Testimonials', id: 'testimonials' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#E0218A] ${activeSection === link.id ? 'text-[#E0218A] font-bold' : 'text-[#7A7A7A]'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Nav Button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-slate-100">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Skills', id: 'skills' },
              { name: 'Work', id: 'projects' },
              { name: 'Testimonials', id: 'testimonials' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-black font-medium py-2 border-b border-slate-100 last:border-0 hover:text-[#E0218A]"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- SECTIONS --- */}

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-100 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5 space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold tracking-widest uppercase mb-2 border border-pink-100">
                Available for Hire
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight font-playfair">
                Krysta <br/><span className="text-[#E0218A] italic">McAlister</span>
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
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-[#E0218A] text-white rounded-lg font-medium hover:bg-pink-700 transition-transform transform hover:-translate-y-1 shadow-lg shadow-pink-200"
                >
                  View Work
                </button>
                {/* Download Resume Button */}
                <a 
                  href={resumeFile}
                  download="Krysta_McAlister_Resume_2025.pdf"
                  className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:border-[#E0218A] hover:text-[#E0218A] transition-colors flex items-center gap-2"
                >
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative glass-panel p-8 rounded-2xl shadow-2xl border border-white/60 w-full max-w-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-baby-pink text-pink-custom rounded-lg">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-black font-playfair text-lg">Full-Stack Dev</h3>
                      <p className="text-sm text-[#7A7A7A]">React, Node, Python</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-baby-pink text-pink-custom rounded-lg">
                      <Palette size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-black font-playfair text-lg">Brand Identity</h3>
                      <p className="text-sm text-[#7A7A7A]">Figma, Logos, UI/UX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-baby-pink text-pink-custom rounded-lg">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-black font-playfair text-lg">Backend & API</h3>
                      <p className="text-sm text-[#7A7A7A]">SQL, MongoDB, AWS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors">
              <Code className="text-[#E0218A] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 font-playfair text-black">Full-Stack Dev</h3>
              <p className="text-[#7A7A7A] text-sm">React.js, Node.js, Python, SQL. Building robust, scalable applications.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors">
              <Palette className="text-[#E0218A] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 font-playfair text-black">Brand Identity</h3>
              <p className="text-[#7A7A7A] text-sm">Figma, UI/UX, Logo Design. Crafting memorable digital experiences.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors">
              <Database className="text-[#E0218A] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 font-playfair text-black">Backend Logic</h3>
              <p className="text-[#7A7A7A] text-sm">API Development, Database Management, Cloud Deployment (AWS).</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
         <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-white to-transparent -z-10"></div>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">The Person Behind the Code</h2>
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
                     <p className="text-3xl md:text-5xl text-[#E0218A] font-signature transform -rotate-2">Krysta McAlister</p>
                     <p className="text-sm text-[#7A7A7A] mt-1 font-playfair italic">Design. Code. Create.</p>
                     <p className="text-black font-bold mt-2">Nevada, Texas</p>
                </div>
            </div>

            <div className="prose prose-lg text-[#7A7A7A] mx-auto">
                <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#E0218A] first-letter:mr-3 first-letter:float-left font-playfair first-letter:font-playfair">
                My journey into technology wasn't fueled by a classroom, but by a drive for clarity and truth. 
                What started as a fascination with the logic and patterns behind digital systems evolved into a career-defining passion for development.
                </p>
                <p className="mb-6">
                Based in Nevada, Texas, I am a resilient problem-solver who believes that <strong>great design is functional</strong> and <strong>great code is invisible</strong>. 
                After my father—my biggest supporter—passed away just before my graduation, I committed myself to honoring his legacy by building a career defined by excellence, continuous learning, and unwavering reliability.
                </p>
                <p>
                Today, I offer a unique hybrid skillset: the ability to design a brand's visual soul (logos, typography, color theory) and the technical prowess to build the robust, secure systems that power it (React, Python, SQL). I don't just make things look good; I make them work beautifully.
                </p>
            </div>
             <div className="mt-8 text-center">
              <a 
                  href={resumeFile}
                  download="Krysta_McAlister_Resume_2025.pdf"
                  className="inline-flex items-center gap-2 text-[#E0218A] font-bold hover:underline font-playfair"
              >
                  <Download size={16} /> Download My Full Resume
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <Award className="mx-auto text-[#E0218A] mb-3" size={32} />
              <h3 className="font-bold text-black font-playfair text-lg">Meta Certified</h3>
              <p className="text-sm text-[#7A7A7A]">Back-End Developer</p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <Terminal className="mx-auto text-[#E0218A] mb-3" size={32} />
              <h3 className="font-bold text-black font-playfair text-lg">Cybersecurity</h3>
              <p className="text-sm text-[#7A7A7A]">Ethical Hacking (In Progress)</p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <Briefcase className="mx-auto text-[#E0218A] mb-3" size={32} />
              <h3 className="font-bold text-black font-playfair text-lg">Experience</h3>
              <p className="text-sm text-[#7A7A7A]">Freelance & Director Roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-baby-pink rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">Professional Experience</h2>
            <div className="w-24 h-1 bg-[#E0218A] mx-auto mb-6 rounded-full"></div>
            <p className="text-[#7A7A7A] font-playfair italic text-lg">Where design meets development in the real world.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pink-200 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#E0218A] text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-black font-playfair">The Grey Canvas</h3>
                    <p className="text-[#E0218A] font-medium">Freelance Full-Stack Developer</p>
                  </div>
                  <span className="text-xs font-bold text-[#E0218A] bg-pink-50 px-2 py-1 rounded uppercase tracking-wide mt-1 md:mt-0">Jun 2025 - Current</span>
                </div>
                <ul className="space-y-2 text-[#7A7A7A] text-sm list-disc pl-4 marker:text-pink-300">
                  <li>Architected full-stack applications using <strong>React.js</strong> frontends and <strong>Node.js/Python</strong> backends.</li>
                  <li>Designed database schemas using <strong>SQL and MongoDB</strong> for optimized performance.</li>
                  <li>Deployed secure, scalable applications to AWS and Heroku cloud platforms.</li>
                  <li>Provided end-to-end digital consulting for small business clients.</li>
                </ul>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white text-[#E0218A] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Palette size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-black font-playfair">K.W. Plumbing TX</h3>
                    <p className="text-[#E0218A] font-medium">Director of Digital & Business Development</p>
                  </div>
                  <span className="text-xs font-bold text-[#E0218A] bg-pink-50 px-2 py-1 rounded uppercase tracking-wide mt-1 md:mt-0">Jan 2024 - Feb 2025</span>
                </div>
                <ul className="space-y-2 text-[#7A7A7A] text-sm list-disc pl-4 marker:text-pink-300">
                  <li>Built the company's entire digital presence from scratch using <strong>React.js</strong>.</li>
                  <li>Designed the full brand identity system (Logo, Colors, Typography, Voice).</li>
                  <li>Developed custom internal APIs to track customer workflows and data.</li>
                  <li>Managed project lifecycles using agile practices and cross-functional collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-600 rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-[#E0218A] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#E0218A] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-pink-300 group-hover:bg-[#E0218A] group-hover:text-white transition-colors">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold font-playfair">Front-End Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'HTML5', 'CSS3 / Tailwind', 'Figma', 'UI/UX Principles', 'Responsive Design'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#E0218A] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-pink-300 group-hover:bg-[#E0218A] group-hover:text-white transition-colors">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold font-playfair">Back-End & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Express', 'REST APIs', 'AWS', 'Heroku', 'Netlify'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#E0218A] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-pink-300 group-hover:bg-[#E0218A] group-hover:text-white transition-colors">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold font-playfair">Data & Workflow</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'MongoDB', 'Firebase', 'Git/GitHub', 'Agile/Scrum', 'WCAG Accessibility'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
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
            
            {/* Project 1: KW Plumbing - CLICKABLE CASE STUDY */}
            <div className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-white/60">
              <div className="h-64 bg-baby-pink flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-pink-100 transition-colors">
                <div className="text-center">
                   <div className="text-5xl font-black text-white/50 font-playfair">KW</div>
                   <div className="text-sm font-bold text-pink-custom/50 mt-2 tracking-widest">PLUMBING TX</div>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col bg-white/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#E0218A] transition-colors font-playfair">K.W. Plumbing Rebrand & Web App</h3>
                <p className="text-[#7A7A7A] mb-6 text-sm leading-relaxed">
                  A comprehensive digital overhaul for a trade business. I managed the entire lifecycle from legal filing to logo design, finally delivering a React-based booking platform.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">React.js</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">Branding</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">Custom APIs</span>
                  </div>
                  <button 
                    onClick={() => setActiveCaseStudy(kwCaseStudyData)}
                    className="flex items-center text-[#E0218A] font-bold text-sm cursor-pointer hover:underline font-playfair italic"
                  >
                    View Case Study <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: The Grey Canvas - CLICKABLE CASE STUDY */}
            <div className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-white/60">
              <div className="h-64 bg-black flex items-center justify-center p-8 relative overflow-hidden">
                 <div className="text-center">
                   <div className="text-5xl font-thin text-white/20 tracking-tighter font-playfair">THE GREY</div>
                   <div className="text-lg font-bold text-white/30 tracking-[0.3em] mt-1">CANVAS</div>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col bg-white/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#E0218A] transition-colors font-playfair">Freelance Studio Architecture</h3>
                <p className="text-[#7A7A7A] mb-6 text-sm leading-relaxed">
                  Designed scalable full-stack architecture for a boutique agency. Focused on secure client data handling via Python backends and high-performance React frontends.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">Full Stack</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">Python/Flask</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white text-pink-custom rounded border border-pink-100">SQL</span>
                  </div>
                  <button 
                    onClick={() => setActiveCaseStudy(greyCanvasData)}
                    className="flex items-center text-[#E0218A] font-bold text-sm cursor-pointer hover:underline font-playfair italic"
                  >
                    View Architecture <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies Section */}
      <section id="testimonials" className="py-20 bg-slate-50 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <div className="absolute top-20 left-20 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl"></div>
           <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">Client Success Stories</h2>
            <div className="w-24 h-1 bg-[#E0218A] mx-auto mb-6 rounded-full"></div>
            <p className="text-[#7A7A7A] font-playfair italic text-lg">Real results from local businesses I've helped launch and grow.</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                name: "Alexis K.",
                role: "Owner, The Daily Crumb Bakery",
                quote: "Before The Grey Canvas, our little bakery had no online presence. Krysta created a stunning site that truly captures my brand. Within the first month, we saw a 50% increase in online orders!",
                stars: 5
              },
              {
                name: "Mark T.",
                role: "Founder, Peak Performance Training",
                quote: "The Grey Canvas delivered an amazing, affordable website. Clients can now easily find my services and book sessions. It's given me the confidence to attract my first steady stream of clients.",
                stars: 5
              },
              {
                name: "David L.",
                role: "Owner, Dependable Home Repairs",
                quote: "The Grey Canvas built us a simple, effective website that made us look legitimate. Now, when people search for 'handyman services near me,' we actually show up!",
                stars: 5
              },
              {
                name: "Emily R.",
                role: "Creator, Ember & Stone Designs",
                quote: "I needed a website that truly showcased my craft. The Grey Canvas created a beautiful online store that highlights my unique pieces. It's allowed me to turn browsers into buyers from day one.",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-panel p-8 rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 relative">
                <div className="absolute -top-4 -left-4 bg-[#E0218A] text-white p-3 rounded-full shadow-lg">
                  <Quote size={20} />
                </div>
                <div className="flex gap-1 text-yellow-400 mb-4 pl-2">
                   {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#7A7A7A] italic mb-6 font-playfair leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-pink-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-[#E0218A] font-bold font-playfair">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-[#E0218A] font-medium uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Case Studies */}
          <h3 className="text-3xl font-bold text-black mb-10 font-playfair text-center">Impact Highlights</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-2 bg-[#E0218A]"></div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold text-black font-playfair">The Bloom Box Florist</h4>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={14} /> +75% Inquiries
                  </span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-600">New local florist struggling with a basic social media presence; needed a professional platform for online orders.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-slate-600">Designed a visually captivating e-commerce website with easy navigation and integrated online ordering.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                <p className="text-[#E0218A] font-bold font-playfair text-sm">Result: Established as a go-to local florist in 3 months.</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold text-black font-playfair">Community Yoga Hub</h4>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Users size={14} /> Growth
                  </span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-600">New yoga studio needed an affordable way to list schedules and accept bookings without overwhelming their small team.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-slate-600">Built a user-friendly site with integrated scheduling features, prioritized for mobile responsiveness.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                <p className="text-purple-600 font-bold font-playfair text-sm">Result: Significant increase in class sign-ups & loyal following.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
         <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-white -z-10"></div>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-panel rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/60">
            <div className="bg-[#E0218A] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 font-playfair">Let's Connect</h3>
                <p className="text-pink-100 mb-8 leading-relaxed">
                  I am currently open to Website & Branding Specialist roles. Let's discuss how my hybrid skills can benefit your team.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-white" size={20} />
                    <span className="text-sm">krystamcalister@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-white" size={20} />
                    <span className="text-sm">(469) 785-7816</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-white" size={20} />
                    <span className="text-sm">Nevada, Texas</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-10 relative z-10">
                <a 
                  href="https://www.linkedin.com/in/krysta-mcalister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 cursor-pointer transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/kbabyyy13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 cursor-pointer transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="p-10 md:w-3/5 bg-white/60 backdrop-blur-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Subject</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all text-[#7A7A7A]">
                    <option>Hiring Inquiry</option>
                    <option>Freelance Project</option>
                    <option>Collaboration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all" placeholder="Tell me about the role..."></textarea>
                </div>
                <button className="w-full py-3 bg-[#E0218A] text-white rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 font-playfair tracking-wide">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-pink-100">
        <div className="container mx-auto px-6 text-center text-[#7A7A7A] text-sm">
          <p>© {new Date().getFullYear()} Krysta McAlister. Designed & Built with React & Tailwind.</p>
        </div>
      </footer>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white/90 backdrop-blur-xl w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-white">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-white rounded-full shadow-lg text-[#7A7A7A] hover:text-[#E0218A] transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="p-8 border-b border-pink-100 bg-white/50">
              <h2 className="text-3xl font-bold font-playfair text-black">{activeCaseStudy.title}</h2>
              <p className="text-[#E0218A] font-playfair italic">{activeCaseStudy.subtitle}</p>
            </div>

            {/* Modal Body - Custom Carousel Implementation */}
            <div className="flex-1 overflow-hidden relative bg-slate-50">
              <CaseStudyCarousel slides={activeCaseStudy.slides} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Internal Component for the Case Study Carousel
const CaseStudyCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 relative overflow-y-auto">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0 opacity-100 z-10' : 
              'translate-x-full opacity-0 z-0'
            }`}
          >
             <div className="h-full flex flex-col lg:flex-row p-8 lg:p-12 gap-10 items-center overflow-y-auto">
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-4 ring-pink-100 group transition-transform hover:scale-[1.02] duration-300">
                     <img 
                       src={slide.image} 
                       alt={slide.imageLabel} 
                       className="w-full h-full object-cover object-top"
                     />
                  </div>
                  <p className="text-center mt-4 text-xs font-bold tracking-widest text-[#E0218A] uppercase">
                    {slide.imageLabel}
                  </p>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <h3 className="text-3xl font-playfair font-bold text-black mb-6 border-l-4 border-pink-custom pl-4">
                     {slide.title}
                   </h3>
                   <div className="text-lg leading-relaxed">
                     {slide.content}
                   </div>
                </div>

             </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="p-6 bg-white border-t border-pink-100 flex justify-between items-center">
        <div className="flex gap-2">
           {slides.map((_, idx) => (
             <div 
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'w-8 bg-pink-custom' : 'w-2 bg-pink-200'}`}
             ></div>
           ))}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-pink-200 text-pink-custom hover:bg-pink-50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
             onClick={nextSlide}
             className="px-6 py-3 rounded-full bg-pink-custom text-white font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-transform active:scale-95 flex items-center gap-2"
          >
            Next Slide <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;