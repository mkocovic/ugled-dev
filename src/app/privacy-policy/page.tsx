'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-[var(--glow-color)]" />
            Politika privatnosti
          </h1>

          <div className="space-y-8 text-zinc-400">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-[var(--glow-color)]" />
                1. Uvod
              </h2>
              <p className="text-lg leading-relaxed">
                Ugled je posvećen zaštiti vaše privatnosti i ličnih podataka. Ova politika privatnosti opisuje kako prikupljamo, koristimo i štitimo vaše podatke kada koristite našu web stranicu.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Eye className="w-6 h-6 text-[var(--glow-color)]" />
                2. Prikupljanje podataka
              </h2>
              <p className="text-lg leading-relaxed">
                Prikupljamo sledeće vrste podataka:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Lični podaci (ime, prezime, email, telefon)</li>
                <li>Podaci o kompaniji (naziv, PIB, adresa)</li>
                <li>Podaci o naručivanju (adresa dostave, način plaćanja)</li>
                <li>Tehnički podaci (IP adresa, tip uređaja, pretraživač)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                3. Korišćenje podataka
              </h2>
              <p className="text-lg leading-relaxed">
                Vaše podatke koristimo u sledeće svrhe:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Obrađa vaših zahteva i narudžbina</li>
                <li>Komunikacija sa vama o vašim narudžbinama</li>
                <li>Slanje ponuda i promocija (samo sa vašim pristankom)</li>
                <li>Poboljšanje našeg servisa i korisničkog iskustva</li>
                <li>Zakonske obaveze i zaštita prava</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-[var(--glow-color)]" />
                4. Zaštita podataka
              </h2>
              <p className="text-lg leading-relaxed">
                Koristimo odgovarajuće tehničke i organizacione mere za zaštitu vaših podataka od neovlašćenog pristupa, izmene, otkrivanja ili uništenja.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Eye className="w-6 h-6 text-[var(--glow-color)]" />
                5. Prava korisnika
              </h2>
              <p className="text-lg leading-relaxed">
                Prema GDPR-u, imate sledeća prava:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Pravo na pristup vašim podacima</li>
                <li>Pravo na ispravku netačnih podataka</li>
                <li>Pravo na brisanje podataka ("pravo na zaborav")</li>
                <li>Pravo na ograničenje obrade</li>
                <li>Pravo na prenos podataka</li>
                <li>Pravo na prigovor</li>
                <li>Pravo na povlačenje pristanka</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                6. Kolačići (Cookies)
              </h2>
              <p className="text-lg leading-relaxed">
                Koristimo kolačiće za poboljšanje vašeg iskustva na našoj stranici. Možete kontrolisati kolačiće kroz podešavanja vašeg pretraživača.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-[var(--glow-color)]" />
                7. Kontakt
              </h2>
              <p className="text-lg leading-relaxed">
                Za sva pitanja vezana za privatnost i zaštitu podataka, možete nas kontaktirati na:
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

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--glow-color)]" />
                8. Izmene politike privatnosti
              </h2>
              <p className="text-lg leading-relaxed">
                Zadržavamo pravo da izmenimo ovu politiku privatnosti u bilo kom trenutku. Sve izmene će biti objavljene na ovoj stranici.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 