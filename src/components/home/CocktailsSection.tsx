'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cocktails, cocktailsContent, cocktailAssets } from '@/data/cocktails';

const cardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    y: 60 + index * 15,
    rotate: index % 2 === 0 ? -2 : 1.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function CocktailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible');
  }

  return (
    <section
      ref={ref}
      id="coquetéis"
      className="relative min-h-[700px] overflow-hidden bg-beggin-paper py-20 md:py-28"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 paper-texture"
        aria-hidden="true"
      />

      {/* Decorative botanical elements */}
      <motion.div
        className="pointer-events-none absolute -left-8 top-20 z-[1] hidden h-48 w-48 md:block"
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        variants={fadeInUp}
        aria-hidden="true"
      >
        <Image
          src={cocktailAssets.decorativeBotanical || '/images/home/beggin-home-hero-elemento-erva-esquerda.png'}
          alt=""
          fill
          className="object-contain opacity-40"
          sizes="192px"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -right-8 bottom-20 z-[1] hidden h-48 w-48 md:block"
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        variants={fadeInUp}
        aria-hidden="true"
      >
        <Image
          src={cocktailAssets.decorativeBotanical || '/images/home/beggin-home-hero-elemento-erva-direita.png'}
          alt=""
          fill
          className="object-contain opacity-40"
          sizes="192px"
        />
      </motion.div>

      {/* Content container */}
      <div className="relative z-[2] mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          variants={fadeInUp}
        >
          <p className="font-serifDisplay text-xs font-bold uppercase tracking-[0.22em] text-beggin-muted">
            {cocktailsContent.label} ✦
          </p>
          <h2 className="mt-4 font-serifDisplay text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-beggin-ink md:text-5xl">
            {cocktailsContent.title}
          </h2>
          <p className="mt-6 max-w-[500px] mx-auto text-sm leading-7 text-beggin-muted md:text-base">
            {cocktailsContent.subtitle}
          </p>
        </motion.div>

        {/* Cocktail cards grid */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6 lg:gap-8">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.id}
              className="group relative w-full max-w-[320px]"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants(index)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
              }}
            >
              {/* Card container */}
              <div className="relative overflow-hidden rounded-sm bg-white p-3 shadow-soft transition-all duration-500 group-hover:shadow-xl">
                {/* Ornamental border */}
                <div className="absolute inset-0 rounded-sm ring-1 ring-beggin-gold/20 transition-all duration-500 group-hover:ring-beggin-gold/50" />

                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-beggin-sage/30">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-beggin-ink/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Card content */}
                <div className="mt-4 px-2 pb-3">
                  {/* Decorative line */}
                  <div className="mx-auto mb-3 h-px w-12 bg-beggin-gold/40 transition-all duration-500 group-hover:w-20 group-hover:bg-beggin-gold/70" />

                  <h3 className="font-serifDisplay text-xl font-semibold text-beggin-ink transition-colors duration-300 group-hover:text-beggin-red">
                    {cocktail.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-beggin-muted">
                    {cocktail.description}
                  </p>

                  {/* Ingredients tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cocktail.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="rounded-full bg-beggin-sage/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-beggin-muted transition-all duration-300 group-hover:bg-beggin-sage group-hover:text-beggin-ink"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner ornaments */}
                <div className="pointer-events-none absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-beggin-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-beggin-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-beggin-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-beggin-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}