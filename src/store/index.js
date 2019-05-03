import Vue from 'vue'
import Vuex from 'vuex'
import purchases from './purchases'
import dashboard from './dashboard'
import products from './products'
import sales from './sales'
import * as rootModule from './root'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    purchases,
    products,
    sales
  },
  ...rootModule
})
