import type { Product } from '@/data/products';

export function ProductSpecsStrip({ product }: { product: Product }) {
  const specs = product.specs ?? [];

  if (specs.length === 0) {
    return null;
  }

  return (
    <section className="paper-texture bg-[#FDF9F1] px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-[1300px] gap-8 border-y border-beggin-line/55 py-9 sm:grid-cols-2 lg:grid-cols-4">
        {specs.slice(0, 4).map((spec) => (
          <article key={spec.label} className="text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-beggin-gold/55 font-serifDisplay text-[15px] text-beggin-gold">
              ✧
            </div>
            <h2 className="font-serifDisplay text-[14px] font-bold uppercase leading-[1.1] tracking-[0.1em] text-beggin-ink">
              {spec.label}
            </h2>
            <p className="mx-auto mt-3 max-w-[180px] text-[13px] leading-[1.35] text-beggin-ink/65">
              {spec.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
