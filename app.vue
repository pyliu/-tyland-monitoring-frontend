<template lang="pug">
div: NuxtWelcome
div
  h1 Welcome to the homepage
  AppAlert This is an auto-imported component.
</template>

<script setup>
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
</script>
