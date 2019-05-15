import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import Vuetify from 'vuetify'
import live2d from 'live2d-vue'
import autoTextarea from 'textarea-vue'
import APlayer from '@moefe/vue-aplayer'

import 'highlight.js/styles/atom-one-light.css'
import './assets/css/reset.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(live2d)
Vue.use(VueLazyload)
Vue.use(autoTextarea)
Vue.use(APlayer)

Vue.filter('timeformat', value => {
  if (!value) return ''
  return moment(value).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
