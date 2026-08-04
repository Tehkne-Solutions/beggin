'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';

const web = 'https://';
const whatsappContactUrl = `${web}wa.me/5519996638642?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20BEG%20Destilaria%20e%20gostaria%20de%20saber%20mais.`;

const menu1 = [
  { label: 'Nossa História', href: '/nossa-historia' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'BEG Experience', href: '/beg-experience' },
];
const menu2 = [
  { label: 'Prêmios', href: '/premios' },
  { label: 'Sustentabilidade', href: '/sustentabilidade' },
  { label: 'Blog', href: '/blog' },
];
const socials = [
  { label: 'Instagram', Icon: Instagram, href: `${web}www.instagram.com/beg_gin/` },
  { label: 'YouTube', Icon: Youtube, href: `${web}www.youtube.com/@beg_gin` },
  { label: 'Facebook', Icon: Facebook, href: `${web}www.facebook.com/profile.php?id=61574819153371` },
  { label: 'LinkedIn', Icon: Linkedin, href: `${web}www.linkedin.com/company/beg-destilaria-boutique/posts/?feedView=all` },
];
const legalLinks = [
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
];

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#131413] text-[#f4efe3]">
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
            <p className="font-sansUi text-[15px] font-bold uppercase tracking-[0.08em] text-[#f4efe3]">Menu</p>
            <div className="space-y-3 font-sansUi text-[14px] font-bold uppercase tracking-[0.06em] text-[#f4efe3]/85">
              {menu1.map((item) => (
                <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">{item.label}</Link>
              ))}
            </div>
          </div>

          <div className="hidden bg-[#9a7a3a]/45 lg:block" />

          <div className="space-y-4">
            <p className="font-sansUi text-[15px] font-bold uppercase tracking-[0.08em] text-[#f4efe3]">Navegação</p>
            <div className="space-y-3 font-sansUi text-[14px] font-bold uppercase tracking-[0.06em] text-[#f4efe3]/85">
              {menu2.map((item) => (
                <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">{item.label}</Link>
              ))}
            </div>
          </div>

          <div className="hidden bg-[#9a7a3a]/45 lg:block" />

          <div className="space-y-5">
            <p className="font-sansUi text-[15px] font-bold uppercase tracking-[0.08em] text-[#f4efe3]">Contato BEG</p>
            <div className="space-y-3 font-sansUi text-[14px] font-bold uppercase tracking-[0.06em] text-[#f4efe3]/85">
              <Link href={whatsappContactUrl} target="_blank" rel="noreferrer" className="block transition-colors duration-300 hover:text-[#c8a759]">WhatsApp: (19) 99663-8642</Link>
              <span className="block">Joaquim Egídio — Campinas, SP</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Abrir ${label} da BEG Destilaria`} title={label} className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b99f60]/55 bg-[#1d1f1a]/80 text-[#b99f60] transition duration-300 hover:-translate-y-0.5 hover:border-[#c8a759] hover:bg-[#272920] hover:text-[#f4efe3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a759]/70">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#9a7a3a]/35 pt-6">
          <div className="grid gap-4 font-sansUi text-[13px] font-bold uppercase tracking-[0.18em] text-[#d6c7a2] md:grid-cols-[1fr_auto_1fr] md:items-center">
            <span className="hidden md:block" aria-hidden="true" />
            <p className="text-center">© 2026 BEG DESTILARIA. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[#f4efe3]/80 md:justify-self-end">
              <Link href={legalLinks[0].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[0].label}</Link>
              <span className="text-[#b99f60]">✧</span>
              <Link href={legalLinks[1].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[1].label}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
