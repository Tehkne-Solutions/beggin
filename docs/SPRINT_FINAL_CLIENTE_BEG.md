# Sprint final cliente BEG

Issue principal: #17

Branch de execução: `fix/sprint-final-cliente-beg`

## Objetivo

Aplicar integralmente os ajustes finais do cliente, remover conteúdo provisório, uniformizar todas as rotas publicadas e encerrar a entrega somente após QA técnico, visual e de conteúdo.

## Regra de aceite

Um item não será considerado concluído apenas porque foi listado ou porque a Vercel gerou um build. Para concluir cada item é necessário:

- implementação no código;
- preview publicado;
- validação visual;
- teste funcional;
- evidência no PR.

## Onda 0 — Bloqueadores

- [ ] Uniformizar todas as rotas públicas no mesmo commit.
- [ ] Corrigir alias/promoção da Vercel.
- [ ] Baixar e assistir integralmente ao vídeo de alinhamento.
- [ ] Cruzar vídeo, PDF, repo e site.
- [ ] Registrar qualquer orientação adicional encontrada no vídeo.

## Onda 1 — Identidade, Header, Footer e contato

- [ ] Aplicar logo oficial exportado de `LOGO DESTILARIA BOLD.pdf`.
- [ ] Validar INTRO Regular e Geared Slab Bold.
- [ ] Remover `Contato` do Header.
- [ ] Adicionar `Viva Hype` e `Blog` ao Header.
- [ ] Implementar menu mobile funcional.
- [ ] Remover bloco promocional Viva Hype do fim das páginas.
- [ ] Remover Viva Hype da coluna de contato do Footer.
- [ ] Manter somente contato da BEG no rodapé.
- [ ] Manter WhatsApp oficial `19 99663-8642`.
- [ ] Manter `/contato` redirecionando para Viva Hype.

## Onda 2 — Home

### Hero

- [ ] Aplicar `Motion rotação.mp4` no desktop.
- [ ] Manter fallback mobile e reduced motion.
- [ ] Corrigir leitura visual de `BEG DESTILARIA`.
- [ ] Corrigir corte do `G`.
- [ ] Validar selo da Copa e ondas.
- [ ] Remover elementos fora do design aprovado.

### Nossa História

- [ ] Remover ornamento/bolinha acima do CTA.
- [ ] Corrigir entrelinha e hierarquia.
- [ ] Validar `BEG-1.jpg` e `BEG-12.jpg`.

### Drinks

- [ ] Remover `BLOG BEG`.
- [ ] Aplicar `Descubra o seu drink perfeito para cada ocasião.`.
- [ ] Remover `Conteúdos para beber melhor.`.
- [ ] Remover texto provisório da reorganização.
- [ ] Aplicar `Descubra mais!`.
- [ ] Remover numerais `01 — Editorial`, `02 — Editorial`, `03 — Editorial`.
- [ ] Manter as três imagens e agrupamentos finais.

### Prêmios da Home

- [ ] Confirmar as seis medalhas finais.
- [ ] Aplicar ordem numérica 1 a 6.
- [ ] Ajustar proporções e tipografia.
- [ ] Remover ornamentos indicados pelo cliente.

### Sustentabilidade da Home

- [ ] Validar título e quatro cards finais.
- [ ] Corrigir recortes e responsividade.

## Onda 3 — Produtos

- [ ] Aplicar/confirmar `Banner pagina produtos`.
- [ ] Validar Fotos Omie.
- [ ] Trocar `Prontos para drinks` por `Pronto para servir`.
- [ ] Incluir Hype Drop nessa categoria/tag.
- [ ] Aplicar preços finais:
  - [ ] BEG Brazilian — R$ 99,90.
  - [ ] BEG Brazilian Gold Edition — R$ 119,90.
  - [ ] BEG Brazilian Refil — R$ 49,90.
  - [ ] Modern & Tropical — R$ 99,90.
  - [ ] Modern & Tropical Refil — R$ 49,90.
  - [ ] Aged Negroni — R$ 119,90.
  - [ ] Aged Negroni Refil — R$ 59,90.
  - [ ] Hype Gin — R$ 45,90.
  - [ ] Hype Vodka — R$ 39,90.
  - [ ] Hype Drop — R$ 69,90.
