import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Beg Gin',
  description: 'Política de Privacidade da Beg Gin, com informações sobre LGPD, cookies, direitos do titular e canais de contato.',
};

const sections = [
  {
    title: '1. Quem somos',
    text: 'Esta Política de Privacidade descreve como a Beg Gin trata informações relacionadas aos visitantes do site, contatos comerciais, interessados em produtos, experiências, visitas, eventos, distribuição, imprensa e parcerias. O site tem finalidade institucional, informativa e comercial, apresentando a marca, sua história, seus produtos e seus canais oficiais de relacionamento.',
  },
  {
    title: '2. Dados que podemos coletar',
    text: 'Podemos coletar dados informados diretamente por você, como nome, e-mail, telefone, assunto, interesse e mensagem enviada em formulários. Também podemos coletar dados técnicos de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas, data e horário de acesso, origem do tráfego e interações básicas com o site.',
  },
  {
    title: '3. Finalidades do tratamento',
    text: 'Os dados podem ser utilizados para responder solicitações, registrar contatos, encaminhar demandas comerciais, melhorar a experiência de navegação, medir desempenho do site, preservar segurança, cumprir obrigações legais e aperfeiçoar a comunicação institucional da Beg Gin.',
  },
  {
    title: '4. Bases legais',
    text: 'O tratamento poderá ocorrer com base no consentimento, na execução de procedimentos preliminares relacionados a uma solicitação do usuário, no legítimo interesse da Beg Gin, no cumprimento de obrigação legal ou regulatória e na proteção contra fraudes e usos indevidos do site, sempre observando a legislação aplicável, incluindo a Lei Geral de Proteção de Dados.',
  },
  {
    title: '5. Cookies e tecnologias semelhantes',
    text: 'O site pode usar cookies técnicos, necessários para funcionamento, e cookies analíticos ou de desempenho, utilizados para compreender navegação e melhorar a experiência. Você pode aceitar a tarja de preferências exibida no site e, quando disponível, revisar suas escolhas pelo botão flutuante de preferências.',
  },
  {
    title: '6. Compartilhamento de dados',
    text: 'Podemos compartilhar informações com fornecedores de tecnologia, hospedagem, analytics, comunicação, atendimento e parceiros operacionais quando isso for necessário para manter o site, responder contatos ou viabilizar serviços solicitados. Não vendemos dados pessoais a anunciantes.',
  },
  {
    title: '7. Segurança e retenção',
    text: 'Adotamos medidas técnicas e administrativas razoáveis para proteger as informações contra acessos não autorizados, perda, alteração ou uso indevido. Os dados serão mantidos pelo período necessário para cumprir as finalidades descritas nesta política, atender obrigações legais ou preservar direitos.',
  },
  {
    title: '8. Direitos do titular',
    text: 'Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento, conforme hipóteses previstas na LGPD. Algumas solicitações podem depender de validação de identidade e análise legal.',
  },
  {
    title: '9. Menores de idade',
    text: 'O conteúdo da Beg Gin está relacionado a bebidas alcoólicas e é destinado a pessoas maiores de idade, conforme a legislação aplicável. Não buscamos coletar intencionalmente dados de crianças ou adolescentes.',
  },
  {
    title: '10. Atualizações desta política',
    text: 'Esta Política de Privacidade pode ser atualizada para refletir mudanças no site, nos processos internos, em fornecedores ou na legislação. A versão publicada nesta página será considerada a versão vigente.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="mx-auto max-w-[1040px]">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Privacidade e LGPD</p>
          <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
          <h1 className="mt-8 font-serifDisplay text-[clamp(3.1rem,5.8vw,6.8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Política de Privacidade</h1>
          <p className="mt-8 max-w-[820px] text-[1.04rem] leading-[1.85] text-beggin-ink/72">
            Esta página explica, de forma transparente, como tratamos informações pessoais, cookies e solicitações de contato realizadas pelos canais digitais da Beg Gin.
          </p>

          <div className="mt-12 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="border border-[#c7b889]/60 bg-[#FFFCF6]/82 p-6 shadow-[0_14px_42px_rgba(54,43,25,0.04)] md:p-8">
                <h2 className="font-serifDisplay text-[1.45rem] font-bold uppercase tracking-[0.04em] text-beggin-ink">{section.title}</h2>
                <p className="mt-4 text-[1rem] leading-[1.85] text-beggin-ink/72">{section.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-[#c7b889]/60 bg-[#DFDEC9]/70 p-7 md:p-9">
            <h2 className="font-serifDisplay text-[1.65rem] font-bold uppercase tracking-[0.04em]">Contato sobre privacidade</h2>
            <p className="mt-4 text-[1rem] leading-[1.8] text-beggin-ink/72">
              Para exercer direitos de titular ou tirar dúvidas sobre esta política, entre em contato pelos canais oficiais da Beg Gin.
            </p>
            <Link href="/contato" className="mt-7 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Falar com a Beg Gin</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
