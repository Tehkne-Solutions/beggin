'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';

const web = 'https://';
const vivaHypeUrl = `${web}vivahype.com.br/#contato`;
const whatsappContactUrl = `${web}wa.me/5519996638642?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20BEG%20Destilaria%20e%20gostaria%20de%20saber%20mais.`;

const menu1 = [
  { label: 'Nossa História', href: '/nossa-historia' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Beg Experience', href: '/agendamento' },
];
const menu2 = [
  { label: 'Prêmios', href: '/premios' },
  { label: 'Sustentabilidade', href: '/sustentabilidade' },
  { label: 'Contato', href: '#contato' },
];
const socials = [
  { label: 'Instagram', icon: 'IG', href: `${web}www.instagram.com/beg_gin/` },
  { label: 'YouTube', icon: 'YT', href: `${web}www.youtube.com/@beg_gin` },
  { label: 'Facebook', icon: 'FB', href: `${web}www.facebook.com/profile.php?id=61574819153371` },
  { label: 'LinkedIn', icon: 'IN', href: `${web}www.linkedin.com/company/beg-destilaria-boutique/posts/?feedView=all` },
];
const legalLinks = [
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
];

export function Footer() {
  return (
    <>
      <section id="contato" className="paper-texture bg-[#FCF7F1] px-5 py-14 text-beggin-ink md:px-8 lg:py-18">
        <div className="mx-auto grid max-w-[1380px] gap-8 border-y border-[#c8b98e]/60 py-12 text-center lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:text-left xl:py-14">
          <div>
            <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.32em] text-beggin-red">Contato</p>
            <h2 className="mt-5 max-w-[760px] font-serifDisplay text-[clamp(2.75rem,5.05vw,5.95rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em] max-lg:mx-auto">
              Viva Hype: atendimento e experiências.
            </h2>
            <p className="mt-6 max-w-[720px] text-[1.08rem] leading-[1.85] text-beggin-ink/72 max-lg:mx-auto">
              Para ativações, eventos, collabs e experiências da linha Hype, siga para o canal dedicado da Viva Hype. A comunicação acontece fora do formulário local da BEG.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Link
              href={vivaHypeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-beggin-red px-9 py-5 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_34px_rgba(215,25,32,0.18)] transition hover:bg-beggin-ink"
            >
              Ir para Viva Hype
              <ExternalLink size={18} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#131413] text-[#f4efe3]">
        <div className="relative z-[2] mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="mb-10 flex items-center gap-5">
            <span className="h-px flex-1 bg-[#9a7a3a]/50" />
            <span className="text-[#b99f60]">✧</span>
            <span className="h-px flex-1 bg-[#9a7a3a]/50" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.25fr_0.22fr_1px_0.22fr_1px_0.31fr] lg:items-start lg:gap-12">
            <div className="max-w-[220px] lg:max-w-none">
              <Link href="/#inicio" aria-label="Voltar para a página inicial BEG Destilaria">
                <BrandLogo variant="light" className="h-auto w-[125px] lg:w-[155px]" />
              </Link>
            </div>

            <div className="space-y-4">
              <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Menu</p>
              <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
                {menu1.map((item) => (
                  <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden bg-[#9a7a3a]/45 lg:block" />

            <div className="space-y-4">
              <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Navegação</p>
              <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
                {menu2.map((item) => (
                  <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden bg-[#9a7a3a]/45 lg:block" />

            <div className="space-y-5">
              <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Contato</p>
              <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
                <Link href={vivaHypeUrl} target="_blank" rel="noreferrer" className="block transition-colors duration-300 hover:text-[#c8a759]">Viva Hype</Link>
                <Link href={whatsappContactUrl} target="_blank" rel="noreferrer" className="block transition-colors duration-300 hover:text-[#c8a759]">Fale pelo WhatsApp</Link>
                <Link href="/nossa-historia" className="block transition-colors duration-300 hover:text-[#c8a759]">Joaquim Egídio — Campinas, SP</Link>
              </div>
              <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${social.label} da BEG Destilaria`}
                    className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#b99f60]/55 bg-[#1d1f1a]/80 px-3 py-2 text-[#b99f60] transition duration-300 hover:border-[#c8a759] hover:text-[#f4efe3]"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#b99f60]/45 text-[10px] font-semibold uppercase tracking-[0.12em]">
                      {social.icon}
                    </span>
                    <span className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.12em]">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-[#9a7a3a]/35 pt-6">
            <div className="flex flex-col gap-4 text-[13px] uppercase tracking-[0.18em] text-[#d6c7a2] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 BEG DESTILARIA. TODOS OS DIREITOS RESERVADOS.</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[#f4efe3]/80">
                <Link href={legalLinks[0].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[0].label}</Link>
                <span className="text-[#b99f60]">✧</span>
                <Link href={legalLinks[1].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[1].label}</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
