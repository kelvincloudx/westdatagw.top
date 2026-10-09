import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://westdatagw.top',
  output: 'static',
  build: {
    format: 'directory'
  }
});
