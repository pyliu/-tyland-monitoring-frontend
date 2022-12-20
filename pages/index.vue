<script setup>
const props = defineProps({
  idx: { type: Number, default: 99 }
})

const emit = defineEmits([])

const appConfig = useAppConfig()
const config = useRuntimeConfig()

console.log(config)
// const url = `http://localhost:${config.apiPort}/cpu`
// const token = config.apiSecret
// const getCPU = async () => {
//   try {
//     return await $fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//   } catch (e) {
//     console.error(e)
//   }
// }
// await useAsyncData('/api/v1/cpu', () => $fetch(`http://localhost:${config.apiPort}/api/v1/cpu`))
const data = await useAsyncData('/api/v1/cpu', () => $fetch(`http://localhost:${config.apiPort}/api/v1/cpu`))
// const data = computed(() => {
//   return {
//     name: 'pyliu',
//     age: 28
//   }
// })

onBeforeMount(()=> {})
onMounted(async () => {
  console.log(data)
})
onBeforeUpdate(()=> {})
onUpdated(()=> {})
onUnmounted(()=> {})
</script>

<template lang="pug">
ServerDashboard(ip="220.1.34.211")
nuxt-link(to="/test") test
ContentDoc
</template>

<style lang="scss" scoped>
</style>
  
