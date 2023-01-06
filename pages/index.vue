<script setup lang="ts">
const { $utils } = useNuxtApp()
onMounted(() => {
  console.log($utils.hello('Vic'))
})
</script>

<template lang="pug">
//- Icon.mx-auto(name="logos:nuxt" size="360")
.flex
  tyland-server-dashboard(ip="220.1.34.211")
  tyland-server-dashboard(ip="220.1.34.75")
  tyland-server-dashboard(ip="220.1.34.204")
.flex
  tyland-server-dashboard(ip="220.1.34.211")
  tyland-server-dashboard(ip="220.1.34.75")
  tyland-server-dashboard(ip="220.1.34.204")
.flex
  tyland-server-dashboard(ip="220.1.34.211")
  tyland-server-dashboard(ip="220.1.34.75")
  tyland-server-dashboard(ip="220.1.34.204")
//- div
//-   Logos(mb-6)
//-   PageView: template(#fallback)
//-   InputEntry
</template>
