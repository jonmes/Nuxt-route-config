import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt starter",
      meta: [
        { "data-n-head": "1", charset: "utf-8" },
        {
          "data-n-head": "1",
          "data-hid": "description",
          name: "description",
          content:
            "Find career opportunities in Ethiopia in a sector of your choice. HaHuJobs vacancy aggregation and core services for the Ethiopian labor market services.",
        },
        { "data-n-head": "1", property: "og:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "og:description",
          content:
            "Find career opportunities in Ethiopia in a sector of your choice. HaHuJobs vacancy aggregation and core services for the Ethiopian labor market services.",
        },
        {
          "data-n-head": "1",
          property: "og:image",
          content: "https://hahujobs.net/images/preview.png",
        },
        { "data-n-head": "1", property: "og:type", content: "website" },
        { "data-n-head": "1", property: "twitter:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "twitter:description",
          content:
            "Find career opportunities in Ethiopia in a sector of your choice. HaHuJobs vacancy aggregation and core services for the Ethiopian labor market services.",
        },
        {
          "data-n-head": "1",
          property: "twitter:image",
          content: "https://hahujobs.net/images/preview.png",
        },
        {
          "data-n-head": "1",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "data-n-head": "1",
          name: "viewport",
          content:
            "width:device-width, initial-scale:1, minimum-scale:1.0, maximum-scale:1.0, user-scalable:no",
        },
      ],
      link: [
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/x-icon",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family:Raleway:100,200,300,400,500,600,700,800,900",
        },
        {
          "data-n-head": "1",
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.9.0/css/all.css",
        },
        // { "data-n-head": "1", rel: "manifest", href: "/manifest.json" },
        { href: "https://www.google-analytics.com", rel: "preconnect" },
      ],
      script: [
        {
          src: "https://www.google-analytics.com/analytics.js",
          charset: "utf-8",
          async: true,
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
