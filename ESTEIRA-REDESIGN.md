# Esteira de Redesign — GCEN / G1

> **Documento vivo.** Esta é a esteira de execução do redesign. Cada IA/dev que assumir o
> trabalho deve: (1) ler o cabeçalho inteiro, (2) achar a próxima etapa com status `⬜ TODO`,
> (3) executá-la, (4) **atualizar o status e as Notas de Handoff antes de encerrar o turno**.
> Nunca pule a atualização de status — é o que permite outra IA continuar do meio.

---

## 0. Contexto e Fontes da Verdade

| Item | Valor |
|------|-------|
| **Projeto** | Redesign da landing page institucional GCEN (codinome interno do briefing: "G1") |
| **Spec do cliente** | `C:\Users\Arthur\Downloads\G1-SPEC.md` (decisões da reunião — fonte funcional) |
| **Stakeholder** | Adão Ferreira Firmino · **Responsável:** Arthur Meireles |
| **Stack** | React 19 + Vite 8 + react-router-dom 7. **CSS nativo + CSS variables** (sem Tailwind). Motion: **`motion` (framer-motion)** a instalar no P0. |
| **Fonte tipográfica** | Nunito (declarada em `index.css`; verificar carregamento real em `index.html`) |
| **Idioma do produto** | Português (pt-BR) |
| **Modo** | Redesign *preserve-to-overhaul*: mantém arquitetura CSS, IA de navegação e voz; evolui visual, tipografia, motion e algumas seções estruturalmente. |

### Design Read (taste skill)
Redesign institucional agro/B2B para público mais velho (legibilidade), trust-first, mas o cliente
quer **impacto** e **elementos maiores**. Linguagem: institucional limpa, imagens cinematográficas
(estética "apresentação comercial ChatGPT") sobre fotos reais com tratamento duotone verde,
movimento suave e motivado.

### Dials
- `DESIGN_VARIANCE: 6` — assimetria controlada, nada caótico (trust-first).
- `MOTION_INTENSITY: 6` — transições, scroll-reveal, count-up, parallax, flourish de logo; tudo suave e com `prefers-reduced-motion`.
- `VISUAL_DENSITY: 3` — generoso, arejado, tipografia grande.

### Decisões travadas pelo cliente (confirmadas 2026-06-29)
- [x] **Sigla/branding:** `GCEN` (4 letras: G=Grupo+Global, C=Consultores, E=Executivos, N=Negócio). Mantém logo/footer atuais.
- [x] **Abordagem de motion:** adicionar **`motion` (framer-motion)** — instalar via `npm i motion` no P0. Manter código DRY (componentes/dados compartilhados). _Obs.: cliente pediu o plugin `ponytail` (DietrichGebert/ponytail) para reduzir repetição — instalação é via `/plugin` interativo, fora desta sessão; o cliente roda manualmente. Não bloqueia a esteira._
- [x] **Formulário Fale Conosco:** **WhatsApp deep-link + `mailto`** (sem backend).
- [x] **Imagens:** **fotos atuais + tratamento cinematográfico (duotone verde, vinheta) + slots rotulados** para arte gerada por IA que o cliente fornecerá depois.

---

## 1. Legenda de Status

| Símbolo | Significado |
|---------|-------------|
| ⬜ TODO | Não iniciada |
| 🟦 DOING | Em andamento (uma por vez, idealmente) |
| ✅ DONE | Concluída e verificada no preview |
| ⏸️ BLOCKED | Travada (ver nota do bloqueio) |
| 🔁 REVIEW | Feita, aguardando review do cliente |

**Regra de verificação:** uma etapa só vira ✅ depois de rodar `npm run dev` (porta 3000),
abrir no preview e confirmar visualmente + console sem erros + responsivo (desktop/tablet/mobile)
+ `prefers-reduced-motion` respeitado quando houver animação.

---

## 2. Princípios anti-slop aplicados em TODAS as etapas (taste skill)

Validar a cada etapa antes de marcar ✅:
- **Zero em-dash (`—`)** em qualquer texto visível. Trocar por vírgula, ponto, dois-pontos ou parênteses. (Há vários no copy atual — corrigir ao tocar cada seção.)
- **Eyebrows com moderação:** hoje quase toda seção tem `section-tag`. Manter no máx. ~1 a cada 3 seções; nas demais, o H2 sozinho basta.
- **Sem "scroll cue"** (a linha/seta de scroll no Hero sai).
- **Sem version footer** (`v0.0.0` no Footer sai).
- **Sem eyebrow numerado** (`Segmento 01` na página de Segmentos sai).
- **Contraste WCAG AA** em botões, inputs, placeholders e texto sobre foto (usar scrim/overlay).
- **CTA não quebra linha** no desktop; rótulos curtos; **uma label por intenção** (hoje há "Fale com especialista", "Fale Conosco", "Quero ser parceiro" — padronizar intenções).
- **Lock de tema** (claro), **lock de cor de acento** (verde), **lock de raio de borda** (definir e seguir).
- **min-h-[100dvh]** em vez de `100vh` em seções full-height.
- **Imagens reais** com tratamento; nada de fake-UI em `<div>`.

