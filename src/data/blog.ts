export type BlogCategory = 'release' | 'drinks' | 'institucional';

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  eyebrow: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  status: 'draft' | 'ready';
};

export const blogCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'release', label: 'Releases de imprensa' },
  { id: 'drinks', label: 'Drinks e receitas' },
  { id: 'institucional', label: 'Institucional' },
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'drinks-para-o-dia-a-dia',
    category: 'drinks',
    eyebrow: 'Drinks para o dia a dia',
    title: 'Leves, refrescantes e fáceis de repetir.',
    excerpt:
      'Receitas para transformar o ritual BEG em momentos simples, frescos e práticos — do fim de tarde ao encontro casual.',
    image: '/images/Drinks (7).jpg',
    tags: ['Leve', 'Refrescante', 'Prático'],
    status: 'draft',
  },
  {
    slug: 'drinks-para-ocasioes-especiais',
    category: 'drinks',
    eyebrow: 'Drinks para ocasiões especiais',
    title: 'Coquetéis para celebrar com presença.',
    excerpt:
      'Combinações mais aromáticas e elegantes para jantares, eventos, celebrações e momentos que pedem uma taça memorável.',
    image: '/images/Beg_Drinks (306).jpg',
    tags: ['Elegante', 'Aromático', 'Memorável'],
    status: 'draft',
  },
  {
    slug: 'drinks-para-impressionar',
    category: 'drinks',
    eyebrow: 'Drinks para impressionar',
    title: 'Autorais, intensos e visualmente marcantes.',
    excerpt:
      'Ideias para quem quer servir algo com assinatura, impacto visual e uma experiência sensorial mais sofisticada.',
    image: '/images/Beg_Drinks (101).jpg',
    tags: ['Autoral', 'Intenso', 'Sofisticado'],
    status: 'draft',
  },
  {
    slug: 'release-beg-destilaria',
    category: 'release',
    eyebrow: 'Release de imprensa',
    title: 'BEG Destilaria: do interior de São Paulo para o mundo.',
    excerpt:
      'Espaço reservado para publicação dos releases oficiais, matérias institucionais e conteúdos enviados pela marca.',
    image: '/images/BEGGIN_DESTILARIA-0313.jpg',
    tags: ['Imprensa', 'Marca', 'Destilaria'],
    status: 'draft',
  },
];
