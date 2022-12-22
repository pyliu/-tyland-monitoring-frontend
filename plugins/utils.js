/* eslint-disable no-undef */
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/isEmpty'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      utils: {
        hello: msg => `Hello ${msg}!`,
        isEmpty,
        debounce,
      },
    },
  }
})
