'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { storyAssets, storyContent } from '@/data/story';

const easeOut = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const panelMotion = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const photoMotion = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const sealMotion = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

type StoryPhotoProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
};

function StoryPhoto({ src, alt, className, sizes }: StoryPhotoProps) {
  return (
    <div className={`relative overflow-hidden border border-white/70 bg-white p-2 shadow-[0_22px_46px_rgba(47,42,28,0.16)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: easeOut };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      id="historia"
      className="paper-texture relative overflow-hidden bg-[#f7f0df] px-6 py-20 lg:px-8 lg:py-24"
    >
      <motion.div
        className="relative mx-auto w-full max-w-[1540px] overflow-hidden border border-[#c8b98e]/45 bg-[#dfe5cc] px-8 py-10 shadow-[0_22px_60px_rgba(47,42,28,0.08)] sm:px-12 lg:px-16 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={panelMotion}
        transition={transition}
      >
        <div className="pointer-events-none absolute inset-[22px] z-[1] border border-[#b9a875]/35" />

        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 z-[1] hidden h-[260px] w-[260px] opacity-75 sm:block sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.45 }}
          aria-hidden="true"
        >
          <Image
            src={storyAssets.botanicalLeft}
            alt=""
            fill
            className="object-contain object-left-bottom"
            sizes="340px"
          />
        </motion.div>

        <div className="pointer-events-none absolute right-8 top-[32%] hidden h-[148px] w-[78px] rounded-full border border-beggin-red/15 bg-beggin-red/5 opacity-70 md:block" aria-hidden="true" />

        <div className="relative z-[3] grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-end lg:gap-14">
          <motion.div
            className="relative z-[3] max-w-[460px] pt-6 lg:pt-0"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.18 }}
          >
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-ink">
              {storyContent.eyebrow}
              <span className="ml-3 text-beggin-gold">✧</span>
            </p>
            <h2 className="mt-7 max-w-[440px] font-serifDisplay text-[clamp(2.7rem,3.55vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-normal text-beggin-ink">
              {storyContent.title}
            </h2>
            <div className="mt-7 flex h-4 w-10 flex-col justify-between" aria-hidden="true">
              <span className="h-[2px] w-full rounded-full bg-beggin-red" />
              <span className="h-[2px] w-full rounded-full bg-beggin-red" />
              <span className="h-[2px] w-full rounded-full bg-beggin-red" />
            </div>

            <div className="relative mt-8 h-[64px] w-[64px]">
              <Image
                src={storyAssets.smallSun}
                alt=""
                fill
                className="object-contain opacity-75"
                sizes="64px"
              />
            </div>

            <a
              href="#coqueteis"
              className="group mt-14 inline-flex items-center gap-4 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
            >
              <span className="border-b border-beggin-gold/70 pb-3 transition-colors duration-300 group-hover:border-beggin-red">
                {storyContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">✧</span>
            </a>
          </motion.div>

          <div className="relative">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[5] flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 sm:h-[220px] sm:w-[220px]"
              initial="hidden"
              animate={controls}
              variants={sealMotion}
              transition={{ ...transition, delay: 0.52 }}
              aria-hidden="true"
            >
              <Image
                src={storyAssets.centerSeal}
                alt=""
                fill
                className="animate-sealSwingSoft object-contain"
                sizes="220px"
              />
            </motion.div>

            <div className="relative z-[2] flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-end">
              <motion.div
                className="relative h-[280px] w-[260px] overflow-hidden rounded-[24px] border border-white/70 bg-white p-2 shadow-[0_22px_46px_rgba(47,42,28,0.16)] sm:h-[320px] sm:w-[300px] sm:translate-x-6"
                initial="hidden"
                animate={controls}
                variants={photoMotion}
                transition={{ ...transition, delay: 0.34 }}
              >
                <Image
                  src={storyAssets.photoLeft}
                  alt="Foto Beggin com garrafa, caixa e taça"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 32vw, 300px"
                />
              </motion.div>

              <motion.div
                className="relative h-[280px] w-[480px] overflow-hidden rounded-[24px] border border-white/70 bg-white p-2 shadow-[0_22px_46px_rgba(47,42,28,0.16)] sm:h-[320px] sm:w-[520px] sm:-translate-x-6"
                initial="hidden"
                animate={controls}
                variants={photoMotion}
                transition={{ ...transition, delay: 0.42 }}
              >
                <Image
                  src={storyAssets.photoRight}
                  alt="Foto Beggin com kit, garrafa e taça"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 54vw, 520px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
