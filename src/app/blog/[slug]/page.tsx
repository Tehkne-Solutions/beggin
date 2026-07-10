import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GlassWater } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Conteúdo não encontrado | BEG Destilaria' };
  }

  return {
    title: `${post.title} | BEG Destilaria`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <article className="paper-texture px-5 pb-20 pt-[128px] md:px-8 lg:pb-28 lg:pt-[154px]">
        <div className="mx-auto max-w-[1220px]">
          <Link href="/blog" className="inline-flex items-center gap-2 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.18em] text-beggin-ink/65 transition hover:text-beggin-red">
            <ArrowLeft size={15} />
            Voltar ao Blog
          </Link>

          <header className="mt-9 border-b border-[#c8b98e]/55 pb-12 text-center">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">{post.eyebrow}</p>
            <h1 className="mx-auto mt-6 max-w-[1080px] font-serifDisplay text-[clamp(3rem,6vw,7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.052em]">
              {post.title}
            </h1>
            <p className="mx-auto mt-7 max-w-[780px] text-[1.08rem] leading-[1.82] text-beggin-ink/72">{post.excerpt}</p>
          </header>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden border border-[#c8b98e]/60 bg-[#e7dfc9] md:min-h-[520px]">
            <Image src={post.image} alt={post.eyebrow} fill priority sizes="(max-width: 1280px) 94vw, 1220px" className="object-cover" />
          </div>

          <div className="mx-auto mt-12 max-w-[900px] space-y-6 text-[1.06rem] leading-[1.9] text-beggin-ink/76">
            {post.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          {post.recipes ? (
            <section className="mt-16">
              <div className="mx-auto max-w-[900px] text-center">
                <GlassWater className="mx-auto text-beggin-red" size={34} strokeWidth={1.55} />
                <h2 className="mt-6 font-serifDisplay text-[clamp(2.7rem,4.8vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
                  Receitas desta seleção
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {post.recipes.map((recipe) => (
                  <article key={recipe.number} className="border border-[#c8b98e]/60 bg-[#FFFCF6] p-7 shadow-[0_18px_52px_rgba(54,43,25,0.05)] md:p-9">
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-serifDisplay text-[3.2rem] font-semibold leading-none text-beggin-red">
                        {String(recipe.number).padStart(2, '0')}
                      </span>
                      <span className="border border-[#c8b98e]/60 px-3 py-2 font-serifDisplay text-[9px] font-bold uppercase tracking-[0.16em] text-beggin-ink/65">
                        {recipe.occasion}
                      </span>
                    </div>
                    <h3 className="mt-6 font-serifDisplay text-[2rem] font-bold uppercase leading-[0.96] tracking-[-0.025em]">
                      {recipe.title}
                    </h3>

                    <div className="mt-7 border-t border-[#c8b98e]/55 pt-6">
                      <h4 className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.2em] text-beggin-red">Ingredientes</h4>
                      <ul className="mt-4 space-y-2 text-[0.98rem] leading-[1.65] text-beggin-ink/72">
                        {recipe.ingredients.map((ingredient) => <li key={ingredient}>— {ingredient}</li>)}
                      </ul>
                    </div>

                    <div className="mt-7 border-t border-[#c8b98e]/55 pt-6">
                      <h4 className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.2em] text-beggin-red">Preparo</h4>
                      <p className="mt-4 text-[0.98rem] leading-[1.75] text-beggin-ink/72">{recipe.method}</p>
                    </div>

                    <div className="mt-6 bg-[#f6efe1] p-4">
                      <span className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.18em] text-beggin-ink/65">Finalização</span>
                      <p className="mt-2 text-[0.94rem] leading-[1.65] text-beggin-ink/72">{recipe.garnish}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <Footer />
    </main>
  );
}
