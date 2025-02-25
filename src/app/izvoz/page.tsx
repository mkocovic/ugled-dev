// src/app/izvoz/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import izvozConfig from '@/config/izvoz.json';
import BannerHeader from '@/components/BannerHeader';
import { icons } from '@/config/icons';

export default function ExportPage() {
  return (
    <>
      {/* Reusable Banner (same on all pages) */}
      <BannerHeader />

      {/* Main Content */}
      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="section-title">{izvozConfig.introSection.title}</h1>
              <p className="text-zinc-400 mb-8">{izvozConfig.introSection.text}</p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={izvozConfig.introSection.imageSrc}
                alt={izvozConfig.introSection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {izvozConfig.features.map((feature, index) => {
              const IconComponent = icons[feature.icon];
              return (
                <div
                  key={index}
                  className="group p-4 border specs-border"
                >
                  <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Markets Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-light mb-8">
              {izvozConfig.markets.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {izvozConfig.markets.items.map((market, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-light mb-4">{market.title}</h4>
                  <p className="text-zinc-400">{market.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
