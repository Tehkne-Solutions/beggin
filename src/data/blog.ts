export type BlogCategory = 'release' | 'drinks' | 'institucional';

export type DrinkRecipe = {
  number: number;
  title: string;
  occasion: string;
  ingredients: string[];
  method: string;
  garnish?: string;
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

const guideIntroduction =
  'Seja para relaxar após um dia longo, celebrar com os amigos no fim de semana ou impressionar os convidados em um jantar especial, existe um drink perfeito para cada ocasião. Separamos as receitas exclusivas da VIVA HYPE em três categorias para facilitar a sua escolha. Confira!';

export const blogPosts: BlogPost[] = [
  {
    slug: 'drinks-para-o-dia-a-dia',
    category: 'drinks',
    eyebrow: 'Guia de Drink: Do Dia a Dia ao Momento de Impressionar',
    title: 'Drinks para o Dia a Dia',
    excerpt: 'Opções leves, rápidas, práticas e super refrescantes para os momentos casuais.',
    image: '/images/Drinks (7).jpg',
    tags: ['Leves', 'Rápidos', 'Refrescantes'],
    introduction: [guideIntroduction],
    recipes: [
      {
        number: 1,
        title: 'Gin Tônica Clássico',
        occasion: 'Dia a dia',
        ingredients: [
          '50 a 60 ml de gin',
          'Água tônica a gosto, aproximadamente 150 ml',
          'Gelo',
          'Rodela ou zeste de limão, ou outro cítrico',
        ],
        method:
          'Encha um copo grande com bastante gelo, adicione o gin e complete com a água tônica. Mexa levemente com uma colher bailarina e finalize decorando com a rodela de limão.',
      },
      {
        number: 2,
        title: 'Vodka + Sprite Zero',
        occasion: 'Dia a dia',
        ingredients: ['50 ml de vodka', 'Sprite Zero a gosto', 'Gelo', 'Fatia de limão, opcional'],
        method:
          'Encha o copo de gelo até a boca, adicione a dose de vodka e complete com a Sprite Zero. Mexa suavemente e adicione a fatia de limão se desejar.',
      },
      {
        number: 3,
        title: 'Gimlet',
        occasion: 'Dia a dia',
        ingredients: ['60 ml de gin', '25 a 30 ml de suco de limão', '20 a 25 ml de açúcar ou xarope simples', 'Gelo'],
        method:
          'Adicione todos os ingredientes em um copo com gelo e mexa muito bem. É um drink rápido, direto e extremamente refrescante.',
      },
      {
        number: 4,
        title: 'Gin & Citrus',
        occasion: 'Dia a dia',
        ingredients: ['50 ml de gin', '1 rodela de laranja', '1 rodela de limão', 'Refrigerante citrus para completar', 'Gelo'],
        method:
          'Monte o drink diretamente no copo: adicione o gelo, posicione as rodelas de frutas nas laterais, despeje o gin e complete o espaço com o refrigerante citrus.',
      },
      {
        number: 5,
        title: 'Screwdriver',
        occasion: 'Dia a dia',
        ingredients: [
          '50 a 60 ml de vodka',
          '90 a 100 ml de suco de laranja',
          '10 ml de xarope de açúcar simples ou xarope 2:1',
          '3 dashes de Angostura bitters',
          'Gelo',
        ],
        method: 'Em um copo alto com gelo, misture todos os ingredientes diretamente. Um clássico simples e imbatível.',
      },
      {
        number: 6,
        title: 'Cape Codder',
        occasion: 'Dia a dia',
        ingredients: [
          '50 ml de vodka',
          '100 ml de suco de cranberry ou frutas vermelhas',
          '1 cunha de limão espremido, aproximadamente 5 ml',
          'Gelo',
          'Rodela de limão para decorar, opcional',
        ],
        method:
          'Monte diretamente no copo com gelo, adicione a vodka, o suco de cranberry e o limão espremido. Misture bem antes de servir.',
      },
      {
        number: 7,
        title: 'Mate um Leão (Chá Hypado)',
        occasion: 'Dia a dia',
        ingredients: [
          '50 ml de vodka',
          '100 ml de chá gelado mate sabor pêssego',
          '1 cunha de limão espremido, aproximadamente 5 ml',
          'Gelo',
        ],
        method:
          'Adicione todos os ingredientes diretamente em um copo cheio de gelo e mexa de baixo para cima. Perfeito para dias quentes.',
      },
      {
        number: 8,
        title: 'Vodka com Guaraná e Limão',
        occasion: 'Dia a dia',
        ingredients: ['60 ml de vodka', '150 ml de refrigerante de guaraná', 'Suco de 1/2 limão', 'Gelo'],
        method:
          'Monte o drink diretamente no copo com gelo, adicione a vodka, esprema o limão e complete com guaraná. Misture de leve e aproveite.',
      },
    ],
  },
  {
    slug: 'drinks-para-ocasioes-especiais',
    category: 'drinks',
    eyebrow: 'Guia de Drink: Do Dia a Dia ao Momento de Impressionar',
    title: 'Drinks para Ocasiões Especiais',
    excerpt: 'Ideais para feriados, fins de semana planejados ou para comemorar pequenas e grandes conquistas.',
    image: '/images/Beg_Drinks (306).jpg',
    tags: ['Celebrações', 'Fins de semana', 'Conquistas'],
    introduction: [guideIntroduction],
    recipes: [
      {
        number: 9,
        title: 'Tom Collins de Maracujá (Passion Fizz)',
        occasion: 'Ocasiões especiais',
        ingredients: [
          '50 ml de gin',
          '2 colheres de sopa de polpa de maracujá fresco ou suco concentrado',
          '20 ml de açúcar',
          'Água com gás',
          'Gelo',
          'Ramo de hortelã para decorar, opcional',
        ],
        method:
          'No próprio copo, misture bem o gin, a polpa de maracujá e o açúcar. Em seguida, adicione gelo e complete com a água com gás. Mexa suavemente e decore com o ramo de hortelã.',
      },
      {
        number: 10,
        title: 'Tan“gin”rine (Estilo Caipirinha)',
        occasion: 'Ocasiões especiais',
        ingredients: ['50 ml de gin', '100 ml de suco de tangerina', '15 ml de açúcar ou mel', 'Água com gás', 'Gelo'],
        method:
          'Misture vigorosamente o gin, o suco de tangerina e o açúcar ou mel no copo com gelo. Dê um leve toque completando com água com gás e mexa.',
      },
      {
        number: 11,
        title: 'Melancita',
        occasion: 'Ocasiões especiais',
        ingredients: ['50 ml de gin', '4 cubos de melancia', 'Folhas de hortelã', '1 colher de açúcar', 'Gelo'],
        method:
          'Em um copo, macere delicadamente os cubos de melancia e as folhas de hortelã junto com o açúcar. Adicione o gin, complete com bastante gelo, mexa bem e sirva.',
      },
      {
        number: 12,
        title: 'Caipiroska',
        occasion: 'Ocasiões especiais',
        ingredients: ['1 limão inteiro', '2 colheres de açúcar', '60 ml de vodka', 'Gelo'],
        method:
          'Corte o limão em gomos, retirando a parte branca do meio para não amargar. Macere o limão com o açúcar diretamente no copo, adicione a dose de vodka e o gelo. Mexa intensamente.',
      },
      {
        number: 13,
        title: 'Só Cana',
        occasion: 'Ocasiões especiais',
        ingredients: ['50 ml de vodka', '150 ml de caldo de cana fresco', '20 ml de suco de limão', 'Gelo'],
        method:
          'Uma combinação surpreendente! Misture a vodka, o caldo de cana e o suco de limão diretamente no copo cheio de gelo. Uma opção doce, ácida e incrivelmente refrescante.',
      },
      {
        number: 14,
        title: 'Drop Lemonade',
        occasion: 'Ocasiões especiais',
        ingredients: ['60 ml de Hype Drop', '150 ml de refrigerante citrus', 'Gelo'],
        method: 'Adicione o gelo, o Hype Drop e complete com o refrigerante citrus, misturando tudo delicadamente.',
      },
    ],
  },
  {
    slug: 'drinks-para-impressionar',
    category: 'drinks',
    eyebrow: 'Guia de Drink: Do Dia a Dia ao Momento de Impressionar',
    title: 'Drinks para Impressionar',
    excerpt:
      'Misturas refinadas com texturas surpreendentes e equilíbrio de sabores complexos para quando você quer bancar o verdadeiro bartender.',
    image: '/images/Beg_Drinks (101).jpg',
    tags: ['Refinados', 'Texturas', 'Bartender'],
    introduction: [guideIntroduction],
    recipes: [
      {
        number: 15,
        title: 'Moscow Mule (Com Espuma)',
        occasion: 'Impressionar',
        ingredients: [
          '60 ml de vodka',
          '100 ml de refrigerante de gengibre',
          '15 ml de suco de limão',
          '5 ml de xarope de açúcar, proporção 2:1',
          'Gelo',
          'Espuma de gengibre para finalizar',
        ],
        method:
          'Coloque a vodka, o refrigerante de gengibre, o suco de limão e o xarope no copo ou caneca de cobre com gelo. Mexa levemente e finalize cobrindo o drink com a espuma de gengibre e uma rodela de limão.',
      },
      {
        number: 16,
        title: 'Gin Sour',
        occasion: 'Impressionar',
        ingredients: [
          '60 ml de gin',
          '25 a 30 ml de suco de limão siciliano',
          '20 a 25 ml de açúcar ou xarope simples',
          '1 clara de ovo, opcional, para criar textura cremosa e aveludada',
          'Gelo',
        ],
        method:
          'Coloque todos os ingredientes na coqueteleira. Se optar pela clara de ovo, faça primeiro um dry shake, batendo tudo sem gelo para criar espuma. Depois, adicione o gelo, bata vigorosamente de novo e sirva coado em um copo baixo com gelo novo.',
      },
      {
        number: 17,
        title: 'Fitzgerald',
        occasion: 'Impressionar',
        ingredients: [
          '50 ml de gin',
          '30 ml de suco de limão siciliano',
          '20 ml de xarope de açúcar',
          'Gelo',
          'Dashes de Angostura bitters para finalizar',
        ],
        method:
          'Bata o gin, o suco de limão siciliano e o xarope de açúcar em uma coqueteleira com bastante gelo. Sirva em um copo baixo com gelo e finalize com os dashes de Angostura por cima para um aroma e visual sofisticados.',
      },
      {
        number: 18,
        title: 'Piña Colada Cream',
        occasion: 'Impressionar',
        ingredients: ['50 ml de vodka', '100 ml de suco de abacaxi', '50 ml de leite de coco', '1 colher de açúcar', 'Gelo'],
        method:
          'Para atingir uma textura cremosa, coloque todos os ingredientes com bastante gelo no liquidificador e bata até ficar homogêneo e espesso.',
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
