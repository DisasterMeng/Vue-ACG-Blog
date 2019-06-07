const state = {
  comment: {},
  user: {}
}

const mutations = {
  SETCOMMENT (state, data) {
    state.comment = data
  },
  SETCOMMENTUSER (state, data) {
    state.user = data
  }
}

const actions = {
  setComment ({ commit }, data) {
    commit('SETCOMMENT', data)
  },
  setCommentUser ({ commit }, data) {
    commit('SETCOMMENTUSER', data)
  }
}

export default {
  state,
  mutations,
  actions
}