---

## 3. Reconciliação de estrutura (Home)

**Ordem atual:** Hero → About → Parallax1 → MVV(+Excellence) → Segments → Parallax2 → Stats → Testimonials → Parallax3 → Founders → CTA → Footer

**Ordem-alvo (spec §2.1, reconciliada):**
Header → Hero/Banner → Quem Somos → Segmentos → **Números** → Pilares (Missão, Visão, Valor, Compromisso) → Global Marketplace → Depoimentos → Liderança → CTA "Fale Conosco" → Footer

> Parallax sections permanecem como respiros cinematográficos entre blocos (reposicionar conforme a nova ordem). Founders/Liderança preservado (não está no diagrama da spec, mas existe e agrega — manter perto do fim).

---

## 4. Etapas da Esteira

> Formato de cada etapa: **Objetivo · Arquivos · Critérios de aceite · Status · Notas**.

### P0 — Fundação: tokens, tipografia, motion-utils  ·  Status: ✅ DONE
**Objetivo:** preparar o terreno antes de mexer em seções.
- Aumentar a escala tipográfica global em `src/index.css` (H1 +20-30%, H2 +15-20%, body +10-15%, labels +10%) via os `clamp()` existentes, mantendo hierarquia.
- Verificar carregamento real da fonte Nunito em `index.html`; se não estiver, self-host com `@font-face` + `font-display: swap` (sem `<link>` Google Fonts em produção).
- Definir tokens de tratamento cinematográfico de imagem (overlay duotone verde, vinheta, grão opcional `pointer-events:none`).
- Criar utilitário de **scroll-reveal** reutilizável (componente `Reveal` com IntersectionObserver + classes CSS `fade-in-up`), respeitando `prefers-reduced-motion`.
- Definir escala única de raio de borda (decidir: chanfro "quebradinho" geo-shape já existe — padronizar como linguagem de borda).
- **Arquivos:** `src/index.css`, `index.html`, novo `src/components/Reveal.jsx` (+ css), `src/App.css`.
- **Aceite:** site continua renderizando; fontes maiores visíveis; `Reveal` aplicável; sem regressão de layout.
- **Notas:** Feito. `npm i motion` ok. Fonte Nunito segue via Google Fonts `<link>` (display=swap) + peso 900 adicionado. index.css: body 17→19px, h1 +~22% (peso 900), h2 +~18%, h3 base nova. Tokens `--cine-duotone/vignette/scrim` + utils `.img-cine` e `.reveal`. Componente `src/components/Reveal.jsx` (framer-motion, reduced-motion). Verificado no preview, sem erros. _Pendência menor adiada p/ P12: self-host de fonte e compressão de home1.png (7MB)._

### P1 — Header / Navbar  ·  Status: ✅ DONE
**Objetivo:** mais presença (spec §3.1).
- Logo maior; tipografia dos links maior; altura sutilmente maior (≤80px no desktop).
- Transparente no topo → fundo sólido ao rolar (estado `scrolled` já existe; refinar transição).
- Melhor distribuição do espaço; nav em **uma linha** no desktop.
- Trocar listener de scroll por algo passivo (já é passivo) — ok manter.
- **Arquivos:** `src/components/Navbar.jsx`, `Navbar.css`.
- **Aceite:** nav 1 linha desktop, hambúrguer no mobile, transição suave, contraste AA.
- **Notas:** Feito. Logo 44→56px (scrolled 36→44px), links 600/+font, CTA 800/0.92rem. Verificado: nav 104px no topo (encolhe ~74px scrolled), sem wrap a 1440px, 5 links. Altura >80px é intencional (cliente pediu mais presença no topo).

