<template>
  <div :id="id" class="app-container">
    <I18NTable />
    <TimeTable />
  </div>
</template>

<script setup>
import { useId } from 'vue'
import I18NTable from '@/components/I18nTable.vue'
import TimeTable from '@/components/TimeTable.vue'

const id = useId()
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
