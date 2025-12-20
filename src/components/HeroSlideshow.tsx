'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      image: '/images/slideshow/6.jpg',
      alt: '',
    },
    {
      image: '/images/slideshow/2.jpeg',
      alt: '',
    },
    {
      image: '/images/slideshow/3.jpeg',
      alt: '',
    },
    {
      image: '/images/slideshow/4.jpeg',
      alt: '',
    },
    {
      image: '/images/slideshow/5.jpeg',
      alt: '',
    },
    {
      image: '/images/slideshow/1.jpeg',
      alt: '',
    },
    {
      image: '/images/slideshow/7.jpeg',
      alt: '',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlay]);

  const nextSlide = () => {
    if (lightboxOpen) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      return;
    }
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const prevSlide = () => {
    if (lightboxOpen) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      return;
    }
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  return (
    <>
      <div className="relative w-full h-screen md:h-[600px] overflow-hidden group bg-black">
        {/* Animated Slides with Scale and Fade */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
                priority={index === 0}
                sizes="100vw"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40 transition-opacity duration-300 group-hover:from-black/30 group-hover:via-black/5 group-hover:to-black/30"></div>
              
              {/* Animated accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Premium Navigation - Left Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 group/btn z-40 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
          type="button"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-0 group-hover/btn:opacity-75 transition-all duration-300 scale-75"></div>
            <div className="relative bg-red-600 hover:bg-red-700 text-white rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 backdrop-blur-sm">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Premium Navigation - Right Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 group/btn z-40 transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
          type="button"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-0 group-hover/btn:opacity-75 transition-all duration-300 scale-75"></div>
            <div className="relative bg-red-600 hover:bg-red-700 text-white rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 backdrop-blur-sm">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>


        {/* Animated Slide Indicators - Premium */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group/indicator transition-all duration-300 relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-10 h-3 md:w-12 md:h-3 bg-red-600 shadow-lg shadow-red-600/50'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 hover:scale-125'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Animated Badge */}
        <div className="absolute bottom-8 right-6 bg-red-600/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold z-20 shadow-lg border border-red-400/30 animate-pulse cursor-pointer" onClick={() => setLightboxOpen(true)}>
          🔥 CLICK TO ENLARGE
        </div>
      </div>

      {/* Lightbox Modal - Enhanced */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('fixed') || target === e.currentTarget) {
              setLightboxOpen(false);
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-400 transition-all duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-[70vh] md:h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Full size image with animation */}
            <div className="relative w-full h-full animate-fadeIn">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                fill
                className="object-contain pointer-events-none"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Navigation - Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 text-white hover:text-red-400 transition-all duration-300 p-2 hover:scale-125"
              aria-label="Previous slide in lightbox"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Lightbox Navigation - Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 text-white hover:text-red-400 transition-all duration-300 p-2 hover:scale-125"
              aria-label="Next slide in lightbox"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Lightbox Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm backdrop-blur-md border border-red-600/50">
              {slides[currentSlide].alt} • {currentSlide + 1} of {slides.length}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
