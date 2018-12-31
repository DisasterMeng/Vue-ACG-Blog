import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

nprogress.configure({ showSpinner: false })

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home/index.vue'),
      children: []
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.configure({ trickle: true, minimum: 0.08 })
  nprogress.set(0)
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  nprogress.done()
})

export default router
