import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { heroAssets } from '@/data/hero-assets';

export const metadata: Metadata = {
  title: 'Contato | Beg Gin',
  description: 'Fale com a Beg Gin para produtos, eventos, parcerias, visitas e experiências.',
};

const contactCards = [
  {
    icon: Mail,
    title: 'Fale conosco',
    text: 'contato@beggin.com.br',
    href: 'mailto:contato@beggin.com.br',
  },
  {
    icon: MapPin,
    title: 'Nossa origem',
    text: 'Joaquim Egídio — Campinas, SP',
    href: '/nossa-historia',
  },
  {
    icon: Sparkles,
    title: 'Beg Experience',
    text: 'Agende uma experiência na destilaria',
    href: 'https://agendamento.beggin.com.br',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-20 pt-[120px] md:px-8 lg:pb-24 lg:pt-[150px]">
        <div className="pointer-events-none absolute left-[-90px] top-[120px] h-[360px] w-[280px] opacity-35">
          <Image src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png" alt="" fill sizes="280px" className="object-contain" />
        </div>
        <div className="pointer-events-none absolute right-[-120px] top-[110px] h-[300px] w-[420px] opacity-30">
          <Image src={heroAssets.cloudsTop} alt="" fill sizes="420px" className="object-contain" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="pt-4">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/80">
              Contato
            </p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[650px] font-serifDisplay text-[clamp(3.4rem,6vw,7.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.055em] text-beggin-ink">
              Vamos conversar sobre a Beg Gin.
            </h1>
            <div className="relative mt-8 h-[30px] w-[62px] wave-pulse">
              <Image src={heroAssets.waves} alt="" fill priority sizes="62px" className="object-contain" />
            </div>
            <p className="mt-7 max-w-[560px] text-[1.02rem] leading-[1.85] text-beggin-ink/72">
              Entre em contato para falar sobre produtos, visitas, eventos, imprensa, distribuição ou parcerias. A Beg Gin nasceu em Campinas com produção artesanal, botânicos selecionados e uma experiência pensada para ser lembrada.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const isExternal = card.href.startsWith('http');

                const content = (
                  <>
                    <Icon size={20} strokeWidth={1.5} className="text-beggin-red" />
                    <span className="mt-4 block font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
                      {card.title}
                    </span>
                    <span className="mt-3 block text-[0.94rem] leading-[1.55] text-beggin-ink/68">
                      {card.text}
                    </span>
                  </>
                );

                if (isExternal) {
                  return (
                    <a key={card.title} href={card.href} target="_blank" rel="noreferrer" className="border border-[#c7b889]/60 bg-[#FFFCF6]/78 p-5 transition duration-300 hover:-translate-y-1 hover:border-beggin-gold/80 hover:bg-white">
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={card.title} href={card.href} className="border border-[#c7b889]/60 bg-[#FFFCF6]/78 p-5 transition duration-300 hover:-translate-y-1 hover:border-beggin-gold/80 hover:bg-white">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-[-18px] border border-[#c7b889]/45" />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
