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
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
 
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    },
    ssr: {
      external: ['svgo']
    }
  }
});

 