<template>
  <div class="app-container">
    <b>engineering-meta: {{ getHello() }}</b>
  </div>
</template>

<script setup>
import { getHello } from '@/utils/getHello.ts'
</script>

<style scoped lang="less">
.app-container {
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
