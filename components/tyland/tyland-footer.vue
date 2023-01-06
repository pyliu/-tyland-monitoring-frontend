<script setup>
const colorMode = useColorMode()
const modeCss = computed(() => {
  return colorMode.value === 'dark' ? 'i-carbon-moon' : 'i-carbon-sun'
})
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div absolute bottom-10px right-10px flex items-center op30 fw300 text-xs px-8>
    <a
      i-carbon-logo-github
      text-inherit
      href="https://github.com/pyliu/tyland-monitoring-frontend"
      target="_blank"
      mr-1
    />
    <span mr-1>服務監控系統</span>
    <span mr-1>v0.0.1</span>
    <button my-auto :class="modeCss" @click="toggleDark" />
  </div>
</template>

<style scoped>
</style>
