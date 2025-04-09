'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertCircle, Info, Mail, Phone, MapPin } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Scale className="w-8 h-8 text-[var(--glow-color)]" />
            Uslovi korišćenja
          </h1>

          <div className="space-y-8 text-zinc-400">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                1. Uvod
              </h2>
              <p className="text-lg leading-relaxed">
                Korišćenjem web stranice Ugled-a, prihvatate ove uslove korišćenja. Molimo vas da pažljivo pročitate ove uslove pre korišćenja našeg sajta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Shield className="w-6 h-6 text-[var(--glow-color)]" />
                2. Definicije
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>"Sajt" se odnosi na web stranicu Ugled-a</li>
                <li>"Korisnik" je svako ko koristi naš sajt</li>
                <li>"Uslovi" se odnosi na ove uslove korišćenja</li>
                <li>"Proizvodi" se odnosi na proizvode koje prodajemo</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-[var(--glow-color)]" />
                3. Intelektualno vlasništvo
              </h2>
              <p className="text-lg leading-relaxed">
                Sav sadržaj na sajtu, uključujući tekst, grafike, logotipe, slike, audio klipove, digitalne preuzimanja, podatkovne kompilacije i softver, vlasništvo je Ugled-a ili njegovih dobavljača i zaštićen je zakonima o autorskim pravima.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Info className="w-6 h-6 text-[var(--glow-color)]" />
                4. Korišćenje sajta
              </h2>
              <p className="text-lg leading-relaxed">
                Sajt je namenjen za legalno korišćenje u skladu sa svim primenjivim zakonima i propisima. Zabranjeno je:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Neovlašćeno kopiranje ili distribucija sadržaja</li>
                <li>Korišćenje sajta u ilegalne svrhe</li>
                <li>Pokušaj narušavanja sigurnosti sajta</li>
                <li>Korišćenje sajta za širenje malicioznog softvera</li>
                <li>Neovlašćeno korišćenje robnih marki i logotipa</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                5. Proizvodi i cene
              </h2>
              <p className="text-lg leading-relaxed">
                Zadržavamo pravo da u bilo kom trenutku izmenimo cene proizvoda. Sve cene su u dinarima i uključuju PDV. Proizvodi su dostupni dok traje zaliha.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Shield className="w-6 h-6 text-[var(--glow-color)]" />
                6. Odgovornost
              </h2>
              <p className="text-lg leading-relaxed">
                Ugled ne odgovara za bilo kakvu štetu koja može nastati korišćenjem ili nemogućnošću korišćenja sajta. Takođe, ne garantujemo da će sajt biti bez grešaka ili prekida.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Info className="w-6 h-6 text-[var(--glow-color)]" />
                7. Izmene uslova
              </h2>
              <p className="text-lg leading-relaxed">
                Zadržavamo pravo da u bilo kom trenutku izmenimo ove uslove. Sve izmene će biti objavljene na ovoj stranici. Nastavkom korišćenja sajta nakon izmena, prihvatate nove uslove.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                8. Raskid
              </h2>
              <p className="text-lg leading-relaxed">
                Možemo raskinuti ili suspendovati vaš pristup sajtu u slučaju kršenja ovih uslova. Takođe, možete raskinuti korišćenje sajta u bilo kom trenutku.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Shield className="w-6 h-6 text-[var(--glow-color)]" />
                9. Kontakt
              </h2>
              <p className="text-lg leading-relaxed">
                Za sva pitanja vezana za uslove korišćenja, možete nas kontaktirati na:
              </p>
              <div className="space-y-2 text-lg">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[var(--glow-color)]" />
                  info@ugled.rs
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[var(--glow-color)]" />
                  +381 11 1234 567
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--glow-color)]" />
                  Adresa kompanije, 11000 Beograd
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 