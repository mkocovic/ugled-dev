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
<<<<<<< HEAD
=======
    // On mobile devices, always show the small logo (no black container)
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
    return (
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
<<<<<<< HEAD
          priority
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        />
      </Link>
    );
  }

<<<<<<< HEAD
  return (
    <Link href="/" className="flex items-center">
      {!isScrolled ? (
=======
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
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        <div className="bg-[var(--bg-color)] w-[240px] h-[180px] flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="object-contain"
<<<<<<< HEAD
            priority
          />
        </div>
      ) : (
=======
          />
        </div>
      ) : (
<<<<<<< HEAD
=======
        // Scrolled: show the small logo without container
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
<<<<<<< HEAD
          priority
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        />
      )}
    </Link>
  );
}