### P2 — Hero / Banner  ·  Status: ✅ DONE
**Objetivo:** banner mais impactante (spec §7.1, §7.3).
- Headline maior (cabe em ≤2 linhas no desktop, subtítulo ≤20 palavras).
- Profundidade de parallax na imagem; tratamento duotone/vinheta para a estética desejada.
- **Flourish de logo G1** (movimento suave de abertura/entrada, sem poluir).
- Refinar slider (já existe autoplay 7s + dots).
- **Remover** o "scroll hint" (anti-slop).
- **Arquivos:** `src/components/Hero.jsx`, `Hero.css`, `src/data/segments.js` (heroSlides).
- **Aceite:** hero cabe na dobra, CTAs visíveis sem scroll, motion com reduced-motion ok.
- **Notas:** Feito. Título clamp→ até 4.75rem peso 900 + text-shadow; subtítulo maior; vinheta cinematográfica (`hero__overlay-vignette`). Parallax via framer-motion (`useScroll/useTransform`): conteúdo sobe+esmaece, fundo desce 14% (wrapper `hero__bg-layer` estendido -8%/116%). Scroll-hint REMOVIDO (anti-slop). Padding-top 104px no conteúdo p/ não colidir com navbar. Verificado a 1366×768: sem overlap, CTA visível, hero full-bleed. **IMPORTANTE:** exigiu `resolve.dedupe:['react','react-dom']` no `vite.config.js` — sem isso o motion gera "Invalid hook call". Limpar `node_modules/.vite` ao mexer no config.

### P3 — Quem Somos (About)  ·  Status: ✅ DONE
**Objetivo:** nova estrutura (spec §3.2).
- Frase principal grande; **primeiras letras em verde, interativas** (clique revela logo/símbolo abaixo).
- Logo central imponente; separador visual; texto descritivo expandido.
- Remover/transformar as caixas de sigla atuais (`about__acronym`) na mecânica de letras interativas.
- Manter âncora "Quem somos"; fonte maior (público idoso).
- Vídeo institucional: manter opcional (hoje aponta para `SEU_VIDEO_ID` placeholder — sinalizar).
- **Depende de:** decisão de sigla (4 vs 5 letras).
- **Arquivos:** `src/components/About.jsx`, `About.css`.
- **Aceite:** interação de letras funciona com teclado e mouse, acessível, reduced-motion ok.
- **Notas:** Feito. Layout centrado (frase > sigla interativa > palco da logo > separador > texto + CTA). 4 cards G/C/E/N chanfrados; clique ativa (verde) e revela a logo GCEN central com flourish (float infinito) + significado da letra (`aria-pressed`, `aria-live`, toggle). Removidas as caixas de sigla antigas E o vídeo placeholder (apontava p/ SEU_VIDEO_ID quebrado; vídeo institucional pode entrar depois). `.section-tag` preservada (estilo global mora aqui). Verificado: clique no G revela logo 160px + texto. Sigla = GCEN (4 letras).

### P4 — Segmentos (grid + filtro "Todos" + "Ver Mais")  ·  Status: ✅ DONE
**Objetivo:** trocar a UI de abas atual por **grid de 7 cards** (spec §3.3).
- 7 cards padronizados (3 por linha no desktop), borda "quebradinha" (geo-shape), tipografia maior.
- Filtro **"Todos"** centralizado acima + filtros por segmento; "Todos" mostra os 7.
- Conteúdo interno: texto + (placeholder de) vídeo + CTA "Saiba Mais".
- Botão **"Ver Mais"** → `/segmentos`.
- Parallax temático por card (opcional, avaliar performance).
- **Arquivos:** `src/components/Segments.jsx`, `Segments.css`, `src/data/segments.js`.
- **Aceite:** filtro funciona, grid uniforme, links corretos, responsivo (1 coluna no mobile).
- **Notas:** Feito. Abas → grid flex (3/linha desktop, 1 mobile <640px). 8 filtros pill (Todos + 7) com `aria-pressed`; "Todos"=7 cards, específico=1. Cards chanfrados (geo-shape) com imagem `.img-cine` (duotone), play, título, desc clamp 4 linhas, "Saiba mais" → `/segmentos#id`. Botão "Ver todos os segmentos em detalhe" → `/segmentos`. Filtro animado com `motion layout`+`AnimatePresence`. Removido o badge eyebrow "CONFIRA NOSSOS SERVIÇOS" e a navegação por abas. Verificado: 7 cards, filtro p/ 1 ok.

### P5 — Números / Estatísticas  ·  Status: ✅ DONE
**Objetivo:** redimensionar e padronizar (spec §3.4).
- Reduzir tamanho atual (muito grande) para padrão consistente; manter **count-up** (já existe via IntersectionObserver).
- Distribuição centralizada; impacto sem desproporção.
- **Arquivos:** `src/components/Stats.jsx`, `Stats.css`.
- **Aceite:** animação dispara no scroll, números corretos, layout equilibrado.
- **Notas:** Feito. Número reduzido de até 88px → até ~68px (clamp 2.75→4.25rem), verificado ~60px. Título alinhado à hierarquia nova, lead/label/desc maiores p/ legibilidade. Count-up (IntersectionObserver + rAF one-shot) mantido e verificado (30+/14+/60mil+/27).

