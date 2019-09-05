import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import { Message } from 'element-ui'
import { resource } from '../models/fake-data'

Vue.use(Router)

const routers = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: '/template',
          name: 'template',
          component: () => import('../views/Template.vue')
        },
        {
          path: '/category',
          name: 'category',
          component: () => import('../views/Category.vue')
        },
        {
          path: '/item',
          name: 'item',
          component: () => import('../views/Item.vue')
        },
        {
          path: '/hero',
          name: 'hero',
          component: () => import('../views/Hero.vue')
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('../views/Article.vue')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    }
  ]
})
// 路由守卫，控制菜单权限
routers.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  let isLogin = true
  if (to.path === '/login') {
    next()
    return
  }
  if (isLogin) {
    let hasResource = resource && resource.some(item => {
      return item.path === to.path
    })
    if (hasResource) {
      next()
    } else if (!from.name) {
      next('/login')
    } else {
      Message({
        message: '无权限访问',
        type: 'warning'
      })
      next(false)
    }
  } else {
    next('/login')
  }
})

export default routers
