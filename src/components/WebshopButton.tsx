'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWebshop } from './webshop/WebshopContext';

export default function WebshopButton() {
  const { openCartModal } = useWebshop();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    // Find the footer element
    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={openCartModal}
      className="fixed bottom-8 right-8 bg-[var(--glow-color)] text-white p-4 rounded-full shadow-lg hover:shadow-[var(--glow-color)]/20 transition-all z-50"
      aria-label="Webshop"
    >
      <ShoppingCart className="w-6 h-6" />
    </motion.button>
  );
} 