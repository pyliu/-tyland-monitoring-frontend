<script setup>
useHead({
  title: '系統監控儀表板-桃園地政',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template lang="pug">
nuxt-layout: nuxt-page
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
