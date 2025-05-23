import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap'; // Import

export default defineConfig({
  site: 'https://www.beanpotstudio.com', 
  integrations: [
    tailwind({ applyBaseStyles: false }),
    vue(),
    sitemap() 
  ]
});