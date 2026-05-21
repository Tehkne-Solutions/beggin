import Image from 'next/image';
import type { Product } from '@/data/products';

export function ProductGallery({ product }: { product: Product }) {
  const images = product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="space-y-5">
      <div className="relative min-h-[520px] overflow-hidden bg-[#FCF7F1]">
        <div className="pointer-events-none absolute inset-4 border border-[#b9a875]/45" />
        {product.badge ? (
          <span className="absolute left-7 top-7 z-[2] rounded-full border border-beggin-gold/60 bg-[#f5e3bd] px-4 py-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.12em] text-beggin-red">
            {product.badge}
          </span>
        ) : null}
        <Image
          src={images[0]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 48vw"
          className="object-contain p-10"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.slice(0, 4).map((image, index) => (
          <div key={image} className="relative h-28 border border-beggin-line/65 bg-[#FFFCF6]">
            <Image
              src={image}
              alt={`${product.name} ${index + 1}`}
              fill
              sizes="140px"
              className="object-contain p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
