export type ProductCategory =
  | 'todos'
  | 'kits'
  | 'gins-750ml'
  | 'refis'
  | 'prontos-para-drinks';

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: Exclude<ProductCategory, 'todos'>;
  image: string;
  gallery: string[];
  price?: string;
  oldPrice?: string;
  badge?: string;
  essenceTitle?: string;
  essenceText?: string;
  specs?: {
    label: string;
    value: string;
    icon?: string;
  }[];
};

export const productCategories = [
  { id: 'todos', label: 'Todos os produtos' },
  { id: 'kits', label: 'Kits' },
  { id: 'gins-750ml', label: 'Gins 750ml' },
  { id: 'refis', label: 'Refis' },
  { id: 'prontos-para-drinks', label: 'Prontos para drinks' },
] as const;

export const products: Product[] = [
  {
    slug: 'beg-brazilian-boutique-750ml',
    name: 'BEG Brazilian Boutique – 750ml',
    shortDescription: 'O clássico brasileiro. Feito para ser lembrado.',
    description:
      'O BEG Brazilian Boutique Dry Gin foi criado para valorizar aromas delicados, botânicos selecionados e uma experiência brasileira elegante, seca e memorável.',
    category: 'gins-750ml',
    image: '/images/home/beggin-home-nossa-historia-enfeite-bebida-1.png',
    gallery: [
      '/images/home/beggin-home-nossa-historia-enfeite-bebida-1.png',
      '/images/home/beggin-home-hero-elemento-garrafa-principal.webp',
      '/images/home/beggin-home-nossa-historia-enfeite-bebida-2.png',
    ],
    oldPrice: 'R$ 109,90',
    price: 'R$ 99,90',
    badge: 'Oferta!',
    essenceTitle: 'O clássico brasileiro. Feito para ser lembrado.',
    essenceText:
      'Uma assinatura de gin seco com botânicos naturais, perfil aromático equilibrado e presença ideal para coquetéis autorais ou clássicos atemporais.',
    specs: [
      { label: '11 botânicos selecionados', value: 'Equilíbrio perfeito entre aromas e sabores.' },
      { label: 'Final seco e picante', value: 'Surpreendente, limpo e marcante.' },
      { label: 'Grad. alcoólica 45% vol.', value: 'Corpo e intensidade na medida certa.' },
      { label: 'Garrafa 750ml', value: 'Design exclusivo que valoriza cada detalhe.' },
    ],
  },
  {
    slug: 'beg-modern-tropical-750ml',
    name: 'BEG Modern & Tropical – 750ml',
    shortDescription: 'Gin brasileiro moderno, aromático e tropical.',
    description:
      'Uma expressão contemporânea da Beggin, com presença aromática tropical, frescor marcante e personalidade para drinks leves e vibrantes.',
    category: 'gins-750ml',
    image: '/images/home/beggin-home-nossa-historia-enfeite-bebida-2.png',
    gallery: [
      '/images/home/beggin-home-nossa-historia-enfeite-bebida-2.png',
      '/images/home/beggin-home-nossa-historia-enfeite-bebida-1.png',
    ],
    oldPrice: 'R$ 109,90',
    price: 'R$ 99,90',
    badge: 'Premiado',
    essenceTitle: 'Aromático, tropical e brasileiro.',
    essenceText:
      'Uma leitura moderna do gin brasileiro, feita para destacar frescor, botânicos e coquetelaria tropical com acabamento premium.',
    specs: [
      { label: 'Perfil tropical', value: 'Aromas expressivos e refrescantes.' },
      { label: 'Botânicos naturais', value: 'Ingredientes selecionados com cuidado.' },
      { label: 'Garrafa 750ml', value: 'Presença marcante para bar e presente.' },
    ],
  },
  {
    slug: 'kit-beg-classic',
    name: 'Kit BEG Classic',
    shortDescription: 'Kit especial para presentear ou experimentar.',
    description:
      'Uma seleção especial para quem deseja conhecer a experiência Beggin com presença visual, espírito artesanal e acabamento de presente.',
    category: 'kits',
    image: '/images/home/beggin-home-hero-elemento-garrafa-principal.webp',
    gallery: [
      '/images/home/beggin-home-hero-elemento-garrafa-principal.webp',
      '/images/home/beggin-home-nossa-historia-enfeite-bebida-1.png',
    ],
    price: 'R$ 105,90',
    essenceTitle: 'Uma experiência Beggin em formato de presente.',
    essenceText:
      'Combina produto, estética e ritual para transformar a degustação em uma experiência completa e memorável.',
    specs: [
      { label: 'Seleção especial', value: 'Pensado para presentear e experimentar.' },
      { label: 'Visual premium', value: 'Composição elegante e marcante.' },
    ],
  },
  {
    slug: 'beg-tonica-pronto-para-beber',
    name: 'BEG & Tônica Pronto para Beber',
    shortDescription: 'Clássico, refrescante e pronto para servir.',
    description:
      'Uma combinação leve e refrescante inspirada no clássico Beg & Tônica, feita para momentos práticos sem abrir mão da experiência.',
    category: 'prontos-para-drinks',
    image: '/images/home/beggin-home-coqueteis-autorais-card1-beg-and-tonica.png',
    gallery: ['/images/home/beggin-home-coqueteis-autorais-card1-beg-and-tonica.png'],
    price: 'R$ 15,90',
    essenceTitle: 'Clássico e refrescante.',
    essenceText:
      'O ritual do gin tônica em uma apresentação prática, equilibrada e visualmente alinhada à coquetelaria Beggin.',
    specs: [
      { label: 'Pronto para beber', value: 'Sirva gelado e aproveite.' },
      { label: 'Perfil refrescante', value: 'Leve, cítrico e aromático.' },
    ],
  },
  {
    slug: 'beg-refil-brazilian-boutique-500ml',
    name: 'BEG Refil Brazilian Boutique – 500ml',
    shortDescription: 'A essência clássica em formato mais leve.',
    description:
      'Refil da expressão Brazilian Boutique, pensado para reduzir impacto e manter o mesmo perfil clássico da marca.',
    category: 'refis',
    image: '/images/home/beggin-home-coqueteis-autorais-card2-citrico-brasileiro.png',
    gallery: ['/images/home/beggin-home-coqueteis-autorais-card2-citrico-brasileiro.png'],
    price: 'R$ 44,90',
    essenceTitle: 'Menos impacto, mesma assinatura.',
    essenceText:
      'Uma alternativa prática para manter a experiência Beggin com mais consciência e menor impacto de embalagem.',
    specs: [
      { label: 'Refil 500ml', value: 'Formato prático para reposição.' },
      { label: 'Consumo consciente', value: 'Menos embalagem, mais propósito.' },
    ],
  },
  {
    slug: 'negroni-beg-experience',
    name: 'Negroni BEG Experience',
    shortDescription: 'Intenso, equilibrado e autoral.',
    description:
      'Uma experiência inspirada no Negroni BEG, com perfil intenso, equilibrado e ideal para quem busca coquetelaria marcante.',
    category: 'prontos-para-drinks',
    image: '/images/home/beggin-home-coqueteis-autorais-card3-negroni-beg.png',
    gallery: ['/images/home/beggin-home-coqueteis-autorais-card3-negroni-beg.png'],
    price: 'R$ 19,90',
    essenceTitle: 'Intenso e equilibrado.',
    essenceText:
      'Um tributo à coquetelaria clássica, reinterpretado com presença visual e assinatura Beggin.',
    specs: [
      { label: 'Perfil intenso', value: 'Notas amargas e equilíbrio aromático.' },
      { label: 'Coquetel autoral', value: 'Inspirado na experiência da marca.' },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);

  if (!current) {
    return products.slice(0, limit);
  }

  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );
  const fallback = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
