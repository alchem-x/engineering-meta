<template>
  <div class="i18n-local">
    {{ t('hello', [], { locale: 'en-US' }) }}
    <NDivider vertical />
    {{ t('hello', [], { locale: 'zh-CN' }) }}
    <NDivider vertical />
    {{ hello }}
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { NDivider } from 'naive-ui'
import { useHelloMessage } from '@/components/useHelloMessage.js'

const { t } = useI18n({
  messages: {
    'en-US': {
      hello: 'Hey!',
    },
    'zh-CN': {
      hello: '嘿！',
    },
  },
})

const hello = useHelloMessage()
</script>

<style scoped>
.i18n-local {
  width: 780px;
  margin: 0 auto;
}
</style>
