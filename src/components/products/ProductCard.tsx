'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Product } from '@/data/products';
import { productTagLabels } from '@/data/products';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const visibleTags = product.tags?.slice(0, 3) ?? [];

  return (
    <motion.article
      data-hover-card
      initial={shouldReduceMotion ? false : { opacity: 0, y: 52, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.78, delay: Math.min(index * 0.08, 0.32), ease: easeOut }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.012,
              rotateX: 0.7,
              rotateY: index % 2 === 0 ? -0.6 : 0.6,
            }
      }
      className="group relative flex min-h-[610px] transform-gpu flex-col overflow-hidden border border-[#b9a875]/55 bg-[#FFFCF6] px-7 py-7 shadow-[0_14px_34px_rgba(55,44,25,0.035)] transition-colors duration-300 hover:border-[#a99255]/75 hover:bg-white hover:shadow-[0_24px_52px_rgba(55,44,25,0.12)] [transform-style:preserve-3d]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(185,154,93,0.13),transparent_36%)]" />
        <div className="gold-shimmer absolute -left-1/3 top-0 h-full w-1/2 rotate-12 opacity-45" />
      </div>

      <div className="pointer-events-none absolute inset-3 border border-[#b9a875]/35 transition-all duration-500 group-hover:inset-4 group-hover:border-[#a99255]/70" />
      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#8e7b4c]/55 transition-all duration-500 group-hover:left-4 group-hover:top-4" />
      <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-[#8e7b4c]/55 transition-all duration-500 group-hover:right-4 group-hover:top-4" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#8e7b4c]/55 transition-all duration-500 group-hover:bottom-4 group-hover:left-4" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#8e7b4c]/55 transition-all duration-500 group-hover:bottom-4 group-hover:right-4" />

      <div className="absolute right-7 top-7 z-[3] flex flex-col items-end gap-2">
        {product.isNew ? (
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.84 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 + Math.min(index * 0.08, 0.32), ease: easeOut }}
            className="rounded-full border border-beggin-red/45 bg-beggin-red px-3 py-1 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(55,44,25,0.08)]"
          >
            Novidade
          </motion.span>
        ) : null}
        {product.badge ? (
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.84 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 + Math.min(index * 0.08, 0.32), ease: easeOut }}
            className="rounded-full border border-beggin-gold/55 bg-[#f7ead2] px-3 py-1 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.12em] text-beggin-red shadow-[0_8px_18px_rgba(55,44,25,0.08)]"
          >
            {product.badge}
          </motion.span>
        ) : null}
      </div>

      <div className="relative z-[2] mb-7 flex h-[270px] items-center justify-center overflow-hidden bg-white/20">
        <motion.div
          className="relative h-full w-full"
          whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.055 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-contain p-3 drop-shadow-[0_18px_24px_rgba(48,35,18,0.08)] transition duration-500"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] flex flex-1 flex-col text-center">
        <h2 className="font-serifDisplay text-[1.45rem] font-bold leading-[1.04] text-beggin-ink transition-colors duration-300 group-hover:text-beggin-red">
          {product.name}
        </h2>
        <p className="mx-auto mt-4 max-w-[290px] text-[0.95rem] leading-[1.45] text-beggin-muted transition-colors duration-300 group-hover:text-beggin-ink/72">
          {product.shortDescription}
        </p>

        {visibleTags.length > 0 ? (
          <div className="mx-auto mt-5 flex max-w-[310px] flex-wrap justify-center gap-2">
            {visibleTags.map((tag) => (
              <span key={tag} className="border border-[#c8b98e]/60 px-3 py-1.5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.13em] text-beggin-ink/68">
                {productTagLabels[tag]}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 grid grid-cols-2 gap-2 border-y border-[#c8b98e]/45 py-4 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.12em] text-beggin-ink/64">
          <span>{product.volume ?? 'Volume a confirmar'}</span>
          <span>{product.alcoholByVolume ?? 'Teor a confirmar'}</span>
        </div>

        <div className="mt-5 min-h-[32px] font-serifDisplay text-[1.35rem] font-bold text-beggin-red">
          {product.oldPrice ? (
            <span className="mr-3 text-[1rem] font-semibold text-beggin-ink/55 line-through">
              {product.oldPrice}
            </span>
          ) : null}
          {product.price ?? 'Sob consulta'}
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={`/produtos/${product.slug}`}
            className="group/link relative inline-flex items-center justify-center overflow-hidden border border-beggin-red px-7 py-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-beggin-red transition duration-300 hover:text-white"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-beggin-red transition-transform duration-300 group-hover/link:scale-x-100" />
            <span className="relative z-[1]">Saiba mais</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
