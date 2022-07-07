import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
