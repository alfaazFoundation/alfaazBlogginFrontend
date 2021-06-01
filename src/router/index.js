import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/website/Home'
import LoginBiller from "@/views/Login";
import RegisterBiller from "@/views/Register";
import WebsiteRouter from "@/views/website/WebsiteRouter";
import About from "@/views/website/About";
import Dashboard from "@/views/dashboard/Dashboard"
import CreateNewBlog from "@/views/dashboard/CreateNewBlog"
import Stats from "@/views/dashboard/Stats";
import ListBlog from "@/views/dashboard/ListBlog"

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
  },
  {
    path:'/dashboard',
    component: Dashboard,
    children :[
      {
        path:'',
        name: 'Statistics',
        component:Stats
      },
      {
        path:'new-blog',
        name: 'Create New Blog',
        component:CreateNewBlog
      },
      {
        path : 'list-blog',
        name : 'list blogs',
        component : ListBlog
      }
    ]
  }
]



const router = new VueRouter({
  routes

},)

export default router
