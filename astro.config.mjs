import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon({
    include: {
      mdi: ["*"],
      ri: ["*"]
    }
  }), mdx()],
  // For Vercel
  // output: "server",
  // adapter: vercel(),
  //for GitHub Pages
  site: 'https://charlesMYoung.github.io',
  base: 'density-debris/',
});