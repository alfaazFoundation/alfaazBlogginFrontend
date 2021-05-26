import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/website/Home'
import LoginBiller from "@/views/Login";
import RegisterBiller from "@/views/Register";
import WebsiteRouter from "@/views/website/WebsiteRouter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: WebsiteRouter,
    children:[
      {
        path:'/',
        component:Home
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginBiller
  },
  {
    path: '/register',
    name: 'Sign Up',
    component: RegisterBiller
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
  routes
})

export default router
