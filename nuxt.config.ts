// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icons",
    "nuxt-headlessui",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
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
          additionalData: '@use "@/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
});
