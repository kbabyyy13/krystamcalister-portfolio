import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CaseStudyCarousel({ slides }) {
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
              index === currentIndex ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0'
            }`}
            role={index === currentIndex ? 'region' : undefined}
            aria-live={index === currentIndex ? 'polite' : undefined}
            aria-label={`Slide ${index + 1} of ${slides.length}`}
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
                <div className="text-lg leading-relaxed">{slide.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="p-6 bg-white border-t border-pink-100 flex justify-between items-center">
        <div className="flex gap-2" role="group" aria-label="Slide indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-pink-custom' : 'w-2 bg-pink-200'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex ? 'step' : undefined}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-pink-200 text-pink-custom hover:bg-pink-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-3 rounded-full bg-pink-custom text-white font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-transform active:scale-95 flex items-center gap-2"
            aria-label="Next slide"
          >
            Next Slide <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
