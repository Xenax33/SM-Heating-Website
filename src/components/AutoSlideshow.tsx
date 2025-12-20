'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AutoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/slideshow/6.jpg',
      alt: 'Professional heating installation',
      title: 'Professional Installation',
      description: 'Expert boiler and heating system installation',
    },
    {
      image: '/images/slideshow/2.jpeg',
      alt: 'Expert plumbing services',
      title: 'Plumbing Solutions',
      description: 'Comprehensive plumbing repairs and maintenance',
    },
    {
      image: '/images/slideshow/3.jpeg',
      alt: 'Boiler repair and maintenance',
      title: 'Boiler Services',
      description: 'Professional repair and servicing',
    },
    {
      image: '/images/slideshow/4.jpeg',
      alt: 'Central heating solutions',
      title: 'Heating Systems',
      description: 'Complete central heating solutions',
    },
    {
      image: '/images/slideshow/5.jpeg',
      alt: 'Professional technician at work',
      title: 'Expert Technicians',
      description: 'Certified and experienced professionals',
    },
    {
      image: '/images/slideshow/1.jpeg',
      alt: 'Boiler installation in progress',
      title: 'Quality Installation',
      description: 'Premium boiler installation services',
    },
    {
      image: '/images/slideshow/7.jpeg',
      alt: 'Internal heating system setup',
      title: 'System Setup',
      description: 'Complete system configuration and testing',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl group">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            
            {/* Premium Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Premium Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-12">
        <div className="text-center text-white max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="inline-block bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase border border-red-400/50">
              ⭐ Premium Service
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex gap-4 justify-center">
            <div className="h-1 w-12 bg-red-500 rounded-full"></div>
            <div className="h-1 w-4 bg-red-500/40 rounded-full"></div>
            <div className="h-1 w-4 bg-red-500/40 rounded-full"></div>
          </div>
        </div>
      </div>


      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-10 h-2.5 bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-600/50'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
          ></div>
        ))}
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>
    </div>
  );
}
