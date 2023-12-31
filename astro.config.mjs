import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
const config = {
  site: 'https://manu-4216.github.io',
  base: '/portfolio',
  integrations: [
    react(), 
    tailwind({
     applyBaseStyles: false
    }), 
    mdx()
  ],
}

if (process.env.MODE === "DEV") {
  config.base = "";
}

// https://astro.build/config
export default defineConfig(config);