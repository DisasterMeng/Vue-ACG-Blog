const state = {
  harem: [],
  coldPalace: []
}

const mutations = {
  SETHAREM (state, data) {
    state.harem = data
  },
  SETCOLDPALACE (state, data) {
    state.coldPalace = data
  }
}

const actions = {
  setHarem ({ commit }, data) {
    commit('SETHAREM', data)
  },
  setColdPalace ({ commit }, data) {
    commit('SETCOLDPALACE', data)
  }
}

export default {
  state,
  mutations,
  actions
}
