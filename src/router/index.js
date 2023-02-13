import { createRouter, createWebHistory as createWebHashHistory } from 'vue-router'

// import HomeView from '../pages/HomeView.vue'
import AppIndex from '@/pages/app-index.vue'
import ContactList from '@/pages/contact-index.vue'
import  ContactDetails from '@/pages/contact-details.vue'
import  ContactEdit from '@/pages/contact-edit.vue'

const routerOption={
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppIndex
    },
    {
      path: '/contacts',
      component: ContactList
    },
    {
      path: '/contacts/:_id',
      component: ContactDetails
    },
    {
      path: '/contacts/edit/:_id?',
      component: ContactEdit
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
