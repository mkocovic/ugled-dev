'use client';

import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import { motion } from 'framer-motion';
import galleryData from '@/config/galerija.json';
import BannerHeader from '@/components/BannerHeader';
=======
import { motion } from 'framer-motion';
import Image from 'next/image';
import BannerHeader from '@/components/BannerHeader';
import galleryData from '@/config/galerija.json';
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20

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

<<<<<<< HEAD
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
=======
export default function GalleryPage() {
  const data: GalerijaData = galleryData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(data.items);

  // Get unique categories from items
  const categories = Array.from(new Set(data.items.map(item => item.category)));

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(data.items);
    } else {
      setFilteredItems(
        data.items.filter((item) => item.category === selectedCategory)
      );
    }
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  }, [selectedCategory, data.items]);

  return (
    <>
<<<<<<< HEAD
=======
      {/* Reusable Banner (same on all pages) */}
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
      <BannerHeader />

      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
<<<<<<< HEAD
          <h1 className="section-title">Naša Galerija</h1>
          <p className="section-subtitle max-w-2xl mb-12">
            Istražite našu kolekciju proizvoda koji predstavljaju spoj inovativnog dizajna i vrhunske izrade.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Naša Galerija
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Istražite našu kolekciju proizvoda koji predstavljaju spoj inovativnog dizajna i vrhunske izrade.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Sve
            </button>
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
<<<<<<< HEAD
                className={`px-6 py-3 border rounded transition-colors ${
                  selectedCategory === category
                    ? 'border-white text-white'
                    : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
=======
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                }`}
              >
                {category}
              </button>
            ))}
          </div>

<<<<<<< HEAD
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
=======
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                    {item.subcategory && (
                      <p className="text-sm text-gray-300">{item.subcategory}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        </div>
      </div>
    </>
  );
}
