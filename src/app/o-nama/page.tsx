// src/app/o-nama/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="section-title">O Nama</h1>
            <p className="text-zinc-400 mb-8">
              Sa više od decenije iskustva, Ugled je vodeća kompanija u proizvodnji i ugradnji 
              visokokvalitetnih prozora, vrata i ostalih građevinskih elemenata. Naš tim stručnjaka 
              kombinuje inovativna rešenja sa vrhunskim kvalitetom materijala.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Naša Vizija</h3>
                <p className="text-zinc-400">
                  Stvaranje prostora koji inspirišu, funkcionišu besprekorno i traju generacijama.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Naša Misija</h3>
                <p className="text-zinc-400">
                  Pružanje izuzetnih rešenja koja prevazilaze očekivanja klijenata.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
              alt="Moderna kancelarija" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h4 className="text-4xl font-light mb-2">150+</h4>
            <p className="text-zinc-400">Završenih Projekata</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-light mb-2">25</h4>
            <p className="text-zinc-400">Članova Tima</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-light mb-2">12</h4>
            <p className="text-zinc-400">Godina Iskustva</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-light mb-2">18</h4>
            <p className="text-zinc-400">Osvojenih Nagrada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
