/* eslint-disable no-undef */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      utils: {
        hello: msg => `Hello ${msg}!`,
      },
    },
  }
})
