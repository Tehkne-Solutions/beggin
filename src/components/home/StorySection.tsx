'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { storyAssets, storyContent } from '@/data/story';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const floatIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible');
  }

  return (
    <section
      ref={ref}
      id="historia"
      className="relative min-h-[600px] overflow-hidden bg-beggin-paper py-16 md:py-24"
    >
      {/* Background texture layer */}
      <div
        className="absolute inset-0 z-0 paper-texture"
        aria-hidden="true"
      />

      {/* Main panel - sage green background */}
      <motion.div
        className="absolute inset-x-4 top-4 bottom-4 z-[1] mx-auto max-w-[1400px] rounded-sm bg-beggin-sage/80 md:inset-x-8 md:top-8 md:bottom-8"
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
      />

      {/* Ornamental frame */}
      <motion.div
        className="absolute inset-x-6 top-6 bottom-6 z-[2] mx-auto max-w-[1380px] rounded-sm border border-beggin-gold/30 md:inset-x-10 md:top-10 md:bottom-10"
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        variants={{
          hidden: { opacity: 0, scale: 0.97 },
          visible: { opacity: 1, scale: 1 },
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-[4] mx-auto flex h-full max-w-[1360px] flex-col items-center justify-center px-6 md:flex-row md:px-10">
        {/* Text content - left side */}
        <motion.div
          className="mb-10 md:mb-0 md:w-[28%] md:pr-8"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          variants={fadeInUp}
        >
          <p className="font-serifDisplay text-xs font-bold uppercase tracking-[0.22em] text-beggin-muted">
            {storyContent.label} ✦
          </p>
          <h2 className="mt-4 font-serifDisplay text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-beggin-ink md:text-5xl">
            {storyContent.title}
          </h2>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-beggin-muted">
            {storyContent.subtitle}
          </p>
          <p className="mt-6 text-sm leading-7 text-beggin-muted md:text-base">
            {storyContent.description}
          </p>
        </motion.div>

        {/* Gallery - photos and seal */}
        <div className="flex w-full items-center justify-center gap-4 md:w-[72%]">
          {/* Left photo */}
          <motion.div
            className="relative hidden w-[22%] md:block"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            variants={slideFromRight}
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 shadow-soft cursor-pointer">
              <Image
                src={storyAssets.photoLeft || '/images/home/beggin-home-hero-elemento-garrafa-principal.webp'}
                alt="Beggin garrafa - lado esquerdo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 220px"
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-beggin-gold/20 transition-all duration-500 group-hover:ring-beggin-gold/50" />
            </div>
          </motion.div>

          {/* Center seal */}
          <motion.div
            className="relative flex-shrink-0"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            variants={scaleIn}
          >
            <div className="relative h-28 w-28 md:h-36 md:w-36">
              <Image
                src={storyAssets.centerSeal || '/images/home/beggin-home-hero-elemento-selo.png'}
                alt="Selo Beggin"
                fill
                className="animate-sealSwingSoft object-contain"
                sizes="150px"
              />
            </div>
          </motion.div>

          {/* Right photo */}
          <motion.div
            className="relative hidden w-[28%] md:block"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            variants={slideFromLeft}
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 shadow-soft cursor-pointer">
              <Image
                src={storyAssets.photoRight || '/images/home/beggin-home-hero-elemento-garrafa-principal.webp'}
                alt="Beggin garrafa - lado direito"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 280px"
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-beggin-gold/20 transition-all duration-500 group-hover:ring-beggin-gold/50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Botanical decorations */}
      <motion.div
        className="pointer-events-none absolute -left-4 top-1/4 z-[3] hidden h-40 w-40 md:block"
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        variants={floatIn}
        aria-hidden="true"
      >
        <Image
          src={storyAssets.botanicalLeft || '/images/home/beggin-home-hero-elemento-erva-esquerda.png'}
          alt=""
          fill
          className="object-contain opacity-60"
          sizes="160px"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -right-4 bottom-1/4 z-[3] hidden h-40 w-40 md:block"
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        variants={floatIn}
        aria-hidden="true"
      >
        <Image
          src={storyAssets.botanicalRight || '/images/home/beggin-home-hero-elemento-erva-direita.png'}
          alt=""
          fill
          className="object-contain opacity-60"
          sizes="160px"
        />
      </motion.div>

      {/* Red wave accents */}
      <motion.div
        className="pointer-events-none absolute -bottom-2 left-1/2 z-[3] hidden h-12 w-32 -translate-x-1/2 md:block"
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        variants={floatIn}
        aria-hidden="true"
      >
        <Image
          src={storyAssets.redWaves || '/images/home/beggin-home-hero-elemento-bandeiras.png'}
          alt=""
          fill
          className="object-contain opacity-70"
          sizes="128px"
        />
      </motion.div>
    </section>
  );
}