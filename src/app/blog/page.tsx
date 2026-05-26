import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const releases = [
  {
    title: 'Releases de imprensa',
    description: 'Espaço reservado para matérias, novidades e comunicados oficiais da BEG Destilaria.',
  },
  {
    title: 'Premiações e reconhecimentos',
    description: 'Conteúdos sobre medalhas, concursos internacionais e marcos institucionais da marca.',
  },
  {
    title: 'Coquetelaria e experiência',
    description: 'Guias, drinks, ativações e novidades da Beg Experience.',
  },
] as const;

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture relative overflow-hidden px-5 pb-20 pt-32 md:px-8 lg:pt-40">
        <div className="mx-auto max-w-[1200px] border border-[#b9a875]/45 bg-[#fdf9f1] px-6 py-12 shadow-[0_22px_60px_rgba(47,42,28,0.08)] md:px-10 lg:px-14 lg:py-16">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-red">
            Blog
          </p>
          <div className="mt-4 h-px w-14 bg-beggin-gold/70" />
          <h1 className="mt-8 max-w-[780px] font-serifDisplay text-[clamp(3rem,6vw,6.2rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em]">
            Notícias, releases e novidades da BEG Destilaria.
          </h1>
          <p className="mt-8 max-w-[680px] text-[1.05rem] leading-relaxed text-beggin-ink/76">
            Esta página foi criada para receber as matérias de release de imprensa solicitadas no ajuste do cliente. Enquanto os conteúdos finais não entram, o CTA da Home já possui um destino real e estável.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {releases.map((item) => (
              <article key={item.title} className="border border-[#b9a875]/40 bg-[#fffaf3] p-6">
                <h2 className="font-serifDisplay text-[1.2rem] font-bold uppercase tracking-[0.08em]">
                  {item.title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-beggin-ink/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex font-serifDisplay text-[12px] font-bold uppercase tracking-[0.2em] text-beggin-ink transition-colors hover:text-beggin-red"
          >
            Voltar para a Home ✦
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
