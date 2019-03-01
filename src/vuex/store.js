import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userToken: null,
  userName: '向本国',
  userInfo: {},
  isLogin: false
}

const mutations = {
  login (state, token) {

  },
  logout (state) {

  }
}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
