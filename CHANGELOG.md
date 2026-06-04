# Changelog

## Unreleased

### Rodada pós-reunião — preparação sem dependências externas

- fix(nav): removida a rota não aprovada `/drinks` do menu principal.
- fix(drinks): removida a página pública `/drinks`, mantendo o fluxo aprovado em `/blog`.
- feat(blog): criada estrutura editorial aprovada para releases, matérias institucionais e conteúdos de drinks.
- feat(blog): expandida a página `/blog` com categorias, cards editoriais e status de conteúdo em estruturação.
- fix(home-hero): CTA “Descubra e saiba mais” direcionado para `/nossa-historia`.
- feat(home-hero): ondas animadas mantidas e nuvens removidas da composição da Hero.
- feat(contact): substituído o contato local por handoff para Viva Hype.
- feat(contact): rota `/contato` redirecionando para a seção de contato da Viva Hype.
- fix(agendamento): página `/agendamento` mantida interna, preparada para receber embed/widget oficial indicado pelo Rubens.
- feat(products): produtos preparados com tags, volume, teor alcoólico, status de novidade e flags condicionais para imagens transparentes.
- feat(products): cards de produto passaram a exibir tags, volume, teor a confirmar e etiqueta de novidade sem inventar dados comerciais.
- fix(sustainability): página de sustentabilidade simplificada, sem ornamento lateral excedente, com CTAs para Refis e layout modular.
- fix(sustainability): imagem de painéis solares reposicionada para focar melhor no conteúdo visual disponível.
- feat(awards): página de prêmios preparada com bloco de 98 pontos, linha do tempo estruturada e placeholder controlado para TripAdvisor.
- feat(awards): medalhas mantidas com assets atuais e organização mais controlada, sem definir ordem final ainda.

### Sprint de acabamento visual premium da Home

- fix(home): melhorada a hierarquia da seção de drinks, com título editorial em quebras controladas, coluna esquerda mais forte e cards menos comprimidos.
- fix(home): cards de drinks ampliados para melhorar legibilidade de título, imagem e descrição em desktop/mobile.
- fix(home): seção de prêmios reequilibrada com título em quebra premium e medalhas individuais mais bem agrupadas.
- fix(home): seção de sustentabilidade ganhou mais respiro, título maior e melhor distribuição entre coluna editorial e pilares.
- fix(home): cards de sustentabilidade ampliados, com imagens e textos mais legíveis.
- fix(layout): CTA de contato fortalecido antes do footer, com copy comercial e botão de WhatsApp com mais presença visual.
- fix(layout): footer refinado para encerrar a página com mais autoridade visual e menor sensação de miniatura.

### Ajustes pós-reunião BEG Destilaria

- fix(home-hero): removida a renderização em vídeo rejeitada na Hero e restaurada a composição estática do produto principal.
- fix(home-hero): estabilizado o ornamento de ondas/bandeirinha no bloco textual da Hero, removendo animação contínua que podia causar salto visual.
- fix(home-story): refinado o alinhamento da seção Nossa História com composição mais coesa entre texto, fotos e selo central.
- fix(home-story): selo central reposicionado como eixo visual entre as duas fotos, acima delas em z-index, sem alterar o logo global da marca.
- fix(home-story): revisados respiros, moldura, CTA, sol pequeno e ornamento inferior esquerdo para evitar quebras visuais na seção.
- docs: registrado no changelog o pacote de correções pós-reunião para rastreabilidade no Flow.

### Ajustes anteriores

- fix: rebuild StorySection as four-column design and update Nossa História story assets
- fix(footer): clouds grayscale + remove invert to avoid bluish tint; lower opacity for graphite engraving look
- feat(motion): add shared motion utilities (Reveal, MagneticLink, TiltCard, ParallaxLayer, hooks, motion-presets)
- feat(interactions): integrate motion & interaction pass across home (hero, cocktails, story, awards, sustainability)
- chore(rename): update displayed site name to "Beg Gin" (title, header aria-label, image alts)
