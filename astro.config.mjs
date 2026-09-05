import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://konishu.github.io',
  base: '/gyosei-office-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
