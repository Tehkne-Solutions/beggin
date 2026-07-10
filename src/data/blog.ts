export type BlogCategory = 'release' | 'drinks' | 'institucional';

export type DrinkRecipe = {
  number: number;
  title: string;
  occasion: string;
  ingredients: string[];
  method: string;
  garnish: string;
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  eyebrow: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  introduction: string[];
  recipes?: DrinkRecipe[];
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
    eyebrow: 'Drinks para o Dia a Dia',
    title: 'Leves, refrescantes e fáceis de repetir.',
    excerpt:
      'Oito receitas para transformar o ritual BEG em momentos simples, frescos e práticos — do fim de tarde ao encontro casual.',
    image: '/images/Drinks (7).jpg',
    tags: ['Leve', 'Refrescante', 'Prático'],
    introduction: [
      'Drinks do dia a dia precisam ser simples de preparar, equilibrados e convidativos. A seleção abaixo valoriza receitas diretas, ingredientes acessíveis e o perfil aromático dos produtos BEG.',
      'Use bastante gelo, ingredientes frescos e ajuste a diluição ao seu gosto. As medidas podem ser adaptadas sem perder a essência de cada receita.',
    ],
    recipes: [
      {
        number: 1,
        title: 'BEG & Tônica Clássica',
        occasion: 'Fim de tarde',
        ingredients: ['50 ml de BEG Brazilian', '150 ml de água tônica', 'Gelo em cubos'],
        method: 'Encha uma taça com gelo, adicione o gin e complete lentamente com água tônica. Misture uma única vez.',
        garnish: 'Casca de limão Tahiti ou uma rodela fina de limão.',
      },
      {
        number: 2,
        title: 'Brazilian Citrus Highball',
        occasion: 'Almoço ou encontro casual',
        ingredients: ['45 ml de BEG Brazilian', '20 ml de suco de limão', '10 ml de xarope simples', 'Água com gás'],
        method: 'Monte em copo alto com gelo, adicione gin, limão e xarope. Complete com água com gás e misture suavemente.',
        garnish: 'Rodela de limão e ramo de alecrim.',
      },
      {
        number: 3,
        title: 'Modern Tropical Spritz',
        occasion: 'Dias quentes',
        ingredients: ['45 ml de Modern & Tropical', '60 ml de espumante brut', '40 ml de água com gás', 'Gelo'],
        method: 'Monte todos os ingredientes em uma taça grande com gelo, começando pelo gin e finalizando com a água com gás.',
        garnish: 'Fatia de laranja ou mexerica.',
      },
      {
        number: 4,
        title: 'Gin, Chá e Limão',
        occasion: 'Pausa no meio da tarde',
        ingredients: ['45 ml de BEG Brazilian', '90 ml de chá-preto gelado', '15 ml de suco de limão', '10 ml de mel diluído'],
        method: 'Misture tudo em um copo alto com bastante gelo e finalize com uma leve mexida.',
        garnish: 'Casca de limão e folhas de hortelã.',
      },
      {
        number: 5,
        title: 'BEG Collins',
        occasion: 'Happy hour',
        ingredients: ['50 ml de BEG Brazilian', '25 ml de suco de limão', '15 ml de xarope simples', 'Água com gás'],
        method: 'Agite gin, limão e xarope com gelo. Coe para um copo alto com gelo novo e complete com água com gás.',
        garnish: 'Rodela de limão.',
      },
      {
        number: 6,
        title: 'Pitanga Tônica',
        occasion: 'Encontro descontraído',
        ingredients: ['45 ml de Modern & Tropical', '20 ml de polpa de pitanga peneirada', '120 ml de água tônica', 'Gelo'],
        method: 'Adicione gin e pitanga em uma taça com gelo. Complete com tônica e misture delicadamente.',
        garnish: 'Folha de pitangueira ou frutas vermelhas.',
      },
      {
        number: 7,
        title: 'Hype Vodka Mule',
        occasion: 'Noite com amigos',
        ingredients: ['50 ml de Hype Vodka', '20 ml de suco de limão', '10 ml de xarope de gengibre', 'Água com gás'],
        method: 'Monte em caneca ou copo alto com gelo, misture os três primeiros ingredientes e complete com água com gás.',
        garnish: 'Fatia de limão e gengibre fresco.',
      },
      {
        number: 8,
        title: 'Aged Negroni Fácil',
        occasion: 'Encerrar o dia',
        ingredients: ['90 ml de Aged Negroni', 'Gelo grande'],
        method: 'Sirva o Aged Negroni bem gelado sobre um cubo grande de gelo e misture por alguns segundos.',
        garnish: 'Casca de laranja expressa sobre o copo.',
      },
    ],
  },
  {
    slug: 'drinks-para-ocasioes-especiais',
    category: 'drinks',
    eyebrow: 'Drinks para Ocasiões Especiais',
    title: 'Coquetéis para celebrar com presença.',
    excerpt:
      'Seis combinações aromáticas e elegantes para jantares, eventos, celebrações e momentos que pedem uma taça memorável.',
    image: '/images/Beg_Drinks (306).jpg',
    tags: ['Elegante', 'Aromático', 'Memorável'],
    introduction: [
      'Ocasiões especiais pedem drinks com camadas de aroma, apresentação cuidadosa e um ritual de preparo que faça parte da experiência.',
      'Resfrie previamente as taças e organize as guarnições antes de começar. Isso mantém o serviço fluido e valoriza o resultado final.',
    ],
    recipes: [
      {
        number: 9,
        title: 'French 75 Brasileiro',
        occasion: 'Brinde de abertura',
        ingredients: ['35 ml de BEG Brazilian', '15 ml de suco de limão', '10 ml de xarope simples', 'Espumante brut'],
        method: 'Agite gin, limão e xarope com gelo. Coe para uma taça flute e complete com espumante.',
        garnish: 'Twist de limão.',
      },
      {
        number: 10,
        title: 'Gold Garden',
        occasion: 'Jantar ou celebração',
        ingredients: ['50 ml de BEG Brazilian Gold Edition', '20 ml de vermute seco', '1 colher de chá de mel diluído', '2 gotas de bitter aromático'],
        method: 'Mexa todos os ingredientes com gelo e coe para uma taça previamente gelada.',
        garnish: 'Casca de laranja e ramo pequeno de alecrim.',
      },
      {
        number: 11,
        title: 'Negroni de Celebração',
        occasion: 'Recepção noturna',
        ingredients: ['75 ml de Aged Negroni', '20 ml de espumante brut', 'Gelo'],
        method: 'Sirva o Aged Negroni sobre gelo e finalize com o espumante, misturando delicadamente.',
        garnish: 'Meia-lua de laranja.',
      },
      {
        number: 12,
        title: 'Bramble Hype Drop',
        occasion: 'Festa ou encontro especial',
        ingredients: ['40 ml de BEG Brazilian', '20 ml de Hype Drop', '20 ml de suco de limão', '10 ml de xarope simples'],
        method: 'Agite gin, limão e xarope com gelo. Sirva sobre gelo triturado e despeje o Hype Drop por cima.',
        garnish: 'Framboesas ou amoras.',
      },
      {
        number: 13,
        title: 'Martini Aromático',
        occasion: 'Jantar elegante',
        ingredients: ['60 ml de BEG Brazilian', '15 ml de vermute seco', '1 gota de bitter de laranja'],
        method: 'Mexa os ingredientes com bastante gelo até resfriar e coe para uma taça martini gelada.',
        garnish: 'Twist de limão ou azeitona.',
      },
      {
        number: 14,
        title: 'Tropical Royale',
        occasion: 'Aniversário ou comemoração',
        ingredients: ['35 ml de Modern & Tropical', '15 ml de licor cítrico', '15 ml de suco de limão', 'Espumante brut'],
        method: 'Agite os três primeiros ingredientes com gelo, coe para uma taça e complete com espumante.',
        garnish: 'Casca de mexerica.',
      },
    ],
  },
  {
    slug: 'drinks-para-impressionar',
    category: 'drinks',
    eyebrow: 'Drinks para Impressionar',
    title: 'Autorais, intensos e visualmente marcantes.',
    excerpt:
      'Quatro receitas para quem quer servir algo com assinatura, impacto visual e uma experiência sensorial mais sofisticada.',
    image: '/images/Beg_Drinks (101).jpg',
    tags: ['Autoral', 'Intenso', 'Sofisticado'],
    introduction: [
      'Para impressionar, técnica e apresentação precisam trabalhar juntas. Use gelo de boa qualidade, taças bem geladas e guarnições preparadas com precisão.',
      'As receitas desta seção exploram contraste, textura e aroma, mantendo o produto BEG como protagonista.',
    ],
    recipes: [
      {
        number: 15,
        title: 'Fumaça do Interior',
        occasion: 'Experiência à mesa',
        ingredients: ['50 ml de BEG Brazilian Gold Edition', '20 ml de vermute tinto', '10 ml de xarope de rapadura', '2 gotas de bitter'],
        method: 'Mexa os ingredientes com gelo e coe sobre um cubo grande. Aromatize o copo com alecrim tostado, sem deixar a chama entrar em contato com a bebida.',
        garnish: 'Alecrim e casca de laranja.',
      },
      {
        number: 16,
        title: 'Hype Drop Sour',
        occasion: 'Coquetel autoral',
        ingredients: ['35 ml de BEG Brazilian', '25 ml de Hype Drop', '25 ml de suco de limão', '15 ml de xarope simples', '20 ml de aquafaba'],
        method: 'Agite primeiro sem gelo para criar textura. Adicione gelo, agite novamente e coe para uma taça baixa.',
        garnish: 'Gotas de bitter e framboesa.',
      },
      {
        number: 17,
        title: 'Botanical Martini',
        occasion: 'Serviço sofisticado',
        ingredients: ['55 ml de Modern & Tropical', '15 ml de vermute seco', '5 ml de licor de ervas'],
        method: 'Mexa com gelo por cerca de 20 segundos e coe para uma taça gelada.',
        garnish: 'Folha aromática ou twist de limão.',
      },
      {
        number: 18,
        title: 'Aged Negroni Signature',
        occasion: 'Encerramento memorável',
        ingredients: ['80 ml de Aged Negroni', '10 ml de Hype Drop', 'Gelo grande'],
        method: 'Sirva o Aged Negroni sobre gelo grande e adicione o Hype Drop lentamente para criar uma camada frutada.',
        garnish: 'Casca de laranja e framboesa.',
      },
    ],
  },
  {
    slug: 'beg-destilaria-do-interior-para-o-mundo',
    category: 'release',
    eyebrow: 'Release Institucional',
    title: 'BEG Destilaria: do interior de São Paulo para o mundo.',
    excerpt:
      'Uma história de produção artesanal, brasilidade, inovação e reconhecimento internacional construída em Joaquim Egídio.',
    image: '/images/BEGGIN_DESTILARIA-0313.jpg',
    tags: ['Imprensa', 'Marca', 'Destilaria'],
    introduction: [
      'Nascida no interior de São Paulo, a BEG Destilaria une produção artesanal, pesquisa de botânicos e uma identidade profundamente brasileira.',
      'Em Joaquim Egídio, Campinas, a marca desenvolve rótulos, experiências e iniciativas que conectam qualidade sensorial, hospitalidade e responsabilidade ambiental.',
      'A trajetória premiada da BEG mostra como técnica, consistência e personalidade podem levar uma destilaria brasileira aos principais reconhecimentos do setor.',
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
