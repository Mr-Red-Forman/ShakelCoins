import { createRouter, createWebHistory as createWebHashHistory } from 'vue-router'

// import HomeView from '../pages/HomeView.vue'
import AppIndex from '../pages/app-index.vue'

const routerOption={
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppIndex
    },
    {
      // path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../pages/AboutView.vue')
    }
  ]
}

const router = createRouter(routerOption)

export default router
