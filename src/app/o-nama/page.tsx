// src/app/o-nama/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import oNamaConfig from '@/config/o-nama.json';
import BannerHeader from '@/components/BannerHeader';

export default function AboutPage() {
  return (
    <>
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
                fill
                className="object-cover"
              />
            </div>
          </div>

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
                <p className="text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
