'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm text-white hover:text-zinc-400 transition-colors"
    >
      <ArrowLeft size={16} />
      Go Back
    </button>
  );
}
