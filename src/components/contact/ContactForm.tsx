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
const fieldClass = 'mt-3 h-14 w-full border border-[#c7b889]/70 bg-[#fffdf8]/90 px-4 font-sans text-[15px] normal-case tracking-normal text-beggin-ink outline-none transition duration-300 focus:border-beggin-red focus:bg-white focus:shadow-[0_0_0_3px_rgba(227,55,49,0.08)]';
const labelClass = 'block font-serifDisplay text-[12px] font-bold uppercase tracking-[0.2em] text-beggin-ink/82';

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
    <form onSubmit={handleSubmit} className="relative overflow-hidden border border-[#c7b889]/65 bg-[#fffaf2]/86 p-7 shadow-[0_28px_80px_rgba(54,43,25,0.12)] backdrop-blur-sm lg:p-10">
      <div className="pointer-events-none absolute inset-4 border border-[#c7b889]/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(185,154,93,0.12),transparent_38%)]" />

      <div className="relative z-[1] grid gap-7">
        <div className="grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Nome
            <input name="name" required className={fieldClass} />
          </label>
          <label className={labelClass}>
            E-mail
            <input name="email" type="email" required className={fieldClass} />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Telefone
            <input name="phone" className={fieldClass} />
          </label>
          <label className={labelClass}>
            Interesse
            <select name="interest" className={fieldClass}>
              {interestOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <label className={labelClass}>
          Mensagem
          <textarea name="message" required rows={7} className="mt-3 w-full resize-none border border-[#c7b889]/70 bg-[#fffdf8]/90 p-4 font-sans text-[15px] normal-case leading-relaxed tracking-normal text-beggin-ink outline-none transition duration-300 focus:border-beggin-red focus:bg-white focus:shadow-[0_0_0_3px_rgba(227,55,49,0.08)]" />
        </label>

        <button type="submit" className="group inline-flex h-14 items-center justify-center gap-3 bg-beggin-red px-8 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(227,55,49,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-beggin-ink hover:shadow-[0_18px_40px_rgba(20,20,18,0.16)]">
          Enviar mensagem
          <Send size={16} className="transition-transform group-hover:translate-x-1" />
        </button>

        {status === 'sent' ? (
          <p className="font-serifDisplay text-[13px] uppercase tracking-[0.14em] text-beggin-red">
            Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio.
          </p>
        ) : null}
      </div>
    </form>
  );
}
