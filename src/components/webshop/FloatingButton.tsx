'use client';

import { useWebshop } from './WebshopContext';
import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const { openModal } = useWebshop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Prikaži dugme samo kada je korisnik skrolovao preko hero sekcije
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={openModal}
      className="fixed bottom-8 right-8 bg-[var(--glow-color)] text-white px-6 py-4 rounded-full shadow-lg hover:bg-white hover:text-black transition-colors z-50"
      aria-label="Zatraži ponudu"
    >
      <span className="text-sm font-medium">Zatraži ponudu</span>
    </button>
  );
} 