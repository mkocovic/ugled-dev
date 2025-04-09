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
    return (
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center">
      {!isScrolled ? (
        <div className="bg-[var(--bg-color)] w-[240px] h-[180px] flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />
      )}
    </Link>
  );
}
