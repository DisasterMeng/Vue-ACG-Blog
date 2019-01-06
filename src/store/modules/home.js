const state = {
  drawer: false
}

const mutations = {
  SETDRAWER (state, drawer) {
    state.drawer = drawer
  }
}

const actions = {
  setDrawer ({ commit }, drawer) {
    commit('SETDRAWER', drawer)
  }
}

export default {
  state,
  mutations,
  actions
}
