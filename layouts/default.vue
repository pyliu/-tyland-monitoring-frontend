<template lang="pug">
.bg-sky-100.py-2
  p.px-6.py-4.text-2xl.text-gray-700 這是預設的布局，全部頁面都會使用到
  slot(name='header')
  slot
  slot(name='footer')
</template>