'use client';

import React from 'react';
import BannerHeader from '@/components/BannerHeader';
import { icons } from '@/config/icons';
import uslugeConfig from '@/config/usluge.json';

export default function ServicesPage() {
  return (
    <>
      <BannerHeader />

      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <h1 className="section-title text-center mb-12">
            {uslugeConfig.pageTitle}
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {uslugeConfig.services.map((service, index) => {
              const IconComponent = icons[service.icon];
              return (
                <div
                  key={index}
                  className="group p-8 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg shadow-lg transition-colors sm:hover:border-[rgba(182,155,95,0.4)]"
                >
                  <div className="mb-6 text-zinc-400 transition-colors sm:group-hover:text-white">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-light mb-8 text-center">
              {uslugeConfig.whyChooseTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {uslugeConfig.whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-zinc-800 rounded-lg transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-3 text-[var(--glow-color)]">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
