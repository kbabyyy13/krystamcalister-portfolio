import React from 'react';
import { Quote, Star, TrendingUp, Users } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Alexis K.',
    role: 'Owner, The Daily Crumb Bakery',
    quote: 'Before The Grey Canvas, our little bakery had no online presence. Krysta created a stunning site that truly captures my brand. Within the first month, we saw a 50% increase in online orders!',
    stars: 5
  },
  {
    name: 'Mark T.',
    role: 'Founder, Peak Performance Training',
    quote: 'The Grey Canvas delivered an amazing, affordable website. Clients can now easily find my services and book sessions. It\'s given me the confidence to attract my first steady stream of clients.',
    stars: 5
  },
  {
    name: 'David L.',
    role: 'Owner, Dependable Home Repairs',
    quote: 'The Grey Canvas built us a simple, effective website that made us look legitimate. Now, when people search for \'handyman services near me,\' we actually show up!',
    stars: 5
  },
  {
    name: 'Emily R.',
    role: 'Creator, Ember & Stone Designs',
    quote: 'I needed a website that truly showcased my craft. The Grey Canvas created a beautiful online store that highlights my unique pieces. It\'s allowed me to turn browsers into buyers from day one.',
    stars: 5
  }
];

const CASE_STUDIES = [
  {
    name: 'The Bloom Box Florist',
    metric: '+75% Inquiries',
    metricIcon: TrendingUp,
    metricColor: 'text-green-700',
    metricBg: 'bg-green-100',
    challenge: 'New local florist struggling with a basic social media presence; needed a professional platform for online orders.',
    solution: 'Designed a visually captivating e-commerce website with easy navigation and integrated online ordering.',
    result: 'Established as a go-to local florist in 3 months.',
    resultColor: 'text-[#E0218A]'
  },
  {
    name: 'Community Yoga Hub',
    metric: 'Growth',
    metricIcon: Users,
    metricColor: 'text-purple-700',
    metricBg: 'bg-purple-100',
    challenge: 'New yoga studio needed an affordable way to list schedules and accept bookings without overwhelming their small team.',
    solution: 'Built a user-friendly site with integrated scheduling features, prioritized for mobile responsiveness.',
    result: 'Significant increase in class sign-ups & loyal following.',
    resultColor: 'text-purple-600'
  }
];

export default function TestimonialsSection() {
  return (
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
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[#E0218A] text-white p-3 rounded-full shadow-lg">
                <Quote size={20} aria-hidden="true" />
              </div>
              <div className="flex gap-1 text-yellow-400 mb-4 pl-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
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
          {CASE_STUDIES.map((caseStudy, index) => {
            const Icon = caseStudy.metricIcon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
                <div className={`h-2 ${index === 0 ? 'bg-[#E0218A]' : 'bg-purple-500'}`}></div>
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-bold text-black font-playfair">{caseStudy.name}</h4>
                    <span className={`${caseStudy.metricBg} ${caseStudy.metricColor} text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                      <Icon size={14} aria-hidden="true" /> {caseStudy.metric}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-slate-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-slate-600">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                  <p className={`${caseStudy.resultColor} font-bold font-playfair text-sm`}>Result: {caseStudy.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
