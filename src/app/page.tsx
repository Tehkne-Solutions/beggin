import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/hero/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-beggin-paper text-beggin-ink">
      <Header />
      <HeroSection />
      <section id="historia" className="paper-texture min-h-[360px] border-y border-beggin-line/70 bg-beggin-sage/70 px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="font-serifDisplay text-xs font-bold uppercase tracking-[0.18em] text-beggin-muted">Nossa história ✦</p>
          <h2 className="mt-4 max-w-[520px] font-serifDisplay text-5xl font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-beggin-ink">
            De quatro amigos para o mundo.
          </h2>
          <p className="mt-6 max-w-[520px] text-sm leading-7 text-beggin-muted">
            Bloco provisório para validar a transição visual da Hero. A próxima fase substitui esta área pela seção de história completa.
          </p>
        </div>
      </section>
    </main>
  );
}
