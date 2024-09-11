import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from './views/AboutView.vue'
import EntryView from './views/EntryView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: EntryView },
  { path: '/home', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
