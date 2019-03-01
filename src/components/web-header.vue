<template>
  <div class="containerDiv">
    <div class="maincontainer">
      <div class="top">
        <router-link to="/"><span class="glyphicon glyphicon-home redColor"></span> 天猫首页</router-link>
        <span>喵，欢迎来天猫</span>
        <router-link to="/login" v-if="isLogin">请登录</router-link>
        <a v-else style="cursor: pointer">{{userName}}</a>
        <router-link to="/register" v-if="isLogin">免费注册</router-link>
        <a style="cursor:pointer" v-else @click="logout">退出</a>
        <span class="right">
          <a style="cursor:pointer" @click="myOrder">我的订单</a>
          <a style="cursor:pointer" @click="shoppingCart"><span class="glyphicon glyphicon-shopping-cart redColor"></span> 购物车<strong>{{number}}</strong>件</a>
        </span>
      </div>
    </div>
    <div class="appMain">
      <router-view></router-view>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
import webFooter from '../components/web-footer'
export default {
  name: 'web-header',
  data () {
    return {
      number: 0,
      userName: ''
    }
  },
  components: {
    'web-footer': webFooter
  },
  computed: {
    isLogin () {
      return !this.$store.state.isLogin
    }
  },
  methods: {
    myOrder() {
      if (this.isLogin) {
        this.$router.push('/login')
      } else {
        this.$router.push('/myOrder')
      }
    },
    logout() {
      this.$store.state.isLogin = false
      this.$router.push('/home')
      console.log(this.$store.state.isLogin)
    },
    shoppingCart () {
      if (this.isLogin) {
        this.$router.push('/login')
      } else {
        this.$router.push('/shoppingCart')
      }
    }
  },
  created () {
    if (this.$store.state.isLogin) {
      this.userName = this.$store.state.userName
    }

    var jsonData = window.localStorage.getItem('products')
    var products = JSON.parse(jsonData)
    if (products !== null) {
      this.number = products.productNum
    }
  }
}
</script>

<style scoped>
  .maincontainer {
    font-size: 12px;
    background-color: #f2f2f2;
    padding: 5px 0;
    padding-bottom: 1px solid #e7e7e7;
    width: 100%
  }
  .top {
    width: 1300px;
    margin: 0 auto
  }
  a {
    color: #999;
    margin: 0 10px
  }
  a:hover {
    color: #FF003E
  }
  span {
    color: #999;
    margin: 0 10px
  }
  .redColor {
    color: #FF003E
  }
  .right {
    float: right
  }
</style>
