# Avaliação técnica — IA/Nuvemshop para atendimento

## Contexto

O cliente solicitou avaliar a possibilidade de usar a solução de inteligência artificial disponível em seu ecossistema Nuvemshop para responder dúvidas sobre produtos, frete, refis, compra e BEG Experience.

## Decisão desta sprint

Nenhum script foi inserido no site institucional porque ainda não foram fornecidos:

- acesso administrativo à loja;
- nome exato da solução ou aplicativo habilitado na conta;
- plano contratado e disponibilidade do recurso;
- widget, script, identificador público ou documentação de integração;
- regras de atendimento e base de respostas aprovadas;
- definição dos canais em que a IA deve operar.

Inserir um widget genérico sem esses dados criaria risco de segurança, duplicidade de atendimento, coleta indevida de dados e experiência inconsistente.

## Arquiteturas possíveis

### 1. Atendimento operando somente na loja Nuvemshop

A solução permanece dentro da loja e o site BEG direciona o usuário para o canal oficial de compra ou atendimento.

Vantagens:

- menor complexidade;
- catálogo e pedidos permanecem no ambiente da loja;
- reduz o risco de sincronização de preços e estoque.

Necessário:

- URL oficial da loja;
- confirmação do recurso habilitado;
- links de entrada ou atendimento fornecidos pela plataforma.

### 2. Widget oficial incorporado ao site institucional

O site carrega um script oficial fornecido pela conta Nuvemshop ou por aplicativo autorizado.

Necessário:

- script ou documentação oficial;
- identificador da loja/widget;
- lista de domínios permitidos;
- política de cookies e consentimento;
- validação de desempenho e comportamento mobile.

### 3. Atendimento via WhatsApp integrado ao catálogo

O site mantém o botão de WhatsApp e o atendimento automatizado opera no canal configurado pela loja.

Necessário:

- número oficial aprovado;
- confirmação de que o recurso está ativo nesse número;
- mensagem inicial e regras de transbordo para atendimento humano;
- teste de catálogo, frete, pagamento e disponibilidade.

### 4. Assistente próprio em fase futura

Integração personalizada consumindo APIs e uma base de conhecimento aprovada.

Somente recomendada quando houver:

- necessidade não atendida pela solução nativa;
- acesso oficial às APIs e permissões;
- responsável por atualizar preços, estoque e políticas;
- processo de auditoria das respostas;
- orçamento para desenvolvimento, monitoramento e suporte.

## Base mínima de conhecimento

Antes de ativar qualquer IA, aprovar respostas para:

- produtos e volumes;
- preços e disponibilidade;
- refis e sustentabilidade;
- frete grátis e área atendida;
- formas de compra e pagamento;
- BEG Experience, visitas e eventos;
- localização e horários;
- consumo responsável;
- privacidade e encaminhamento para atendimento humano.

## Requisitos de segurança e LGPD

- Informar quando o usuário estiver falando com automação.
- Não solicitar dados sensíveis sem necessidade.
- Não expor chaves, tokens ou credenciais no frontend.
- Registrar finalidade e fornecedor no gerenciamento de cookies, quando aplicável.
- Definir retenção de conversas e responsáveis pelo acesso.
- Disponibilizar transferência para atendimento humano.

## Critério para implementação

A integração pode entrar em desenvolvimento quando forem enviados:

1. acesso ou acompanhamento de alguém com acesso à loja;
2. nome e plano da solução habilitada;
3. script/documentação oficial;
4. canal e número aprovados;
5. base de perguntas e respostas;
6. consentimento sobre cookies e privacidade;
7. ambiente de teste antes da produção.

## Recomendação

Manter nesta entrega o WhatsApp oficial já implementado e tratar a IA como uma integração controlada da próxima fase. Após receber os itens acima, executar uma prova de conceito em preview antes de liberar globalmente.

**Tehkné Solutions**
