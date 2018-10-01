import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFoundComponent from '@/components/NotFoundComponent'
import RegisterMember from '@/components/RegisterMember'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register-member',
      component: RegisterMember
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
