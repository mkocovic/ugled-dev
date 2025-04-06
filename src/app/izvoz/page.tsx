<<<<<<< HEAD
=======
// src/app/izvoz/page.tsx
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
'use client';

import React from 'react';
import Image from 'next/image';
import izvozConfig from '@/config/izvoz.json';
import BannerHeader from '@/components/BannerHeader';
import { icons } from '@/config/icons';

export default function ExportPage() {
  return (
    <>
<<<<<<< HEAD
      <BannerHeader />
      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="section-title mb-4">
                {izvozConfig.introSection.title}
              </h1>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {izvozConfig.introSection.text}
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
=======
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
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
              <Image
                src={izvozConfig.introSection.imageSrc}
                alt={izvozConfig.introSection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

<<<<<<< HEAD
=======
          {/* Features Grid */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {izvozConfig.features.map((feature, index) => {
              const IconComponent = icons[feature.icon];
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="group p-4 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg shadow-lg transition-colors sm:hover:border-[rgba(182,155,95,0.4)]"
=======
                  className="group p-4 border specs-border"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                >
                  <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
<<<<<<< HEAD
=======

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
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        </div>
      </div>
    </>
  );
}
