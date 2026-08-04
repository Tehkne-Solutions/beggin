'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ExperienceImage = {
  src: string;
  alt: string;
};

export function ExperienceCarousel({ images }: { images: readonly ExperienceImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  const activeImage = images[activeIndex];

  return (
    <div className="relative overflow-hidden border border-[#c8b98e]/60 bg-white p-3 shadow-[0_28px_78px_rgba(54,43,25,0.1)] sm:p-4">
      <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden bg-white sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px]">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 720px"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#131413]/65 to-transparent sm:h-32" />
        <p className="absolute bottom-5 left-5 right-24 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.14em] text-white sm:left-6 sm:text-[12px] sm:tracking-[0.16em]">
          {activeImage.alt}
        </p>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Imagem anterior"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/55 bg-[#131413]/65 text-white backdrop-blur-sm transition hover:bg-beggin-red"
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Próxima imagem"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/55 bg-[#131413]/65 text-white backdrop-blur-sm transition hover:bg-beggin-red"
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2" aria-label="Selecionar imagem do carrossel">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Mostrar imagem ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-2.5 transition-all ${index === activeIndex ? 'w-10 bg-beggin-red' : 'w-2.5 bg-beggin-gold/45 hover:bg-beggin-gold'}`}
          />
        ))}
      </div>
    </div>
  );
}
