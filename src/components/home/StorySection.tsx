'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { MagneticLink } from '@/components/motion/MagneticLink';
import { storyAssets, storyContent } from '@/data/story';

const easeOut = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const panelMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const photoMotion = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function StoryTitle({ title }: { title: string }) {
  if (title === 'Do interior de São Paulo para o Mundo.') {
    return (
      <>
        Do interior de
        <br />
        São Paulo
        <br />
        para o Mundo.
      </>
    );
  }

  return <>{title}</>;
}

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.82, ease: easeOut };

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
        className="relative mx-auto min-h-[560px] w-[calc(100%-40px)] max-w-[1560px] overflow-hidden border border-[#b9a875]/38 bg-[#131413] px-8 py-12 text-[#f4efe3] shadow-[0_22px_60px_rgba(47,42,28,0.12)] sm:w-[calc(100%-56px)] lg:min-h-[520px] lg:w-[calc(100%-72px)] lg:px-14 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={panelMotion}
        transition={transition}
      >
        <div className="pointer-events-none absolute inset-[18px] z-[1] border border-[#b9a875]/32 lg:inset-[22px]" />

        <motion.div
          className="pointer-events-none absolute right-[30px] top-[52%] z-[3] hidden h-[28px] w-[54px] -translate-y-1/2 lg:block xl:right-[54px]"
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

        <div className="relative z-[3] grid gap-10 lg:grid-cols-[0.92fr_2.25fr] lg:items-center lg:gap-10 xl:gap-14">
          <motion.div
            className="relative z-[5] flex min-h-[380px] flex-col justify-center max-lg:text-center lg:max-w-[390px]"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.18 }}
          >
            <p className="font-serifDisplay text-[13px] font-bold uppercase tracking-[0.22em] text-[#f4efe3] xl:text-[14px]">
              {storyContent.eyebrow}
              <span className="ml-3 text-beggin-gold">✧</span>
            </p>
            <h2 className="mt-7 font-serifDisplay text-[clamp(2.75rem,3.65vw,4.45rem)] font-semibold uppercase leading-[0.88] tracking-[-0.035em] text-[#f4efe3]">
              <StoryTitle title={storyContent.title} />
            </h2>
            <div className="relative mt-7 h-[22px] w-[48px] max-lg:mx-auto" aria-hidden="true">
              <Image
                src={storyAssets.waves}
                alt=""
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>

            <motion.div
              className="relative mt-7 h-[78px] w-[78px] opacity-70 max-lg:mx-auto max-md:h-[58px] max-md:w-[58px]"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              aria-hidden="true"
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
              className="group relative z-[8] mt-8 inline-flex w-fit items-center gap-4 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.18em] text-[#f4efe3] max-lg:mx-auto xl:text-[14px]"
            >
              <span className="border-b border-beggin-gold/80 pb-2 pr-8 transition-colors duration-300 group-hover:border-beggin-red">
                {storyContent.cta}
              </span>
              <span className="text-[13px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[14px]">✧</span>
            </MagneticLink>
          </motion.div>

          <div className="relative z-[4] min-h-[360px] lg:min-h-[390px]">
            <div className="grid items-center gap-4 lg:grid-cols-2 xl:gap-5">
              <motion.div
                className="relative z-[3] h-[300px] w-full overflow-hidden bg-[#1b1c1a] lg:h-[330px] xl:h-[350px]"
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
                  sizes="(max-width: 768px) 86vw, 500px"
                />
              </motion.div>

              <motion.div
                className="relative z-[3] h-[300px] w-full overflow-hidden bg-[#1b1c1a] lg:h-[330px] xl:h-[350px]"
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
                  sizes="(max-width: 768px) 90vw, 500px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
