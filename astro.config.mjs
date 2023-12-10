import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
 

// https://astro.build/config
export default defineConfig({
  site: "https://eduardolira.dev.br/",
  integrations: [tailwind({
    devOptions: {
      tailwindConfig: "./tailwind.config.cjs"
    },
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap(), mdx()] ,
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "es", "en", "fr"]
  },
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "rose-pine",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});