<script setup>
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])
</script>
<template lang="pug">
input(
  type="text",
  :value="props.modelValue",
  @input="$emit('update:modelValue', $event.target.value)"
)
</template>
<style lang="scss" scoped>

</style>