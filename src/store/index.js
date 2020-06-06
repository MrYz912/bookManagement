import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: '',
    adminToken: ''
  },
  mutations: {
    changuLogin (state, userToken) {
      state.userToken = userToken
    },
    changaLogin (state, adminToken) {
      state.adminToken = adminToken
    }
  }
})
