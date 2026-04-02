# PORTAL.FS - Developer & AI Agent Guide

Welcome to the `PORTAL.FS` Multiverse Generator. This file serves as documentation for developers and future AI Agents making changes to the codebase.

## Project Architecture

- **Framework:** Astro (`v6.x`)
- **Package Manager:** Bun
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + PostCSS Global Rules
- **Deployment Adapter:** Netlify (`@astrojs/netlify`)
- **AI Core:** Vercel AI SDK (`ai`, `@ai-sdk/openai`, `@ai-sdk/google`, `@ai-sdk/anthropic`)

## Key Files & Responsibilities

- `src/layouts/layout.astro`: The core HTML boilerplate. Imports Google Fonts (Creepster, Patrick Hand, VT323) and handles global Tailwind utility styling (`flex min-h-screen items-center justify-center overflow-hidden font-[Patrick_Hand,cursive]`).
- `src/styles/global.css`: Holds theming variables, animated portal background logic, R&M UI gradients layer definitions, and the `.github-floater` CSS. Wait to write standard Tailwind classes, write custom or animated elements here.
- `src/pages/index.astro`: The primary frontend "Gadget Console" view. Vanilla JS dynamically hydrates UI inputs, triggers CSS animations on form submit, and redirects the `window.location`.
- `src/pages/[...path].ts`: The magic engine. Catch-all dynamic route that handles any trailing URL path. It validates user cookies, queries the Vercel AI wrapper logic based on the user's selected LLM "Core", and streams the output encapsulated in a Rick & Morty download action bar.
- `src/pages/api/auth.ts`: ReST API storing/wiping user API Keys. Validated via `httpOnly` secure cookies.
- `src/utils/ai-provider.ts`: Vercel AI wrapper executing `generateText` dynamically with `claude-4.5-haiku`, `gemini-3.1-flash-lite`, or `gpt-5.4-nano`.

## Design System & Patterns

- **Imports:** Uses Next.js style alias imports (`@/` maps to `src/`).
- **Naming Conventions:** Enforces `kebab-case` for all custom application files (e.g. `layout.astro`, `ai-provider.ts`).
- **Aesthetic:** The aesthetic is heavily inspired by Rick and Morty technologies. Avoid adding rounded, clean sleek components here. Elements should be chunky, hand-drawn, have heavy borders (`var(--outline)`), high contrast neon accents (`#52c724`), and thick offset block shadows.

```bash
bun dev
bun run format
bun run build
```
