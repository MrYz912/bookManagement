import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null,
    adminToken: null,
    bookInformation: [],
    adminInformation: null
  },
  mutations: {
    changeuLogin (state, userToken) {
      state.userToken = userToken
    },
    changeaLogin (state, adminToken) {
      state.adminToken = adminToken
    },
    changeBooks (state, bookInformation) {
      state.bookInformation = bookInformation
    },
    changeAdmins (state, adminInformation) {
      state.adminInformation = adminInformation
    }
  }
})
