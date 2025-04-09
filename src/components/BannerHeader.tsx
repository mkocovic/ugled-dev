'use client';

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

function hexToRgba(hex: string, opacity: number): string {
  let r = 0, g = 0, b = 0;
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function BannerHeader() {
  const defaultLightImage = "/images/hero.webp";
  const defaultDarkImage = "/images/hero.webp";
=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Helper function to convert hex to rgba
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function BannerHeader() {
  // Default images (same for all pages)
  const defaultLightImage = "/images/hero.webp";
  const defaultDarkImage = "/images/hero.webp";

  // Detect dark mode by checking if <html> has the "dark" class
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

<<<<<<< HEAD

  const overlayColor = "#272727";
  const topOverlayOpacity = 0.1;  
  const bottomOverlayOpacity = 1; 
=======
  // Overlay settings (same on all pages)
  const overlayColor = "#272727";
  const topOverlayOpacity = 0.1;  // 10% opacity at the top
  const bottomOverlayOpacity = 1; // 100% opacity at the bottom
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20

  const topColor = hexToRgba(overlayColor, topOverlayOpacity);
  const bottomColor = hexToRgba(overlayColor, bottomOverlayOpacity);

  return (
    <section
      className="relative h-[50vh] bg-fixed bg-bottom bg-cover bg-no-repeat"
      style={{
<<<<<<< HEAD
        backgroundImage: `url('${isDarkMode ? defaultDarkImage : defaultLightImage}')`
      }}
    >

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${bottomColor} 0%, ${bottomColor} 10%, ${topColor} 100%)`,
          transform: 'scaleY(1.01)', 
        }}
      ></div>
=======
        backgroundImage: `url(${isDarkMode ? defaultDarkImage : defaultLightImage})`,
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Svi smo tu da vam pomognemo. Javite nam se i odgovorićemo vam u najkraćem mogućem roku.
          </p>
        </motion.div>
      </div>
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
    </section>
  );
}
