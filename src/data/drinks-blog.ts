export type DrinkCategorySlug = 'dia-a-dia' | 'ocasioes-especiais' | 'impressionar';

export type DrinkEditorialCategory = {
  slug: DrinkCategorySlug;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const drinkEditorialCategories: DrinkEditorialCategory[] = [
  {
    slug: 'dia-a-dia',
    eyebrow: 'Drinks para o dia a dia',
    title: 'Leves, refrescantes e fáceis de repetir.',
    description:
      'Receitas para transformar o ritual BEG em momentos simples, frescos e práticos — do fim de tarde ao encontro casual.',
    image: '/images/Drinks (7).jpg',
    tags: ['Leve', 'Refrescante', 'Prático'],
  },
  {
    slug: 'ocasioes-especiais',
    eyebrow: 'Drinks para ocasiões especiais',
    title: 'Coquetéis para celebrar com presença.',
    description:
      'Combinações mais aromáticas e elegantes para jantares, eventos, celebrações e momentos que pedem uma taça memorável.',
    image: '/images/Beg_Drinks (306).jpg',
    tags: ['Elegante', 'Aromático', 'Memorável'],
  },
  {
    slug: 'impressionar',
    eyebrow: 'Drinks para impressionar',
    title: 'Autorais, intensos e visualmente marcantes.',
    description:
      'Ideias para quem quer servir algo com assinatura, impacto visual e uma experiência sensorial mais sofisticada.',
    image: '/images/Beg_Drinks (101).jpg',
    tags: ['Autoral', 'Intenso', 'Sofisticado'],
  },
];
