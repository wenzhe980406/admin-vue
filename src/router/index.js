import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/pages/Index')
const User = () => import('@/pages/system/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/system/user',
      name: 'User',
      component: User
    }
  ]
})
