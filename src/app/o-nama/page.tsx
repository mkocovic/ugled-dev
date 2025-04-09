<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// src/app/o-nama/page.tsx
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
'use client';

import React from 'react';
import Image from 'next/image';
import oNamaConfig from '@/config/o-nama.json';
import BannerHeader from '@/components/BannerHeader';

export default function AboutPage() {
  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
      <BannerHeader />

      <main className="pt-32">
        <section className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="section-title mb-4">{oNamaConfig.title}</h1>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {oNamaConfig.description}
              </p>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={oNamaConfig.image.src}
                alt={oNamaConfig.image.alt}
<<<<<<< HEAD
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
=======
=======
      {/* Reusable Banner (same on all pages) */}
      <BannerHeader />

      {/* Main Content */}
      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          {/* First row: About text and Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="section-title">{oNamaConfig.title}</h1>
              <p className="text-zinc-400 mb-8">{oNamaConfig.description}</p>
            </div>
            <div className="relative h-[600px]">
              <Image 
                src={oNamaConfig.image.src} 
                alt={oNamaConfig.image.alt} 
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                fill
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                className="object-cover"
              />
            </div>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        </section>

        <section className="container mx-auto px-6 md:px-12 py-16 border-t border-zinc-800">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-6 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg">
              <h3 className="text-2xl font-light mb-4">{oNamaConfig.vision.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {oNamaConfig.vision.description}
              </p>
            </article>
            <article className="p-6 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg">
              <h3 className="text-2xl font-light mb-4">{oNamaConfig.mission.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {oNamaConfig.mission.description}
              </p>
            </article>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {oNamaConfig.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-4xl font-light mb-2 text-[var(--glow-color)]">
                  {stat.value}
                </h4>
<<<<<<< HEAD
=======
=======

          {/* Second row: Vision and Mission with border */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="p-4 border specs-border">
              <h3 className="text-2xl font-light mb-4">{oNamaConfig.vision.title}</h3>
              <p className="text-zinc-400">{oNamaConfig.vision.description}</p>
            </div>
            <div className="p-4 border specs-border">
              <h3 className="text-2xl font-light mb-4">{oNamaConfig.mission.title}</h3>
              <p className="text-zinc-400">{oNamaConfig.mission.description}</p>
            </div>
          </div>

          {/* Third row: Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {oNamaConfig.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-4xl font-light mb-2">{stat.value}</h4>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                <p className="text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </section>
      </main>
=======
<<<<<<< HEAD
        </section>
      </main>
=======
        </div>
      </div>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
    </>
  );
}
