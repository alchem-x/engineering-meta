import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { createAppRouter } from '@/router.ts'
import AppWrapper from '@/ui/AppWrapper.vue'

const app = createApp({
  render() {
    return h(AppWrapper)
  },
})
app.use(createAppRouter())
app.use(createPinia())
const divRef = document.createElement('div')
document.body.appendChild(divRef)
app.mount(divRef)
