'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderLogoProps {
  isScrolled: boolean;
  isMobile: boolean;
}

export default function HeaderLogo({ isScrolled, isMobile }: HeaderLogoProps) {
  if (isMobile) {
<<<<<<< HEAD
=======
    // On mobile devices, always show the small logo (no black container)
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
    return (
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </Link>
    );
  }

<<<<<<< HEAD
  return (
    <Link href="/" className="flex items-center">
      {!isScrolled ? (
=======
  // On desktop devices:
  return (
    <Link href="/" className="flex items-center">
      {!isScrolled ? (
        // Not scrolled: show the larger logo wrapped in a black container
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        <div className="bg-[var(--bg-color)] w-[240px] h-[180px] flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      ) : (
<<<<<<< HEAD
=======
        // Scrolled: show the small logo without container
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      )}
    </Link>
  );
}
