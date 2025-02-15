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
  // Track open dropdowns by label
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div
      className={`fixed inset-0 bg-[var(--bg-color)] z-50 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
              <li key={link.label} className="text-center">
                {link.dropdown ? (
                  // Dropdown item (e.g. "Proizvodi")
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="text-4xl font-light text-white hover:text-zinc-400 transition-colors"
                    >
                      {/* Center the label+arrow as one group */}
                      <div className="inline-flex items-center gap-1">
                        <span>{link.label}</span>
                        <ChevronDown
                          size={24}
                          className={`transition-transform ${openDropdowns[link.label] ? 'rotate-180' : ''
                            }`}
                        />
                      </div>
                    </button>
                    {openDropdowns[link.label] && (
                      <ul className="flex flex-col items-center space-y-4 mt-2">
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-2xl font-light text-white hover:text-zinc-400 transition-colors"
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
                  // Regular link (no dropdown)
                  <Link
                    href={link.href}
                    className="text-4xl font-light text-white hover:text-zinc-400 transition-colors"
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
