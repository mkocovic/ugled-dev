<<<<<<< HEAD
=======
// src/app/usluge/page.tsx
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
'use client';

import React from 'react';
import BannerHeader from '@/components/BannerHeader';
import { icons } from '@/config/icons';
import uslugeConfig from '@/config/usluge.json';

export default function ServicesPage() {
  return (
    <>
<<<<<<< HEAD
      <BannerHeader />

      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <h1 className="section-title text-center mb-12">
            {uslugeConfig.pageTitle}
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {uslugeConfig.services.map((service, index) => {
=======
      {/* Reusable Banner (same on all pages) */}
      <BannerHeader />

      {/* Main Content */}
      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <h1 className="section-title">{uslugeConfig.pageTitle}</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {uslugeConfig.services.map((service, index) => {
              // Look up the icon component from our config
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
              const IconComponent = icons[service.icon];
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="group p-8 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg shadow-lg transition-colors sm:hover:border-[rgba(182,155,95,0.4)]"
                >
                  <div className="mb-6 text-zinc-400 transition-colors sm:group-hover:text-white">
=======
                  className="group p-8 border border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-24">
<<<<<<< HEAD
            <h2 className="text-3xl font-light mb-8 text-center">
              {uslugeConfig.whyChooseTitle}
            </h2>
=======
            <h2 className="text-3xl font-light mb-8 text-center">{uslugeConfig.whyChooseTitle}</h2>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {uslugeConfig.whyChoose.map((item, index) => (
                <div
                  key={index}
<<<<<<< HEAD
                  className="p-6 border border-zinc-800 rounded-lg transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-3 text-[var(--glow-color)]">
                    {item.title}
                  </h4>
=======
                  className="p-6 border border-zinc-800 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
