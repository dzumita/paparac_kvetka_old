import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AppPaparac from '../views/AppPaparac.vue'
import AppFurnace from '../views/AppFurnace.vue'
import AppShop from '../views/AppShop.vue'
import AppEncyclopedia from '../views/AppEncyclopedia.vue'
import AppSettings from '../views/AppSettings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Paparac',
    component: AppPaparac
  },
  {
    path: '/furnace',
    name: 'Furnace',
    component: AppFurnace
  },
  {
    path: '/shop',
    name: 'Shop',
    component: AppShop
  },
  {
    path: '/encyclopedia',
    name: 'Encyclopedia',
    component: AppEncyclopedia
  },
  {
    path: '/settings',
    name: 'Settings',
    component: AppSettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
