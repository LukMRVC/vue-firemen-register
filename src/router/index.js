import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FiremanForm from '../views/FiremanForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/firemen',
    name: 'FirememIndex',
    component: Home,
    meta: { requiresAuth: true },

  },
  {
    path: '/firemen/new',
    name: 'NewFireman',
    component: FiremanForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/firemen/:id',
    name: 'EditFireman',
    component: FiremanForm,
    meta: { requiresAuth: true },
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
