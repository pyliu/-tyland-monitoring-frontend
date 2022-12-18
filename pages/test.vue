<template lang="pug">
.container.mx-auto TEST
</template>
<script setup>
import { ref } from 'vue'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' }
]
const selectedPerson = ref(people[0])
</script>