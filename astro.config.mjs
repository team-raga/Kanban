import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://team-raga.github.io',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react()
  ]
});
