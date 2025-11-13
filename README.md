## Pomo-doro — Temporizador Pomodoro (Projeto de Estudo em React)

Um aplicativo web simples que implementa o método Pomodoro para alternar ciclos de foco e descanso. Este projeto foi desenvolvido propositalmente para meu aprendizado de front‑end com React — explorando componentes, estado e hooks — além de Vite, TypeScript e JSX. Todo o código e as decisões refletem um ambiente de estudo e experimentação.

### Objetivo do projeto
- Deixar claro no portfólio que é um sistema criado para aprender React e seu ecossistema (componentes, estado, hooks), Vite, JSX e Node.js (ambiente de desenvolvimento).
- Ao final, entregar um temporizador Pomodoro funcional: iniciar a contagem, alternar entre ciclos de trabalho/estudo/foco e descanso automaticamente, e permitir controle básico (iniciar/pausar/reiniciar).

---

## Funcionalidades
- Iniciar, pausar e reiniciar o cronômetro.
- Alternância automática entre ciclos de foco e descanso (método Pomodoro).
- Exibição clara do ciclo atual e do tempo restante.
- Feedback visual e auditivo básico durante a contagem.

Observação: Como se trata de um projeto de estudo, novas funcionalidades podem ser adicionadas de forma incremental.

---

## Tecnologias e conceitos estudados
- React (componentização, estado e hooks como `useState`, `useEffect`).
- TypeScript para tipagem estática e melhor DX.
- Vite para desenvolvimento rápido e build.
- JSX para composição de interfaces.
- Node.js como ambiente de execução e gerenciamento de dependências (npm).
- ESLint/tsconfig para padronização e qualidade de código.

---

## Como executar localmente

Pré‑requisitos:
- Node.js LTS (recomendado 18+)
- npm (ou pnpm/yarn)

Passos:
```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento (HMR)
npm run dev

# Build de produção
npm run build

# Visualizar build
npm run preview
```

O Vite exibirá no terminal a URL local (geralmente `http://localhost:5173`). Acesse no navegador.

---

## Estrutura do projeto

```text
.
├─ public/
├─ src/
│  ├─ assets/
│  ├─ App.tsx
│  ├─ App.css
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

- `src/App.tsx`: componente principal do temporizador.
- `src/main.tsx`: ponto de entrada do React.
- `index.html`: documento raiz servido pelo Vite.

---

## Roadmap de aprendizado e features
- Ajuste de durações (foco/descanso) via UI.
- Contagem de ciclos completos e histórico simples.
- Alertas sonoros e/ou notificações de desktop.
- Temas (claro/escuro) e melhorias de UI/UX.
- Responsividade aprimorada (mobile first).
- Acessibilidade (atalhos de teclado, ARIA).
- PWA (instalável/offline).
- Testes (unitários e de componentes).

---

## Status do projeto
Em desenvolvimento (foco em aprendizado contínuo). O escopo pode mudar conforme eu exploro novos conceitos do React.

---

## Contribuição
Sugestões e PRs são bem‑vindos, especialmente com foco didático. A ideia é manter o código legível para estudo.

---

## Licença
Este repositório é de caráter educacional. Caso necessário, a licença poderá ser definida futuramente.

---

## Autor
Projeto desenvolvido para fins de estudo de React, seus componentes, estado e hooks, além de Vite e JSX. Sinta‑se à vontade para conferir o código e acompanhar a evolução no portfólio.
