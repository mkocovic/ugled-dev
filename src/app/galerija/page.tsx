<<<<<<< HEAD
=======
// src/app/galerija/page.tsx
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import galleryData from '@/config/galerija.json';
import BannerHeader from '@/components/BannerHeader';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  image: string;
  width: number;
  height: number;
}

interface GalerijaData {
  items: GalleryItem[];
}

const categories = [
  "Sve",
  "Prozori",
  "Vrata",
  "Roletne",
  "Komarnici",
  "Staklene Pregrade",
  "Klizni sistemi"
];

export default function GalleryPage() {
  const data: GalerijaData = galleryData;
  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(data.items);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const filtered =
      selectedCategory === "Sve"
        ? data.items
        : data.items.filter((item) => item.category === selectedCategory);
    setFilteredItems(filtered);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, data.items]);

  return (
    <>
<<<<<<< HEAD
=======
      {/* Reusable Banner (same on all pages) */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <BannerHeader />

      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <h1 className="section-title">Naša Galerija</h1>
          <p className="section-subtitle max-w-2xl mb-12">
            Istražite našu kolekciju proizvoda koji predstavljaju spoj inovativnog dizajna i vrhunske izrade.
          </p>

<<<<<<< HEAD
=======
          {/* Category Filter */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 border rounded transition-colors ${
                  selectedCategory === category
                    ? 'border-white text-white'
                    : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

<<<<<<< HEAD
=======
          {/* Gallery Grid */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
            </div>
          ) : filteredItems.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                          <p className="text-zinc-300">{item.category}</p>
                          {item.subcategory && (
                            <p className="text-zinc-400 text-sm mt-1">{item.subcategory}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-400">Nema pronađenih stavki za izabranu kategoriju.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
