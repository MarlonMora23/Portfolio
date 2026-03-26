import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from 'astro-icon';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      "logos": ["*"],
      "simple-icons": ["*"],
      "mdi": ["*"]
    }
  }), sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      'en': 'es'
    }
  },
  output: "server",
  adapter: vercel()
});