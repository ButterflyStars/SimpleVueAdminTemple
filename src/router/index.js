import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book'
import PageOne from '../views/Page/PageOne'
import PageTwo from '../views/Page/PageTwo'
import PageThree from '../views/Page/PageThree'
import PageFour from '../views/Page/PageFour'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '导航一',
    component: Index,
    redirect: '/pageOne',
    children: [
      {
        path: '/pageOne',
        name: '页面一',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: '页面二',
        component: PageTwo
      },
    ]
  },
  {
    path: '/navigation',
    name: '导航二',
    component: Index,
    children: [
      {
        path: '/pageThree',
        name: '页面三',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '页面四',
        component: PageFour
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
