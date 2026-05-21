'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const motionSelector = [
  'main > section',
  'main > footer',
  'section > div',
  'article',
  '[data-motion]',
].join(',');

const interactiveSelector = [
  'a[href]',
  'button',
  'article',
  '[data-hover-card]',
].join(',');

export function MotionViewport() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('motion-ready');
      return;
    }

    document.body.classList.add('motion-ready');

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(motionSelector)).filter(
      (element) => !element.closest('[data-motion-skip]') && !element.matches('header'),
    );

    const interactiveTargets = Array.from(document.querySelectorAll<HTMLElement>(interactiveSelector)).filter(
      (element) => !element.closest('[data-hover-skip]'),
    );

    interactiveTargets.forEach((element) => {
      element.classList.add('premium-hover');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    revealTargets.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((element) => {
        element.classList.remove('motion-reveal', 'is-visible');
        element.style.removeProperty('--motion-delay');
      });
      interactiveTargets.forEach((element) => element.classList.remove('premium-hover'));
    };
  }, [pathname]);

  return null;
}
