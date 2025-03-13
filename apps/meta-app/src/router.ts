import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/ui/App.vue'
import NotFound from '@/ui/NotFound.vue'

export function createAppRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: App },
      { path: '/app', component: App },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
  })
}
