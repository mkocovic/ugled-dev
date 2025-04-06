'use client';

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
<<<<<<< HEAD
  const defaultLightImage = "/images/hero.webp";
  const defaultDarkImage = "/images/hero.webp";
=======
  // Default images (same for all pages)
  const defaultLightImage =
    "https://webredox.net/demo/wp/bauen-demo/multi-classic-slider-dark/wp-content/uploads/sites/6/2021/09/banner.jpg";
  const defaultDarkImage =
    "https://webredox.net/demo/wp/bauen-demo/multi-classic-slider-light/wp-content/uploads/sites/31/2021/09/banner.jpg";

  // Detect dark mode by checking if <html> has the "dark" class
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
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
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01

  const topColor = hexToRgba(overlayColor, topOverlayOpacity);
  const bottomColor = hexToRgba(overlayColor, bottomOverlayOpacity);

  return (
    <section
<<<<<<< HEAD
      className="relative h-[50vh] bg-fixed bg-bottom bg-cover bg-no-repeat"
=======
      className="relative h-[50vh] bg-fixed bg-cover bg-no-repeat"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      style={{
        backgroundImage: `url('${isDarkMode ? defaultDarkImage : defaultLightImage}')`
      }}
    >
<<<<<<< HEAD

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${bottomColor} 0%, ${bottomColor} 10%, ${topColor} 100%)`,
          transform: 'scaleY(1.01)', 
        }}
      ></div>
=======
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${bottomColor} 0%, ${topColor} 100%)`
        }}
      ></div>
      {/* No content by default */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
    </section>
  );
}
