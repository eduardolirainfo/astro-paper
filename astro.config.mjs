import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkReadingTime from "./src/plugins/remark-reading-time";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eduardolira.dev.br/",
  integrations: [
    tailwind({
      devOptions: {
        tailwindConfig: "./tailwind.config.js",
      },
    }),
    //      {
    //   // Example: Disable injecting a basic `base.css` import on every page.
    //   // Useful if you need to define and/or import your own custom `base.css`.
    //   config: { applyBaseStyles: false },
    // }
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      remarkReadingTime,
    ],
    shikiConfig: {
      theme: "rose-pine",
      wrap: true,
    },
  },
});
