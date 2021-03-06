import '@babel/polyfill'
import Vue from 'vue'
import store from '@/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/plugins'
import '@/filters'
import App from '@/App.vue'
import router from '@/router'
import '@/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
