import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  addresses: [
    {
      name: 'Nautibus',
      address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
      favorite: false
    }
  ]
}

const getters = {
  addresses: state => state.addresses
}

const mutations = {
  ADD_ADDRESS (state, address) {
    state.addresses.push(address)
  },
  DELETE_ADDRESS (state, address) {
    state.addresses.splice(state.addresses.indexOf(address), 1)
  }
}

const actions = {
  addAddress ({commit}, address) {
    commit('ADD_ADDRESS', address)
  },
  deleteAddress ({commit}, address) {
    commit('DELETE_ADDRESS', address)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
