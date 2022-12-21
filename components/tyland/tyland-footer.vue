<script setup lang="ts">
const colorMode = useColorMode()
const modeCss = computed(() => {
  return colorMode.value === 'dark' ? 'i-carbon-moon' : 'i-carbon-sun'
})
function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template lang="pug">
.fixed-bottom
  .mr-1 服務監控系統
  i.mr-1 v0.0.1
  button(@click='toggleDark' :class="modeCss")
</template>

<style scoped>
.fixed-bottom {
  display: flex;
  color: gray;
  font-size: small;
  font-weight: 600;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.mr-1 {
  margin-right: 0.25rem;
}
</style>
