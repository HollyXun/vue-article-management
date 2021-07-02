import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/views/LogInAndRegister.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/Error/404.vue')
    }

  ]
})

export default router
