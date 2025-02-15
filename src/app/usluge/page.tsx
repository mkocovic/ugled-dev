// src/app/usluge/page.tsx
'use client';

import React from 'react';
import { Ruler, PenTool as Tools, Truck, Users } from 'lucide-react';

const services = [
  {
    icon: <Ruler size={40} />,
    title: "Merenje",
    description: "Precizno merenje i konsultacije na licu mesta za optimalne rezultate."
  },
  {
    icon: <Tools size={40} />,
    title: "Montaža",
    description: "Profesionalna ugradnja od strane obučenih stručnjaka."
  },
  {
    icon: <Truck size={40} />,
    title: "Dostava",
    description: "Sigurna i brza dostava na željenu lokaciju."
  },
  {
    icon: <Users size={40} />,
    title: "Konsultacije",
    description: "Stručne konsultacije i saveti za izbor najboljih rešenja."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="section-title">Naše Usluge</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-light mb-8">Zašto Izabrati Nas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-light mb-4">Stručnost</h4>
              <p className="text-zinc-400">
                Naš tim donosi godine iskustva i duboko poznavanje industrije u svaki projekat.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Kvalitet</h4>
              <p className="text-zinc-400">
                Koristimo samo najkvalitetnije materijale i najnovije tehnologije.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Podrška</h4>
              <p className="text-zinc-400">
                Pružamo potpunu podršku od prvog kontakta do završetka projekta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
