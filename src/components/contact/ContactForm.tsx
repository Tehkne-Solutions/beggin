'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

const interestOptions = [
  'Visita à destilaria',
  'Produtos Beg Gin',
  'Eventos e parcerias',
  'Distribuição e comercial',
  'Imprensa',
  'Outro assunto',
];

const contactEmail = 'contato@beggin.com.br';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const phone = String(form.get('phone') ?? '');
    const interest = String(form.get('interest') ?? 'Contato geral');
    const message = String(form.get('message') ?? '');

    const subject = `Contato pelo site Beg Gin — ${interest}`;
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
      `Interesse: ${interest}`,
      '',
      'Mensagem:',
      message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 border border-[#c7b889]/60 bg-[#fffaf2]/78 p-6 shadow-[0_24px_70px_rgba(54,43,25,0.08)] backdrop-blur-sm lg:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
          Nome
          <input name="name" required className="h-12 border border-[#c7b889]/70 bg-white/70 px-4 font-sans text-[15px] normal-case tracking-normal outline-none transition focus:border-beggin-red" />
        </label>
        <label className="grid gap-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
          E-mail
          <input name="email" type="email" required className="h-12 border border-[#c7b889]/70 bg-white/70 px-4 font-sans text-[15px] normal-case tracking-normal outline-none transition focus:border-beggin-red" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
          Telefone
          <input name="phone" className="h-12 border border-[#c7b889]/70 bg-white/70 px-4 font-sans text-[15px] normal-case tracking-normal outline-none transition focus:border-beggin-red" />
        </label>
        <label className="grid gap-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
          Interesse
          <select name="interest" className="h-12 border border-[#c7b889]/70 bg-white/70 px-4 font-sans text-[15px] normal-case tracking-normal outline-none transition focus:border-beggin-red">
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink">
        Mensagem
        <textarea name="message" required rows={6} className="resize-none border border-[#c7b889]/70 bg-white/70 p-4 font-sans text-[15px] normal-case leading-relaxed tracking-normal outline-none transition focus:border-beggin-red" />
      </label>

      <button type="submit" className="group inline-flex h-14 items-center justify-center gap-3 bg-beggin-red px-8 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.22em] text-white transition hover:bg-beggin-ink">
        Enviar mensagem
        <Send size={16} className="transition-transform group-hover:translate-x-1" />
      </button>

      {status === 'sent' ? (
        <p className="font-serifDisplay text-[13px] uppercase tracking-[0.14em] text-beggin-red">
          Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio.
        </p>
      ) : null}
    </form>
  );
}
