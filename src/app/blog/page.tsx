import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogCategories, blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | BEG Destilaria',
  description:
    'Blog da BEG Destilaria com releases, histórias da marca e o guia completo de drinks para cada ocasião.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-14 pt-[130px] md:px-8 lg:pb-18 lg:pt-[160px]">
        <div className="mx-auto max-w-[1400px] border-b border-[#c8b98e]/55 pb-12 text-center">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-red">Blog BEG</p>
          <h1 className="mx-auto mt-6 max-w-[1050px] font-serifDisplay text-[clamp(3.2rem,6.2vw,7.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.052em]">
            Do dia a dia ao momento de impressionar.
          </h1>
          <p className="mx-auto mt-7 max-w-[760px] text-[1.08rem] leading-[1.84] text-beggin-ink/72">
            Receitas, histórias e conteúdos para descobrir novas maneiras de viver a experiência BEG.
          </p>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-8 md:px-8">
        <nav aria-label="Categorias do blog" className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-3 border-b border-[#c8b98e]/45 pb-6">
          {blogCategories.map((category) => (
            <span key={category.id} className="border border-[#c8b98e]/60 bg-[#FFFCF6] px-4 py-3 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.16em] text-beggin-ink/72">
              {category.label}
            </span>
          ))}
        </nav>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col overflow-hidden border border-[#c8b98e]/60 bg-[#FFFCF6] shadow-[0_20px_54px_rgba(54,43,25,0.06)]">
              <div className="relative h-[300px] overflow-hidden bg-[#e7dfc9]">
                <Image
                  src={post.image}
                  alt={post.eyebrow}
                  fill
                  sizes="(max-width: 1024px) 92vw, 420px"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.26em] text-beggin-red">{post.eyebrow}</p>
                <h2 className="mt-5 font-serifDisplay text-[2.05rem] font-semibold uppercase leading-[0.92] tracking-[-0.035em]">
                  {post.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.78] text-beggin-ink/72">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="border border-[#c8b98e]/60 px-3 py-2 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.16em] text-beggin-ink/72">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-3 pt-8 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:text-beggin-red">
                  Ler conteúdo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
