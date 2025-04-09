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
  const defaultLightImage = "/images/hero.webp";
  const defaultDarkImage = "/images/hero.webp";
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);


  const overlayColor = "#272727";
  const topOverlayOpacity = 0.1;  
  const bottomOverlayOpacity = 1; 

  const topColor = hexToRgba(overlayColor, topOverlayOpacity);
  const bottomColor = hexToRgba(overlayColor, bottomOverlayOpacity);

  return (
    <section
      className="relative h-[50vh] bg-fixed bg-bottom bg-cover bg-no-repeat"
      style={{
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
    </section>
  );
}
