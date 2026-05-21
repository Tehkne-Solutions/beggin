'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';

const tabs = [
  { id: 'description', label: 'Descrição' },
  { id: 'additional', label: 'Informação adicional' },
] as const;

type ActiveTab = (typeof tabs)[number]['id'];

export function ProductDescriptionTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('description');
  const additionalInfo = product.additionalInfo ?? [];

  return (
    <section className="paper-texture bg-[#FDF9F1] px-5 py-14 md:px-8 lg:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap gap-8 border-b border-beggin-line/65" role="tablist" aria-label="Informações do produto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'pb-4 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.16em] transition duration-300',
                  isActive ? 'border-b border-beggin-red text-beggin-red' : 'border-b border-transparent text-beggin-ink/65 hover:text-beggin-red',
                ].join(' ')}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === 'description' ? (
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
        ) : (
          <div className="py-10">
            <div className="grid gap-4 md:grid-cols-2">
              {additionalInfo.length > 0 ? (
                additionalInfo.map((item) => (
                  <div key={item.label} className="border border-beggin-line/60 bg-[#FFFCF6] px-6 py-5">
                    <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-beggin-ink">
                      {item.label}
                    </p>
                    <p className="mt-3 text-[0.98rem] leading-[1.55] text-beggin-ink/70">
                      {item.value}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-[1rem] leading-[1.7] text-beggin-ink/70">
                  As informações adicionais deste produto estão sendo organizadas pela equipe Beggin.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
