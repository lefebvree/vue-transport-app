import Vue from 'vue'
import Vuex from 'vuex'
import addresses from './modules/addresses'
import lines from './modules/lines'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addresses,
    lines
  }
})
