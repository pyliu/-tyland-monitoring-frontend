<script setup>
const props = defineProps({
  ip: String,
})
const { cpu, refresh, pending } = await useAsyncData('/api/v1/cpu', () =>
  $fetch(`http://localhost:${config.apiPort}/api/v1/cpu`)
)
console.log(cpu?.value)
onMounted(() => {
  setTimeout(() => console.log(cpu?.value), 2000)
})
</script>
<template lang="pug">
.bg-white.py-24
  .flex.flex-col.items-center
    h1.text-6xl.font-semibold.text-sky-400 {{ ip }}
    p.mt-4.text-9xl.font-bold.text-gray-600 DASHBOARD
</template>
<style lang="scss" scoped></style>
