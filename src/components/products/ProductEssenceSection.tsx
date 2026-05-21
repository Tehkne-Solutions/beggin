import Image from 'next/image';
import type { Product } from '@/data/products';
import { heroAssets } from '@/data/hero-assets';

export function ProductEssenceSection({ product }: { product: Product }) {
  return (
    <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 py-16 md:px-8 lg:py-20">
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 border border-beggin-line/65 bg-[#FFFCF6] px-7 py-10 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-14">
        <div className="pointer-events-none absolute inset-4 border border-beggin-line/45" />
        <div className="relative z-[2]">
          <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.2em] text-beggin-ink">
            Nossa essência
          </p>
          <div className="mt-3 h-px w-10 bg-beggin-gold/70" />
          <h2 className="mt-7 font-serifDisplay text-[clamp(2.2rem,4vw,4.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-beggin-ink">
            {product.essenceTitle ?? product.name}
          </h2>
          <div className="relative mt-6 h-[22px] w-[44px] wave-pulse">
            <Image src={heroAssets.waves} alt="" fill sizes="44px" className="object-contain" />
          </div>
          <p className="mt-7 max-w-[560px] text-[1rem] leading-[1.75] text-beggin-ink/75">
            {product.essenceText ?? product.description}
          </p>
        </div>

        <div className="relative z-[2] min-h-[360px] overflow-hidden">
          <Image
            src={product.gallery[1] ?? product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 90vw, 44vw"
            className="object-contain p-6"
          />
        </div>
      </div>
    </section>
  );
}
