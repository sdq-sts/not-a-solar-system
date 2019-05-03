import Vue from 'vue'
import Router from 'vue-router'
import { handleRouteGuard } from '@/utils/handleRouteGuard'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home', requiresAuth: false },
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Login', requiresAuth: false },
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/registrar',
      name: 'register',
      meta: { meta: 'Registrar', requiresAuth: false },
      component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
    },
    {
      path: '/dashboard',
      meta: { title: 'Dashboard', requiresAuth: true },
      component: () => import(/* webpackChunkName: "wrapper" */ '@/views/Wrapper.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard.index',
          meta: { title: 'Dashboard' },
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
        },
        {
          path: '/produtos',
          name: 'manage.products',
          meta: { title: 'Produtos' },
          component: () => import(/* webpackChunkName: "manage.products" */ '@/views/ManageProducts.vue')
        },
        {
          path: '/compras',
          name: 'manage.purchases',
          meta: { title: 'Compras' },
          component: () => import(/* webpackChunkName: "manage.purchases" */ '@/views/ManagePurchases.vue')
        },
        {
          path: '/vendas',
          name: 'manage.sales',
          meta: { title: 'Vendas' },
          component: () => import(/* webpackChunkName: "manage.sales" */ '@/views/ManageSales.vue')
        },
        {
          path: '/config',
          name: 'settings',
          meta: { title: 'Configurações' },
          component: () => import(/* webpackChunkName: "settings" */ '@/views/ManageSettings.vue')
        }
      ]
    }
  ]
})

router.beforeEach(handleRouteGuard)

export default router
