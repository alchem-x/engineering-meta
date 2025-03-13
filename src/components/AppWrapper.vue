<template>
  <NMessageProvider>
    <App />
  </NMessageProvider>
</template>

<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import App from '@/components/App.vue'
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
