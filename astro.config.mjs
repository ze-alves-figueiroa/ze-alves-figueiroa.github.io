// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ze-alves-figueiroa.github.io',
  base: process.env.BASE_URL || '/',
  vite: {
    plugins: [tailwindcss()]
  }
});