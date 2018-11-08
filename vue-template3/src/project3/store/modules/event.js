import * as types from '../mutation-types'

const state = {
  click: null,
  resize: null
}

const getters = {
  onclick: state => state.click,
  onresize: state => state.resize
}

const actions = {
  triggerEvent ({ state, commit }, evnt) {
    commit(types.SET_EVENT, evnt)
  }
}

const mutations = {
  [types.SET_EVENT] (state, evnt) {
    state[evnt.type] = evnt
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
