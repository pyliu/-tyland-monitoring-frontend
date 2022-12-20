<template lang="pug">
.bg-rose-100.py-2
  p.px-6.py-4.text-2xl.text-gray-700 這是自訂的布局，指定頁面會使用到
  slot(name='header')
  slot
  slot(name='footer')
</template>