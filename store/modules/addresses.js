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
  ],
  route: {
    departure: null,
    arrival: null,
    journeys: []
  },
  navitia_api_key: '25d05741-12ac-4d62-be88-2d82645310b9'
}

const getters = {
  addresses: state => state.addresses,
  departure: state => state.route.departure,
  arrival: state => state.route.arrival,
  journeys: state => state.route.journeys,
  api_key: state => state.navitia_api_key
}

const mutations = {
  ADD_ADDRESS (state, address) {
    state.addresses.push(address)
  },
  DELETE_ADDRESS (state, address) {
    state.addresses.splice(state.addresses.indexOf(address), 1)
  },
  SET_DEPARTURE (state, departure) {
    state.route.departure = departure
  },
  SET_ARRIVAL (state, arrival) {
    state.route.arrival = arrival
  },
  SET_JOURNEYS (state, journeys) {
    state.route.journeys = journeys
  }
}

const actions = {
  addAddress ({commit}, address) {
    commit('ADD_ADDRESS', address)
  },
  deleteAddress ({commit}, address) {
    commit('DELETE_ADDRESS', address)
  },
  departure ({commit}, departure) {
    commit('SET_DEPARTURE', departure)
  },
  arrival ({commit}, arrival) {
    commit('SET_ARRIVAL', arrival)
  },
  journeys ({commit}, journeys) {
    commit('SET_JOURNEYS', journeys)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
