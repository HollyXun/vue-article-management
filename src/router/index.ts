import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Login/Login.vue')
    },
    {
      path: '/details/:id',
      name: 'ColumnDetail',
      component: () => import('@/views/Details/ColumnDetail.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/Error/404.vue')
    }

  ]
})

export default router
