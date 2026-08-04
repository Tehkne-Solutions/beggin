export const awardsContent = {
  eyebrow: 'Prêmios',
  title: 'Medalha de Ouro\nno Brasil e no Mundo.',
  cta: 'Ver todos os prêmios',
} as const;

export const awardAssets = {
  medalsStrip: '/images/Medalhas%20site.png',
  flowerRight: '/images/home/beggin-home-premios-flor-direita.png',
  waves: '/images/home/beggin-home-hero-elemento-bandeiras.png',
} as const;

// Ordem canônica validada contra a referência visual enviada pelo cliente:
// 1) WGA Brazil Classic Winner
// 2) WGA Gold
// 3) WGA Brazil Colour Changing Winner
// 4) IWSC Gold 98 pts
// 5) IWSC Silver 93 pts
// 6) IWSC Bronze Gin & Tonic
export const awards = [
  {
    id: 'bartender-spirits-awards',
    title: 'Bartender Spirits Awards',
    image: '/images/home/beggin-home-premios-selo-1.png',
  },
  {
    id: 'san-francisco-world-spirits',
    title: 'San Francisco World Spirits Competition',
    image: '/images/home/beggin-home-premios-selo-2.png',
  },
  {
    id: 'world-gin-awards-gold',
    title: 'World Gin Awards Gold',
    image: '/images/home/beggin-home-premios-selo-3.png',
  },
  {
    id: 'world-gin-awards-silver',
    title: 'World Gin Awards Silver',
    image: '/images/home/beggin-home-premios-selo-4.png',
  },
] as const;
