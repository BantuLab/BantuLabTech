import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import RegisterMember from '../views/RegisterMember.vue'
import ShowEvents from '../views/ShowEvents.vue'
import ShowEvent from '../views/ShowEvent.vue'
import AddEvent from '../views/AddEvent.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/events',
    name: 'show-events',
    component: ShowEvents
  },
  {
    path: '/events/{id}',
    name: 'show-event',
    component: ShowEvent
  },
  {
    path: '/addevent',
    name: 'add-event',
    component: AddEvent
  }
  {
    path: '*',
    component: NotFound
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
