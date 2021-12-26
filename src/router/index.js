import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cabinet.vue')
  },
  {
    path: '/images',
    name: 'Images',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Images.vue')
  },
  {
    path: '/sign-up',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/sign-in',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {
  //   path: '/videos/:id',
  //   name: 'videos',
  //   component: import(/* webpackChunkName: "about" */ '../views/Videos.vue'),
  //   props: { default: true, sidebar: false }
  // },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: import(/* webpackChunkName: "about" */ '../views/Error.vue'),
  },
  {
    path: '/image/:id',
    name: 'image',
    component: import(/* webpackChunkName: "about" */ '../views/Image.vue'),
    props: { default: true, sidebar: false }
  },
  {
    path: '/my-videos/',
    name: 'MyVideos',
    component: import(/* webpackChunkName: "about" */ '../views/MyVideos.vue'),
  },
  {
    path: '/user-info/',
    name: 'userInfo',
    component: import(/* webpackChunkName: "about" */ '../views/UserInfo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
