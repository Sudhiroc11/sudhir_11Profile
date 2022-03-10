import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Credit from '../components/Credit.vue';
import dashboardHome from '../components/dashboardHome.vue';
import Payments from '../components/Payments.vue';
import Settings from '../components/Settings.vue';
import userCard from '../components/userCard.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'userCard' },
    children: [
      {
        path: '/Credit',
        name: 'Credit',
        component: Credit,
      },
      {
        path: '/dashboardHome',
        name: 'dashboardHome',
        component: dashboardHome,
      },
      {
        path: '/Payments',
        name: 'Payments',
        component: Payments,
      },
      {
        path: '/Settings',
        name: 'Settings',
        component: Settings,
      },
      {
        path: '/userCard',
        name: 'userCard',
        component: userCard,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
