'use client';

import React, { useEffect, useState } from 'react';
import { useWebshop } from './WebshopContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function WebshopButton() {
  const { openQuoteModal } = useWebshop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = 400; // Approximate footer height

      // Show button when scrolling down and hide when near footer
      if (scrollPosition > windowHeight * 0.3 && scrollPosition < documentHeight - footerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openQuoteModal}
          className="fixed bottom-8 right-8 z-50 bg-[var(--glow-color)] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[var(--glow-color)]/90 transition-colors"
        >
          Zatraži ponudu
        </motion.button>
      )}
    </AnimatePresence>
  );
} 