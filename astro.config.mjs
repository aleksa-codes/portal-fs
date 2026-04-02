import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: netlify(),
  integrations: [icon()],
});
