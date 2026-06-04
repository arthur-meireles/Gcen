# GCEN — Estrutura da Landing Page

Baseado na reunião de kickoff (25/05/2026). A GCEN (Grupo Global de Consultores Estratégicos Executivos de Negócio) é a empresa guarda-chuva que agrega todos os segmentos de negócio. Esta landing page é a "página mãe" — a porta de entrada principal.

---

## 1. HERO — Banner Principal (Slider)

**Tipo:** Slider/carrossel de tela cheia com parallax
**Conteúdo:**
- Slides com imagens representativas de cada setor (aviação, agronegócio, água, floresta, consórcio, seguro)
- Texto sobreposto curto chamando para cada área
- Botão CTA: "Conheça nossos segmentos" (âncora para seção de segmentos)
- Indicadores de slide (dots) na base
- Autorotação a cada 6 segundos

---

## 2. SOBRE A GCEN

**Tipo:** Seção de apresentação institucional
**Layout:** Texto à esquerda + vídeo institucional à direita
**Conteúdo:**
- Título: "Quem somos"
- Texto breve (3–4 linhas): Apresentação do grupo GCEN
- **Significado da sigla GCEN** (com destaque visual):
  - **G** = Grupo + Global
  - **C** = Consultores (ramo agrícola)
  - **E** = Executivos (ramo urbano)
  - **N** = Negócio (agro + cidade)
- Vídeo institucional (player placeholder com botão play)
- Badges: +30 Anos | 7 Segmentos | Nacional
- Botão secundário: "Ver mais" → página "Sobre Nós" completa

---

## 3. MISSÃO, VISÃO E VALORES

**Tipo:** Seção com 3 cards (Missão, Visão, Valores)
**Conteúdo:**
- Esta é a **única página** com MVV do grupo inteiro
- Cada segmento terá seu próprio propósito (não MVV), visível na GCEN e na página individual
- MVV engloba todos os segmentos
- Cards com ícone, título e texto descritivo

---

## 4. NOSSOS SEGMENTOS (Cards Interativos)

**Tipo:** Tabs horizontais com painel expansível
**Layout:** Accordion de tabs — ao clicar em um segmento, mostra detalhes abaixo

**Segmentos (7 itens):**
1. **Consórcio** — administração de consórcios
2. **Seguro** — corretora com +25 seguradoras (ex: Allianz, Porto Seguro)
3. **Investimento** — soluções de investimento
4. **Consultoria** — consultoria empresarial
5. **Feirão** — eventos e feirões de negócios
6. **Vendas de Máquinas** — máquinas usadas
7. **Global Marketplace** — marketplace proprietário com 14 segmentos

**Para cada segmento expandido:**
- Descrição (2–3 linhas) + Imagem
- Botão "Ver mais" → página do segmento
- Logos de parceiros/marcas associadas

**Global Marketplace:** botão "Ver mais" abre o portal completo com 14 sub-segmentos
**Ícones de sub-segmentos abaixo:** clicáveis, direcionam direto para o sub-setor

---

## 5. PARALLAX SETORIAL (3 seções intercaladas)

**Grupo 1:** Marketplace + Feirão + Máquinas — "Negócios que movem o mercado"
**Grupo 2:** Investimento + Consórcio + Seguro — "Soluções financeiras para cada etapa da sua vida"
**Grupo 3:** Consultoria + Agro + Concessionário — "Do campo à cidade, estratégia que transforma"

---

## 6. NÚMEROS EM DESTAQUE (Animados)

**Tipo:** Contadores animados ao entrar na viewport (inspirado na Remax)
**Layout:** 4 colunas — ícone + número + descrição

**Métricas:**
| Número | Descrição |
|--------|-----------|
| +30 | Anos de mercado |
| +14 | Segmentos de negócio |
| +60 mil | Clientes finais atendidos |
| +25 | Seguradoras parceiras |

---

## 7. DEPOIMENTOS (Filtráveis por Segmento)

**Tipo:** Carrossel de depoimentos com filtro por segmento
**Layout:** 3 cards lado a lado, passando de 3 em 3

