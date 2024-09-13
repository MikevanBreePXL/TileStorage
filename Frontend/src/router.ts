import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import EntryView from './views/EntryView.vue'
import HomeView from './views/HomeView.vue'
import TileDetails from './views/TileDetails.vue'

const routes = [
  { path: '/', component: EntryView },
  { path: '/home', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/tileDetails', component: TileDetails },
]

const router = createRouter({
  history: createWebHashHistory('/TileStorage/'), 
  routes,
})

export default router
