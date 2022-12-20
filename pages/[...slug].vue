<template lang="pug">
.bg-white.py-24
  .flex.flex-col.items-center
    h1.text-8xl.font-semibold.text-red-500 404
    p.my-8.text-3xl.text-gray-800 Not Found
    p.my-8.text-xl.text-gray-800 ⚠️ 找不到這個頁面
</template>

<script setup>
setResponseStatus(404)
</script>