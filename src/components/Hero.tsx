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
<<<<<<< HEAD
=======
      {/* Social Sidebar – only on screens ≥ 990px */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <div className="h-[101%] hidden min-[990px]:flex absolute left-0 top-0 bottom-0 w-[140px] bg-[var(--bg-color)] z-40 flex-col items-center justify-center social-left">
        <div className="flex flex-col gap-6">
          <a
            href={layoutConfig.footer.sections.social.links.facebook}
<<<<<<< HEAD
            className="min-[990px]:hover:text-zinc-400 transition-colors"
=======
            className="hover:text-zinc-400 transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          >
            <Facebook size={20} />
          </a>
          <a
            href={layoutConfig.footer.sections.social.links.twitter}
<<<<<<< HEAD
            className="min-[990px]:hover:text-zinc-400 transition-colors"
=======
            className="hover:text-zinc-400 transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          >
            <Twitter size={20} />
          </a>
          <a
            href={layoutConfig.footer.sections.social.links.instagram}
<<<<<<< HEAD
            className="min-[990px]:hover:text-zinc-400 transition-colors"
=======
            className="hover:text-zinc-400 transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {homeConfig.hero.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
=======
      {/* Hero Slides */}
      {homeConfig.hero.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
<<<<<<< HEAD
=======
          {/* Hero text container – pushed right on desktop */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <div className="absolute bottom-32 left-8 min-[990px]:left-[180px] max-w-xl">
            <h2 className="text-4xl min-[990px]:text-6xl font-light mb-4">
              {slide.title}
            </h2>
            <p className="text-xl text-zinc-300">{slide.subtitle}</p>
          </div>
        </div>
      ))}

<<<<<<< HEAD
      <div className="absolute bottom-14 left-8 min-[990px]:left-[180px] flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-[var(--glow-color)] flex items-center justify-center min-[990px]:hover:bg-white min-[990px]:hover:text-black transition-colors"
=======
      {/* Slider Controls – on mobile at left-8 and on desktop at left-[180px] */}
      <div className="absolute bottom-14 left-8 min-[990px]:left-[180px] flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
<<<<<<< HEAD
          className="w-12 h-12 border border-[var(--glow-color)] flex items-center justify-center min-[990px]:hover:bg-white min-[990px]:hover:text-black transition-colors"
=======
          className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>

<<<<<<< HEAD
=======
      {/* Slide Counter – always positioned at bottom-12 right-8 */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <div className="absolute bottom-14 right-8 z-20 text-lg">
        <span className="font-bold">
          {(currentSlide + 1).toString().padStart(2, '0')}
        </span>
        <span className="mx-2">/</span>
<<<<<<< HEAD
        <span className="text-[var(--glow-color)]">
=======
        <span className="text-zinc-500">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          {homeConfig.hero.slides.length.toString().padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
