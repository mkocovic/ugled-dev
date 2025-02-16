'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowRight as ArrowIcon, Quote, Star } from 'lucide-react';
import homeConfig from '@/config/home.json';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="section-title">{homeConfig.about.title}</h2>
            <p className="text-zinc-400 mb-8">{homeConfig.about.description}</p>
            <Link href={homeConfig.about.cta.link} className="button-outline">
              {homeConfig.about.cta.text} <ArrowIcon size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {homeConfig.about.images.map((image, index) => (
              <div
                key={index}
                className={`relative w-full h-[300px] ${index === 1 ? 'mt-8' : ''}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          {/* Header: Column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="text-left">
              <h2 className="section-title">{homeConfig.featuredProjects.title}</h2>
              <p className="section-subtitle">{homeConfig.featuredProjects.subtitle}</p>
            </div>
            <Link
              href={homeConfig.featuredProjects.cta.link}
              className="button-outline mt-4 md:mt-0"
            >
              {homeConfig.featuredProjects.cta.text} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {homeConfig.featuredProjects.projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-left">
                      <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                      <p className="text-zinc-300">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section II */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <h2 className="section-title">{homeConfig.whyChoose.title}</h2>
            {homeConfig.whyChoose.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[var(--glow-color)] pl-6"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
              alt="Instalacija prozora"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partners & Testimonials Section (Unified) */}
      <section className="py-24 px-6 md:px-12 text-white">
        <div className="container mx-auto">
          <div className="text-left lg:text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">{homeConfig.partnersAndTestimonials.title}</h2>
            <p className="text-zinc-400">{homeConfig.partnersAndTestimonials.description}</p>
          </div>

          {/* Partners Slider */}
          <div className="mb-20 py-8">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              className="py-4"
            >
              {homeConfig.partnersAndTestimonials.partners.map((partner, index) => (
                <div
                  key={index}
                  className="mx-8 relative w-[200px] h-[120px] bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.name}
                    </h4>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {homeConfig.partnersAndTestimonials.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-lg relative text-left border border-white"
              >
                <Quote className="text-[var(--primary-color)] mb-4" size={32} />
                <p className="text-zinc-300 mb-6 min-h-[120px]">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                    <p className="text-sm text-[var(--primary-color)]">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--primary-color)]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto text-left lg:text-center max-w-3xl">
          <h2 className="section-title">{homeConfig.cta.title}</h2>
          <p className="section-subtitle">{homeConfig.cta.description}</p>
          <Link href={homeConfig.cta.button.link} className="button-primary">
            {homeConfig.cta.button.text}
          </Link>
        </div>
      </section>
    </div>
  );
}
