const state = {
  drawer: false
}

const mutations = {
  SETDRAWER: (state, data) => {
    state.drawer = data
  }
}

const actions = {
  setDrawer: ({ commit }, data) => {
    commit('SETDRAWER', data)
  }
}

export default {
  state,
  mutations,
  actions
}
