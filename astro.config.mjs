import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  prefetch: true,
  experimental: {
    clientPrerender: true,
    globalRoutePriority: true,
  },
  integrations: [
    tailwind({
      devOptions: {
        tailwindConfig: "./tailwind.config.cjs",
      },
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "Introdução",
          utils: {
            smoothScroll: true,
          },
        },
      ],
      [
        remarkCollapse,
        {
          test: "Introdução", 
          summary: "Índice",
          className: "smooth-scroll",  
          utils: {
            smoothScroll: true,
          }, 
        },
      ],
    ],
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      external: ["svgo"],
    },
  },
})