- [ ] Remover `Sob consulta` e `A confirmar` do frontend.
- [ ] Corrigir Hype Vodka para 1000 ml.
- [ ] Corrigir Hype Drop para `Licor Fino de Framboesa 750ml`.
- [ ] Revisar os 12 produtos, filtros, singles e relacionados.

## Onda 4 — Páginas internas

### BEG Experience

- [ ] Criar carrossel funcional.
- [ ] Integrar módulo real de agendamento ou remover placeholder.
- [ ] Inserir vídeo oficial.
- [ ] Inserir logo e link oficial do TripAdvisor.
- [ ] Usar avaliações reais e clicáveis.
- [ ] Deixar números indicados em vermelho.
- [ ] Remover textos provisórios e bloco Viva Hype.

### Prêmios

- [ ] Remover textos sobrepostos da imagem.
- [ ] Aplicar narrativa final de 2024.
- [ ] Manter somente medalha de 98 pontos no bloco correspondente.
- [ ] Deixar anos da timeline em vermelho.
- [ ] Aplicar `GOLD 98 PONTOS` em 2024.
- [ ] Aplicar `O MAIS PREMIADO DO BRASIL` em 2026.
- [ ] Criar timeline completa de 2018 a 2026.
- [ ] Remover statuses provisórios.
- [ ] Remover TripAdvisor da página de Prêmios.
- [ ] Remover bloco Viva Hype.

### Sustentabilidade

- [ ] Inserir `BEGGIN_DESTILARIA-1326.jpg`.
- [ ] Trocar imagens por `6 (2).jpg`, `16 (1).jpg` e `eureciclo-branco-cinza (2).png`.
- [ ] Padronizar os cinco cards.
- [ ] Exibir painéis solares em largura integral e sem corte.
- [ ] Colocar textos abaixo da imagem.
- [ ] Remover bloco Viva Hype.

## Onda 5 — Blog e Drinks

- [ ] Remover conteúdo provisório e status draft.
- [ ] Criar o guia `Do Dia a Dia ao Momento de Impressionar`.
- [ ] Inserir receitas 1 a 8 — Dia a Dia.
- [ ] Inserir receitas 9 a 14 — Ocasiões Especiais.
- [ ] Inserir receitas 15 a 18 — Impressionar.
- [ ] Criar páginas ou estrutura editorial real para os conteúdos.

## Onda 6 — Limpeza, QA e publicação

- [ ] Remover `placeholder`, `em breve`, `em preparação`, `estrutura preparada`, `A confirmar`, `Sob consulta` e `conteúdo a validar`.
- [ ] Revisar nomenclatura antiga `Beg Gin`/`BEG Gin`.
- [ ] Revisar caracteres especiais e encoding.
- [ ] Validar acessibilidade básica e alt text.
- [ ] Build, lint e TypeScript sem erros.
- [ ] Validar CTAs, WhatsApp, links externos, cookies, imagens e vídeos.
- [ ] QA em 390, 430, 768, 1024, 1360 e 1920 px.
- [ ] Validar Chrome/Edge e menu mobile.
- [ ] Garantir ausência de overflow, cortes e sobreposições.
- [ ] Promover exatamente o commit aprovado.
- [ ] Confirmar aliases e produção em janela anônima.
- [ ] Anexar evidências ao PR.

## Dependências externas

- Vídeo da reunião precisa ser baixado e assistido integralmente; o fetch automático retornou 413 pelo tamanho.
- Assets oficiais ausentes devem ser documentados como bloqueadores, nunca substituídos por conteúdo inventado.
- Agendamento, avaliações e links externos só serão publicados com materiais oficiais ou com fallback final aprovado.

## Critério de encerramento

A sprint só termina quando todos os itens aplicáveis estiverem implementados e validados, as dependências externas estiverem documentadas e todas as rotas públicas estiverem servindo a mesma versão.

**Tehkné Solutions**