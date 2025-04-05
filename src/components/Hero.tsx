'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';
import homeConfig from '@/config/home.json';
import layoutConfig from '@/config/layout.json';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homeConfig.hero.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + homeConfig.hero.slides.length) % homeConfig.hero.slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      <div className="h-[101%] hidden min-[990px]:flex absolute left-0 top-0 bottom-0 w-[140px] bg-[var(--bg-color)] z-40 flex-col items-center justify-center social-left">
        <div className="flex flex-col gap-6">
          <a
            href={layoutConfig.footer.sections.social.links.facebook}
            className="min-[990px]:hover:text-zinc-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href={layoutConfig.footer.sections.social.links.twitter}
            className="min-[990px]:hover:text-zinc-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href={layoutConfig.footer.sections.social.links.instagram}
            className="min-[990px]:hover:text-zinc-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {homeConfig.hero.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1)',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="absolute bottom-32 left-8 min-[990px]:left-[180px] max-w-xl">
            <h2 className="text-4xl min-[990px]:text-6xl font-light mb-4">
              {slide.title}
            </h2>
            <p className="text-xl text-zinc-300">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-14 left-8 min-[990px]:left-[180px] flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-[var(--glow-color)] flex items-center justify-center min-[990px]:hover:bg-white min-[990px]:hover:text-black transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-[var(--glow-color)] flex items-center justify-center min-[990px]:hover:bg-white min-[990px]:hover:text-black transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-14 right-8 z-20 text-lg">
        <span className="font-bold">
          {(currentSlide + 1).toString().padStart(2, '0')}
        </span>
        <span className="mx-2">/</span>
        <span className="text-[var(--glow-color)]">
          {homeConfig.hero.slides.length.toString().padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
