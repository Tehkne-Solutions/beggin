import type { Product } from '@/data/products';

export function ProductDescriptionTabs({ product }: { product: Product }) {
  return (
    <section className="paper-texture bg-[#FDF9F1] px-5 py-14 md:px-8 lg:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap gap-8 border-b border-beggin-line/65">
          <span className="border-b border-beggin-red pb-4 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.16em] text-beggin-red">
            Descrição
          </span>
          <span className="pb-4 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.16em] text-beggin-ink/65">
            Informação adicional
          </span>
        </div>
        <div className="grid gap-10 py-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div className="font-serifDisplay text-[clamp(2rem,3.2vw,3.6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.035em] text-beggin-ink">
            A arte de destilar.
            <br />
            A essência do Brasil.
          </div>
          <p className="text-[1rem] leading-[1.85] text-beggin-ink/75">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}
