'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { icons } from '@/config/icons';
import prozoriConfig from '@/config/products/prozori/index.json';

// Define a union type for the benefit icon keys that we expect.
type BenefitIconKey = "Shield" | "Zap" | "ThermometerSun";

// Create a mapping for benefit icons using our centralized icons.
const benefitIconMapping: Record<BenefitIconKey, typeof icons.Shield> = {
  Shield: icons.Shield,
  Zap: icons.Zap,
  ThermometerSun: icons.ThermometerSun
};

export default function WindowsPage() {
  const { title, description, benefits, types, cta } = prozoriConfig;

  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="section-title">{title}</h1>
        <p className="section-subtitle max-w-2xl">{description}</p>

        {/* Benefits Section */}
        {benefits && (
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, index) => {
              const IconComponent = benefitIconMapping[benefit.icon as BenefitIconKey];
              return (
                <div key={index} className="p-6 border specs-border">
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
                    href={`/proizvodi/prozori/${type.name.toLowerCase()}`}
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
