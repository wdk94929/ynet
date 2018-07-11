import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'

import App from './index.vue'


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.$axios = axios


new Vue({
  el: '#app',
  render: h => h(App)
})
