import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home/index.vue'),
      children: [
        {
          path: '/',
          name: 'content',
          component: () => import('./components/home/content.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./components/aboutMe/index.vue')
        },
        {
          path: '/blogs/:page',
          name: 'blogDetails',
          component: () => import('./components/blogDetails/index.vue')
        },
        {
          path: '/feed',
          name: 'feed',
          component: () => import('./components/feed/index.vue')
        },
        {
          path: '/friend',
          name: 'friend',
          component: () => import('./components/friend/index.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.configure({ trickle: true, minimum: 0.08, showSpinner: true })
  nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  nprogress.configure({ trickle: false, minimum: 0, showSpinner: false })
  nprogress.done()
})

export default router
