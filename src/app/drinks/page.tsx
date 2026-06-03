import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { drinkEditorialCategories } from '@/data/drinks-blog';

export const metadata: Metadata = {
  title: 'Drinks | BEG Destilaria',
  description:
    'Drinks BEG organizados por momento: dia a dia, ocasiões especiais e receitas para impressionar.',
};

export default function DrinksPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-14 pt-[130px] md:px-8 lg:pb-18 lg:pt-[160px]">
        <div className="mx-auto max-w-[1400px] border-b border-[#c8b98e]/55 pb-12 text-center">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-red">BEG Drinks</p>
          <h1 className="mx-auto mt-6 max-w-[940px] font-serifDisplay text-[clamp(3.2rem,6.2vw,7.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.052em]">
            O drink perfeito para cada momento.
          </h1>
          <p className="mx-auto mt-7 max-w-[720px] text-[1.08rem] leading-[1.84] text-beggin-ink/72">
            Um espaço editorial para organizar receitas, ocasiões e experiências com a assinatura artesanal da BEG Destilaria.
          </p>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-7 lg:grid-cols-3">
          {drinkEditorialCategories.map((category) => (
            <article key={category.slug} className="group overflow-hidden border border-[#c8b98e]/60 bg-[#FFFCF6] shadow-[0_20px_54px_rgba(54,43,25,0.06)]">
              <div className="relative h-[320px] overflow-hidden bg-[#e7dfc9]">
                <Image
                  src={category.image}
                  alt={category.eyebrow}
                  fill
                  sizes="(max-width: 1024px) 92vw, 420px"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7 md:p-8">
                <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.26em] text-beggin-red">{category.eyebrow}</p>
                <h2 className="mt-5 font-serifDisplay text-[2.15rem] font-semibold uppercase leading-[0.92] tracking-[-0.035em]">
                  {category.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.78] text-beggin-ink/72">{category.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="border border-[#c8b98e]/60 px-3 py-2 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.16em] text-beggin-ink/72">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/drinks#${category.slug}`} className="mt-8 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:text-beggin-red">
                  Ver categoria
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="paper-texture bg-[#DFDEC9] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px] border-y border-[#b9a875]/50 py-12 text-center">
          <h2 className="mx-auto max-w-[820px] font-serifDisplay text-[clamp(2.6rem,4.7vw,5.4rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
            Conteúdo editorial pronto para crescer.
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[1.05rem] leading-[1.82] text-beggin-ink/72">
            A estrutura está preparada para receber receitas completas, matérias de blog, fotos finais, harmonizações e links de produtos assim que os materiais forem enviados.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
