<script setup lang="ts">
const { $utils } = useNuxtApp()
onMounted(() => {
  console.log($utils.hello('Vic'))
})
</script>

<template lang="pug">
//- Icon.mx-auto(name="logos:nuxt" size="360")
div
  Logos(mb-6)
  Suspense: PageView: template(#fallback)
  InputEntry
</template>
