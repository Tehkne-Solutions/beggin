import type { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="paper-texture bg-[#FCF7F1] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serifDisplay text-[clamp(2.2rem,4vw,4.4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">
              Produtos relacionados
            </h2>
            <div className="mt-4 h-px w-12 bg-beggin-red" />
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-beggin-line text-beggin-ink/70">‹</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-beggin-line text-beggin-ink/70">›</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
