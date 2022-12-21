<template lang="pug">
div(text='xl gray4' m-5 flex justify-center gap-3)
  nuxt-link.i-carbon-campsite(to='/') home
  a.i-carbon-logo-github(href='https://github.com/pyliu/tyland-monitoring-frontend' target='_blank')
    Icon(name="logos:github-octocat" size="24")
  dark-toggle
</template>
