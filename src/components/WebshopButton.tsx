'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWebshop } from './webshop/WebshopContext';

export default function WebshopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useWebshop();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={openModal}
          className="fixed bottom-6 right-6 bg-[var(--glow-color)] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[var(--glow-color)]/90 transition-colors z-50"
        >
          <span>Zatraži ponudu</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 