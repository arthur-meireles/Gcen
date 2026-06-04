# Reunião — Projeto GCEN (Landing Page) — Base de Conhecimento

**Data estimada:** 25/05/2026  
**Participantes:** Cliente (dono do grupo GCEN) e Designer/Desenvolvedor  
**Assunto principal:** Definição da estrutura e conteúdo da landing page da GCEN

---

## 1. Contexto Geral

A GCEN (Grupo Global de Consultores Estratégicos Executivos de Negócio) é a **empresa guarda-chuva** que agrega todos os segmentos de negócio. A landing page da GCEN será a **"página mãe"** — a porta de entrada principal que apresenta a empresa e direciona o visitante para cada segmento.

O portal do Marketplace já está em fase final de desenvolvimento. Agora o foco é criar a **landing page da GCEN** com uma estrutura semelhante à que já foi feita (referências: Simpar e o próprio Marketplace), mas adaptada para apresentar os setores abaixo dela em cascata.

---

## 2. Segmentos da GCEN

A GCEN apresenta **7 segmentos** em sua landing page:

| # | Segmento | Observações |
|---|----------|-------------|
| 1 | Consórcio | Administração de consórcios |
| 2 | Seguro | +25 seguradoras parceiras (Porto Seguro, Allianz, etc.) |
| 3 | Investimento | Soluções de investimento |
| 4 | Consultoria | Consultoria empresarial (próxima página a ser feita após GCEN) |
| 5 | Feirão | Eventos/feirões de negócios |
| 6 | Vendas de Máquinas | Máquinas usadas |
| 7 | Global Marketplace | Marketplace proprietário com 14 sub-segmentos internos |

**Estrutura em cascata:**  
GCEN (mãe) → Segmentos (filhos) → Sub-segmentos dentro do Marketplace (netos)

---

## 3. Estrutura da Landing Page da GCEN — Seção por Seção

### 3.1 Hero — Banner/Slider Principal

- Slider de tela cheia com transição de slides
- Cada slide apresenta um setor/segmento diferente
- Textos curtos sobre cada segmento passando automaticamente
- Referência visual: efeito parallax com imagens dos setores (aviação, agro, água, floresta, máquinas, etc.)
- Imagens fixas ou com slide por trás do parallax (ambos possíveis; slide é mais complexo mas foi aprovado pelo cliente)

### 3.2 Sobre a GCEN

- **Layout:** Texto de um lado + Vídeo institucional do outro
- Texto breve: "Somos a GCEN" — 3 a 4 linhas de apresentação
- Vídeo institucional ao lado (mesma estrutura usada no Marketplace)
- Significado da sigla **GCEN** deve aparecer próximo ao logo/cabeçalho:
  - **G** = Grupo + Global
  - **1** = Consultores Estratégicos Executivos de Negócio
  - A letra G representa duas palavras: "Grupo" e "Global"
  - "Consultores" remete ao ramo agrícola; "Executivos" remete ao ramo urbano (seguro, consórcio, imobiliário, náutico, aviação)
  - "Negócio" engloba ambos os mundos (agro + cidade)
- Botão "Ver mais" → direciona para a página completa "Sobre Nós"

### 3.3 Missão, Visão e Valores

- Seção sobre essência do grupo GCEN
- Missão, visão e valores são **do grupo inteiro** (englobam todos os segmentos)
- Essa será a **única página** com MVV do grupo — a MVV que hoje está no Marketplace será **movida para cá**
- Cada segmento terá seu próprio **propósito** (não MVV), visível tanto na GCEN quanto na página individual

### 3.4 Nosso Segmentos (Cards Interativos)

- Inspirado na seção "Empresas" da Simpar e na página atual do Marketplace
- Ao clicar em um segmento, expande abaixo com:
  - Breve texto de apresentação
  - Vídeo do segmento (texto + vídeo lado a lado)
  - Logos dos parceiros/marcas associadas àquele segmento
  - Botão "Ver mais" → vai para a página completa daquele segmento
- **Global Marketplace:** botão "Ver mais" abre o portal completo com os 14 sub-segmentos
- **Ícones de segmentos abaixo do vídeo:** clicáveis, direcionam direto para o sub-setor (ex: clicar em "aviação" já vai para a página de aviação no Marketplace, sem precisar passar pela home do Marketplace)

### 3.5 Parallax Setorial

