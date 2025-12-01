## Pomo-doro — Temporizador Pomodoro (Projeto de Estudo em React)

Um aplicativo web simples que implementa o método Pomodoro para alternar ciclos
de foco e descanso. Este projeto foi desenvolvido propositalmente para meu
aprendizado de front‑end com React — explorando componentes, estado e hooks —
além de Vite, TypeScript e JSX. Todo o código e as decisões refletem um ambiente
de estudo e experimentação.

### Objetivo do projeto

- Deixar claro no portfólio que é um sistema criado para aprender React e seu
  ecossistema (componentes, estado, hooks), Vite, JSX e Node.js (ambiente de
  desenvolvimento).
- Ao final, entregar um temporizador Pomodoro funcional: iniciar a contagem,
  alternar entre ciclos de trabalho/estudo/foco e descanso automaticamente, e
  permitir controle básico (iniciar/pausar/reiniciar).

---

## Funcionalidades

- Iniciar, pausar e reiniciar o cronômetro.
- Alternância automática entre ciclos de foco e descanso (método Pomodoro).
- Exibição clara do ciclo atual e do tempo restante.
- Feedback visual e auditivo básico durante a contagem.

Observação: Como se trata de um projeto de estudo, novas funcionalidades podem
ser adicionadas de forma incremental.

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

O Vite exibirá no terminal a URL local (geralmente `http://localhost:5173`).
Acesse no navegador.

---

## Estrutura do projeto

```text
.
├─ public/
│  ├─ images/
│  │  └─ favicon/
│  │     ├─ apple-touch-icon.png
│  │     ├─ favicon-96x96.png
│  │     ├─ favicon.ico
│  │     ├─ favicon.svg
│  │     ├─ site.webmanifest
│  │     ├─ web-app-manifest-192x192.png
│  │     └─ web-app-manifest-512x512.png
│  └─ vite.svg
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ assets/
│  │  ├─ audios/
│  │  │  ├─ beep.mp3
│  │  │  ├─ gravitational_beep.mp3
│  │  │  ├─ gravitational_beep_fixed.mp3
│  │  │  └─ tic_tac_planeta_miller.mp3
│  │  └─ react.svg
│  ├─ components/
│  │  ├─ Container/ (index.tsx, styles.module.css)
│  │  ├─ CountDown/ (index.tsx, styles.module.css)
│  │  ├─ CycleRow/ (index.tsx, styles.module.css)
│  │  ├─ Footer/ (index.tsx, styles.module.css)
│  │  ├─ Logo/ (index.tsx, styles.module.css)
│  │  ├─ MainForm/ (index.tsx, styles.module.css)
│  │  ├─ Menu/ (index.tsx, styles.module.css)
│  │  ├─ RouterLink/ (index.tsx)
│  │  ├─ Tips/ (index.tsx, styles.module.css)
│  │  └─ Tooltip/ (index.tsx)
│  ├─ contexts/
│  │  └─ TaskContext/
│  │     ├─ initialTaskState.ts
│  │     ├─ taskActions.ts
│  │     ├─ TaskContext.tsx
│  │     ├─ TaskContextProvider.tsx
│  │     ├─ taskReducer.ts
│  │     └─ useTaskContext.ts
│  ├─ models/ (TaskModel.ts, TaskStateModel.ts)
│  ├─ pages/
│  │  ├─ 404/ (index.tsx)
│  │  ├─ Config/ (index.tsx)
│  │  ├─ History/ (index.tsx, styles.module.css)
│  │  ├─ Home/ (index.tsx)
│  │  └─ Info/ (index.tsx)
│  ├─ routers/
│  │  └─ MainRoutes/ (index.tsx)
│  ├─ styles/ (global.css, styles.css)
│  ├─ templates/
│  │  └─ MainTemplate/ (index.tsx)
│  ├─ utils/
│  │  ├─ formatSecondsToMinutes.ts
│  │  ├─ getNextCycle.ts
│  │  ├─ getNextCycleType.ts
│  │  ├─ getTaskStatus.ts
│  │  └─ loadBeep.ts
│  └─ workers/
│     ├─ timerWorker.js
│     └─ timerWorkerManager.ts
├─ index.html
├─ package.json
├─ package-lock.json
├─ eslint.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
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

Finalizado para o objetivo de estudo inicial. Novas melhorias podem ser
adicionadas futuramente.

---

## Contribuição

Sugestões e PRs são bem‑vindos, especialmente com foco didático. A ideia é
manter o código legível para estudo.

---

## Licença

Este repositório é de caráter educacional. Caso necessário, a licença poderá ser
definida futuramente.

---

## Autor

Projeto desenvolvido para fins de estudo de React, seus componentes, estado e
hooks, além de Vite e JSX. Sinta‑se à vontade para conferir o código e
acompanhar a evolução no portfólio.
