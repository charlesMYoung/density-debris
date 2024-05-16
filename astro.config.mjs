import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon({
    include: {
      mdi: ["*"],
      ri: ["*"]
    }
  }), mdx()],
  site:'https://density-debris-chi.vercel.app/',
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});