- 2 a 3 seções parallax intercaladas na página
- **Grupo 1:** Global Marketplace + Feirão + Vendas de Máquinas
- **Grupo 2:** Investimento + Consórcio + Seguro
- **Grupo 3 (opcional):** Consultoria + Agro + Concessionário
- Imagens de fundo representativas de cada setor com efeito parallax
- Podem ter slide por trás (mudando periodicamente) ou imagem fixa — slide aprovado pelo cliente

### 3.6 Números em Destaque

- Contadores animados (inspirado na Remax)
- Métricas consolidadas de todos os segmentos:
  - +30 anos de mercado
  - +14 segmentos de negócio
  - +60 mil clientes finais
  - +25 seguradoras parceiras
  - 139.000 corretores (mencionado)
- Animação ao entrar na viewport

### 3.7 Depoimentos (Filtráveis por Segmento)

- Carrossel de depoimentos, mostrando **3 por vez**, passando de 3 em 3
- **Filtro obrigatório** por segmento (tabs/pills):
  - Todos — mostra todos os depoimentos
  - Marketplace, Consultoria, Consórcio, Seguro, Investimento, Feirão, Vendas de Máquinas
- Cada card contém:
  - Texto curto (2-4 linhas, sem blocões de texto lengthy)
  - Nome e origem do cliente
  - Tag do segmento
  - Possível integração com Google Reviews
- Racional do cliente: visitantes querem saber a reputação de um segmento específico, igual ao Reclame Aqui — o filtro permite ver só depoimentos do setor de interesse

### 3.8 Fundadores

- Seção com os **4 fundadores** da GCEN
- Mesma idéia de slide/carrossel com filtro — quando filtrar "GCEN", mostra os 4
- Layout simples e prático ("tipo campestre") — sem excessos
- Em outros segmentos, poderão aparecer cofundadores/parceiros adicionais

### 3.9 Venha Ser Global (CTA Parceiros)

- Seção de call-to-action para novos parceiros/consultores
- Convite: "Venha ser Global"
- Referência não fornecida pelo cliente; design a critério do desenvolvedor

### 3.10 Rodapé (Footer)

- Pegar o rodapé atual do portal e atualizar
- Cliente vai enviar versão atualizada do footer

---

## 4. Detalhes Técnicos e Funcionais

### 4.1 Rastreamento / Analytics

- **Google Analytics** para rastrear fluxo de visitantes
- Necessário mapear o caminho do visitante:
  - Ex: "Entraram 5 na GCEN → 2 foram para Marketplace → 1 clicou em Consórcio"
- Cada clic em segmento deve ser contabilizado
- Clicar em "Ver mais" conta como acesso àquele segmento
- Clicar direto no ícone de aviação (por exemplo) contabiliza acesso direto àquele sub-segmento
- **Painéis administrativos** separados por segmento, com um painel master da GCEN consolidando tudo

### 4.2 Sistema de Cadastro / Login (SSO)

- Botão "Acessar minha conta" presente na GCEN e em todos os segmentos
- Fluxo: **Pré-cadastro** → **Cadastro completo**
- **Single Sign-On:** um único cadastro no grupo GCEN dá acesso a todos os segmentos
- Cada segmento (ex: Marketplace) **libera ou bloqueia** o acesso individualmente (sim/não)
- Racional: evitar que o usuário precise de senhas diferentes para cada segmento

### 4.3 Estrutura de Código

- Desenvolver cada seção com nomes semânticos no código para facilitar o rastreamento posterior
- Construir pensando em Analytics desde o início — não refazer depois

### 4.4 Responsividade

- Site responsivo para desktop e mobile
- Design mobile-first quando aplicável

### 4.5 Tecnologia

- **Frontend proposto:** React (preferência do desenvolvedor — mais fácil de manter e encontrar profissionais)
- Entrega completa: design + código fonte + deploy
- Pode ser hospedado em AWS, Amazon, ou servidor do cliente
- Desenvolvedor pode fazer o deploy ou passar o código para a equipe interna do cliente

---

## 5. Próximos Setores a Desenvolver

Após a landing page da GCEN, os próximos sites na fila são:

1. **Consultoria** (Global Consul) — próxima prioridade
2. Consórcio
3. Seguro
4. Demais segmentos

### Observações sobre a página de Consultoria:

- Mesmo estilo visual da GCEN (parallax, etc.)
- Apresenta "Global Consul"
- Seção de **serviços** com cards expandidos por hover/click:
  - Cada serviço tem título + chamada + "Ver mais" que expande detalhes
  - Ex: "Plano de manutenção" → clica → expande com descrição completa
  - Atendem: concessionária, fazenda, etc.
