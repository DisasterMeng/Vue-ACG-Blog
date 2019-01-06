const state = {
  offsetTop: 0
}

const mutations = {
  SETSCROLL (state, data) {
    state.offsetTop = data
  }
}

const actions = {
  setScroll ({ commit }, data) {
    commit('SETSCROLL', data)
  }
}

export default {
  state,
  mutations,
  actions
}
