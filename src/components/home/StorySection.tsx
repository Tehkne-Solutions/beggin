'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { MagneticLink } from '@/components/motion/MagneticLink';
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
      className="paper-texture relative overflow-hidden bg-[#dfdec9] px-0 py-20 lg:py-24"
    >
      <motion.div
        className="relative mx-auto w-[calc(100%-48px)] max-w-[1540px] overflow-hidden border border-[#b9a875]/38 bg-[#131413] px-10 py-12 text-[#f4efe3] shadow-[0_22px_60px_rgba(47,42,28,0.12)] lg:w-[calc(100%-64px)] lg:px-16 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={panelMotion}
        transition={transition}
      >
        <div className="pointer-events-none absolute inset-[22px] z-[1] border border-[#b9a875]/32" />

        <motion.div
          className="pointer-events-none absolute bottom-[-72px] left-[-54px] z-[1] h-[220px] w-[220px] opacity-30 invert lg:h-[270px] lg:w-[270px]"
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

        <motion.div
          className="pointer-events-none absolute right-[50px] top-1/2 z-[3] hidden h-[28px] w-[54px] -translate-y-1/2 lg:block"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.5 }}
          aria-hidden="true"
        >
          <Image
            src={storyAssets.waves}
            alt=""
            fill
            className="object-contain"
            sizes="48px"
          />
        </motion.div>

        <div className="relative z-[3] grid gap-8 lg:grid-cols-[1.1fr_1.16fr_0.32fr_1.56fr] lg:items-center lg:gap-1">
          <motion.div
            className="relative z-[5] flex min-h-[390px] flex-col justify-center"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.18 }}
          >
            <p className="font-serifDisplay text-[13px] font-bold uppercase tracking-[0.22em] text-[#f4efe3] xl:text-[14px]">
              {storyContent.eyebrow}
              <span className="ml-3 text-beggin-gold">✧</span>
            </p>
            <h2 className="mt-7 max-w-[560px] font-serifDisplay text-[clamp(2.65rem,3.15vw,4.15rem)] font-semibold uppercase leading-[0.98] text-[#f4efe3]">
              {storyContent.title}
            </h2>
            <div className="relative mt-7 h-[22px] w-[48px]" aria-hidden="true">
              <Image
                src={storyAssets.waves}
                alt=""
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>

            <motion.div
              className="relative mt-7 h-[82px] w-[82px] self-center opacity-70 max-md:h-[58px] max-md:w-[58px]"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Image
                src={storyAssets.smallSun}
                alt=""
                fill
                className="object-contain invert"
                sizes="82px"
              />
            </motion.div>

            <MagneticLink
              href="/nossa-historia"
              className="group relative z-[8] mt-8 inline-flex w-fit items-center gap-4 font-serifDisplay text-[14px] font-bold uppercase tracking-[0.18em] text-[#f4efe3] xl:text-[15px]"
            >
              <span className="border-b border-beggin-gold/80 pb-2 pr-8 transition-colors duration-300 group-hover:border-beggin-red">
                {storyContent.cta}
              </span>
              <span className="text-[13px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[14px]">✧</span>
            </MagneticLink>
          </motion.div>

          <motion.div
            className="relative z-[3] h-[320px] w-full max-w-[430px] justify-self-end overflow-hidden bg-transparent lg:h-[330px]"
            initial="hidden"
            animate={controls}
            variants={photoMotion}
            transition={{ ...transition, delay: 0.28 }}
          >
            <Image
              src={storyAssets.photoLeft}
              alt="Foto Beg com garrafa, caixa e taça"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 86vw, 395px"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none relative z-[10] mx-[-126px] h-[315px] w-[315px] justify-self-center"
            initial="hidden"
            animate={controls}
            variants={sealMotion}
            transition={{ ...transition, delay: 0.36 }}
          >
            <Image
              src={storyAssets.centerSeal}
              alt="Selo central Beg"
              fill
              className="object-contain"
              sizes="315px"
            />
          </motion.div>

          <motion.div
            className="relative z-[3] h-[320px] w-full max-w-[640px] overflow-hidden bg-transparent lg:h-[330px] lg:justify-self-start"
            initial="hidden"
            animate={controls}
            variants={photoMotion}
            transition={{ ...transition, delay: 0.32 }}
          >
            <Image
              src={storyAssets.photoRight}
              alt="Foto Beg com garrafa e taça"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 610px"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
