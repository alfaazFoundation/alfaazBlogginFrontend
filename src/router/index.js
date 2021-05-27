import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/website/Home'
import LoginBiller from "@/views/Login";
import RegisterBiller from "@/views/Register";
import WebsiteRouter from "@/views/website/WebsiteRouter";
import About from "@/views/website/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: WebsiteRouter,
    children:[
      {
        path:'/',
        name: 'Home Page',
        component:Home,
      },
      {
        path:'/about',
        name: 'About Page',
        component:About
      }
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
  }
]



const router = new VueRouter({
  routes

},)

export default router
