<template>
  <NTable class="i18n-table">
    <thead>
      <tr>
        <th>Language</th>
        <th>Label</th>
        <th>Currency (KRW🇰🇷)</th>
        <th>Currency (HKD🇭🇰)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l of languageOptionList">
        <td>{{ l.label }}</td>
        <td>{{ t('hello', [], { locale: l.value }) }}</td>
        <td>{{ formatKRW(327680, l.value) }}</td>
        <td>{{ formatHKD(32768, l.value) }}</td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="input-container">
            <span>Value:</span>
            <NInput v-model:value="params.s" placeholder="Enter value" />
          </div>
        </td>
      </tr>
    </tbody>
  </NTable>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { NTable, NInput } from 'naive-ui'
import { useUrlSearchParams } from '@vueuse/core'
import { formatHKD, formatKRW, languageOptionList } from '@/components/i18n.js'

const { t } = useI18n()

const params = useUrlSearchParams('history', {
  initialValue: {
    s: 'engineering-meta',
  },
})
</script>

<style scoped lang="less">
.i18n-table {
  max-width: 780px;
  margin: 0 auto;
  .input-container {
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
