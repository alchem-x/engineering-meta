<template>
  <div class="app-container">
    <Title />
    <span v-text="getHello()"></span>
  </div>
</template>

<script setup lang="ts">
import { getHello } from 'meta-utils/getHello.ts'
import Title from '@/ui/Title.tsx'
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

<style scoped lang="less"></style>
