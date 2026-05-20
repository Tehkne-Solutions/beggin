'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { awardsContent, awardAssets, awards } from '@/data/awards';
import { AwardSeal } from './awards/AwardSeal';

export function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="premios"
      className="paper-texture relative overflow-hidden bg-[#f7f0df] px-0 py-20 lg:py-24"
    >
      <div className="relative mx-auto grid w-[calc(100%-48px)] max-w-[1540px] items-center gap-12 border-y border-[#c8b98e]/30 py-14 lg:w-[calc(100%-64px)] lg:grid-cols-[0.28fr_0.72fr] lg:py-16">
        {/* Flor ornamental direita */}
        <div className="pointer-events-none absolute right-[-20px] top-1/2 z-[1] hidden h-[300px] w-[220px] -translate-y-1/2 opacity-65 lg:block">
          <Image
            src={awardAssets.flowerRight}
            alt=""
            fill
            className="object-contain object-right"
            sizes="260px"
          />
        </div>

        {/* Coluna Esquerda - Texto e CTA */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-serifDisplay text-[13px] font-bold uppercase tracking-[0.22em] text-beggin-ink xl:text-[14px]">
            {awardsContent.eyebrow}
            <span className="ml-3 text-beggin-gold">✧</span>
          </p>

          <h2 className="mt-7 max-w-[360px] font-serifDisplay text-[clamp(2.7rem,3.4vw,4.5rem)] font-semibold uppercase leading-[0.9] text-beggin-ink">
            Reconhecido.
            <br />
            Premiado.
          </h2>

          <div className="relative mt-7 h-[22px] w-[48px]">
            <Image
              src={awardAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>

          <a
            href="#"
            className="group relative z-[6] mt-9 inline-flex w-fit items-center gap-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink xl:text-[13px]"
          >
            <span className="border-b border-beggin-gold/80 pb-2 pr-8 transition-colors duration-300 group-hover:border-beggin-red">
              {awardsContent.cta}
            </span>
            <span className="text-[11px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[12px]">
              ✧
            </span>
          </a>
        </motion.div>

        {/* Coluna Direita - Selos */}
        <motion.div
          className="relative z-[3] grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {awards.map((award, index) => (
            <motion.div key={award.id} variants={itemVariants}>
              <AwardSeal
                title={award.title}
                image={award.image}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
