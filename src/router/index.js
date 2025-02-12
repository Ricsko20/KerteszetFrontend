import { createRouter, createWebHistory } from 'vue-router'
import PlantsView from '@/views/PlantsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'plants',
      component: PlantsView,
    },
    {
      path: '/post',
      name: 'post',
      
      component: () => import('../views/PostView.vue'),
    },
    {
      path: '/update',
      name: 'update',

      component: () => import('../views/UpdateView.vue'),
    },
    {
      path: '/delete',
      name: 'delete',

      component: () => import('../views/DeleteView.vue'),
    }
  ],
})

export default router
