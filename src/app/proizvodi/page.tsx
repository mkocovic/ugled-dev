"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerHeader from "@/components/BannerHeader";
import products from "@/config/products/index.json";

type Product = {
  title: string;
  description?: string;
  subtitle?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};

export default function ProductsPage() {
  const productEntries = Object.entries(products) as [string, Product][];

  return (
    <>
      <BannerHeader />

      <main className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <h1 className="section-title mb-8">Ugled 1952</h1>
          <p className="section-subtitle max-w-2xl mb-12">
            Otkrijte našu kolekciju prozora, vrata, roletni, komarnika, kliznih sistema i staklenih pregrada.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productEntries.map(([key, product]) => {
              const productText = product.description || product.subtitle || "";

              return (
                <Link
                  key={key}
                  href={`/proizvodi/${key}`}
                  className="group block border border-zinc-800 hover:border-zinc-600 transition-colors rounded-lg overflow-hidden"
                >
                  {product.heroImage && (
                    <div className="relative h-[300px]">
                      <Image
                        src={product.heroImage.src}
                        alt={product.heroImage.alt || product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-light mb-4">{product.title}</h2>
                    {productText && (
                      <p className="text-zinc-400 mb-4">{productText}</p>
                    )}
                    <span className="button-primary inline-block">
                      Saznajte više
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
