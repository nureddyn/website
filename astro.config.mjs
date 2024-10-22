import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import icon from 'astro-icon';

export default defineConfig({
  site: "https://nureddyn.dev",
  integrations: [mdx(), tailwind(), react(), icon()]
});
