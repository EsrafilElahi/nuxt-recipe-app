// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  build: {
    transpile: ["tapable", "primevue"],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL, // for clientSide
      testEnv: "testEnv value",
    },
    apiBaseUrl: process.env.NUXT_PRIVATE_API_BASE_URL,
  },

  app: {
    head: {
      title: "Recipe App",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],

  // image: {
  //   dir: 'public/images',  // مسیر پیش‌فرض تصاویر

  //   // domains: ['nuxtjs.org'],
  //   densities: [1],
  //   format: ["jpg", "png"],
  // },

  primevue: {
    // برای کاهش حجم باندل، فقط کامپوننت‌های مورد نیاز را ایمپورت کنید:
    components: {
      include: ["Button", "InputText", "Toolbar", "Card"], // فقط این کامپوننت‌ها ثبت می‌شوند
      // prefix: 'Prime' ===> <PrimeButton />
      // exclude: ['Galleria', 'Carousel']
    },

    importTheme: { from: "~/assets/themes/myTheme.js" },

    options: {
      ripple: true,
      inputVariant: "filled",

      theme: {
        preset: Aura,
        options: {
          prefix: "prime",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  },

  fonts: {
    provider: "google",
    families: [
      {
        name: "Delius",
        weights: [400, 500, 700],
        styles: ["italic", "normal"],
        subsets: ["latin"],
        display: "swap",
      },
    ],
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Delius", "sans-serif"],
          },
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
