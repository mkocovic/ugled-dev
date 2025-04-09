'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './DesktopNavigation';
import { ChevronDown } from 'lucide-react';

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
  );
}
