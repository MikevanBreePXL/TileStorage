import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/settings', component: () => import('./views/SettingsView.vue') },
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/about', component: () => import('./views/AboutView.vue') },
  { name:'TileDetails', path: '/info/:tileId', component: () => import('./views/TileDetails.vue'), props: true },
]

const router = createRouter({
  history: createWebHashHistory('/TileStorage/'), 
  routes,
})

export default router
