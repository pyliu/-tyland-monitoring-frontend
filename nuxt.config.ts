// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icons',
    'nuxt-headlessui',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@morev/vue-transitions/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: 'Headless',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {},
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    apiPort: '65535',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
})
