// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  build: {
    transpile: ["tapable"],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: "var(--color-primary)",
              50: "var(--color-primary-50)",
              100: "var(--color-primary-100)",
              200: "var(--color-primary-200)",
              300: "var(--color-primary-300)",
              400: "var(--color-primary-400)",
            },
            secondary: {
              DEFAULT: "var(--color-secondary)",
              50: "var(--color-secondary-100)",
              100: "var(--color-secondary-100)",
              200: "var(--color-secondary-200)",
              300: "var(--color-secondary-300)",
              400: "var(--color-secondary-400)",
            },

            "quick-silver": "var(--color-quick-silver)",
            "bright-gray": "var(--color-bright-gray)",
            "white-smoke": "var(--color-white-smoke)",
            "apple-red": "var(--color-apple-red)",
            "purple-navy": "var(--color-purple-navy)",
            "tan-tan": "var(--color-tan-tan)",

            white: "var(--color-white)",
            lotion: "var(--color-lotion)",
          },
        },
      },
    },
  },
});
