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
      className="paper-texture relative overflow-hidden bg-[#f7f0df] px-5 py-20 lg:px-8 lg:py-24"
    >
      <motion.div
        className="relative mx-auto min-h-[560px] w-full max-w-[calc(100vw-64px)] overflow-hidden border border-[#c8b98e]/45 bg-[#dfe5cc] px-10 py-12 shadow-[0_22px_60px_rgba(47,42,28,0.08)] lg:min-h-[585px] lg:px-16 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={panelMotion}
        transition={transition}
      >
        <div className="pointer-events-none absolute inset-[22px] z-[1] border border-[#b9a875]/35" />

        <motion.div
          className="pointer-events-none absolute bottom-[-10px] left-[-8px] z-[1] h-[285px] w-[285px] opacity-75 lg:h-[360px] lg:w-[360px]"
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
            sizes="360px"
          />
        </motion.div>

        <div className="relative z-[3] grid gap-10 lg:grid-cols-[0.95fr_1.15fr_0.72fr_1.65fr] lg:items-center lg:gap-8">
          <motion.div
            className="relative z-[4] flex min-h-[430px] flex-col justify-center"
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

            <div className="relative mt-7 h-[58px] w-[58px]">
              <Image
                src={storyAssets.smallSun}
                alt=""
                fill
                className="object-contain opacity-75"
                sizes="58px"
              />
            </div>

            <a
              href="#coqueteis"
              className="group mt-10 inline-flex items-center gap-4 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
            >
              <span className="border-b border-beggin-gold/70 pb-3 transition-colors duration-300 group-hover:border-beggin-red">
                {storyContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">✧</span>
            </a>
          </motion.div>

          <motion.div
            className="relative z-[3] h-[330px] w-full overflow-hidden bg-transparent lg:h-[360px]"
            initial="hidden"
            animate={controls}
            variants={photoMotion}
            transition={{ ...transition, delay: 0.28 }}
          >
            <Image
              src={storyAssets.photoLeft}
              alt="Foto Beggin com garrafa, caixa e taça"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 86vw, 320px"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none relative z-[8] mx-[-34px] flex h-[220px] w-[220px] justify-self-center"
            initial="hidden"
            animate={controls}
            variants={sealMotion}
            transition={{ ...transition, delay: 0.36 }}
          >
            <Image
              src={storyAssets.centerSeal}
              alt="Selo central Beggin"
              fill
              className="object-contain"
              sizes="220px"
            />
          </motion.div>

          <motion.div
            className="relative z-[3] h-[330px] w-full overflow-hidden bg-transparent lg:h-[360px]"
            initial="hidden"
            animate={controls}
            variants={photoMotion}
            transition={{ ...transition, delay: 0.32 }}
          >
            <Image
              src={storyAssets.photoRight}
              alt="Foto Beggin com garrafa e taça"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 520px"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
