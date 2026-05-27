'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { awardsContent, awardAssets } from '@/data/awards';
import { Reveal } from '@/components/motion/Reveal';

const featuredMedals = [
  {
    src: '/images/premios/selo-premio-1.png',
    alt: 'Selo World Gin Awards Brazil Classic Winner',
  },
  {
    src: '/images/premios/selo-premio-2.png',
    alt: 'Selo World Gin Awards Gold',
  },
  {
    src: '/images/premios/selo-premio-3.png',
    alt: 'Selo World Gin Awards Brazil Colour Changing Winner',
  },
  {
    src: '/images/premios/1-main_std-iwsc2024-gold-98-medal-lores-png.png',
    alt: 'Medalha IWSC Gold 98 pontos 2024',
  },
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian IWSC 2024',
  },
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20Tonic%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian Tonic IWSC 2024',
  },
] as const;

export function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const stripVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="premios"
      className="paper-texture relative overflow-hidden bg-[#fefaf3] px-0 py-12 lg:py-14"
    >
      <div className="relative mx-auto grid w-[calc(100%-48px)] max-w-[1540px] items-center gap-9 border-y border-[#c8b98e]/30 py-10 lg:w-[calc(100%-64px)] lg:grid-cols-[0.28fr_0.72fr] lg:py-11">
        <div className="pointer-events-none absolute bottom-[-42px] right-[-128px] z-[1] hidden h-[340px] w-[260px] opacity-35 lg:block">
          <Image
            src={awardAssets.flowerRight}
            alt=""
            fill
            className="object-contain object-right-bottom"
            sizes="260px"
          />
        </div>

        <Reveal className="relative z-[3] space-y-6">
          <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.24em] text-beggin-ink xl:text-[13px]">
            {awardsContent.eyebrow}
            <span className="ml-3 text-beggin-gold">✧</span>
          </p>

          <h2 className="mt-5 max-w-[410px] font-serifDisplay text-[clamp(2.25rem,3.2vw,4.15rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-beggin-ink">
            {awardsContent.title.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="relative mt-6 h-[22px] w-[48px]">
            <Image
              src={awardAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>

          <a
            href="/premios"
            className="group relative z-[6] mt-6 inline-flex w-fit items-center gap-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink xl:text-[13px]"
          >
            <span className="border-b border-beggin-gold/80 pb-2 pr-8 transition-colors duration-300 group-hover:border-beggin-red">
              {awardsContent.cta}
            </span>
            <span className="text-[11px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[12px]">
              ✧
            </span>
          </a>
        </Reveal>

        <motion.div
          className="relative z-[3] w-full overflow-x-auto pb-2 lg:overflow-visible lg:pb-0"
          animate={controls}
          initial="hidden"
          variants={stripVariants}
        >
          <div className="mx-auto flex min-w-max items-center justify-center gap-3 px-1 sm:gap-4 lg:min-w-0 lg:gap-4 xl:gap-5">
            {featuredMedals.map((medal) => (
              <div key={medal.src} className="relative h-[132px] w-[132px] shrink-0 sm:h-[150px] sm:w-[150px] lg:h-[155px] lg:w-[155px] xl:h-[178px] xl:w-[178px] 2xl:h-[194px] 2xl:w-[194px]">
                <Image
                  src={medal.src}
                  alt={medal.alt}
                  fill
                  sizes="(max-width: 640px) 132px, (max-width: 1024px) 150px, (max-width: 1280px) 155px, 194px"
                  className="object-contain drop-shadow-[0_14px_22px_rgba(54,43,25,0.13)]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
