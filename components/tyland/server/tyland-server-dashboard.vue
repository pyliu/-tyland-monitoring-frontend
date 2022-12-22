<script setup>
// import { extractorSplit } from '@unocss/core'
// import extractorPug from '@unocss/extractor-pug'

const props = defineProps(['ip'])

// Unocss({
//   extractors: [
//     extractorPug(),
//     extractorSplit,
//   ],
// })
</script>

<template>
  <div h-full text-center flex select-none all:transition-400>
    測試 {{ props.ip }}
    <button py-2 px-4 font-semibold rounded-lg shadow-md border-1>
      AAA
    </button>
  </div>
  <!-- div(mr-2) 測試 {{ props.ip }}
  button.py-2.px-4.font-semibold.rounded-lg.shadow-md.border-1 測試 -->
</template>

<style scoped>
.border-rounded {
  border: 1px solid gray;
  padding: 10px;
}
</style>
