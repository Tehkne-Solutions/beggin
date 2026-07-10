'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { Product } from '@/data/products';

export function ProductGallery({ product }: { product: Product }) {
  const images = useMemo(() => {
    // Enquanto as galerias oficiais individualizadas não forem recebidas,
    // exibimos somente a capa Omie do próprio produto. Isso evita usar
    // rótulos de outros produtos como se fossem fotos oficiais da single.
    return [product.image];
  }, [product.image]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

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
          key={selectedImage}
          src={selectedImage}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 48vw"
          className="object-contain p-10 transition duration-500 ease-out"
        />
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((image, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                aria-label={`Ver imagem ${index + 1} de ${product.name}`}
                aria-pressed={isActive}
                onClick={() => setSelectedIndex(index)}
                className={[
                  'relative h-28 border bg-[#FFFCF6] transition duration-300 focus:outline-none focus:ring-2 focus:ring-beggin-red/35',
                  isActive ? 'border-beggin-red shadow-[0_12px_24px_rgba(55,44,25,0.08)]' : 'border-beggin-line/65 hover:border-beggin-gold/70',
                ].join(' ')}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  sizes="140px"
                  className="object-contain p-3"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
