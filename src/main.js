import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import Vuetify from 'vuetify'
import live2d from 'live2d-vue'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'
import './assets/css/reset.styl'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(live2d)
Vue.use(VueLazyload)

Vue.filter('timeformat', function (value) {
  if (!value) return ''
  return moment(value).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
