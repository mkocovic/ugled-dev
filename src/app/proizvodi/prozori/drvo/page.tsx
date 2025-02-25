'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MiniGallery, { GalleryImage } from '@/components/MiniGallery';
import BackButton from '@/components/BackButton';
import drvoConfig from '@/config/products/prozori/drvo.json';
import { icons } from '@/config/icons';

const featureIconMapping: Record<string, React.ComponentType<{ className?: string }>> = {
  "Prirodni Materijal": icons.Leaf,
  "Precizna Izrada": icons.Shield,
  "Završna Obrada": icons.Paintbrush,
  "Zaštita": icons.Shield,
};

export default function DrvoPage() {
  const { title, subtitle, heroImage, features, woodTypes, gallery, technicalSpecifications, cta } = drvoConfig;

  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Back Button & Title */}
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between mb-4">
          <div className="mb-6 md:mb-0">
            <BackButton />
          </div>
          <h1 className="section-title">{title}</h1>
        </div>
        <p className="section-subtitle max-w-2xl mb-8">{subtitle}</p>

        {/* Hero Image */}
        <div className="relative h-[600px] mb-24">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Features Grid */}
        {features && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature: any, index: number) => {
              const IconComponent = featureIconMapping[feature.title];
              return (
                <div
                  key={index}
                  className="p-8 border specs-border transition-colors hover:border-zinc-700"
                >
                  {IconComponent && (
                    <div className="text-zinc-400 mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Wood Types Section */}
        {woodTypes && (
          <>
            <h2 className="text-3xl font-light mb-12">Vrste Drvenih Prozora</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {woodTypes.map((type: any, index: number) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-light mb-2">{type.name}</h3>
                      <p className="text-zinc-300">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Mini Gallery Section */}
        {gallery && (
          <MiniGallery galleryImages={gallery as GalleryImage[]} />
        )}

        {/* Technical Specifications Section */}
        {technicalSpecifications && (
          <div className="mb-24">
            <h2 className="text-3xl font-light mb-8">Tehničke Specifikacije</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="grid gap-4">
                {technicalSpecifications.left.map((spec: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 border specs-border h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
                  >
                    <h3 className="font-light mb-2">{spec.title}</h3>
                    <p className="text-zinc-400">{spec.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4">
                {technicalSpecifications.right.map((spec: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 border specs-border h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
                  >
                    <h3 className="font-light mb-2">{spec.title}</h3>
                    <p className="text-zinc-400">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* Call-to-Action Section */}
        {cta && (
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-light mb-6">{cta.title}</h2>
            <p className="text-zinc-400 mb-8">{cta.description}</p>
            <Link href={cta.buttonLink} className="button-primary">
              {cta.buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
