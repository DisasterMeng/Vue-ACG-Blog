const state = {
  details: {}
}

const mutations = {
  SETDETAILS (state, data) {
    state.details = data
  }
}

const actions = {
  setDetails ({ commit }, data) {
    commit('SETDETAILS', data)
  }
}

export default {
  state,
  mutations,
  actions
}
