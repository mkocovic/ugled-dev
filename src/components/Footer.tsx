'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import layoutConfig from '@/config/layout.json';

export default function Footer() {
  const { footer } = layoutConfig;

  return (
    <footer className="bg-[var(--bg-color)] pt-24 pb-12 md:pl-[60px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="text-left">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-400">{footer.description}</p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-light mb-6">{footer.sections.quickLinks.title}</h4>
            <ul className="space-y-4">
              {layoutConfig.header.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-light mb-6">{footer.sections.contact.title}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <span>{footer.sections.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <span>{footer.sections.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                <span>{footer.sections.contact.email}</span>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-light mb-6">{footer.sections.social.title}</h4>
            <div className="flex gap-4">
              <a href={footer.sections.social.links.facebook} className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href={footer.sections.social.links.twitter} className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href={footer.sections.social.links.instagram} className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-center text-zinc-400">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
