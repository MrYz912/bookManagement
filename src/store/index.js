import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null,
    adminToken: null
  },
  mutations: {
    changeuLogin (state, userToken) {
      state.userToken = userToken
    },
    changeaLogin (state, adminToken) {
      state.adminToken = adminToken
    }
  }
})
