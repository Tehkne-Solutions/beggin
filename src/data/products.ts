export type ProductCategory =
  | 'todos'
  | 'novidades'
  | 'kits'
  | 'gins-750ml'
  | 'refis'
  | 'pronto-para-servir';

export type ProductTag =
  | 'leve'
  | 'refrescante'
  | 'aromatico'
  | 'intenso'
  | 'premium'
  | 'novidade'
  | 'presenteavel'
  | 'refil'
  | 'pronto-para-servir';

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
  tags?: ProductTag[];
  isNew?: boolean;
  alcoholByVolume?: string;
  volume?: string;
  transparentImageReady?: boolean;
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
  { id: 'gins-750ml', label: 'Gins' },
  { id: 'refis', label: 'Refis' },
  { id: 'pronto-para-servir', label: 'Pronto para servir' },
] as const;

export const productTagLabels: Record<ProductTag, string> = {
  leve: 'Leve',
  refrescante: 'Refrescante',
  aromatico: 'Aromático',
  intenso: 'Intenso',
  premium: 'Premium',
  novidade: 'Novidade',
  presenteavel: 'Presenteável',
  refil: 'Refil',
  'pronto-para-servir': 'Pronto para servir',
};

const omieBase = '/images/fotos-omie';

const productImages = {
  brazilian: `${omieBase}/BEG%20BRAZILIAN.jpg`,
  brazilianGold: `${omieBase}/GOLD%20EDITION.jpg`,
  brazilianRefil: `${omieBase}/BEG%20BRAZILIAN%20REFIL.jpg`,
  modern: `${omieBase}/MODERN.jpg`,
  modernRefil: `${omieBase}/MODERN%20REFIL.jpg`,
  negroni: `${omieBase}/NEGRONI.jpg`,
  negroniRefil: `${omieBase}/NEGRONI%20REFIL.jpg`,
  miniNegroni: `${omieBase}/MINI%20NEGRONI.jpg`,
  kitTalCha: `${omieBase}/KIT%20TAL%20CH%C3%81.jpg`,
  hypeGin: `${omieBase}/HYPE%20GIN.jpg`,
  hypeVodka: `${omieBase}/HYPE%20VODKA.jpg`,
  hypeDrop: `${omieBase}/HYPE%20DROP.jpg`,
  leatherCoaster: `${omieBase}/COASTER%20COURO.jpeg`,
  ovalGlass: `${omieBase}/COPO%20OVAL.jpeg`,
} as const;

const defaultGallery = [
  productImages.brazilian,
  productImages.modern,
  productImages.negroni,
  productImages.brazilianGold,
];

function productSpecs(volume: string, category: string, profile: string) {
  return [
    { label: 'Volume', value: volume },
    { label: 'Categoria', value: category },
    { label: 'Perfil', value: profile },
    { label: 'Origem', value: 'Joaquim Egídio — Campinas, SP' },
  ];
}

