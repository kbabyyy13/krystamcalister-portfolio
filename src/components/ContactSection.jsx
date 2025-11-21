import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'krystamcalister@outlook.com',
    href: 'mailto:krystamcalister@outlook.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(469) 785-7816',
    href: 'tel:(469) 785-7816'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nevada, Texas',
    href: null
  }
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/krysta-mcalister',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com/kbabyyy13',
    label: 'GitHub'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hiring Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
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
                {CONTACT_INFO.map((info, index) => {
                  const Icon = info.icon;
                  const Component = info.href ? 'a' : 'div';
                  return (
                    <Component
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 hover:text-pink-200 transition-colors"
                    >
                      <Icon className="text-white flex-shrink-0" size={20} aria-hidden="true" />
                      <div>
                        <p className="text-xs text-pink-100 uppercase tracking-wide">{info.label}</p>
                        <span className="text-sm">{info.value}</span>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-4 mt-10 relative z-10">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-10 md:w-3/5 bg-white/60 backdrop-blur-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#7A7A7A] mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#7A7A7A] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#7A7A7A] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all text-[#7A7A7A]"
                >
                  <option>Hiring Inquiry</option>
                  <option>Freelance Project</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#7A7A7A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:ring-2 focus:ring-[#E0218A] focus:border-[#E0218A] outline-none transition-all resize-none"
                  placeholder="Tell me about the role..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#E0218A] text-white rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 font-playfair tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
