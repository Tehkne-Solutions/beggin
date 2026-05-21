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
  additionalInfo?: {
    label: string;
    value: string;
  }[];
};

export const productCategories = [
  { id: 'todos', label: 'Todos os produtos' },
  { id: 'kits', label: 'Kits' },
  { id: 'gins-750ml', label: 'Gins 750ml' },
  { id: 'refis', label: 'Refis' },
  { id: 'prontos-para-drinks', label: 'Prontos para drinks' },
] as const;

const productImages = {
  brazilianBottle: '/images/home/beggin-home-nossa-historia-enfeite-bebida-1.png',
  modernBottle: '/images/home/beggin-home-nossa-historia-enfeite-bebida-2.png',
  heroKit: '/images/home/beggin-home-hero-elemento-garrafa-principal.webp',
  tonicDrink: '/images/home/beggin-home-coqueteis-autorais-card1-beg-and-tonica.png',
  citricDrink: '/images/home/beggin-home-coqueteis-autorais-card2-citrico-brasileiro.png',
  negroniDrink: '/images/home/beggin-home-coqueteis-autorais-card3-negroni-beg.png',
} as const;

export const products: Product[] = [
  {
    slug: 'beg-brazilian-boutique-750ml',
    name: 'BEG Brazilian Boutique – 750ml',
    shortDescription: 'O clássico brasileiro. Feito para ser lembrado.',
    description:
      'O BEG Brazilian Boutique Dry Gin foi criado para selecionar e preservar os mais delicados aromas e sabores da coquetelaria clássica. Sua receita conta com botânicos cuidadosamente selecionados, que juntos proporcionam toques iniciais frutados, florais e cítricos, com final surpreendentemente seco e levemente picante.',
    category: 'gins-750ml',
    image: productImages.brazilianBottle,
    gallery: [
      productImages.brazilianBottle,
      productImages.heroKit,
      productImages.citricDrink,
      productImages.negroniDrink,
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
    additionalInfo: [
      { label: 'Estilo', value: 'London Dry Gin brasileiro' },
      { label: 'Volume', value: '750ml' },
      { label: 'Graduação alcoólica', value: '45% vol.' },
      { label: 'Perfil sensorial', value: 'Frutado, floral, cítrico, seco e levemente picante' },
      { label: 'Sugestão de serviço', value: 'Gin tônica clássico, negroni, martini seco e coquetéis autorais' },
    ],
  },
  {
    slug: 'beg-modern-tropical-750ml',
    name: 'BEG Modern & Tropical – 750ml',
    shortDescription: 'Gin brasileiro moderno, aromático e tropical.',
    description:
      'BEG Modern & Tropical apresenta uma leitura contemporânea da marca, com personalidade aromática, frescor tropical e acabamento elegante. É uma expressão pensada para drinks leves, vibrantes e marcantes.',
    category: 'gins-750ml',
    image: productImages.modernBottle,
    gallery: [
      productImages.modernBottle,
      productImages.brazilianBottle,
      productImages.heroKit,
      productImages.citricDrink,
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
      { label: 'Coquetelaria tropical', value: 'Ideal para drinks cítricos, leves e aromáticos.' },
    ],
    additionalInfo: [
      { label: 'Estilo', value: 'Gin brasileiro moderno e tropical' },
      { label: 'Volume', value: '750ml' },
      { label: 'Perfil sensorial', value: 'Aromático, tropical, fresco e contemporâneo' },
      { label: 'Sugestão de serviço', value: 'Gin tônica com cítricos, drinks tropicais e coquetéis refrescantes' },
    ],
  },
  {
    slug: 'kit-beg-classic',
    name: 'Kit BEG Classic',
    shortDescription: 'Kit especial para presentear ou experimentar.',
    description:
      'O Kit BEG Classic reúne a experiência visual e sensorial da marca em uma composição especial para presentear, experimentar ou montar um ritual de degustação com acabamento premium.',
    category: 'kits',
    image: productImages.heroKit,
    gallery: [
      productImages.heroKit,
      productImages.brazilianBottle,
      productImages.modernBottle,
      productImages.tonicDrink,
    ],
    price: 'R$ 105,90',
    essenceTitle: 'Uma experiência Beggin em formato de presente.',
    essenceText:
      'Combina produto, estética e ritual para transformar a degustação em uma experiência completa e memorável.',
    specs: [
      { label: 'Seleção especial', value: 'Pensado para presentear e experimentar.' },
      { label: 'Visual premium', value: 'Composição elegante e marcante.' },
      { label: 'Experiência completa', value: 'Produto, apresentação e ritual em uma só entrega.' },
      { label: 'Feito para lembrar', value: 'Ideal para momentos especiais e presentes.' },
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Kit presenteável' },
      { label: 'Indicação', value: 'Presentes, degustação e primeira experiência com Beggin' },
      { label: 'Perfil', value: 'Clássico, elegante e visualmente marcante' },
      { label: 'Conteúdo', value: 'Composição especial da linha Beggin conforme disponibilidade comercial' },
    ],
  },
  {
    slug: 'beg-tonica-pronto-para-beber',
    name: 'BEG & Tônica Pronto para Beber',
    shortDescription: 'Clássico, refrescante e pronto para servir.',
    description:
      'BEG & Tônica Pronto para Beber traduz o ritual do gin tônica em uma apresentação prática, leve e refrescante. É uma solução para servir gelado, com perfil equilibrado e assinatura visual alinhada à coquetelaria Beggin.',
    category: 'prontos-para-drinks',
    image: productImages.tonicDrink,
    gallery: [
      productImages.tonicDrink,
      productImages.heroKit,
      productImages.brazilianBottle,
      productImages.citricDrink,
    ],
    price: 'R$ 15,90',
    essenceTitle: 'Clássico e refrescante.',
    essenceText:
      'O ritual do gin tônica em uma apresentação prática, equilibrada e visualmente alinhada à coquetelaria Beggin.',
    specs: [
      { label: 'Pronto para beber', value: 'Sirva gelado e aproveite.' },
      { label: 'Perfil refrescante', value: 'Leve, cítrico e aromático.' },
      { label: 'Ritual prático', value: 'Experiência de bar em formato simples.' },
      { label: 'Coquetel clássico', value: 'Inspirado no gin tônica Beggin.' },
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Pronto para beber' },
      { label: 'Perfil sensorial', value: 'Clássico, refrescante e leve' },
      { label: 'Sugestão de serviço', value: 'Servir bem gelado, com gelo e garnish cítrico se desejar' },
      { label: 'Ocasião', value: 'Encontros, praia, festas e consumo prático' },
    ],
  },
  {
    slug: 'beg-refil-brazilian-boutique-500ml',
    name: 'BEG Refil Brazilian Boutique – 500ml',
    shortDescription: 'A essência clássica em formato mais leve.',
    description:
      'BEG Refil Brazilian Boutique leva a assinatura clássica da marca para um formato mais prático e consciente, pensado para reduzir impacto de embalagem sem abrir mão do perfil aromático da linha.',
    category: 'refis',
    image: productImages.citricDrink,
    gallery: [
      productImages.citricDrink,
      productImages.brazilianBottle,
      productImages.heroKit,
      productImages.tonicDrink,
    ],
    price: 'R$ 44,90',
    essenceTitle: 'Menos impacto, mesma assinatura.',
    essenceText:
      'Uma alternativa prática para manter a experiência Beggin com mais consciência e menor impacto de embalagem.',
    specs: [
      { label: 'Refil 500ml', value: 'Formato prático para reposição.' },
      { label: 'Consumo consciente', value: 'Menos embalagem, mais propósito.' },
      { label: 'Assinatura clássica', value: 'Mantém o perfil Brazilian Boutique.' },
      { label: 'Uso versátil', value: 'Ideal para drinks clássicos e autorais.' },
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Refil' },
      { label: 'Volume', value: '500ml' },
      { label: 'Perfil', value: 'Clássico, seco e aromático' },
      { label: 'Diferencial', value: 'Formato de menor impacto e reposição prática' },
    ],
  },
  {
    slug: 'beg-refil-modern-tropical-500ml',
    name: 'BEG Refil Modern & Tropical – 500ml',
    shortDescription: 'Refil tropical, aromático e consciente.',
    description:
      'BEG Refil Modern & Tropical traz o frescor da linha tropical para um formato prático de 500ml, mantendo a experiência aromática com menor impacto de embalagem.',
    category: 'refis',
    image: productImages.modernBottle,
    gallery: [
      productImages.modernBottle,
      productImages.citricDrink,
      productImages.heroKit,
      productImages.tonicDrink,
    ],
    price: 'R$ 44,90',
    essenceTitle: 'Frescor tropical em formato consciente.',
    essenceText:
      'Um refil pensado para manter a assinatura tropical da Beggin com praticidade, consciência e presença aromática.',
    specs: [
      { label: 'Refil 500ml', value: 'Formato prático para reposição.' },
      { label: 'Perfil tropical', value: 'Aromático, fresco e contemporâneo.' },
      { label: 'Menos embalagem', value: 'Mais consciência no ritual de consumo.' },
      { label: 'Coquetelaria leve', value: 'Perfeito para drinks cítricos e tropicais.' },
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Refil' },
      { label: 'Volume', value: '500ml' },
      { label: 'Perfil sensorial', value: 'Tropical, aromático e refrescante' },
      { label: 'Diferencial', value: 'Reposição prática com menor impacto' },
    ],
  },
  {
    slug: 'negroni-beg-experience',
    name: 'Negroni BEG Experience',
    shortDescription: 'Intenso, equilibrado e autoral.',
    description:
      'Negroni BEG Experience é uma experiência de coquetelaria intensa, equilibrada e autoral, inspirada em um dos clássicos mais marcantes do bar. É pensado para quem busca presença, amargor elegante e ritual visual.',
    category: 'prontos-para-drinks',
    image: productImages.negroniDrink,
    gallery: [
      productImages.negroniDrink,
      productImages.heroKit,
      productImages.brazilianBottle,
      productImages.tonicDrink,
    ],
    price: 'R$ 19,90',
    essenceTitle: 'Intenso e equilibrado.',
    essenceText:
      'Um tributo à coquetelaria clássica, reinterpretado com presença visual e assinatura Beggin.',
    specs: [
      { label: 'Perfil intenso', value: 'Notas amargas e equilíbrio aromático.' },
      { label: 'Coquetel autoral', value: 'Inspirado na experiência da marca.' },
      { label: 'Serviço prático', value: 'Pronto para compor o ritual do drink.' },
      { label: 'Visual marcante', value: 'Cor, gelo e garnish como protagonistas.' },
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Pronto para drinks' },
      { label: 'Perfil sensorial', value: 'Intenso, equilibrado e amargo elegante' },
      { label: 'Sugestão de serviço', value: 'Servir gelado em copo baixo com gelo e laranja' },
      { label: 'Ocasião', value: 'Aperitivo, encontros e coquetelaria clássica' },
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