function additionalInfo(volume: string, category: string, service: string) {
  return [
    { label: 'Volume', value: volume },
    { label: 'Categoria', value: category },
    { label: 'Sugestão de serviço', value: service },
    { label: 'Produção', value: 'Produção brasileira com identidade artesanal.' },
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
    image: productImages.brazilian,
    gallery: [productImages.brazilian, productImages.ovalGlass, productImages.leatherCoaster, ...defaultGallery],
    price: 'R$ 99,90',
    badge: 'Clássico',
    tags: ['premium', 'aromatico'],
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'A assinatura brasileira da BEG.',
    essenceText:
      'Um gin versátil, elegante e aromático, pensado para quem busca uma experiência artesanal com identidade brasileira.',
    specs: productSpecs('750ml', 'Gin artesanal', 'Seco, aromático e equilibrado'),
    additionalInfo: additionalInfo('750ml', 'Gin', 'Gin tônica, negroni, martini seco e coquetéis autorais'),
  },
  {
    slug: 'beg-brazilian-gold-edition-750ml',
    name: 'BEG Brazilian Gold Edition 750ml',
    shortDescription: 'Edição especial dourada da linha Brazilian.',
    description:
      'BEG Brazilian Gold Edition celebra a presença premiada da marca em uma versão especial, pensada para presente, coleção e momentos de destaque.',
    category: 'novidades',
    image: productImages.brazilianGold,
    gallery: [productImages.brazilianGold, productImages.brazilian, productImages.ovalGlass, productImages.leatherCoaster],
    price: 'R$ 119,90',
    badge: 'Gold Edition',
    tags: ['novidade', 'premium', 'presenteavel'],
    isNew: true,
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'Uma edição para celebrar.',
    essenceText:
      'Uma versão especial da assinatura Brazilian, com presença visual premium e vocação para momentos memoráveis.',
    specs: productSpecs('750ml', 'Edição especial', 'Clássico, premium e presenteável'),
    additionalInfo: additionalInfo('750ml', 'Edição especial', 'Presentes, celebrações e coquetelaria premium'),
  },
  {
    slug: 'beg-brazilian-refil-500ml',
    name: 'BEG Brazilian Refil 500ml',
    shortDescription: 'A assinatura Brazilian em formato refil.',
    description:
      'BEG Brazilian Refil leva a experiência clássica da destilaria para um formato prático, mais leve e pensado para reposição com consciência.',
    category: 'refis',
    image: productImages.brazilianRefil,
    gallery: [productImages.brazilianRefil, productImages.brazilian, productImages.ovalGlass, productImages.leatherCoaster],
    price: 'R$ 49,90',
    badge: 'Refil',
    tags: ['refil', 'leve'],
    volume: '500ml',
    transparentImageReady: false,
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
    image: productImages.modern,
    gallery: [productImages.modern, productImages.ovalGlass, productImages.leatherCoaster, productImages.brazilian],
    price: 'R$ 99,90',
    badge: 'Tropical',
    tags: ['refrescante', 'aromatico', 'leve'],
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'Aromático, tropical e brasileiro.',
    essenceText:
      'Uma expressão moderna para drinks cítricos, leves e refrescantes, mantendo a sofisticação artesanal da BEG.',
    specs: productSpecs('750ml', 'Gin artesanal', 'Tropical, fresco e aromático'),
    additionalInfo: additionalInfo('750ml', 'Gin', 'Gin tônica com cítricos, drinks tropicais e coquetéis refrescantes'),
  },
  {
    slug: 'beg-modern-tropical-refil-500ml',
    name: 'Modern & Tropical Refil 500ml',
    shortDescription: 'Frescor tropical em formato refil.',
    description:
      'Modern & Tropical Refil mantém o perfil aromático e refrescante da linha em um formato prático para reposição e consumo consciente.',
    category: 'refis',
    image: productImages.modernRefil,
    gallery: [productImages.modernRefil, productImages.modern, productImages.ovalGlass, productImages.leatherCoaster],
    price: 'R$ 49,90',
    badge: 'Refil',
    tags: ['refil', 'refrescante', 'leve'],
    volume: '500ml',
    transparentImageReady: false,
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
    category: 'pronto-para-servir',
    image: productImages.negroni,
    gallery: [productImages.negroni, productImages.ovalGlass, productImages.leatherCoaster, productImages.brazilian],
    price: 'R$ 119,90',
    badge: 'Aged',
    tags: ['intenso', 'premium', 'pronto-para-servir'],
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'Intenso, clássico e autoral.',
    essenceText:
      'Um coquetel com presença, amargor elegante e vocação para momentos de degustação.',
    specs: productSpecs('750ml', 'Pronto para servir', 'Intenso, amargo e equilibrado'),
    additionalInfo: additionalInfo('750ml', 'Pronto para servir', 'Servir gelado em copo baixo com gelo e casca de laranja'),
  },
  {
    slug: 'beg-aged-negroni-refil-500ml',
    name: 'Aged Negroni Refil 500ml',
    shortDescription: 'O Negroni BEG em formato refil 500ml.',
    description:
      'Aged Negroni Refil 500ml facilita a reposição do coquetel autoral da BEG, preservando intensidade, equilíbrio e praticidade.',
    category: 'refis',
    image: productImages.negroniRefil,
    gallery: [productImages.negroniRefil, productImages.negroni, productImages.ovalGlass, productImages.leatherCoaster],
    price: 'R$ 59,90',
    badge: 'Refil',
    tags: ['refil', 'intenso', 'pronto-para-servir'],
    volume: '500ml',
    transparentImageReady: false,
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
    image: productImages.miniNegroni,
    gallery: [productImages.miniNegroni, productImages.negroni, productImages.ovalGlass, productImages.leatherCoaster],
    badge: '250ml',
    tags: ['refil', 'intenso'],
    volume: '250ml',
    transparentImageReady: false,
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
    image: productImages.kitTalCha,
    gallery: [productImages.kitTalCha, productImages.ovalGlass, productImages.leatherCoaster, productImages.brazilian],
    badge: 'Collab',
    tags: ['presenteavel', 'premium'],
    volume: 'Kit',
    transparentImageReady: false,
    essenceTitle: 'Uma collab para presentear e experimentar.',
    essenceText:
      'Uma composição especial para explorar aromas, botânicos e momentos de celebração.',
    specs: productSpecs('Kit', 'Kit / collab', 'Botânico, presenteável e sensorial'),
    additionalInfo: additionalInfo('Kit', 'Kits', 'Presentes, experiências e momentos especiais'),
  },
  {
    slug: 'hype-gin-750ml',
    name: 'Hype Gin 750ml',
    shortDescription: 'Gin Hype com assinatura BEG.',
    description:
      'Hype Gin integra a linha contemporânea da destilaria, trazendo uma leitura jovem, marcante e versátil para diferentes momentos de consumo.',
    category: 'novidades',
    image: productImages.hypeGin,
    gallery: [productImages.hypeGin, productImages.ovalGlass, productImages.leatherCoaster, productImages.brazilian],
    price: 'R$ 45,90',
    badge: 'Hype',
    tags: ['novidade', 'refrescante'],
    isNew: true,
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'Contemporâneo, versátil e marcante.',
    essenceText: 'Uma expressão criada para drinks, encontros e ativações com personalidade.',
    specs: productSpecs('750ml', 'Gin', 'Jovem, marcante e contemporâneo'),
    additionalInfo: additionalInfo('750ml', 'Gin', 'Drinks autorais, ativações e consumo contemporâneo'),
  },
  {
    slug: 'hype-vodka-1000ml',
    name: 'Hype Vodka 1000ml',
    shortDescription: 'Vodka Hype para drinks e ativações.',
    description:
      'Hype Vodka amplia a linha contemporânea da destilaria com uma proposta versátil para drinks, eventos e ativações de marca.',
    category: 'novidades',
    image: productImages.hypeVodka,
    gallery: [productImages.hypeVodka, productImages.hypeDrop, productImages.ovalGlass, productImages.leatherCoaster],
    price: 'R$ 39,90',
    badge: 'Hype',
    tags: ['novidade', 'leve', 'refrescante'],
    isNew: true,
    volume: '1000ml',
    transparentImageReady: false,
    essenceTitle: 'Versatilidade para diferentes ocasiões.',
    essenceText: 'Uma vodka pensada para drinks longos, festas, ativações e collabs.',
    specs: productSpecs('1000ml', 'Vodka', 'Versátil, leve e moderno'),
    additionalInfo: additionalInfo('1000ml', 'Vodka', 'Drinks longos, festas, ativações e collabs'),
  },
  {
    slug: 'hype-drop-licor-framboesa-750ml',
    name: 'Hype Drop Licor Fino de Framboesa 750ml',
    shortDescription: 'Licor fino de framboesa pronto para servir e criar drinks.',
    description:
      'Hype Drop é um licor fino de framboesa de perfil frutado e contemporâneo, pensado para servir gelado, compor drinks e criar experiências dentro do universo Hype.',
    category: 'pronto-para-servir',
    image: productImages.hypeDrop,
    gallery: [productImages.hypeDrop, productImages.hypeGin, productImages.hypeVodka, productImages.ovalGlass],
    price: 'R$ 69,90',
    badge: 'Hype Drop',
    tags: ['novidade', 'pronto-para-servir', 'refrescante'],
    isNew: true,
    volume: '750ml',
    transparentImageReady: false,
    essenceTitle: 'Framboesa, cor e personalidade.',
    essenceText:
      'Um licor fino para servir gelado, explorar combinações frutadas e criar drinks visualmente marcantes.',
    specs: productSpecs('750ml', 'Licor fino', 'Frutado, vibrante e contemporâneo'),
    additionalInfo: additionalInfo('750ml', 'Pronto para servir', 'Servir gelado ou utilizar em drinks frutados'),
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const currentProduct = getProductBySlug(slug);

  if (!currentProduct) {
    return products.filter((product) => product.slug !== slug).slice(0, limit);
  }

  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === currentProduct.category,
  );
  const fallback = products.filter(
    (product) => product.slug !== slug && product.category !== currentProduct.category,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
