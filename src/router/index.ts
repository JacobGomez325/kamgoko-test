import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '@/views/dashboard/DashboardView.vue'
import DashboardListUser from '@/views/dashboard/ListUser.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        { path: 'list-user', component:DashboardListUser }, 
      ],
    },
   
  ]
})

export default router
