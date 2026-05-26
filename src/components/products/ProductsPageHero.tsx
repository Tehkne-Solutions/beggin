'use client';

import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroAssets } from '@/data/hero-assets';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProductsPageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 42, damping: 24, mass: 0.9 });
  const springY = useSpring(pointerY, { stiffness: 42, damping: 24, mass: 0.9 });

  const imageX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-12, 12]);
  const imageY = useTransform(springY, [-1, 1], shouldReduceMotion ? [0, 0] : [-7, 7]);
  const imageRotate = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-0.45, 0.45]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const scrollImageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 34]);
  const scrollTextY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -24]);
  const scrollFade = useTransform(scrollYProgress, [0, 0.82], [1, 0.82]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || event.pointerType === 'touch') {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      ref={heroRef}
      data-motion-skip
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-motion paper-texture relative min-h-[560px] overflow-hidden bg-[#FCF7F1] px-5 pt-[86px] md:px-8 lg:min-h-[650px] lg:pt-[76px] xl:min-h-[700px]"
    >
      <div className="absolute inset-0 bg-[#FCF7F1]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_58%_42%,rgba(185,154,93,0.22),transparent_34%),linear-gradient(90deg,rgba(252,247,241,1)_0%,rgba(252,247,241,0.54)_62%,rgba(252,247,241,0)_100%)]" />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.12, ease: easeOut }}
        className="pointer-events-none absolute inset-5 z-[2] hidden border border-[#b99a5d]/45 lg:block"
      />

      <motion.div
        style={{ x: imageX, y: imageY, rotate: imageRotate }}
        initial={shouldReduceMotion ? false : { opacity: 0, x: 72, y: 28, scale: 0.97, filter: 'blur(10px)' }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: [0, -3, 0], scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.38, ease: easeOut, y: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="pointer-events-none absolute bottom-[-8px] right-[2vw] top-[90px] z-[1] hidden w-[64vw] max-w-[980px] min-w-[760px] overflow-visible lg:block xl:right-[4vw] xl:w-[60vw]"
      >
        <motion.div style={{ y: scrollImageY }} className="relative h-full w-full">
          <Image
            src="/images/produtos/design-hero-page-produtos-bg.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 64vw, 980px"
            className="object-contain object-right-bottom drop-shadow-[0_28px_46px_rgba(48,35,18,0.12)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
        animate={shouldReduceMotion ? undefined : { opacity: 0.44, y: [0, -3, 0], scale: 1 }}
        transition={{ duration: 1, delay: 0.45, ease: easeOut, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
        className="pointer-events-none absolute inset-x-0 bottom-[-12px] top-[74px] z-[1] overflow-hidden lg:hidden"
      >
        <Image
          src="/images/produtos/design-hero-page-produtos-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-[75%_bottom]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,#FCF7F1_0%,rgba(252,247,241,0.98)_28%,rgba(252,247,241,0.68)_43%,rgba(252,247,241,0.2)_58%,rgba(252,247,241,0)_75%)] max-md:bg-[linear-gradient(180deg,rgba(252,247,241,0.96)_0%,rgba(252,247,241,0.76)_46%,rgba(252,247,241,0.2)_100%)]" />

      <motion.div
        style={{ y: scrollTextY, opacity: scrollFade }}
        className="relative z-[5] mx-auto flex min-h-[474px] max-w-[1500px] items-center lg:min-h-[574px] xl:min-h-[624px]"
      >
        <div className="max-w-[630px] pt-3 text-left max-lg:max-w-[500px] max-md:mx-auto max-md:max-w-[420px] max-md:pt-10 max-md:text-center">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, letterSpacing: '0.18em' }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, letterSpacing: '0.32em' }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="mb-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.32em] text-beggin-ink md:text-[11px]"
          >
            BEG Destilaria
          </motion.p>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.36, ease: easeOut }}
            className="mb-7 h-px w-20 origin-left bg-beggin-gold/70 max-md:mx-auto max-md:origin-center"
          />
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.05, delay: 0.48, ease: easeOut }}
            className="font-serifDisplay text-[clamp(2.25rem,3.85vw,4.45rem)] font-semibold uppercase leading-[0.96] tracking-[-0.045em] text-beggin-ink md:text-[clamp(2.55rem,4vw,4.75rem)]"
          >
            A sua melhor
            <br />
            experiência
            <br />
            em diferentes
            <br />
            versões.
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.72, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.78, ease: easeOut }}
            className="relative mt-7 h-[30px] w-[62px] wave-pulse max-md:mx-auto"
          >
            <Image src={heroAssets.waves} alt="" fill priority sizes="62px" className="object-contain" />
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.92, ease: easeOut }}
            className="mt-5 max-w-[430px] font-serifDisplay text-[1.12rem] font-semibold leading-[1.22] text-beggin-ink/86 md:text-[1.3rem] max-md:mx-auto"
          >
            Descubra a sua favorita.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
