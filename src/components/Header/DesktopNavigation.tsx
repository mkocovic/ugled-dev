'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  dropdown?: NavItem[];
}

interface DesktopNavigationProps {
  navigation: NavItem[];
}

export default function DesktopNavigation({ navigation }: DesktopNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  let dropdownTimeout: NodeJS.Timeout | null = null;

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <nav className="hidden min-[990px]:block">
      <ul className="flex items-center space-x-6">
        {navigation.map((link) => (
          <li key={link.label} className="relative">
            {link.dropdown ? (
              <div
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
                className="h-full"
              >
                <button className="nav-link flex items-center gap-1 h-full">
                  {link.label}
                  <ChevronDown size={16} className="relative -top-[1px]" />
                </button>
                {activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-[var(--bg-color)] py-2"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white hover:text-zinc-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
