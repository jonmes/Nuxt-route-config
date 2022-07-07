import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
