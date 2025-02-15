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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center p-12 sm:p-8 corner-border">
          <div>
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
                <Image src={image.url} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto p-12 sm:p-8 corner-border">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title">{homeConfig.featuredProjects.title}</h2>
              <p className="section-subtitle">{homeConfig.featuredProjects.subtitle}</p>
            </div>
            <Link href={homeConfig.featuredProjects.cta.link} className="button-outline">
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
                    <div className="text-center">
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

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
              alt="Instalacija prozora"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="section-title">{homeConfig.whyChoose.title}</h2>
            {homeConfig.whyChoose.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[var(--primary-color)] pl-6"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0c0c0c]">
        <div className="container mx-auto text-center">
          <h2 className="section-title text-white">{homeConfig.services.title}</h2>
          <p className="section-subtitle text-zinc-400 max-w-2xl mx-auto mb-12">
            {homeConfig.services.description}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {homeConfig.services.items.map((service, index) => (
              <div key={index} className="p-8 border border-zinc-800 bg-[#272727] text-white transition-colors hover:border-zinc-600">
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeConfig.stats.items.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-4xl font-light mb-2">{stat.value}</h4>
              <p className="text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners & Testimonials Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">{homeConfig.partnersTestimonials.title}</h2>
            <p className="text-zinc-400">{homeConfig.partnersTestimonials.description}</p>
          </div>

          {/* Partners Infinite Slider */}
          <div className="mb-20 py-8">
            <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
              {homeConfig.partnersTestimonials.partners.map((partner, index) => (
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
            {homeConfig.partnersTestimonials.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-800 p-8 rounded-lg relative"
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
                  <div>
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

      {/* Partners Section */}
      {homeConfig.partners && (
        <section className="py-24 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="section-title">{homeConfig.partners.title}</h2>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              {homeConfig.partners.logos.map((logo, index) => (
                <div key={index} className="w-36">
                  <Image src={logo} alt={`Partner ${index + 1}`} width={150} height={80} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto text-center max-w-3xl">
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
