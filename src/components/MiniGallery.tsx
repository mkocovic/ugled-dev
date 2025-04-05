'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

export interface GalleryImage {
    url: string;
    title: string;
    description: string;
}

export interface MiniGalleryProps {
    galleryImages: GalleryImage[];
}

const MiniGallery: React.FC<MiniGalleryProps> = ({ galleryImages }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide, isAutoPlaying]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) =>
        Math.abs(offset) * velocity;

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide + newDirection + galleryImages.length) % galleryImages.length
        );
    };

    return (
        <div className="mb-24">
            <h2 className="text-3xl font-light mb-8">Galerija</h2>
            <div
                className="relative h-[600px] overflow-hidden rounded-lg"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.4 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(
                            e: MouseEvent | TouchEvent | PointerEvent,
                            info: PanInfo
                        ) => {
                            const { offset, velocity } = info;
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={galleryImages[currentSlide].url}
                                alt={galleryImages[currentSlide].title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-8 right-8 z-[1] flex items-center gap-4">
                    <button
                        className="w-12 h-12 flex items-center justify-center bg-black/50 text-white hover:bg-white hover:text-black transition-colors rounded-full"
                        onClick={() => paginate(-1)}
                        aria-label="Previous slide"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        className="w-12 h-12 flex items-center justify-center bg-black/50 text-white hover:bg-white hover:text-black transition-colors rounded-full"
                        onClick={() => paginate(1)}
                        aria-label="Next slide"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className="absolute bottom-8 left-8 z-[1] text-lg font-light">
                    <span className="text-2xl font-normal">
                        {(currentSlide + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="mx-2 text-zinc-400">/</span>
                    <span className="text-zinc-400">
                        {galleryImages.length.toString().padStart(2, "0")}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        key={currentSlide}
                    />
                </div>
            </div>

            <div className="p-4 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {galleryImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${currentSlide === index
                                ? "ring-2 ring-white"
                                : "opacity-50 hover:opacity-75"
                            }`}
                    >
                        <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            <div className="text-center mt-12">
  <Link
    href="/galerija"
    className="button-primary flex flex-row items-center gap-2 whitespace-nowrap"
  >
    <span>Pogledajte Celu Galeriju</span>
    <ArrowRight
      size={18}
      className="inline-block min-[990px]:group-hover:translate-x-1 transition-transform ml-2"
    />
  </Link>
</div>


        </div>
    );
};

export default MiniGallery;
