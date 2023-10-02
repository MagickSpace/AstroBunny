import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import yaml from "@rollup/plugin-yaml";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrobunny.devopsick.com',
  vite: {
    plugins: [yaml()]
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap({
    i18n: {
      defaultLocale: 'en',
      // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US',
        // The `defaultLocale` value must present in `locales` keys
        es: 'es-ES',
        fr: 'fr-CA'
      }
    }
  }), solidJs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});