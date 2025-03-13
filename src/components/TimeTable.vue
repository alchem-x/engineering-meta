<template>
  <NTable class="time-table">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pairs of dates">
        <td v-for="p of pairs">{{ p }}</td>
      </tr>
    </tbody>
  </NTable>
</template>

<script setup>
import { NTable } from 'naive-ui'
import { formatISO, parse, format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

const timeZoneOffset = new Date().getTimezoneOffset() / 60

const dates = [
  ['Time Zone Offset', timeZoneOffset < 0 ? `+${Math.abs(timeZoneOffset)}` : `-${Math.abs(timeZoneOffset)}`],
  ['Raw', '2025-03-24 21:59:00'],
  ['formatISO', formatISO(parse('2025-03-24 21:59:00', 'yyyy-MM-dd HH:mm:ss', new Date()))],
  ['formatISO', formatISO(TZDate.tz('Asia/Seoul', '2025-03-24T21:59:00+08:00'))],
  ['format', format(TZDate.tz('+09:00', '2025-03-24T21:59:00+08:00'), 'yyyy-MM-dd HH:mm:ss')],
]
</script>

<style scoped lang="less">
.time-table {
  max-width: 780px;
  margin: 0 auto;
}
</style>
