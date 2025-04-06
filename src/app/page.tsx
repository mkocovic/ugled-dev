"use client";

import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, Star } from "lucide-react";
import homeConfig from "@/config/home.json";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="overflow-hidden">
<<<<<<< HEAD
      <Hero />

=======
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="py-16 px-6 md:px-12"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
=======
        className="py-32 px-6 md:px-12"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="section-title mb-8">{homeConfig.about.title}</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                {homeConfig.about.description}
              </p>
              <Link
                href={homeConfig.about.cta.link}
<<<<<<< HEAD
                className="group inline-flex items-center gap-2 text-white sm:hover:text-[var(--glow-color)] transition-colors"
=======
                className="group inline-flex items-center gap-2 text-white hover:text-[var(--glow-color)] transition-colors"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
              >
                <span className="text-lg">{homeConfig.about.cta.text}</span>
                <ArrowRight
                  size={20}
<<<<<<< HEAD
                  className="sm:group-hover:translate-x-1 transition-transform"
=======
                  className="group-hover:translate-x-1 transition-transform"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                />
              </Link>
            </motion.div>

<<<<<<< HEAD
=======
            {/* Right Images */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {homeConfig.about.images.map((image, index) => (
                <div
                  key={index}
<<<<<<< HEAD
                  className={`relative w-full h-[400px] glass-effect rounded-lg overflow-hidden shadow-2xl ${index === 1 ? "mt-12" : ""
                    }`}
=======
                  className={`relative w-full h-[400px] glass-effect rounded-lg overflow-hidden shadow-2xl ${
                    index === 1 ? "mt-12" : ""
                  }`}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
<<<<<<< HEAD
                    className="object-cover transition-transform duration-700 sm:hover:scale-110"
=======
                    className="object-cover transition-transform duration-700 hover:scale-110"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
      {/* Featured Projects Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="py-16 px-6 md:px-12"
=======
        className="py-32 px-6 md:px-12"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="flex flex-col md:flex-row justify-between items-start mb-16"
=======
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          >
            <div className="text-left">
              <h2 className="section-title mb-4">
                {homeConfig.featuredProjects.title}
              </h2>
              <p className="section-subtitle max-w-2xl">
                {homeConfig.featuredProjects.subtitle}
              </p>
            </div>
            <Link
              href={homeConfig.featuredProjects.cta.link}
<<<<<<< HEAD
              className="group inline-flex items-center gap-2 text-white hover:text-[var(--glow-color)] transition-colors mt-4 md:mt-0"
=======
              className="group inline-flex items-center gap-2 text-white hover:text-[var(--glow-color)] transition-colors mt-6 md:mt-0"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
            >
              <span className="text-lg">
                {homeConfig.featuredProjects.cta.text}
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeConfig.featuredProjects.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden glass-effect rounded-lg shadow-2xl"
              >
                <div className="relative h-[500px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
<<<<<<< HEAD
                    className="object-cover transition-transform duration-700 sm:hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
=======
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
      {/* Features (Why Choose) Section (Simplified) */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="py-16 px-6 md:px-12"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
=======
        className="py-24 px-6 md:px-12"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text & Feature List */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-left"
          >
            <h2 className="section-title">{homeConfig.whyChoose.title}</h2>
            {homeConfig.whyChoose.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--glow-color)] pl-6"
              >
                <h3 className="text-xl font-semibold mb-2 gold-accent">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD

=======
          {/* Right Image */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
<<<<<<< HEAD
              src="/images/why_us.webp"
              alt="Instalacija prozora"
              fill
              className="object-cover transition-transform duration-700 sm:hover:scale-110"
=======
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
              alt="Instalacija prozora"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
            />
          </motion.div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
      {/* Partners & Testimonials Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="py-16 px-6 md:px-12"
=======
        className="py-32 px-6 md:px-12"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="section-title mb-6">
              {homeConfig.partnersAndTestimonials.title}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {homeConfig.partnersAndTestimonials.description}
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="mb-16 py-8">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              className="py-4"
            >
              {homeConfig.partnersAndTestimonials.partners.map(
                (partner, index) => (
                  <div
                    key={index}
                    className="mx-8 relative w-[200px] h-[200px] glass-effect rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-50 sm:group-hover:opacity-30 transition-all duration-300 transform sm:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="text-lg font-medium text-white opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                        {partner.name}
                      </h4>
                    </div>
                  </div>
                )
              )}
            </Marquee>
          </div>

=======
          {/* Partners Slider */}
          <div className="mb-32 py-8">
            <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
              {homeConfig.partnersAndTestimonials.partners.map((partner, index) => (
                <div
                  key={index}
                  className="mx-8 relative w-[200px] h-[200px] glass-effect rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-50 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-110"
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
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          <div className="grid md:grid-cols-3 gap-8">
            {homeConfig.partnersAndTestimonials.testimonials.map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-lg relative text-left"
                >
                  <Quote className="text-[var(--glow-color)] mb-6" size={32} />
                  <p className="text-zinc-300 mb-8 min-h-[120px] leading-relaxed">
                    {testimonial.content}
                  </p>
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
<<<<<<< HEAD
                      <p className="text-sm text-zinc-400">
                        {testimonial.role}
                      </p>
=======
                      <p className="text-sm text-zinc-400">{testimonial.role}</p>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                      <p className="text-sm text-[var(--glow-color)]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
<<<<<<< HEAD
                      <Star
                        key={i}
                        size={16}
                        className="text-[var(--glow-color)]"
                      />
=======
                      <Star key={i} size={16} className="text-[var(--glow-color)]" />
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
      {/* CTA Section */}
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="py-16 px-6 md:px-12"
=======
        className="py-32 px-6 md:px-12"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      >
        <div className="container mx-auto text-center max-w-3xl glass-effect p-16 rounded-lg">
          <h2 className="section-title mb-6">{homeConfig.cta.title}</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            {homeConfig.cta.description}
          </p>
          <Link
            href={homeConfig.cta.button.link}
<<<<<<< HEAD
            className="inline-block bg-[var(--glow-color)] text-white py-4 px-12 text-lg sm:hover:bg-white sm:hover:text-black transition-colors rounded"
=======
            className="inline-block bg-[var(--glow-color)] text-white py-4 px-12 text-lg hover:bg-white hover:text-black transition-colors rounded"
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
          >
            {homeConfig.cta.button.text}
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
