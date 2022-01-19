export default {
  namespaced: true,
  state: () => ({
    posts: [],
    comments: []
  }),
  mutations: {
    set(state, {payload, param}) {
      state[param] = payload
    }
  },
  getters: {
    get: (state) => (param) => state[param]
  },
  actions: {
    load({dispatch, commit}, {path, param}) {
      return dispatch('get', path, {root: true}).then((response) => {
        commit('set', {payload: response, param})
      })
    },
    createNewPost({dispatch, commit, state}, options) {
      return dispatch('post', options, {root: true}).then((response) => {
        commit('set', {payload: [...state.posts, response], param: 'posts'})
      })
    }
  }
}
