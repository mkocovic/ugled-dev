<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import drvoConfig from "@/config/products/prozori/drvo.json";
import MiniGallery, { GalleryImage } from "@/components/MiniGallery";
import BackButton from "@/components/BackButton";
import { icons } from "@/config/icons";
<<<<<<< HEAD
=======
=======
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MiniGallery, { GalleryImage } from '@/components/MiniGallery';
import BackButton from '@/components/BackButton';
import drvoConfig from '@/config/products/prozori/drvo.json';
import { icons } from '@/config/icons';
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20

const featureIconMapping: Record<string, React.ComponentType<{ className?: string }>> = {
  "Prirodni Materijal": icons.Leaf,
  "Precizna Izrada": icons.Shield,
  "Završna Obrada": icons.Paintbrush,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  "Zaštita": icons.Lock, 
};

export default function DrvoPage() {
  const { title, subtitle, heroImage, features, woodTypes, gallery, technicalSpecifications, cta } =
    drvoConfig;
<<<<<<< HEAD
=======
=======
  "Zaštita": icons.Shield,
};

export default function DrvoPage() {
  const { title, subtitle, heroImage, features, woodTypes, gallery, technicalSpecifications, cta } = drvoConfig;
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20

  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Back Button & Title */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between mb-4">
          <div className="mb-6 md:mb-0">
            <BackButton />
          </div>
          <h1 className="section-title">{title}</h1>
        </div>
        <p className="section-subtitle max-w-2xl mb-8">{subtitle}</p>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Hero Image */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        <div className="relative h-[600px] mb-24">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
          />
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Features Grid */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        {features && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature: any, index: number) => {
              const IconComponent = featureIconMapping[feature.title];
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="p-8 border border-[var(--glow-color)] transition-colors min-[990px]:hover:border-[var(--glow-color)]"
=======
<<<<<<< HEAD
                  className="p-8 border border-[var(--glow-color)] transition-colors min-[990px]:hover:border-[var(--glow-color)]"
=======
                  className="p-8 border specs-border transition-colors hover:border-zinc-700"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Wood Types Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                      className="object-cover transition-transform duration-500 min-[990px]:group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 min-[990px]:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<<<<<<< HEAD
=======
=======
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Mini Gallery Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        {gallery && (
          <MiniGallery galleryImages={gallery as GalleryImage[]} />
        )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {/* Technical Specifications Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        {technicalSpecifications && (
          <div className="mb-24">
            <h2 className="text-3xl font-light mb-8">Tehničke Specifikacije</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="grid gap-4">
                {technicalSpecifications.left.map((spec: any, index: number) => (
                  <div
                    key={index}
<<<<<<< HEAD
                    className="p-6 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
=======
<<<<<<< HEAD
                    className="p-6 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
=======
                    className="p-6 border specs-border h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
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
<<<<<<< HEAD
                    className="p-6 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
=======
<<<<<<< HEAD
                    className="p-6 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
=======
                    className="p-6 border specs-border h-[100px] md:h-[150px] lg:h-[100px] flex flex-col overflow-hidden"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                  >
                    <h3 className="font-light mb-2">{spec.title}</h3>
                    <p className="text-zinc-400">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

        {/* Call-to-Action Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
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