### P6 — Pilares (Missão, Visão, Valor, Compromisso)  ·  Status: ✅ DONE
**Objetivo:** **4 pilares** em linha única (spec §3.5).
- Hoje há Missão/Visão/Valores + Propósito + seção Excellence (Compromisso). Reorganizar para 4 cards: **Missão, Visão, Valor, Compromisso**.
- Decidir destino de Propósito (fundir em Missão/Compromisso) e do grid Excellence (5 itens) — provável: Excellence vira o conteúdo de "Compromisso" ou seção de apoio.
- 4 colunas iguais, cards consistentes, fonte maior, espaçamento uniforme.
- **Arquivos:** `src/components/MVV.jsx`, `MVV.css`, `src/data/segments.js` (mvv, excellenceItems).
- **Aceite:** 4 colunas no desktop, colapso limpo no mobile, tipografia maior.
- **Notas:** Feito. 4 pilares em 1 linha (grid 4col → 2col ≤1024px → 1col ≤600px): Missão, Visão, Valor, Compromisso. Adicionados `mvv.value` e `mvv.commitment` aos dados. Removidos Propósito, conectores tracejados e values-list (CSS órfão limpo). Cards chanfrados com ícone+título+texto, reveal staggered (motion whileInView). Excellence mantida como elaboração ("Compromisso com a Excelência", eyebrow → "Excelência"). Tipografia de títulos/leads alinhada à hierarquia nova. Verificado: 4 colunas, 4 títulos certos.

### P7 — Global Marketplace (seção dedicada)  ·  Status: ✅ DONE
**Objetivo:** seção própria 2 colunas (spec §3.6).
- Layout 2 colunas: **vídeo (maior) à esquerda + texto resumido à direita**.
- Box com contorno "quebradinho" envolvendo as 2 colunas; cabeçalho centralizado; texto reduzido.
- Hoje o marketplace é só uma aba de Segmentos — promover a seção standalone na Home.
- **Arquivos:** novo `src/components/Marketplace.jsx` (+ css), `src/pages/Home.jsx`, `src/data/segments.js`.
- **Aceite:** 2 colunas simétricas no desktop, empilha no mobile, vídeo com fallback.
- **Notas:** Feito. Novo `Marketplace.jsx`/`.css`. Box "quebradinho" via clip-path (chanfro 22px) com `background:green` + `padding:2px` (contorno) + `gap:2px` (divisor verde) — clipa as 2 colunas juntas. Vídeo maior (1.35fr, placeholder com play + img-cine) | texto resumido (1fr) com checklist e CTA → `/segmentos#marketplace`. Empilha ≤860px. **Home reordenada (spec §2.1):** Hero → About → Parallax0 → Segments → Stats → Parallax1 → MVV(Pilares) → Parallax2 → Marketplace → Testimonials → Founders → CTA. Verificado: 2 col, vídeo 694 > texto 514.

### P8 — Depoimentos  ·  Status: ✅ DONE
**Objetivo:** padronizar (spec §3.7).
- Manter filtro (já existe); mostrar todos por padrão; padronizar dimensões dos cards; fonte maior; espaçamento consistente.
- **Arquivos:** `src/components/Testimonials.jsx`, `Testimonials.css`.
- **Aceite:** cards uniformes, filtro ok, paginação ok, contraste ok.
- **Notas:** Feito. Removido o variant `tcard--featured` (cards agora todos iguais, verificado 3×404px). Tipografia maior: título alinhado à hierarquia, lead/filtros/quote/autor maiores, badge 0.78rem. Filtro e paginação mantidos (mostra todos por padrão). CSS órfão de featured limpo.

### P9 — CTA "Fale Conosco"  ·  Status: ✅ DONE
**Objetivo:** contato com formulário + WhatsApp (spec §3.8).
- Seção dedicada com **formulário** (nome, email, telefone, mensagem) + botão **WhatsApp**.
- Labels acima dos inputs, erro abaixo, sem placeholder-as-label, contraste AA.
- Reconciliar com o CTA "Seja parceiro" atual (manter mensagem de parceria ou fundir).
- **Depende de:** decisão de backend do formulário.
- **Arquivos:** `src/components/CTA.jsx`/novo `Contact.jsx`, css, `Home.jsx`.
- **Aceite:** form valida client-side, WhatsApp abre deep-link, estados (loading/erro/sucesso) presentes.
- **Notas:** Feito. CTA reescrito como seção "Fale Conosco" (id="contato", 2 colunas: intro+WhatsApp | form card chanfrado). Form (nome/email/telefone/mensagem, labels acima, required HTML5) → `mailto:` pré-preenchido. WhatsApp → `wa.me` com texto pré-preenchido (novo aba). Footer mudou de id="contato" p/ id="rodape" (evita id duplicado; alvo "Contato" agora é o form). **TODO CLIENTE:** trocar placeholders `WHATSAPP_NUMBER='5567000000000'` e `CONTACT_EMAIL='contato@gcen.com.br'` em CTA.jsx pelos dados reais. Verificado: 4 campos, labels, wa.me href, contraste AA.