**Filtros (pills):**
Todos, Marketplace, Consultoria, Consórcio, Seguro, Investimento, Feirão, Vendas de Máquinas

**Estrutura de cada card:**
- Texto do depoimento (2–4 linhas)
- Nome e origem do cliente
- Tag indicando o segmento
- Avaliação em estrelas

---

## 8. FUNDADORES

**Tipo:** Grid com os 4 fundadores da GCEN
**Layout:** Cards simples com avatar, nome, cargo e breve descrição
**Conteúdo:** 4 sócios-fundadores com foto placeholder

---

## 9. VENHA SER GLOBAL (CTA Parceiros)

**Tipo:** Seção de call-to-action com background parallax
**Conteúdo:**
- Título: "Venha ser Global"
- Texto convocando novos parceiros/consultores
- Botão primário: "Quero ser parceiro"
- Botão secundário: "Conheça os segmentos"

---

## 10. RODAPÉ (Footer)

**Colunas:**
- Logo GCEN + tagline
- Links dos Segmentos
- Links Institucional (Quem somos, Missão e Valores, Trabalhe conosco, etc.)
- Contato (telefone, e-mail contato@gcen.com.br, endereço)
- Redes sociais (LinkedIn, Instagram, Facebook, YouTube)
- Copyright + CNPJ

---

## Fluxo de Navegação

```
gcen.com.br (Landing Page Principal)
│
├── [Hero Slider] — Slides rotativos dos segmentos
│
├── [Sobre a GCEN] — Texto + Vídeo + Significado da Sigla
│
├── [Missão, Visão e Valores] — MVV do grupo inteiro
│
├── [Parallax 1] — Marketplace + Feirão + Máquinas
│
├── [Segmentos] — Tabs interativos
│   ├── Consórcio → Página do Consórcio
│   ├── Seguro → Página do Seguro
│   ├── Investimento → Página de Investimento
│   ├── Consultoria → Global Consul
│   ├── Feirão → Página do Feirão
│   ├── Vendas de Máquinas → Página de Máquinas
│   └── Global Marketplace → Portal Marketplace (14 sub-segmentos)
│       └── Ícones clicáveis (aviação, agro, etc.) → sub-páginas
│
├── [Parallax 2] — Investimento + Consórcio + Seguro
│
├── [Números] — Contadores animados
│
├── [Parallax 3] — Consultoria + Agro + Concessionário
│
├── [Depoimentos] — Filtro por segmento (3 em 3)
│
├── [Fundadores] — 4 sócios da GCEN
│
├── [Venha ser Global] — CTA parceiros
│
└── [Footer] — Rodapé atualizado
```

---

## Design System

**Estilo:** Corporate moderno + elegante (referência Simpar)
**Paleta:**
- Primária: Azul-marinho profundo `#0A1628`
- Acento: Dourado/âmbar `#C9952A`
- Acento claro: `#E2B44E`
- Superfície: Branco `#FFFFFF` / Cinza claro `#F5F6FA`
- Texto: `#1A2332` (escuro) / `#6B7A8D` (secundário)

**Tipografia:**
- Títulos: Plus Jakarta Sans (Bold 700 / ExtraBold 800)
- Corpo: Inter (Regular 400 / Medium 500)

**Efeitos:**
- Parallax nativo CSS (background-attachment: fixed)
- Contadores animados via Intersection Observer
- Hover suave nos cards (transform + shadow)
- Transições: 200–300ms ease-out

---

## Observações do Cliente

- **Não quer blog/seção de notícias**
- **Simplicidade** — "tipo campestre", nada obba-oba
- **Efeito parallax** aprovado (referência Remax)
- **Depoimentos filtráveis** é prioridade
- **Significado da sigla GCEN** deve ser claro e visível
- **MVV do grupo** fica só na GCEN — segmentos têm propósito próprio
- **Preferência por vídeo** ao lado do texto
- **Logos dos parceiros** por segmento
- **Single Sign-On (SSO)** — "Acessar minha conta" presente na GCEN e todos os segmentos