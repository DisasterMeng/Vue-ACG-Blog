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
import message from './utils/message'

import 'highlight.js/styles/atom-one-light.css'
import './assets/css/reset.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(live2d)
Vue.use(VueLazyload, {
  filter: {
    progressive (listener, options) {
      if (process.env.VUE_APP_CND_IMG_PARAM) {
        const search = new URL(listener.src).search
        listener.loading = listener.src + search ? '&' : '?' + process.env.VUE_APP_CND_IMG_PARAM
      }
    }
  },
  error: require('./assets/imgs/404.png'),
  loading: require('./assets/imgs/loading.gif')
})
Vue.use(autoTextarea)
Vue.use(APlayer)
Vue.use(message)

Vue.filter('timeformat', value => {
  if (!value) return ''
  return moment(value).format('YYYY-MM-DD')
})

Vue.filter('timeformat_second', value => {
  if (!value) return ''
  return moment(value).format('YYYY-MM-DD h:mm:ss a')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
