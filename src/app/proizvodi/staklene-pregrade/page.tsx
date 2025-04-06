<<<<<<< HEAD
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import staklenePregradeConfig from "@/config/products/staklene-pregrade/index.json";
import MiniGallery, { GalleryImage } from "@/components/MiniGallery";
import BackButton from "@/components/BackButton";
import { icons } from "@/config/icons";
import { LucideIcon, Volume2 } from "lucide-react";

type StaklenePregradeFeatureIconKey = "Maximize2" | "Sun" | "Waves" | "Shield";

=======
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import staklenePregradeConfig from '@/config/products/staklene-pregrade/index.json';
import MiniGallery, { GalleryImage } from '@/components/MiniGallery';
import BackButton from '@/components/BackButton';
import { icons } from '@/config/icons';
import { LucideIcon, Volume2 } from 'lucide-react';

// Define the union of icon keys used in the staklene-pregrade JSON
type StaklenePregradeFeatureIconKey = "Maximize2" | "Sun" | "Waves" | "Shield";

// Map icon keys to the actual icon components.
// Note: We map "Waves" to Volume2 as a substitute.
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
const featureIconMapping: Record<StaklenePregradeFeatureIconKey, LucideIcon> = {
  Maximize2: icons.Maximize2,
  Sun: icons.Sun,
  Waves: Volume2,
  Shield: icons.Shield
};

export default function StaklenePregradePage() {
<<<<<<< HEAD
  const { title, subtitle, heroImage, features, types, gallery, technicalSpecifications, cta } =
    staklenePregradeConfig;
=======
  const { title, subtitle, heroImage, features, types, gallery, technicalSpecifications, cta } = staklenePregradeConfig;
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01

  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
<<<<<<< HEAD
=======
        {/* Header: BackButton and Title */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between mb-4">
          <div className="mb-6 md:mb-0">
            <BackButton />
          </div>
          <h1 className="section-title">{title}</h1>
        </div>
        <p className="section-subtitle max-w-2xl mb-8">{subtitle}</p>

<<<<<<< HEAD
=======
        {/* Hero Image */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
        {/* Features Grid */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        {features && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature: any, index: number) => {
              const IconComponent = featureIconMapping[feature.icon as StaklenePregradeFeatureIconKey];
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="p-8 border border-[var(--glow-color)] transition-colors"
=======
                  className="p-8 border specs-border transition-colors hover:border-zinc-700"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
        {/* Types Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        {types && (
          <>
            <h2 className="text-3xl font-light mb-12">Vrste Staklenih Pregrada</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {types.map((type: any, index: number) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
<<<<<<< HEAD
                      className="object-cover transition-transform duration-500 min-[990px]:group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 min-[990px]:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
=======
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
        {gallery && <MiniGallery galleryImages={gallery as GalleryImage[]} />}

        {technicalSpecifications && (
          <div className="mb-24">
            <h2 className="text-3xl font-light mb-8">Tehničke Specifikacije</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {technicalSpecifications.left.map((spec: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px]"
                  >
                    <h3 className="font-light mb-2">{spec.title}</h3>
                    <p className="text-zinc-400">{spec.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {technicalSpecifications.right.map((spec: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 border border-[var(--glow-color)] h-[100px] md:h-[150px] lg:h-[100px]"
                  >
                    <h3 className="font-light mb-2">{spec.title}</h3>
                    <p className="text-zinc-400">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

=======
        {/* Mini Gallery Section */}
        {gallery && <MiniGallery galleryImages={gallery as GalleryImage[]} />}

        {/* Technical Specifications Section */}
        {technicalSpecifications && (
  <div className="mb-24">
    <h2 className="text-3xl font-light mb-8">Tehničke Specifikacije</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {technicalSpecifications.left.map((spec: any, index: number) => (
          <div
            key={index}
            className="p-4 border specs-border h-[100px] md:h-[150px] lg:h-[100px]"
          >
            <h3 className="font-light mb-2">{spec.title}</h3>
            <p className="text-zinc-400">{spec.description}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {technicalSpecifications.right.map((spec: any, index: number) => (
          <div
            key={index}
            className="p-4 border specs-border h-[100px] md:h-[150px] lg:h-[100px]"
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
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        {cta && (
          <div className="text-center">
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
