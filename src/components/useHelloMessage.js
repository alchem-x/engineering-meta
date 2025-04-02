import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export function useHelloMessage() {
  const { t } = useI18n({
    messages: {
      'en-US': {
        hello: 'Hola!',
        hello_new: 'New Hola!',
      },
    },
  })
  return computed(() => `${t('hello', [], { locale: 'zh-CN' })} x ${t('hello_new', [], { locale: 'zh-CN' })}`)
}
