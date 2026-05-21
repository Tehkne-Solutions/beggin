import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Termos de Uso | Beg Gin',
  description: 'Termos institucionais de uso do site Beg Gin.',
};

const sections = [
  ['Uso do site', 'Este site apresenta informações institucionais, produtos, experiências e canais oficiais da Beg Gin.'],
  ['Conteúdo', 'Textos, imagens, marcas e elementos visuais pertencem à Beg Gin ou aos seus respectivos titulares.'],
  ['Informações comerciais', 'Valores, disponibilidade e condições comerciais podem ser ajustados pelos canais oficiais da marca.'],
  ['Contato', 'Dúvidas sobre o uso do site podem ser enviadas pela página de contato.'],
] as const;

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="mx-auto max-w-[980px]">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Institucional</p>
          <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
          <h1 className="mt-8 font-serifDisplay text-[clamp(3.2rem,5.6vw,6.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Termos de Uso</h1>
          <p className="mt-8 max-w-[760px] text-[1rem] leading-[1.85] text-beggin-ink/72">
            Página provisória com diretrizes gerais de uso do site Beg Gin.
          </p>
          <div className="mt-12 grid gap-5">
            {sections.map(([title, text]) => (
              <article key={title} className="border border-[#c7b889]/60 bg-[#FFFCF6]/78 p-6">
                <h2 className="font-serifDisplay text-[1.45rem] font-bold uppercase tracking-[0.04em] text-beggin-ink">{title}</h2>
                <p className="mt-4 text-[1rem] leading-[1.8] text-beggin-ink/70">{text}</p>
              </article>
            ))}
          </div>
          <Link href="/contato" className="mt-10 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Fale conosco</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
