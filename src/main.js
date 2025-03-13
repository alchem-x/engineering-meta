import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import AppWrapper from '@/components/AppWrapper.vue'
import { i18n } from '@/components/i18n.js'

const app = createApp({
  render() {
    return h(AppWrapper)
  },
})
app.use(createPinia())
app.use(i18n)
const divRef = document.createElement('div')
document.body.appendChild(divRef)
app.mount(divRef)
