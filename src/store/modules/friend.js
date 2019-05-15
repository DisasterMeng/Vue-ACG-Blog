const state = {
  harem: []
}

const mutations = {
  SETHAREM (state, data) {
    state.harem = data
  }
}

const actions = {
  setHarem ({ commit }, data) {
    commit('SETHAREM', data)
  }
}

export default {
  state,
  mutations,
  actions
}
