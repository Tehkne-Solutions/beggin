import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { heroAssets } from '@/data/hero-assets';
import { ProductGallery } from './ProductGallery';

export function ProductSingleHero({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/5519996638642?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${product.name}.`)}`;

  return (
    <section className="paper-texture bg-[#FCF7F1] px-5 pb-14 pt-[112px] md:px-8 lg:pb-20 lg:pt-[132px]">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 font-serifDisplay text-[13px] uppercase tracking-[0.12em] text-beggin-ink/55">
          <Link href="/" className="hover:text-beggin-red">Home</Link>
          <span className="mx-3">›</span>
          <Link href="/produtos" className="hover:text-beggin-red">Produtos</Link>
          <span className="mx-3">›</span>
          <span className="text-beggin-ink/80">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
          <ProductGallery product={product} />

          <div className="relative">
            <p className="mb-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink/60">
              Categoria: {product.category.replaceAll('-', ' ')}
            </p>
            <h1 className="font-serifDisplay text-[clamp(2.9rem,5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-beggin-ink">
              {product.name}
            </h1>
            <div className="relative mt-6 h-[22px] w-[44px] wave-pulse">
              <Image src={heroAssets.waves} alt="" fill priority sizes="44px" className="object-contain" />
            </div>
            {product.price ? (
              <div className="mt-7 font-serifDisplay text-[2rem] font-bold text-beggin-red">
                {product.oldPrice ? (
                  <span className="mr-4 text-[1.25rem] text-beggin-ink/45 line-through">
                    {product.oldPrice}
                  </span>
                ) : null}
                {product.price}
              </div>
            ) : null}
            <p className="mt-7 max-w-[620px] text-[1.05rem] leading-[1.7] text-beggin-ink/72">
              {product.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-beggin-red bg-beggin-red px-8 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-transparent hover:text-beggin-red"
              >
                Consultar disponibilidade
              </Link>
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center border border-beggin-line px-8 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-beggin-ink/70 transition hover:border-beggin-red hover:text-beggin-red"
              >
                Voltar aos produtos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
