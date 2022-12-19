<script setup>
  import { computed } from "@vue/reactivity";
import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from "vue";

  const  props = defineProps({
    idx: { type: Number, default: 99 }
  })

  const emit = defineEmits([])

  // const appConfig = useAppConfig()
  // const runtimeConfig = useRuntimeConfig()

  const data = computed(() => {
    return {
      name: 'pyliu',
      age: 45
    }
  })

  onBeforeMount(()=> {})
  onMounted(()=> {
    console.log('mounted!!', data)
  })
  onBeforeUpdate(()=> {})
  onUpdated(()=> {})
  onUnmounted(()=> {})
</script>

<template lang="pug">
NuxtWelcome
<nuxt-link to="/test">test</nuxt-link>
</template>

<style lang="scss" scoped>
</style>
  
