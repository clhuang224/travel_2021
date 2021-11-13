import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import('../views/Home.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})