import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/404.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/category/:Pid',
    name: 'category',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "about" */ '../views/category.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "about" */ '../views/order.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/product/:Pid',
    name: 'product',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  {
    path: '/comparison',
    name: 'comparison',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "about" */ '../views/comparison.vue')
  },
  {
    path: '/lc-favorite',
    name: 'lc-favorite',
    meta: {
      layout: 'main',
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../lc/lc-favorite.vue')
  },
  {
    path: '/lc-myOrder',
    name: 'lc-myOrder',
    meta: {
      layout: 'main',
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../lc/lc-myOrder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
