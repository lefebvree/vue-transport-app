import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lines: [],
  stops: {}
}

const getters = {
  lines: state => state.lines,
  line: state => {
    return lineID => state.lines.filter(line => {
      return line.id === lineID
    })[0]
  },
  stops: state => {
    return lineID => state.stops[lineID]
  }
}

const mutations = {
  ADD_LINE (state, line) {
    state.lines.push(line)
  },
  DELETE_LINE (state, line) {
    state.lines.splice(state.lines.indexOf(line), 1)
  },
  ADD_LINE_STOPS (state, [lineID, stops]) {
    state.stops[lineID] = stops
    localStorage.setItem(lineID, JSON.stringify(stops))
  }
}

const actions = {
  addLine ({commit}, line) {
    commit('ADD_LINE', line)
  },
  addLineStops ({commit}, [lineCode, stops]) {
    commit('ADD_LINE_STOPS', [lineCode, stops])
  },
  deleteLine ({commit}, line) {
    commit('DELETE_LINE', line)
  },
  loadLines ({commit}) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('line:DGL')) {
        commit('ADD_LINE_STOPS', [key, JSON.parse(localStorage.getItem(key))])
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
