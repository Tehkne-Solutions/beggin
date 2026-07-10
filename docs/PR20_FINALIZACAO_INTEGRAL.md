# PR #20 — Finalização integral dos ajustes BEG

## Objetivo

Consolidar em uma única revisão o escopo da issue #17 e tudo o que foi planejado ou implementado nos PRs #18 e #19, corrigindo pendências de conteúdo, removendo informações inventadas e separando com precisão o que depende de material externo.

## Fontes de verdade

- `Ajuste Site BEG.pdf` enviado pelo cliente.
- Issue #17 — sprint final e QA.
- PR #18 — planejamento da sprint.
- PR #19 — aplicação técnica pós-merge.
- Estado atual da `main` após os merges.

## Aplicado neste PR

### Blog e guia de drinks

- Substituição das 18 receitas criadas anteriormente pelas 18 receitas oficiais do PDF.
- Preservação das três categorias oficiais:
  - Drinks para o Dia a Dia — receitas 1 a 8.
  - Drinks para Ocasiões Especiais — receitas 9 a 14.
  - Drinks para Impressionar — receitas 15 a 18.
- Remoção de guarnições e finalizações que não constavam no material do cliente.
- Ajuste da página de artigo para exibir a finalização somente quando ela existir na fonte oficial.

### Prêmios

- Aplicação dos textos completos da linha do tempo entregues pelo cliente.
- Correção dos marcos de 2018, 2019, 2021–2022, 2023, 2024 e 2026.
- Manutenção de `GOLD 98 PONTOS` e `O MAIS PREMIADO DO BRASIL` em destaque.
- Manutenção do bloco de 98 pontos com somente a medalha correspondente.
- Remoção dos blocos genéricos e repetitivos que duplicavam a narrativa depois da timeline.
- Inclusão do texto de consolidação sobre mais de 100 medalhas globais.

### BEG Experience

- Inclusão de prova social com avaliação real apresentada no PDF.
- Link de toda a avaliação para a página oficial da BEG no Tripadvisor.
- Inclusão de CTA direto para todas as avaliações.
- Manutenção dos números 01, 02 e 03 em vermelho.
- Manutenção do carrossel funcional e do WhatsApp oficial da BEG.
- Nenhum depoimento adicional foi inventado.

## Herdado e revisado dos PRs anteriores

- Header sem `Contato`, com `Blog` e `Viva Hype`.
- Menu mobile funcional.
- Footer apenas com contato BEG.
- WhatsApp geral `19 99663-8642`.
- Hero com `BEG Destilaria`, vídeo e fallback responsivo.
- Nossa História sem o ornamento removido pelo cliente.
- Home/Drinks sem `BLOG BEG`, numerais editoriais e textos provisórios.
- Produtos com preços enviados, categoria `Pronto para servir`, Hype Vodka 1000 ml e Hype Drop 750 ml.
- BEG Experience sem módulos falsos ou placeholders.
- Sustentabilidade com Projeto Refil e painéis solares sem corte.
- Redirects de produtos antigos preservados.

## Dependências externas ainda bloqueadas

### Identidade

- Exportação web oficial de `LOGO DESTILARIA BOLD.pdf` em SVG ou PNG transparente.
- O componente atual ainda é uma reconstrução em SVG e não deve ser tratado como arquivo oficial final.

### Home — Prêmios

- Confirmação visual dos arquivos numerados de 1 a 6 da pasta do cliente.
- A ordem atual segue os nomes existentes no repositório, mas precisa ser comparada com a pasta original.

### Produtos

- Arquivo exato `Banner pagina produtos`.
- Fotos Omie definitivas e respectivas galerias por produto.
- Preço e disponibilidade oficial dos itens que não receberam valor no PDF, especialmente kit e refil de 250 ml.

### BEG Experience

- Arquivo `Tripadvisor_Logo_circle-green_CMYK.png`.
- Link/embed do vídeo oficial `Já pensou em fazer seu próprio gin?`.
- Código, widget ou ferramenta oficial de agendamento, caso o cliente queira agendamento dentro do site.
- Confirmação se existe um WhatsApp exclusivo para eventos. Até essa confirmação, permanece o número oficial geral `19 99663-8642`.
- Avaliações adicionais reais, com seus links originais, para ampliar a prova social sem inventar conteúdo.

### Sustentabilidade

Arquivos solicitados no último PDF e ainda não versionados:

- `BEGGIN_DESTILARIA-1326.jpg`.
- `6 (2).jpg`.
- `16 (1).jpg`.
- `eureciclo-branco-cinza (2).png`.

### Reunião gravada

- Download e conferência integral do vídeo `Alinhamento Site - BEG - 2026/06/03 15:31 GMT-03:00 - Recording`.
- O fetch automatizado falhou por tamanho do arquivo; a validação precisa ser feita por download local ou envio de versão compactada/transcrição.

### IA/Nuvemshop

A solicitação é uma avaliação técnica, não uma integração pronta. Para implementar com segurança são necessários:

- acesso administrativo à loja Nuvemshop;
- identificação do produto, aplicativo ou widget de IA contratado;
- documentação ou script oficial disponibilizado para a conta;
- definição se o atendimento funcionará no site institucional, na loja, no WhatsApp ou nos três canais;
- revisão de cookies, privacidade, consentimento e transferência de dados;
- base aprovada de perguntas e respostas sobre produtos, frete, refis, eventos e BEG Experience.

Nenhum script genérico foi inserido sem essas informações.

## QA obrigatório antes do merge

- Build Vercel no commit final.
- TypeScript e lint sem erros.
- Rotas: `/`, `/produtos`, singles, `/nossa-historia`, `/beg-experience`, `/agendamento`, `/premios`, `/sustentabilidade`, `/blog`, artigos, páginas legais e 404.
- Breakpoints: 390, 430, 768, 1024, 1360 e 1920 px.
- Chrome e Edge.
- Menu mobile, CTAs, WhatsApp, links externos, cookies, vídeos, imagens e redirects.
- Conferência da produção em janela anônima e sem cache.

## Critério de encerramento

O PR pode ser mergeado quando o build e o QA do conteúdo já implementado passarem. A entrega ao cliente só deve ser apresentada como 100% final após o recebimento e aplicação dos materiais externos listados acima.

**Tehkné Solutions**
