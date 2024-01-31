import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://eduardolira.dev.br/",
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
  markdownOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  markdown: {
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
});
