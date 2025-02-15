// src/app/izvoz/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, TrendingUp, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: <Globe size={40} />,
    title: "Globalna Prisutnost",
    description: "Izvozimo naše proizvode širom sveta, garantujući kvalitet i pouzdanost."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Rast i Razvoj",
    description: "Kontinuirano širimo našu mrežu partnera i tržišta."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Sertifikati Kvaliteta",
    description: "Posedujemo sve potrebne međunarodne sertifikate."
  },
  {
    icon: <Truck size={40} />,
    title: "Logistika",
    description: "Obezbeđujemo siguran transport i praćenje pošiljki."
  }
];

export default function ExportPage() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="section-title">Izvoz</h1>
            <p className="text-zinc-400 mb-8">
              Kao lider u industriji, ponosni smo na našu sposobnost da isporučujemo 
              visokokvalitetne proizvode klijentima širom sveta. Naša posvećenost kvalitetu 
              i inovacijama učinila nas je pouzdanim partnerom na globalnom tržištu.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
              alt="Global export"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-light mb-8">Naša Tržišta</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-light mb-4">Evropska Unija</h4>
              <p className="text-zinc-400">
                Glavni izvozni partner sa dugogodišnjom tradicijom saradnje.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Bliski Istok</h4>
              <p className="text-zinc-400">
                Rastuće tržište sa velikim potencijalom za premium proizvode.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Severna Afrika</h4>
              <p className="text-zinc-400">
                Razvijamo nove poslovne prilike i partnerstva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
