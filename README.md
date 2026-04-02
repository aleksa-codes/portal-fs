# 🚀 Portal

> **🪐 Infinite Interdimensional Web Router:** An interdimensional file generator inspired by Rick and Morty's portal gun.

Portal (formerly GPT FileSmith) allows you to enter any path or URL (e.g., `/plumbus.html`, `/blips-and-chitz/arcade.js`), and a powerful AI Core will generate a corresponding file based on the path and extension.

[![Astro](https://img.shields.io/badge/Astro_6-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Netlify-00C46A?logo=netlify&logoColor=white)](https://www.netlify.com/)

## Features

- **Dimensional Tethering** 🌌 Enter any path (e.g., `/about.html`, `/styles.css`), and the selected AI Model synthesizes file content based on the path.
- **Multiverse Core Integration** 🔋 Slap your API keys into the Battery Bay to power the portal gun with `gpt-5.4-nano`, `gemini-3.1-flash-lite`, or `claude-4.5-haiku`.
- **Secure Authentication** 🔒 Keys are never saved to a database, just stored in your local HTTP-only secure cookies!
- **Rick & Morty Action Bar** 🔫 Wrap generated HTML in a sleek interdimensional action bar allowing instant extraction (downloads) or portal closing.
- **Direct Address Bar Execution** ⚡ Just type `/anything.html` directly in the browser's address bar to skip the gadget UI and simulate instantly.

## Quick Start

```bash
# Clone & install
git clone https://github.com/aleksa-codes/portal-fs.git
cd portal-fs
bun install

# Run dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `bun run dev`     | Dev server (port 3000)                       |
| `bun run build`   | Build for production (Astro + Netlify Edge)  |
| `bun run preview` | Preview production build                     |
| `bun run format`  | Prettier (Astro + Tailwind + import sorting) |

## Project Structure

```
src/
├── layouts/           # layout.astro (HTML boilerplate, fonts, global styles)
├── pages/             # Routes
│   ├── index.astro    # Frontend "Gadget Console" view
│   ├── [...path].ts   # Catch-all dynamic route for file generation
│   └── api/           # ReST API storing/wiping user API Keys
├── styles/            # global.css (Theming, animations, R&M UI gradients)
└── utils/             # ai-provider.ts (Vercel AI wrapper for LLMs)
```

## Tech Stack

| Category        | Technology                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| Framework       | [Astro 6](https://astro.build/)                                                 |
| Styling         | [Tailwind CSS 4](https://tailwindcss.com/) + PostCSS Context                    |
| AI SDK          | [Vercel AI SDK](https://sdk.vercel.ai/)                                         |
| AI Models       | OpenAI, Google Generative AI, Anthropic                                         |
| Deployment      | [Netlify](https://www.netlify.com/) (Edge Adapters)                             |
| Package Manager | [Bun](https://bun.sh/)                                                          |
| Icons           | [astro-icon](https://github.com/natemoo-re/astro-icon) (`@iconify-json/lucide`) |

## Deployment

Deploy to Netlify with these settings:

- **Build command:** `bun run build`
- **Publish directory:** `dist`
- **Framework:** Astro

## License

MIT - see [LICENSE](LICENSE).
