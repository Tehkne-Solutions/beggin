export type ProductCategory =
  | 'todos'
  | 'novidades'
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
  { id: 'novidades', label: 'Novidades' },
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

const defaultGallery = [
  productImages.heroKit,
  productImages.brazilianBottle,
  productImages.modernBottle,
  productImages.tonicDrink,
];

function productSpecs(volume: string, category: string, profile: string) {
  return [
    { label: 'Volume', value: volume },
    { label: 'Categoria', value: category },
    { label: 'Perfil', value: profile },
    { label: 'BEG Destilaria', value: 'Produção brasileira com identidade artesanal.' },
  ];
}

function additionalInfo(volume: string, category: string, service: string) {
  return [
    { label: 'Volume', value: volume },
    { label: 'Categoria', value: category },
    { label: 'Sugestão de serviço', value: service },
    { label: 'Origem', value: 'Joaquim Egídio — Campinas, SP' },
  ];
}

export const products: Product[] = [
  {
    slug: 'beg-brazilian-750ml',
    name: 'BEG Brazilian 750ml',
    shortDescription: 'O clássico brasileiro da BEG Destilaria.',
    description:
      'BEG Brazilian é a assinatura clássica da destilaria: um gin artesanal brasileiro, equilibrado, aromático e feito para elevar drinks simples ou coquetéis autorais.',
    category: 'gins-750ml',
    image: productImages.brazilianBottle,
    gallery: [productImages.brazilianBottle, ...defaultGallery],
    price: 'Sob consulta',
    badge: 'Clássico',
    essenceTitle: 'A assinatura brasileira da BEG.',
    essenceText:
      'Um gin versátil, elegante e aromático, pensado para quem busca uma experiência artesanal com identidade brasileira.',
    specs: productSpecs('750ml', 'Gin artesanal', 'Seco, aromático e equilibrado'),
    additionalInfo: additionalInfo('750ml', 'Gin 750ml', 'Gin tônica, negroni, martini seco e coquetéis autorais'),
  },
  {
    slug: 'beg-brazilian-gold-edition-750ml',
    name: 'BEG Brazilian Gold Edition 750ml',
    shortDescription: 'Edição especial dourada da linha Brazilian.',
    description:
      'BEG Brazilian Gold Edition celebra a presença premiada da marca em uma versão especial, pensada para presente, coleção e momentos de destaque.',
    category: 'novidades',
    image: productImages.heroKit,
    gallery: [productImages.heroKit, productImages.brazilianBottle, productImages.modernBottle],
    price: 'Sob consulta',
    badge: 'Gold Edition',
    essenceTitle: 'Uma edição para celebrar.',
    essenceText:
      'Uma versão especial da assinatura Brazilian, com presença visual premium e vocação para momentos memoráveis.',
    specs: productSpecs('750ml', 'Edição especial', 'Clássico, premium e presenteável'),
    additionalInfo: additionalInfo('750ml', 'Novidade / edição especial', 'Presentes, celebrações e coquetelaria premium'),
  },
  {
    slug: 'beg-brazilian-refil-500ml',
    name: 'BEG Brazilian Refil 500ml',
    shortDescription: 'A assinatura Brazilian em formato refil.',
    description:
      'BEG Brazilian Refil leva a experiência clássica da destilaria para um formato prático, mais leve e pensado para reposição com consciência.',
    category: 'refis',
    image: productImages.citricDrink,
    gallery: [productImages.citricDrink, productImages.brazilianBottle, productImages.heroKit],
    price: 'Sob consulta',
    badge: 'Refil',
    essenceTitle: 'Menos impacto, mesma assinatura.',
    essenceText:
      'Formato refil para manter o ritual BEG Brazilian com praticidade e menor impacto de embalagem.',
    specs: productSpecs('500ml', 'Refil', 'Clássico, seco e aromático'),
    additionalInfo: additionalInfo('500ml', 'Refil', 'Reposição prática para drinks clássicos e autorais'),
  },
  {
    slug: 'beg-modern-tropical-750ml',
    name: 'Modern & Tropical 750ml',
    shortDescription: 'Gin moderno, aromático e tropical.',
    description:
      'Modern & Tropical apresenta uma leitura contemporânea da BEG Destilaria, com frescor, botânicos marcantes e personalidade ideal para drinks vibrantes.',
    category: 'gins-750ml',
    image: productImages.modernBottle,
    gallery: [productImages.modernBottle, productImages.brazilianBottle, productImages.citricDrink],
    price: 'Sob consulta',
    badge: 'Tropical',
    essenceTitle: 'Aromático, tropical e brasileiro.',
    essenceText:
      'Uma expressão moderna para drinks cítricos, leves e refrescantes, mantendo a sofisticação artesanal da BEG.',
    specs: productSpecs('750ml', 'Gin artesanal', 'Tropical, fresco e aromático'),
    additionalInfo: additionalInfo('750ml', 'Gin 750ml', 'Gin tônica com cítricos, drinks tropicais e coquetéis refrescantes'),
  },
  {
    slug: 'beg-modern-tropical-refil-500ml',
    name: 'Modern & Tropical Refil 500ml',
    shortDescription: 'Frescor tropical em formato refil.',
    description:
      'Modern & Tropical Refil mantém o perfil aromático e refrescante da linha em um formato prático para reposição e consumo consciente.',
    category: 'refis',
    image: productImages.modernBottle,
    gallery: [productImages.modernBottle, productImages.citricDrink, productImages.heroKit],
    price: 'Sob consulta',
    badge: 'Refil',
    essenceTitle: 'Tropicalidade com consciência.',
    essenceText:
      'Um refil pensado para preservar frescor, praticidade e menor impacto dentro do ritual BEG.',
    specs: productSpecs('500ml', 'Refil', 'Tropical, aromático e refrescante'),
    additionalInfo: additionalInfo('500ml', 'Refil', 'Reposição para drinks tropicais, cítricos e refrescantes'),
  },
  {
    slug: 'beg-aged-negroni-750ml',
    name: 'Aged Negroni 750ml',
    shortDescription: 'Negroni autoral envelhecido e pronto para servir.',
    description:
      'Aged Negroni traduz a coquetelaria clássica em uma versão autoral da BEG, intensa, equilibrada e pronta para criar uma experiência marcante.',
    category: 'prontos-para-drinks',
    image: productImages.negroniDrink,
    gallery: [productImages.negroniDrink, productImages.heroKit, productImages.brazilianBottle],
    price: 'Sob consulta',
    badge: 'Aged',
    essenceTitle: 'Intenso, clássico e autoral.',
    essenceText:
      'Um coquetel com presença, amargor elegante e vocação para momentos de degustação.',
    specs: productSpecs('750ml', 'Pronto para drinks', 'Intenso, amargo e equilibrado'),
    additionalInfo: additionalInfo('750ml', 'Pronto para drinks', 'Servir gelado em copo baixo com gelo e casca de laranja'),
  },
  {
    slug: 'beg-aged-negroni-refil-500ml',
    name: 'Aged Negroni Refil 500ml',
    shortDescription: 'O Negroni BEG em formato refil 500ml.',
    description:
      'Aged Negroni Refil 500ml facilita a reposição do coquetel autoral da BEG, preservando intensidade, equilíbrio e praticidade.',
    category: 'refis',
    image: productImages.negroniDrink,
    gallery: [productImages.negroniDrink, productImages.citricDrink, productImages.heroKit],
    price: 'Sob consulta',
    badge: 'Refil',
    essenceTitle: 'Reposição prática para o ritual Negroni.',
    essenceText:
      'Formato refil para manter o coquetel favorito sempre pronto para servir.',
    specs: productSpecs('500ml', 'Refil', 'Intenso e equilibrado'),
    additionalInfo: additionalInfo('500ml', 'Refil', 'Servir gelado com gelo grande e casca de laranja'),
  },
  {
    slug: 'beg-aged-negroni-refil-250ml',
    name: 'Aged Negroni Refil 250ml',
    shortDescription: 'Versão compacta do Negroni autoral BEG.',
    description:
      'Aged Negroni Refil 250ml é uma versão menor e prática para experimentar, presentear ou levar o ritual BEG para diferentes ocasiões.',
    category: 'refis',
    image: productImages.negroniDrink,
    gallery: [productImages.negroniDrink, productImages.tonicDrink, productImages.heroKit],
    price: 'Sob consulta',
    badge: '250ml',
    essenceTitle: 'Compacto, intenso e pronto.',
    essenceText:
      'Uma porta de entrada para o universo Aged Negroni da BEG, em formato menor e prático.',
    specs: productSpecs('250ml', 'Refil', 'Intenso e prático'),
    additionalInfo: additionalInfo('250ml', 'Refil', 'Degustação, presente e consumo prático'),
  },
  {
    slug: 'kit-tal-cha-beg-collab',
    name: 'Kit Tal Chá & BEG Collab',
    shortDescription: 'Collab especial para experiências botânicas.',
    description:
      'Kit Tal Chá & BEG Collab une a identidade artesanal da BEG com uma proposta de experiência botânica, presenteável e sensorial.',
    category: 'kits',
    image: productImages.heroKit,
    gallery: [productImages.heroKit, productImages.brazilianBottle, productImages.modernBottle],
    price: 'Sob consulta',
    badge: 'Collab',
    essenceTitle: 'Uma collab para presentear e experimentar.',
    essenceText:
      'Uma composição especial para explorar aromas, botânicos e momentos de celebração.',
    specs: productSpecs('Kit', 'Kit / collab', 'Botânico, presenteável e sensorial'),
    additionalInfo: additionalInfo('Kit', 'Kits', 'Presentes, experiências e momentos especiais'),
  },
  {
    slug: 'hype-gin-750ml',
    name: 'Hype Gin 750ml',
    shortDescription: 'Novidade Hype com assinatura BEG.',
    description:
      'Hype Gin 750ml integra a linha de novidades, trazendo uma leitura jovem, marcante e contemporânea para diferentes momentos de consumo.',
    category: 'novidades',
    image: productImages.brazilianBottle,
    gallery: [productImages.brazilianBottle, productImages.heroKit, productImages.tonicDrink],
    price: 'Sob consulta',
    badge: 'Hype',
    essenceTitle: 'Uma novidade para descobrir.',
    essenceText:
      'A linha Hype expande o universo BEG com produtos de personalidade e presença comercial.',
    specs: productSpecs('750ml', 'Novidade', 'Moderno e versátil'),
    additionalInfo: additionalInfo('750ml', 'Novidades', 'Drinks, presentes e ocasiões contemporâneas'),
  },
  {
    slug: 'hype-vodka-1000ml',
    name: 'Hype Vodka 1000ml',
    shortDescription: 'Vodka Hype em formato 1000ml.',
    description:
      'Hype Vodka 1000ml amplia o portfólio com uma opção versátil, prática e pensada para diferentes composições de drinks.',
    category: 'novidades',
    image: productImages.citricDrink,
    gallery: [productImages.citricDrink, productImages.heroKit, productImages.modernBottle],
    price: 'Sob consulta',
    badge: 'Hype',
    essenceTitle: 'Versatilidade em 1000ml.',
    essenceText:
      'Uma vodka para compor drinks, eventos e experiências comerciais da linha Hype.',
    specs: productSpecs('1000ml', 'Novidade', 'Versátil e prático'),
    additionalInfo: additionalInfo('1000ml', 'Novidades', 'Drinks longos, eventos e consumo compartilhado'),
  },
  {
    slug: 'hype-drop-licor-fino-framboesa-750ml',
    name: 'Hype Drop Licor Fino de Framboesa 750ml',
    shortDescription: 'Licor fino de framboesa da linha Hype Drop.',
    description:
      'Hype Drop Licor Fino de Framboesa 750ml é uma novidade de perfil frutado, vibrante e comercial, pensada para drinks, finalizações e experiências marcantes.',
    category: 'novidades',
    image: productImages.tonicDrink,
    gallery: [productImages.tonicDrink, productImages.citricDrink, productImages.heroKit],
    price: 'Sob consulta',
    badge: 'Hype Drop',
    essenceTitle: 'Framboesa, intensidade e cor.',
    essenceText:
      'Uma novidade frutada para criar drinks expressivos e experiências visuais marcantes.',
    specs: productSpecs('750ml', 'Licor fino', 'Frutado, vibrante e marcante'),
    additionalInfo: additionalInfo('750ml', 'Novidades', 'Drinks autorais, finalizações e ocasiões especiais'),
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
