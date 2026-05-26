import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidade | BEG Destilaria',
  description: 'Política de Privacidade da BEG Destilaria, com informações sobre LGPD, cookies, direitos do titular e canais de contato.',
};

const sections = [
  {
    title: '1. Quem somos',
    text: 'Esta Política de Privacidade descreve como a BEG Destilaria trata informações relacionadas aos visitantes do site, contatos comerciais, interessados em produtos, experiências, visitas, eventos, distribuição, imprensa e parcerias. O site tem finalidade institucional, informativa e comercial, apresentando a marca, sua história, seus produtos e seus canais oficiais de relacionamento.',
  },
  {
    title: '2. Dados que podemos coletar',
    text: 'Podemos coletar dados informados diretamente por você, como nome, e-mail, telefone, assunto, interesse e mensagem enviada em formulários. Também podemos coletar dados técnicos de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas, data e horário de acesso, origem do tráfego e interações básicas com o site.',
  },
  {
    title: '3. Finalidades do tratamento',
    text: 'Os dados podem ser utilizados para responder solicitações, registrar contatos, encaminhar demandas comerciais, melhorar a experiência de navegação, medir desempenho do site, preservar segurança, cumprir obrigações legais e aperfeiçoar a comunicação institucional da BEG Destilaria.',
  },
  {
    title: '4. Bases legais',
    text: 'O tratamento poderá ocorrer com base no consentimento, na execução de procedimentos preliminares relacionados a uma solicitação do usuário, no legítimo interesse da BEG Destilaria, no cumprimento de obrigação legal ou regulatória e na proteção contra fraudes e usos indevidos do site, sempre observando a legislação aplicável, incluindo a Lei Geral de Proteção de Dados.',
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
    text: 'Você pode solicitar confirmação de tratamento, acesso, correção, atualização, exclusão, portabilidade, informação sobre compartilhamento, revisão de consentimentos e demais direitos previstos na LGPD, conforme aplicável ao caso concreto.',
  },
  {
    title: '9. Contato',
    text: 'Solicitações relacionadas à privacidade podem ser enviadas pelos canais oficiais indicados no site. A BEG Destilaria avaliará a solicitação e responderá conforme os prazos e critérios legais aplicáveis.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="mx-auto max-w-[980px]">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Privacidade</p>
          <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
          <h1 className="mt-8 font-serifDisplay text-[clamp(3.2rem,5.6vw,6.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Política de Privacidade</h1>
          <p className="mt-8 max-w-[760px] text-[1rem] leading-[1.85] text-beggin-ink/72">
            Esta página reúne as diretrizes de privacidade, cookies e proteção de dados da BEG Destilaria.
          </p>
          <div className="mt-12 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="border border-[#c7b889]/60 bg-[#FFFCF6]/78 p-6">
                <h2 className="font-serifDisplay text-[1.45rem] font-bold uppercase tracking-[0.04em] text-beggin-ink">{section.title}</h2>
                <p className="mt-4 text-[1rem] leading-[1.8] text-beggin-ink/70">{section.text}</p>
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
