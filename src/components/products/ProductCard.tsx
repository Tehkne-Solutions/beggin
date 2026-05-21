import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex min-h-[560px] flex-col overflow-hidden border border-[#b9a875]/55 bg-[#FFFCF6] px-7 py-7 shadow-[0_14px_34px_rgba(55,44,25,0.035)] transition duration-300 hover:-translate-y-1.5 hover:border-[#a99255]/75 hover:shadow-[0_24px_52px_rgba(55,44,25,0.12)]">
      <div className="pointer-events-none absolute inset-3 border border-[#b9a875]/35" />
      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#8e7b4c]/55" />
      <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-[#8e7b4c]/55" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#8e7b4c]/55" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#8e7b4c]/55" />

      {product.badge ? (
        <span className="absolute right-7 top-7 z-[3] rounded-full border border-beggin-gold/55 bg-[#f7ead2] px-3 py-1 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.12em] text-beggin-red">
          {product.badge}
        </span>
      ) : null}

      <div className="relative z-[2] mb-7 flex h-[270px] items-center justify-center bg-white/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.035]"
        />
      </div>

      <div className="relative z-[2] flex flex-1 flex-col text-center">
        <h2 className="font-serifDisplay text-[1.45rem] font-bold leading-[1.04] text-beggin-ink">
          {product.name}
        </h2>
        <p className="mx-auto mt-4 max-w-[290px] text-[0.95rem] leading-[1.45] text-beggin-muted">
          {product.shortDescription}
        </p>

        <div className="mt-6 min-h-[32px] font-serifDisplay text-[1.35rem] font-bold text-beggin-red">
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
            className="inline-flex items-center justify-center border border-beggin-red px-7 py-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-beggin-red transition duration-300 hover:bg-beggin-red hover:text-white"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </article>
  );
}
