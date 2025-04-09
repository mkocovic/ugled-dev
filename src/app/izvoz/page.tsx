'use client';

import React from 'react';
import Image from 'next/image';
import izvozConfig from '@/config/izvoz.json';
import BannerHeader from '@/components/BannerHeader';
import { icons } from '@/config/icons';

export default function ExportPage() {
  return (
    <>
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
              <Image
                src={izvozConfig.introSection.imageSrc}
                alt={izvozConfig.introSection.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {izvozConfig.features.map((feature, index) => {
              const IconComponent = icons[feature.icon];
              return (
                <div
                  key={index}
                  className="group p-4 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg shadow-lg transition-colors sm:hover:border-[rgba(182,155,95,0.4)]"
                >
                  <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