- Layout de serviços evitando filtros de caixinha (pouco intuitivos); preferir layout de cards com imagem

---

## 6. Acordos Financeiros (CRM)

| Item | Valor | Condições |
|------|-------|-----------|
| CRM (ERP) | R$ 3.500 | Dividido em 3 parcelas de R$ 1.500 (com desconto/promoção) |
| Pagamento | Entrada dia 10 | Cliente paga com receita de consultoria |

---

## 7. Observações Gerais do Cliente

- **Não quer blog/seção de notícias** — difícil de manter, conteúdo genérico de IA, ninguém lê
- **Querer simplicidade** nas seções — "tipo campestre", nada muito oba-oba
- **Gostou do efeito parallax** do site de referência (Remx) — quer replicar com imagens dos setores
- **Gostou do detalhe riscadinho** (textura linear) presente no design atual do Marketplace
- **Depoimentos filtráveis** é prioridade — usuário precisa filtrar por segmento de interesse
- **Significado da sigla GCEN** deve ser visível e claro — ninguém sabe o que significa só de ler
- **MVV do grupo** fica só na GCEN — cada segmento individual terá seu propósito próprio
- **Preferência por vídeo** ao lado do texto — quem não quer ler pode assistir
- Os **logos dos parceiros** de cada segmento devem aparecer (ex: seguradoras no segmento de seguros)

---

## 8. Referências Visuais

- [Simpar](https://simpar.com) — Seção "Empresas" com cards expansíveis por segmento
- [Remax](https://remax.com.br) — Números animados e efeito parallax
- Marketplace Global (próprio) — Estrutura de texto + vídeo lado a lado; detalhe riscadinho

---

## 9. Ações Pendentes (Dever de Casa)

| # | Ação | Responsável |
|---|------|-------------|
| 1 | Enviar footer atualizado | Cliente |
| 2 | Fornecer textos da GCEN (apresentação, MVV) | Cliente |
| 3 | Fornecer vídeos institucionais (GCEN + segmentos) | Cliente |
| 4 | Fornecer logos dos parceiros por segmento | Cliente |
| 5 | Fornecer fotos/imagens para os parallax | Cliente |
| 6 | Fornecer números oficiais consolidados | Cliente |
| 7 | Fornecer depoimentos por segmento | Cliente |
| 8 | Confirmar nomes e fotos dos 4 fundadores | Cliente |
| 9 | Definir textos dos parallax | Cliente + Designer |
| 10 | Verificar linguagem do frontend com equipe interna | Cliente |
| 11 | Primeira versão do design da GCEN | Designer |
| 12 | Orçamento de desenvolvimento (React) | Designer |
| 13 | Confirmar entrada do CRM (dia 10) | Cliente |

---

## 10. Diagrama de Navegação

```
gcen.com.br (Landing Page Principal)
│
├── [Hero Slider] — Slides rotativos dos segmentos
│
├── [Sobre a GCEN] — Texto + Vídeo + Significado da Sigla
│
├── [Segmentos] ──────────────────────────────────────────
│   ├── Consórcio → Página Completa do Consórcio
│   ├── Seguro → Página Completa do Seguro
│   ├── Investimento → Página Completa de Investimento
│   ├── Consultoria → Página Global Consul
│   ├── Feirão → Página do Feirão
│   ├── Vendas de Máquinas → Página de Máquinas
│   └── Global Marketplace ──────────────────────────────
│       ├── [Ver mais] → Portal Marketplace
│       ├── Aviação → Página de Aviação
│       ├── Agronegócio → Página de Agro
│       └── ... (14 sub-segmentos)
│
├── [Parallax 1] — Marketplace + Feirão + Máquinas
├── [Parallax 2] — Investimento + Consórcio + Seguro
├── [Parallax 3] — Consultoria + Agro + Concessionário
│
├── [Números] — Contadores animados
│
├── [Depoimentos] — Filtro por segmento (3 em 3)
│
├── [Fundadores] — 4 sócios da GCEN
│
├── [Venha ser Global] — CTA parceiros
│
└── [Footer] — Rodapé atualizado

Fluxo de Analytics:
Visitante → GCEN → Clica segmento → Contabilizado em GCEN + Segmento
Visitante → GCEN → Clica ícone direto (ex: aviação) → Contabilizado em GCEN + Marketplace + Aviação
```