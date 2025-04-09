'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, Instagram, Phone, Mail, MapPin, Clock, 
  Building2, ArrowRight, ChevronRight, Linkedin
} from 'lucide-react';
import layoutConfig from '@/config/layout.json';
import { motion } from 'framer-motion';
import { useWebshop } from './webshop/WebshopContext';

export default function Footer() {
  const { footer } = layoutConfig;
  const { openQuoteModal } = useWebshop();

  return (
    <footer className="bg-[var(--bg-color)]">
      {/* Separator na početku */}
      <div className="flex justify-center py-12">
        <div className="w-96 h-[2px] bg-gradient-to-r from-transparent via-[var(--glow-color)] to-transparent"></div>
      </div>

      {/* Glavni sadržaj */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Gornji deo - Glavne informacije */}
        <div className="grid md:grid-cols-4 gap-12 py-24 border-b border-zinc-800">
          {/* Logo i opis */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-400 leading-relaxed text-lg">{footer.description}</p>
            <div className="flex items-center gap-4">
              <a 
                href={footer.sections.social.links.facebook} 
                className="p-3 rounded-full bg-zinc-900/50 text-zinc-400 hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={footer.sections.social.links.instagram} 
                className="p-3 rounded-full bg-zinc-900/50 text-zinc-400 hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-zinc-900/50 text-zinc-400 hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Brzi linkovi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-xl font-medium text-white flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-[var(--glow-color)]" />
              {footer.sections.quickLinks.title}
            </h4>
            <ul className="space-y-4">
              {layoutConfig.header.navigation.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors flex items-center gap-2 group text-lg"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openQuoteModal}
                  className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors flex items-center gap-2 group text-lg w-full text-left"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  Zatraži ponudu
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Kontakt informacije */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-xl font-medium text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[var(--glow-color)]" />
              {footer.sections.contact.title}
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-400 group">
                <MapPin className="w-5 h-5 text-[var(--glow-color)] mt-1" />
                <div>
                  <span className="block text-lg group-hover:text-white transition-colors">{footer.sections.contact.address}</span>
                  <span className="text-sm text-zinc-500">Srbija</span>
                </div>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 group">
                <Phone className="w-5 h-5 text-[var(--glow-color)]" />
                <a href={`tel:${footer.sections.contact.phone}`} className="text-lg group-hover:text-white transition-colors">
                  {footer.sections.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 group">
                <Mail className="w-5 h-5 text-[var(--glow-color)]" />
                <a href={`mailto:${footer.sections.contact.email}`} className="text-lg group-hover:text-white transition-colors">
                  {footer.sections.contact.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Radno vreme */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-xl font-medium text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[var(--glow-color)]" />
              Radno vreme
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-zinc-400 group">
                <div className="flex items-center justify-between w-[200px]">
                  <span className="text-lg group-hover:text-white transition-colors">Pon - Pet</span>
                  <span className="text-lg group-hover:text-white transition-colors">09:00 - 17:00</span>
                </div>
              </li>
              <li className="flex items-center text-zinc-400 group">
                <div className="flex items-center justify-between w-[200px]">
                  <span className="text-lg group-hover:text-white transition-colors">Subota</span>
                  <span className="text-lg group-hover:text-white transition-colors">09:00 - 13:00</span>
                </div>
              </li>
              <li className="flex items-center text-zinc-400 group">
                <div className="flex items-center justify-between w-[200px]">
                  <span className="text-lg group-hover:text-white transition-colors">Nedelja</span>
                  <span className="text-lg group-hover:text-white transition-colors">Zatvoreno</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Zlatni separator */}
        <div className="flex justify-center py-12">
          <div className="w-72 h-[2px] bg-gradient-to-r from-transparent via-[var(--glow-color)] to-transparent"></div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-zinc-400 text-lg">{footer.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors text-lg">
                Politika privatnosti
              </Link>
              <Link href="/terms" className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors text-lg">
                Uslovi korišćenja
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