### P10 — Footer  ·  Status: ⬜ TODO
**Objetivo:** selos centralizados e distribuição simétrica (spec §3.9).
- Centralizar/distribuir selos de certificação; navegação interna; contato; redes sociais; logo do footer.
- **Remover** string de versão `v0.0.0` (anti-slop).
- **Arquivos:** `src/components/Footer.jsx`, `Footer.css`.
- **Aceite:** selos centrados, colunas equilibradas, links válidos, responsivo.
- **Notas:** _vazio_

### P11 — Página dedicada de Segmentos  ·  Status: ⬜ TODO
**Objetivo:** landing individual por segmento (spec §4).
- Selector/tabs para trocar de segmento; conteúdo 2-3x mais detalhado; parallax temático; espaço generoso; navegação de volta.
- **Remover** eyebrow numerado `Segmento 01` (anti-slop).
- **Arquivos:** `src/pages/SegmentsPage.jsx`, `SegmentsPage.css`, `src/data/segments.js`.
- **Aceite:** navegação entre segmentos, deep-link por hash, volta à home, responsivo.
- **Notas:** _vazio_

### P12 — Motion global, performance, responsividade, QA final  ·  Status: ⬜ TODO
**Objetivo:** acabamento (spec §7, §8, §12.3).
- Flourish de logo; parallax com altura/encaixe sem cortes laterais; transições e hovers; fade-in no scroll em todas as seções; `prefers-reduced-motion` global.
- Performance: lazy-load de imagens/cards, otimizar imagens grandes (home1.png tem 7MB — comprimir), 60fps.
- Responsividade: testar 1920+, tablet, mobile; toque ≥44px; zoom.
- Auditoria de copy (em-dash, nomes genéricos "Fundador 1", números fake).
- **Arquivos:** vários + `public/assets/*` (otimização).
- **Aceite:** Lighthouse razoável (LCP<2.5s, CLS<0.1), sem jank, checklist anti-slop limpo.
- **Notas:** _vazio_

---

## 5. Notas de Handoff (atualizar a cada turno)

> A IA atual escreve aqui o que fez, o que está pela metade e qual o próximo passo concreto.

- **Último turno:** P9 concluído (Fale Conosco com form mailto + WhatsApp). Verificado no preview.
- **Próximo passo:** **P10 — Footer** (selos centralizados, remover v0.0.0).
- **Bloqueios:** nenhum. (TODO cliente: número WhatsApp e e-mail reais no CTA.jsx.)

---

## 6. Log de Progresso

| Data | Etapa | Ação | Autor |
|------|-------|------|-------|
| 2026-06-29 | — | Auditoria inicial + criação da esteira | IA (Claude) |
| 2026-06-29 | P0 | Fundação: motion, tipografia, tokens cine, Reveal | IA (Claude) |
| 2026-06-29 | P1 | Header: logo/tipografia maiores | IA (Claude) |
| 2026-06-29 | P2 | Hero: título maior, parallax motion, vinheta, -scroll-cue; fix vite dedupe | IA (Claude) |
| 2026-06-29 | P3 | About: letras GCEN interativas + reveal da logo; remove caixas/vídeo | IA (Claude) |
| 2026-06-29 | P4 | Segmentos: grid de 7 cards + filtro Todos + Ver Mais | IA (Claude) |
| 2026-06-29 | P5 | Números: redimensiona, mantém count-up | IA (Claude) |
| 2026-06-29 | P6 | Pilares: 4 cards (Missão/Visão/Valor/Compromisso) | IA (Claude) |
| 2026-06-29 | P7 | Marketplace: seção 2 colunas + Home reordenada | IA (Claude) |
| 2026-06-29 | P8 | Depoimentos: padroniza cards, fonte maior | IA (Claude) |
| 2026-06-29 | P9 | Fale Conosco: form mailto + WhatsApp; footer id→rodape | IA (Claude) |
