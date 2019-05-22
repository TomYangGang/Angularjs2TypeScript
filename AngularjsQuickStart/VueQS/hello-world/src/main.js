import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

require('./assets/product.css')
Vue.config.productionTip = false
Vue.use(VueRouter)

import router from "./routerManager.js" 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
