# PORTAL.FS (formerly GPT FileSmith) 🪐🔫

PORTAL.FS is a dynamic interdimensional file generator inspired by Rick and Morty's portal gun. Enter any path or URL (e.g., `/plumbus.html`, `/blips-and-chitz/arcade.js`), and a powerful AI Core will generate a corresponding file based on the path and extension.

Fully refactored to support multiple futuristic AI models, secure HTTP-only cookie authentication, and the Vercel AI SDK!

## 🌐 Demo

Try it live at [PORTAL.FS](https://portal.aleksa.codes/)!

## ✨ Features

- **Dimensional Tethering**: Enter any path (e.g., `/about.html`, `/styles.css`), and the selected AI Model synthesizes file content based on the path.
- **Multiverse Core Integration**: Slap your API keys into the Battery Bay to power the portal gun with `gpt-5.4-nano`, `gemini-3.1-flash-lite`, or `claude-4.5-haiku`. Keys are never saved to a database, just your local secure cookies!
- **Rick & Morty Action Bar**: Wrap generated HTML in a sleek interdimensional action bar allowing instant extraction (downloads) or portal closing.
- **Direct Address Bar Execution**: Just type `/anything.html` directly in the browser's address bar to skip the gadget UI and simulate instantly.

## 🛠️ Tech Stack

- **Framework**: Astro v6
- **Package Manager**: Bun
- **Styling**: Tailwind CSS v4 & custom R&M CSS animations
- **AI Integration**: Vercel AI SDK (OpenAI, Google Generative AI, Anthropic)
- **Deployment**: Netlify Edge Functions

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- At least one active API Key from OpenAI, Google (Gemini), or Anthropic (Claude)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aleksa-codes/portal-fs.git
   cd portal-fs
   ```

2. Install dependencies via Bun:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Access the app at `http://localhost:3000`.
5. Open the **Core Battery Bay**, slam in your API key of choice, route the power, and shoot a portal!

## 💡 Usage

1. Enter a coordinate path with an extension (e.g., `/pokemon/charizard.html`, `/styles.css`). If no extension is specified, HTML is synthesized by default.
2. Alternatively, enter the file path directly in the browser's address bar.
3. The Vercel AI SDK will synthesize file content matching the extension's best practices.
4. Preview the generated UI or download the HTML file straight to your dimension.

### Example Paths

- `/index.html`: Generates a fully responsive homepage layout.
- `/dashboard/hologram.css`: Generates a stylesheet.
- `/api/morty-brain-waves.json`: Creates a sample JSON API structure.
- `/plumbus-manual.js`: Produces a JavaScript file.

## 🛠️ Building for Production

To create a production build for Netlify, run:

```bash
bun run build
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/aleksa-codes/portal-fs/blob/main/LICENSE) file for details.

---

<p align="center">Made with ❤️ by <a href="https://github.com/aleksa-codes">aleksa.codes</a></p>
