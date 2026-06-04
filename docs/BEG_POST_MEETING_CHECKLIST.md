# BEG Destilaria — Checklist pós-reunião

## Objetivo

Organizar a execução dos ajustes pós-reunião separando o que já foi aplicado, o que ainda depende do Alex, o que depende do Rubens e o que precisa validação visual.

---

## Feito no repo

### Navegação, Blog e Drinks

- Removida a rota pública não aprovada `/drinks`.
- Removido o item `Drinks` do menu principal.
- CTAs da seção de drinks apontam para `/blog`.
- Criada estrutura editorial aprovada para `/blog`.
- Blog preparado para releases de imprensa, matérias institucionais e conteúdos de drinks.
- Seção de drinks da Home mantida como chamada editorial com três blocos:
  - Drinks para o dia a dia.
  - Drinks para ocasiões especiais.
  - Drinks para impressionar.

### Hero

- CTA `Descubra e saiba mais` direcionado para `/nossa-historia`.
- Nuvens removidas da composição da Hero.
- Ondas mantidas com animação suave.

### Nossa História

- Estrutura ajustada para composição `imagem 1 | selo | imagem 2`.
- Selo central atualizado com cache-bust.
- Espaçamento entre fotos e selo reduzido para aproximar do design oficial.
- Fotos laterais mantidas sem troca.

### Contato / Viva Hype

- Bloco de contato convertido para handoff da Viva Hype.
- Rota `/contato` redireciona para o canal externo da Viva Hype.
- Formulário local não foi criado.

### Agendamento

- Página `/agendamento` mantida dentro do site.
- Estrutura preparada para embed, iframe, script ou widget oficial.
- Fallback via WhatsApp preservado enquanto a ferramenta final não é informada.

### Produtos

- Modelo de produtos preparado com campos condicionais:
  - tags;
  - status de novidade;
  - volume;
  - teor alcoólico;
  - flag para imagem transparente final;
  - preço sob consulta.
- Cards de produto preparados para exibir tags, volume, teor e etiqueta de novidade.
- Dados sensíveis permanecem como `A confirmar` ou `Sob consulta` até envio final.

### Sustentabilidade

- Página simplificada e modularizada.
- Ornamento lateral excedente removido.
- Hero usa ícone de garrafa reciclável já disponível.
- CTAs para Refis adicionados.
- Vídeo do Projeto Refil mantido.
- Destaques de Refil organizados em cards.
- Imagem dos painéis solares reposicionada via `object-position`.

### Prêmios

- Página preparada com bloco dedicado a `98 pontos`.
- Medalhas mantidas com assets atuais.
- Linha do tempo organizada com status por marco.
- Seção TripAdvisor criada como placeholder controlado.
- Comentários, links reais e selo final ainda não foram inventados.

---

## Depende do Alex

- Logos oficiais atualizados.
- Confirmação final da fonte oficial.
- Imagens transparentes finais dos produtos.
- Documento de produtos com:
  - preços;
  - volumes;
  - teor alcoólico;
  - descrições finais;
  - tags finais;
  - lista oficial de novidades.
- Ordem correta das medalhas.
- Texto validado sobre os 98 pontos.
- Selo dourado do TripAdvisor.
- Links reais das avaliações.
- Comentários reais das avaliações.
- Confirmação final sobre manter ou remover o selo entre as fotos da seção Nossa História.

---

## Depende do Rubens

- Ferramenta final de agendamento.
- Código de embed, iframe ou script do módulo de reserva.
- Confirmação do fluxo da BEG Experience dentro do site.

---

## Precisa validação visual

Validar nos seguintes breakpoints:

- 390px mobile.
- 430px mobile.
- 768px tablet.
- 1024px tablet/notebook pequeno.
- 1360px notebook.
- 1920px desktop.

### Pontos críticos de validação

- Hero: ondas, texto e CTA para Nossa História.
- Nossa História: aproximação entre fotos e selo central.
- Home: seção de drinks apontando para `/blog`.
- Produtos: tags e metadados sem poluir os cards.
- Sustentabilidade: leitura, CTAs para Refis e foco nos painéis solares.
- Prêmios: bloco de 98 pontos, grid de medalhas e placeholder TripAdvisor.
- Contato: redirecionamento para Viva Hype.
- Agendamento: estrutura interna pronta sem depender de página externa.

---

## Próximas ações recomendadas

1. Validar deploy da Vercel.
2. Fazer QA visual da Home e páginas principais.
3. Conferir se `/drinks` não aparece mais no menu.
4. Validar `/blog`, `/produtos`, `/sustentabilidade`, `/premios`, `/agendamento` e `/contato`.
5. Aguardar arquivos e informações finais do Alex/Rubens.
6. Aplicar os materiais finais em sprints separadas.
