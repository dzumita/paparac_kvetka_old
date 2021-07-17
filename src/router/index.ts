import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import ThePaparac from '../views/ThePaparac.vue'
import TheFurnace from '../views/TheFurnace.vue'
import TheShop from '../views/TheShop.vue'
import TheInfo from '../views/TheInfo.vue'
import TheSettings from '../views/TheSettings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Paparac',
    component: ThePaparac
  },
  {
    path: '/furnace',
    name: 'Furnace',
    component: TheFurnace
  },
  {
    path: '/shop',
    name: 'Shop',
    component: TheShop
  },
  {
    path: '/info',
    name: 'info',
    component: TheInfo
  },
  {
    path: '/settings',
    name: 'Settings',
    component: TheSettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
