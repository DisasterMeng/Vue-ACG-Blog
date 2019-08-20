const state = {
  comment: {},
  user: {
    icon: require('@/assets/imgs/user.png'),
    username: '点击登陆'
  },
  parent: -1
}

const mutations = {
  SETCOMMENT (state, data) {
    state.comment = data
  },
  SETCOMMENTUSER (state, data) {
    state.user = data
  },
  SETPARENT (state, data) {
    state.parent = data
  }
}

const actions = {
  setComment ({ commit }, data) {
    commit('SETCOMMENT', data)
  },
  setCommentUser ({ commit }, data) {
    commit('SETCOMMENTUSER', data)
  },
  setParent ({ commit }, data) {
    commit('SETPARENT', data)
  }
}

export default {
  state,
  mutations,
  actions
}
