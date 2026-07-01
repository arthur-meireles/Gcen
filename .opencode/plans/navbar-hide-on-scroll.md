# Navbar: Hide on Scroll Down, Show on Scroll Up

## Objetivo
A navbar fixa deve desaparecer suavemente ao rolar para baixo (dando mais destaque ao conteúdo) e reaparecer ao rolar para cima, seguindo o mesmo padrão já usado pelo `ScrollProgress.jsx`.

---

## Arquivos a alterar

### 1. `src/components/Navbar.jsx`

**Adicionar import do Lenis:**
```jsx
import { useLenis } from 'lenis/react';
```

**Adicionar estado `hidden`:**
```jsx
const [hidden, setHidden] = useState(false);
```

**Obter instância do Lenis:**
```jsx
const lenis = useLenis();
```

**Separar o `useEffect` de scroll em dois:**

- **Efeito 1** (existente, mantido): detecta `scrolled` (threshold 60px) via `window.scroll`.
- **Efeito 2** (novo): detecta direção do scroll para controlar `hidden`:
  - **Caminho Lenis** (quando Lenis está ativo): usa `lenis.on('scroll', ...)` com `direction > 0` (descendo) + `window.scrollY > 80` + `velocity !== 0`.
  - **Caminho fallback** (reduced-motion / sem Lenis): compara `window.scrollY` com posição anterior.
  - **Menu mobile aberto**: nunca esconde (`setHidden(false)`).
  - Cleanup adequado em ambos os caminhos.

**Adicionar classe `navbar--hidden` ao header:**
```jsx
<header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`} role="banner">
```

**Dependências do efeito:** `[lenis, menuOpen]`

---

### 2. `src/components/Navbar.css`

**Adicionar `transform` à transição existente em `.navbar`:**
```css
transition: background var(--transition), box-shadow var(--transition), transform 0.35s var(--ease-out-expo);
```

**Adicionar modificador `navbar--hidden`:**
```css
.navbar--hidden {
  transform: translateY(-100%);
}
```

---

## Comportamento

| Condição | Resultado |
|---|---|
| Scroll para baixo, `scrollY > 80` | Navbar sobe e desaparece (`translateY(-100%)`) |
| Scroll para cima | Navbar desce e reaparece |
| No topo (`scrollY <= 80`) | Navbar sempre visível |
| Menu mobile aberto | Navbar sempre visível |
| `prefers-reduced-motion` | Fallback com scroll nativo (sem Lenis) |

---

## Verificação
- `npm run dev` → testar scroll down/up no browser
- Confirmar que a transição é suave (0.35s ease-out-expo)
- Confirmar que o menu mobile não é afetado
- Confirmar que a barra de progresso de scroll continua funcionando normalmente
