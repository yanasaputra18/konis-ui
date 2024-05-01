import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeleInView from '@/views/TeleInView.vue'
import TeleOutView from '@/views/TeleOutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/in',
    name: 'TeleIn',
    component: TeleInView
  },
  {
    path: '/out',
    name: 'TeleOut',
    component: TeleOutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
