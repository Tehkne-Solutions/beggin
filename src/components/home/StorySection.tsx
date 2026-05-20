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
      className="paper-texture relative overflow-hidden bg-[#f7f0df] px-0 py-20 lg:py-24"
    >
      <motion.div
        className="relative mx-auto w-[calc(100%-48px)] max-w-[1540px] overflow-hidden border border-[#b9a875]/38 bg-[#dfdecb] px-10 py-12 shadow-[0_22px_60px_rgba(47,42,28,0.08)] lg:w-[calc(100%-64px)] lg:px-16 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={panelMotion}
        transition={transition}
      >
        <div className="pointer-events-none absolute inset-[22px] z-[1] border border-[#b9a875]/32" />

        <motion.div
          className="pointer-events-none absolute bottom-[-54px] left-[-46px] z-[1] h-[230px] w-[230px] opacity-50 lg:h-[285px] lg:w-[285px]"
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

        <div className="relative z-[3] grid gap-8 lg:grid-cols-[1.1fr_1.18fr_0.22fr_1.58fr] lg:items-center lg:gap-0">
          <motion.div
            className="relative z-[5] flex min-h-[390px] flex-col justify-center"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.18 }}
          >
            <p className="font-serifDisplay text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.24em] text-beggin-ink">
              {storyContent.eyebrow}
              <span className="ml-3 text-beggin-gold">✧</span>
            </p>
            <h2 className="mt-7 max-w-[500px] font-serifDisplay text-[clamp(3rem,3.35vw,4.55rem)] font-semibold uppercase leading-[0.95] text-beggin-ink">
              De quatro amigos
              <br />
              para o mundo.
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

            <div className="relative mt-7 h-[58px] w-[58px] self-center opacity-72">
              <Image
                src={storyAssets.smallSun}
                alt=""
                fill
                className="object-contain"
                sizes="58px"
              />
            </div>

            <a
              href="#coqueteis"
              className="group relative z-[6] mt-8 inline-flex w-fit items-center gap-5 font-serifDisplay text-[18px] font-bold uppercase tracking-[0.13em] text-beggin-ink xl:text-[20px]"
            >
              <span className="border-b border-beggin-gold/80 pb-3 pr-10 transition-colors duration-300 group-hover:border-beggin-red">
                {storyContent.cta}
              </span>
              <span className="text-[16px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[18px]">✧</span>
            </a>
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
              alt="Foto Beggin com garrafa, caixa e taça"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 86vw, 395px"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none relative z-[10] mx-[-116px] h-[270px] w-[270px] justify-self-center"
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
              sizes="270px"
            />
          </motion.div>

          <motion.div
            className="relative z-[3] h-[320px] w-full max-w-[640px] lg:justify-self-start overflow-hidden bg-transparent lg:h-[330px]"
            initial="hidden"
            animate={controls}
            variants={photoMotion}
            transition={{ ...transition, delay: 0.32 }}
          >
            <Image
              src={storyAssets.photoRight}
              alt="Foto Beggin com garrafa e taça"
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
