export const cocktailAssets = {
  waves: '/images/home/beggin-home-hero-elemento-bandeiras.png',
} as const;

export const cocktails = [
  {
    id: 'drinks-dia-a-dia',
    title: 'Drinks para o dia a dia',
    description: 'Leves • Refrescantes • Práticos',
    image: '/images/Drinks (7).jpg',
  },
  {
    id: 'drinks-ocasioes-especiais',
    title: 'Drinks para ocasiões especiais',
    description: 'Elegantes • Aromáticos • Memoráveis',
    image: '/images/Beg_Drinks (306).jpg',
  },
  {
    id: 'drinks-para-impressionar',
    title: 'Drinks para impressionar',
    description: 'Intensos • Autorais • Sofisticados',
    image: '/images/Beg_Drinks (101).jpg',
  },
] as const;

export const cocktailsContent = {
  label: '',
  title: 'Descubra o Drink perfeito para cada momento.',
  cta: 'Ver drinks',
  href: '/drinks',
} as const;
