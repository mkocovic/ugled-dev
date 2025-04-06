<<<<<<< HEAD
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/config/icons";
import vrataConfig from "@/config/products/vrata/index.json";
import { LucideIcon } from "lucide-react";

type DoorBenefitIconKey = "Shield" | "Lock" | "Paintbrush";

=======
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { icons } from '@/config/icons';
import vrataConfig from '@/config/products/vrata/index.json';
import { LucideIcon } from 'lucide-react';

// Define a union type for the benefit icon keys used in the doors config.
type DoorBenefitIconKey = "Shield" | "Lock" | "Paintbrush";

// Create a mapping for benefit icons.
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
const benefitIconMapping: Record<DoorBenefitIconKey, LucideIcon> = {
  Shield: icons.Shield,
  Lock: icons.Lock,
  Paintbrush: icons.Paintbrush
};

export default function DoorsPage() {
  const { title, description, benefits, types, cta } = vrataConfig;

  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="section-title">{title}</h1>
        <p className="section-subtitle max-w-2xl">{description}</p>

        {/* Benefits Section */}
        {benefits && (
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, index) => {
              const IconComponent = benefitIconMapping[benefit.icon as DoorBenefitIconKey];
              return (
<<<<<<< HEAD
                <div key={index} className="p-6 border border-[var(--glow-color)]">
=======
                <div key={index} className="p-6 border specs-border">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                  <div className="text-zinc-400 mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-light mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Product Types */}
        <div className="space-y-24">
          {types?.map((type, index) => (
            <section key={index} className="scroll-mt-32" id={type.name.toLowerCase()}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px]">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-light mb-4">{type.name}</h2>
                  <p className="text-zinc-400 mb-8">{type.description}</p>
                  {type.features && (
                    <div className="space-y-4 mb-8">
                      <h3 className="text-xl font-light mb-4">Karakteristike:</h3>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-zinc-400">
                            <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link
                    href={`/proizvodi/vrata/${type.name.toLowerCase()}`}
                    className="button-primary"
                  >
                    Saznajte Više
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-light mb-6">{cta.title}</h2>
          <p className="text-zinc-400 mb-8">{cta.description}</p>
          <Link href={cta.buttonLink} className="button-primary">
            {cta.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
