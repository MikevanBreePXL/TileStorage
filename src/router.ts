import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import EntryView from './views/EntryView.vue'
import HomeView from './views/HomeView.vue'
import TileDetails from './views/TileDetails.vue'

const routes = [
  { path: '/entry', component: EntryView },
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { name:'TileDetails', path: '/info/:tileId', component: TileDetails, props: true },
]

const router = createRouter({
  history: createWebHashHistory('/TileStorage/'), 
  routes,
})

export default router
