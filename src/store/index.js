import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: { name: 'hezhen' }
  },
  mutations: {
    setUserinfo (state, userinfo) {
      state.userinfo = userinfo
    }
  },
  actions: {
    changeUserinfo ({ commit }, userinfo) {
      commit('setUserinfo', userinfo)
    }
  },
  modules: {
  }
})
