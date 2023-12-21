import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        }
      ]
    }
  },
  css: [
    // "vuetify/lib/styles/main.sass",
    // "@mdi/font/css/materialdesignicons.min.css",
    // "vue-custom-scrollbar/dist/vueScrollbar.css",
    // "vue3-carousel/dist/carousel.css",
    "@/assets/css/main.scss"
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "@pinia/nuxt",
    "@nuxtjs/i18n"
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      { code: "en-US", iso: "en-US", name: "English (US)", file: "en_US.json" },
      { code: "km-KH", iso: "km-KH", name: "Khmer", file: "km_KH.json" },
    ],
    defaultLocale: "en-US"
  }
})
