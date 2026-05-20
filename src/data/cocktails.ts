export const cocktailAssets = {
  begTonica: '/images/home/cocktail-beg-tonica.webp',
  citricoBrasileiro: '/images/home/cocktail-citrico-brasileiro.webp',
  negroniBeg: '/images/home/cocktail-negroni-beg.webp',
  decorativeBotanical: '/images/home/cocktails-botanical-decorative.png',
} as const;

export const cocktails = [
  {
    id: 'beg-tonica',
    name: 'Beg & Tônica',
    description: 'O clássico refrescante. Beggin, água tônica premium, uma fatia de limão siciliano e gelo.',
    image: cocktailAssets.begTonica,
    ingredients: ['Beggin', 'Água tônica', 'Limão siciliano', 'Gelo'],
  },
  {
    id: 'citrico-brasileiro',
    name: 'Cítrico Brasileiro',
    description: 'Uma explosão de sabores tropicais. Beggin, suco de maracujá, xarope de limão e folhas de hortelã.',
    image: cocktailAssets.citricoBrasileiro,
    ingredients: ['Beggin', 'Maracujá', 'Limão', 'Hortelã'],
  },
  {
    id: 'negroni-beg',
    name: 'Negroni Beg',
    description: 'Nossa releitura do italiano. Beggin, Campari, vermute tinto e uma casca de laranja.',
    image: cocktailAssets.negroniBeg,
    ingredients: ['Beggin', 'Campari', 'Vermute tinto', 'Laranja'],
  },
] as const;

export const cocktailsContent = {
  label: 'Beg Experience',
  title: 'Coquetéis Autorais',
  subtitle: 'Descubra combinações únicas criadas especialmente para realçar o sabor do Beggin.',
} as const;