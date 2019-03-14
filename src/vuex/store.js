import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true

Vue.use(Vuex)

const state = {
  userInfo: {},
  isLogin: false,
  productNum: ''
}

const mutations = {
  login (state) {
    axios.get('http://localhost:8080/login/getUser').then((res) => {
      console.log(res)
      state.isLogin = true
      state.userInfo = res.data.data
    }).catch((err) => {
      console.log(err)
    })
  },
  logout (state) {
    axios.post('http://localhost:8080/login/logout').then((res) => {
      console.log(res)
      this.state.isLogin = false
      window.localStorage.clear()
    }).catch((err) => {
      console.log(err)
    })
  }
}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
