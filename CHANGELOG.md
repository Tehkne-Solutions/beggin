# Changelog

## Unreleased

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
