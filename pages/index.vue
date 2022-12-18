<template lang="pug">
NuxtWelcome
</template>

<script>
import { 
  onBeforeMount, onMounted, 
  onBeforeUpdate, onUpdated, 
  onUnmounted,
  ref, reactive, watch, computed 
} from "vue"

export default {
  props: {
    idx: { type: Number, default: 99 }
  },
  setup (props, { emit }) {
    const appConfig = ref(useAppConfig())
    const runtimeConfig = ref(useRuntimeConfig())
    onBeforeMount(()=> {})
    onMounted(()=> {
      console.log('mounted!!', props, emit)
    })
    onBeforeUpdate(()=> {})
    onUpdated(()=> {})
    onUnmounted(()=> {})
    return { appConfig, runtimeConfig }
  }
}
</script>
