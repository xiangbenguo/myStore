import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true

Vue.use(Vuex)

const state = {
  userToken: null,
  userName: '向本国',
  userInfo: {},
  isLogin: false
}

const mutations = {
  login (state) {
    axios.get('http://localhost:8080/login/getUser', {
      Headers: {
        'Access-Control-Allow-Credentials': true
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  },
  logout (state) {

  }
}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
