'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './DesktopNavigation';
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './DesktopNavigation';
import { ChevronDown } from 'lucide-react';
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01

interface MobileMenuProps {
  navigation: NavItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  navigation,
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
<<<<<<< HEAD
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-[var(--bg-color)] shadow-xl z-50 overflow-y-auto"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-zinc-400 hover:text-[var(--glow-color)] transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Navigation */}
            <nav className="px-6">
              {navigation.map((link, index) => (
                <div key={link.label} className="relative">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.label)}
                        className="w-full flex items-center gap-2 p-4 text-zinc-400 hover:text-[var(--glow-color)] transition-all group"
                      >
                        <span className="text-lg">{link.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Submenu */}
                      <AnimatePresence>
                        {activeSubmenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-2">
                              {link.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center gap-2 p-3 text-zinc-400 hover:text-[var(--glow-color)] transition-all group"
                                >
                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                  <span>{subItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block p-4 text-lg text-zinc-400 hover:text-[var(--glow-color)] transition-all"
                    >
                      {link.label}
                    </Link>
                  )}
                  {index < navigation.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-start">
                      <div className="w-32 h-[2px] bg-gradient-to-r from-[var(--glow-color)] via-[var(--glow-color)] to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="px-6 mt-6 space-y-4">
              <h3 className="text-lg font-medium text-white">Kontakt</h3>
              <div className="space-y-3">
                <a href="tel:+381111234567" className="flex items-center gap-3 text-zinc-400 hover:text-[var(--glow-color)] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+381 11 1234 567</span>
                </a>
                <a href="mailto:info@ugled.rs" className="flex items-center gap-3 text-zinc-400 hover:text-[var(--glow-color)] transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@ugled.rs</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-5 h-5" />
                  <span>Adresa kompanije, 11000 Beograd</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-6 mt-6 pb-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-[var(--glow-color)] text-white px-6 py-3 rounded-lg hover:bg-[var(--glow-color)]/90 transition-all text-lg font-medium shadow-lg hover:shadow-[var(--glow-color)]/20"
              >
                Zatraži ponudu
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
=======
  // Track open dropdowns by label
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div
      className={`fixed inset-0 bg-[var(--bg-color)] z-50 transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-6 text-white hover:text-zinc-400 transition-colors text-4xl"
        >
          ×
        </button>
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col items-center space-y-6 py-10">
            {navigation.map((link) => (
              <li key={link.label} className="w-full text-center">
                {link.dropdown ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="w-full text-4xl font-light text-white hover:text-zinc-400 transition-colors relative"
                    >
                      <div className="relative inline-block">
                        <span>{link.label}</span>
                        <ChevronDown
                          size={24}
                          className={`absolute transition-transform duration-300 ${
                            openDropdowns[link.label] ? 'rotate-180' : 'rotate-0'
                          }`}
                          style={{
                            right: '-30px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                          }}
                        />
                      </div>
                    </button>
                    {openDropdowns[link.label] && (
                      <ul className="flex flex-col items-center space-y-4 mt-2 px-4 py-2 bg-zinc-800 rounded-md">
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-2xl font-light text-zinc-200 hover:text-zinc-400 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-center text-4xl font-light text-white hover:text-zinc-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
  );
}
