'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  sustainabilityAssets,
  sustainabilityContent,
  sustainabilityItems,
} from '@/data/sustainability';
import { SustainabilityItem } from './sustainability/SustainabilityItem';

export function SustainabilitySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="sustentabilidade"
      className="paper-texture relative overflow-hidden bg-[#dfdec9] px-5 py-12 md:px-8 lg:py-14"
    >
      <div className="relative mx-auto min-h-[340px] max-w-[1500px]">
        <div className="pointer-events-none absolute left-[-44px] top-[26px] z-[1] hidden h-[310px] w-[190px] opacity-70 lg:block">
          <Image
            src={sustainabilityAssets.leftOrnament}
            alt=""
            fill
            sizes="190px"
            className="object-contain object-left-center"
          />
        </div>

        <div className="pointer-events-none absolute right-[72px] top-[58px] z-[2] hidden h-[24px] w-[48px] lg:block">
          <Image
            src={sustainabilityAssets.waves}
            alt=""
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>

        <div className="relative z-[2] grid min-h-[340px] items-center gap-10 lg:grid-cols-[0.30fr_0.70fr] xl:gap-14">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[360px] max-lg:mx-auto max-lg:text-center lg:pl-20 xl:pl-24"
          >
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-ink">
              {sustainabilityContent.eyebrow}
            </p>

            <div className="mt-3 h-px w-10 bg-beggin-gold/60 max-lg:mx-auto" />

            <h2 className="mt-7 font-serifDisplay text-[clamp(3.1rem,4.4vw,5.05rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-beggin-ink">
              {sustainabilityContent.title}
            </h2>

            <div className="relative mt-6 h-[22px] w-[44px] max-lg:mx-auto">
              <Image
                src={sustainabilityAssets.waves}
                alt=""
                fill
                sizes="44px"
                className="object-contain"
              />
            </div>

            <Link
              href="#sustentabilidade"
              className="group mt-12 inline-flex items-center gap-3 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.2em] text-beggin-ink"
            >
              <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
                {sustainabilityContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
                ✦
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
          >
            {sustainabilityItems.map((item, index) => (
              <SustainabilityItem
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                hasDivider={index !== sustainabilityItems.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
