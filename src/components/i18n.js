import { createI18n } from 'vue-i18n'

export const numberFormat = new Intl.NumberFormat('en')

export const languageOptionList = [
  { value: 'ko-KR', label: 'Korean' },
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: 'Chinese (Simplified)' },
  { value: 'zh-TW', label: 'Chinese (Traditional)' },
]

export const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': {
      hello: 'Hello, nice to meet you👋',
      krw_n: '₩{0}',
      hkd_n: 'HK${0}',
    },
    'zh-CN': {
      hello: '你好，幸会👋',
      krw_n: '₩{0}',
      hkd_n: 'HK${0}',
    },
    'zh-TW': {
      hello: '你好，幸會👋',
      krw_n: '₩{0}',
      hkd_n: 'HK${0}',
    },
    'ko-KR': {
      hello: '안녕하세요, 만나서 반갑습니다👋',
      krw_n: '{0}원',
      hkd_n: 'HK${0}',
    },
  },
})

export const $t = i18n.global.t.bind(i18n.global)

export function formatKRW(num, locale) {
  return $t('krw_n', [numberFormat.format(num)], { locale })
}

export function formatHKD(num, locale) {
  return $t('hkd_n', [numberFormat.format(num)], { locale })
}
