'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import layoutConfig from '@/config/layout.json';
import HeaderLogo from './HeaderLogo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import { NavItem } from './DesktopNavigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { navigation } = layoutConfig.header as { navigation: NavItem[] };

  useEffect(() => {
    const updateHeaderState = () => {
      if (window.innerWidth < 990) {
        // On mobile: always use the scrolled header style
        setIsMobile(true);
        setIsScrolled(true);
      } else {
        // On desktop: use scroll position (if scrollY > 50, use scrolled style)
        setIsMobile(false);
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Check on mount and on every scroll/resize
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState);
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 ${isMobile
        ? 'pl-6 pr-6 md:pr-12 py-4 bg-[var(--bg-color)]'
        : isScrolled
          ? 'pl-6 pr-6 md:pr-12 py-4 bg-[var(--bg-color)]'
          : 'pl-0 pr-6 md:pr-12 py-0 bg-transparent'
        }`}
    >
      <HeaderLogo isScrolled={isScrolled} isMobile={isMobile} />
      <DesktopNavigation navigation={navigation} />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block min-[990px]:hidden text-white hover:text-zinc-400 transition-colors"
      >
        <Menu size={20} />
      </button>
      <MobileMenu navigation={navigation} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
