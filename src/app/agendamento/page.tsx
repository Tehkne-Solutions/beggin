import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Agendamento | Beg Gin',
  description: 'Agende uma experiência Beg Gin e conheça a destilaria em Joaquim Egídio, Campinas.',
};

const steps = [
  ['Escolha a experiência', 'Selecione o interesse principal: visita à destilaria, produtos, eventos, imprensa ou parcerias.'],
  ['Envie sua solicitação', 'A equipe recebe seus dados e entende o melhor formato para o atendimento.'],
  ['Confirmação', 'O retorno é feito pelos canais informados para alinhamento de disponibilidade e próximos passos.'],
] as const;

export default function SchedulingPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Beg Experience</p>
              <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
              <h1 className="mt-8 font-serifDisplay text-[clamp(3.4rem,6vw,7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Agende sua experiência Beg Gin.</h1>
              <p className="mt-8 max-w-[720px] text-[1.06rem] leading-[1.85] text-beggin-ink/72">Uma página provisória de alto nível para direcionar visitantes interessados em visitas, eventos, parcerias e contato comercial. A experiência oficial pode continuar em plataforma dedicada quando necessário.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contato" className="inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Solicitar contato</Link>
                <a href="https://agendamento.beggin.com.br" target="_blank" rel="noreferrer" className="inline-flex border border-beggin-gold/60 px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:border-beggin-red hover:text-beggin-red">Abrir agendamento oficial</a>
              </div>
            </div>
            <div className="grid gap-5">
              <article className="border border-[#c7b889]/60 bg-[#FFFCF6] p-6 shadow-[0_18px_50px_rgba(54,43,25,0.05)]">
                <CalendarDays className="text-beggin-red" size={28} strokeWidth={1.7} />
                <h2 className="mt-5 font-serifDisplay text-[1.55rem] font-bold uppercase tracking-[0.04em]">Visitas e experiências</h2>
                <p className="mt-3 text-[1rem] leading-[1.75] text-beggin-ink/70">Conheça possibilidades de visita, degustação e relacionamento com a marca.</p>
              </article>
              <article className="border border-[#c7b889]/60 bg-[#FFFCF6] p-6 shadow-[0_18px_50px_rgba(54,43,25,0.05)]">
                <MapPin className="text-beggin-red" size={28} strokeWidth={1.7} />
                <h2 className="mt-5 font-serifDisplay text-[1.55rem] font-bold uppercase tracking-[0.04em]">Joaquim Egídio, Campinas</h2>
                <p className="mt-3 text-[1rem] leading-[1.75] text-beggin-ink/70">A origem da Beg Gin está conectada ao cuidado artesanal, aos botânicos e à identidade brasileira.</p>
              </article>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {steps.map(([title, text]) => (
              <article key={title} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-6">
                <Sparkles className="text-beggin-gold" size={22} strokeWidth={1.7} />
                <h2 className="mt-5 font-serifDisplay text-[1.35rem] font-bold uppercase tracking-[0.04em]">{title}</h2>
                <p className="mt-3 text-[0.98rem] leading-[1.75] text-beggin-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
