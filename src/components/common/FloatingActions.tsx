'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Settings } from 'lucide-react';

const STORAGE_KEY = 'beggin-consent-v1';

export function FloatingActions() {
  const [isReady, setIsReady] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsAccepted(window.localStorage.getItem(STORAGE_KEY) === 'accepted');
    setIsReady(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsAccepted(true);
  }

  function reset() {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsAccepted(false);
  }

  if (!isReady) return null;

  return (
    <>
      {!isAccepted ? (
        <div className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-[960px] border border-[#c7b889] bg-[#131413] p-4 text-[#f4efe3] shadow-[0_24px_80px_rgba(0,0,0,0.42)] md:bottom-6 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serifDisplay text-[13px] font-bold uppercase tracking-[0.2em] text-[#f4efe3]">Preferências do site</p>
              <p className="mt-2 max-w-[700px] text-[0.92rem] leading-relaxed text-[#f4efe3]/85">
                Usamos recursos técnicos para manter a navegação, medir desempenho e melhorar a experiência. Consulte nossa página de privacidade para mais detalhes.
              </p>
              <Link href="/termos-de-uso" className="mt-2 inline-flex font-serifDisplay text-[11px] font-bold uppercase tracking-[0.18em] text-[#c8a759] hover:text-white">
                Ver detalhes
              </Link>
            </div>
            <button type="button" onClick={accept} className="inline-flex h-12 shrink-0 items-center justify-center bg-beggin-red px-6 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#f4efe3] hover:text-[#131413]">
              Aceitar
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={reset} aria-label="Preferências" className="fixed bottom-5 left-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a759]/60 bg-[#131413] text-[#c8a759] shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-beggin-red hover:text-beggin-red">
          <Settings size={19} strokeWidth={1.8} />
        </button>
      )}

      <a href="https://wa.me/5519999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Beg%20Gin%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noreferrer" aria-label="WhatsApp Beg Gin" className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#c8a759]/70 bg-[#131413] text-[#f4efe3] shadow-[0_14px_38px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-beggin-red hover:text-white">
        <MessageCircle size={24} strokeWidth={1.8} />
      </a>
    </>
  );
}
