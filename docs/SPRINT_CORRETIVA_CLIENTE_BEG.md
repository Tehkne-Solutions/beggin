# Sprint corretiva cliente BEG

## Status

Esta branch foi criada para concentrar a correção final dos ajustes do cliente, sem continuar aplicando alterações diretamente na `main`.

A entrega anterior não deve ser considerada concluída até passar pelos critérios abaixo:

- PR aberto e revisável.
- Build/deploy da Vercel em estado Ready.
- Checklist do PDF validado por seção.
- Ajustes mobile e desktop conferidos em preview.
- Dependências externas separadas do que já pode ser aplicado.

## Fontes oficiais analisadas

- PDF `Ajuste Site BEG.pdf` enviado no chat.
- Vídeo/recording do Google Drive: `Alinhamento Site - BEG - 2026/06/03 15:31 GMT-03:00 - Recording`.
- Materiais anteriores de Drive/Docs já citados pelo cliente.
- Prints e observações de mobile/desktop enviados no fluxo.

## Itens do PDF novo

### Global

- Fundo branco gelo/Pantone.
- Logo: trocar para `LOGO DESTILARIA BOLD.pdf`.
- Fontes principais: `INTRO Regular`.
- Fonte de apoio: `Geared Slab Bold`.
- Corrigir logo distorcida.
- Header: remover botão `Contato`.
- Header: inserir link para `Viva Hype`.
- Header: inserir botão/link direto para `Blog`.

### Home / Hero

- Trocar fonte de `BEG DESTILARIA` para INTRO.
- Corrigir corte do `G`.
- Deixar `Destilaria` na mesma linha visual.
- Ajustar selo.
- Remover ou corrigir detalhes visuais que não pertencem ao design.

### Home / Nossa História

- Ajustar fontes.
- Corrigir espaçamento entre linhas.
- Remover detalhe azul/bolinha acima do CTA `Conheça nossa trajetória`.

### Home / Drinks

- Remover `BLOG BEG`.
- Trocar título para: `Descubra o seu drink perfeito para cada ocasião.`
- Remover frase antiga sobre reorganização da área de drinks.
- Trocar por: `Descubra mais!`
- Remover numerais `01 — Editorial`, `02 — Editorial`, `03 — Editorial`.
- Inserir drinks da seção final do PDF.

### Home / Prêmios

- Trocar medalhas.
- Usar medalhas na ordem numérica de 1 a 6.
- Ajustar fontes.
- Remover ornamentos/elementos indicados no print do PDF.

### CTA / Footer / Contato

- Viva Hype deve ficar apenas no cabeçalho.
- No fim das páginas, manter apenas contato da BEG.
- Contato final via WhatsApp: `19 99663-8642`.

### Produtos

- Ajustar fontes.
- Trocar imagem da hero por `Banner pagina produtos`.
- Completar imagens dos produtos conforme pastas sinalizadas.
- Remover `Pronto para drinks`.
- Trocar por `Pronto para servir`.
- Incluir `Hype Drop` nessa categoria/tag.
- Aplicar preços:
  - BEG Brazilian — R$ 99,90
  - BEG Brazilian Gold Edition — R$ 119,90
  - BEG Brazilian Refil — R$ 49,90
  - Modern & Tropical — R$ 99,90
  - Modern & Tropical Refil — R$ 49,90
  - Aged Negroni — R$ 119,90
  - Aged Negroni Refil — R$ 59,90
  - Hype Gin — R$ 45,90
  - Hype Vodka — R$ 39,90
  - Hype Drop — R$ 69,90
- Remover bloco Viva Hype da página de produtos.
- Deixar apenas contato.

### BEG Experience

- Ajustar fontes.
- Inserir popups/cards com avaliações do TripAdvisor.
- Avaliações devem clicar para o link oficial do TripAdvisor.
- Inserir `Tripadvisor_Logo_circle-green_CMYK.png`.
- Deixar números em vermelho.
- Remover bloco Viva Hype.
- Deixar apenas contato.

### Prêmios

- Ajustar fontes.
- Remover frases sobrepostas na imagem.
- No bloco de 98 pontos, inserir texto no lugar das várias medalhas.
- Deixar apenas a medalha de 98 pontos nessa seção.
- Texto do bloco:
  `Em 2024, cravamos o nosso maior marco histórico: fomos eleitos o Melhor Gin do Mundo. No gigantesco IWSC Londres, o BEG New World Navy conquistou a raríssima medalha GOLD Outstanding. Na mesma edição, o BEG Brazilian Dry brilhou com Prata (Qualidade) e Bronze (Gin & Tonic).`
- Timeline inicial:
  - Anos em vermelho.
  - 2012 manter.
  - 2024: `GOLD 98 PONTOS`.
  - 2026: `O MAIS PREMIADO DO BRASIL`.
- Criar linha temporal completa:
  - 2018 — O Começo de Tudo.
  - 2019 — Reconhecimento Máximo de Engenharia e Experiência.
  - 2021–2022 — Consagração nos EUA e Reino Unido.
  - 2023 — A Nota Quase Perfeita em São Francisco.
  - 2024 — O Topo do Mundo.
  - 2026 — Consagração Absoluta: Os Melhores do Brasil.
- Remover seção TripAdvisor da página de Prêmios; ela pertence à BEG Experience.
- Remover bloco Viva Hype.
- Deixar apenas contato.

### Sustentabilidade

- Ajustar fontes.
- Inserir imagem `BEGGIN_DESTILARIA-1326.jpg`.
- Cards do Projeto Refil: imagens alinhadas e consistentes.
- Substituir primeira imagem por `6 (2).jpg`.
- Substituir segunda imagem por `16 (1).jpg`.
- Terceira e quarta imagens mantidas.
- Quinta imagem: `eureciclo-branco-cinza (2).png`.
- Painéis solares: imagem em tela inteira, textos abaixo, sem corte da foto.
- Remover bloco Viva Hype.
- Deixar apenas contato.

### Contato

- Remover página de contato local.
- Substituir pela Viva Hype.
- Contato da BEG apenas no balão de WhatsApp: `19 99663-8642`.
- Avaliar futuramente IA/Nuvemshop para dúvidas dos clientes.

### Drinks por seção

- Criar conteúdo do guia `Do Dia a Dia ao Momento de Impressionar`.
- Seção 1: Drinks para o Dia a Dia, receitas 1 a 8.
- Seção 2: Drinks para Ocasiões Especiais, receitas 9 a 14.
- Seção 3: Drinks para Impressionar, receitas 15 a 18.

## Observações do vídeo

O arquivo do Drive foi identificado pelo conector como um recording grande. O fetch direto retornou erro 413 por tamanho. Portanto, ele precisa ser validado por download local ou inspeção manual no Drive. A sprint deve deixar esse ponto explícito como pendência de validação visual por vídeo.

## Próximos commits da branch

1. Global/header/footer/fontes.
2. Home.
3. Produtos.
4. BEG Experience.
5. Prêmios.
6. Sustentabilidade.
7. Blog/drinks.
8. QA mobile/desktop.
