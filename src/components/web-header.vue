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
          <a style="cursor:pointer" @click="shoppingCart"><span class="glyphicon glyphicon-shopping-cart redColor"></span> 购物车<strong>{{shoopingNumber}}</strong>件</a>
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
      number: 0
    }
  },
  components: {
    'web-footer': webFooter
  },
  computed: {
    isLogin () {
      return !this.$store.state.isLogin
    },
    userName () {
      return this.$store.state.userInfo.username || '未登录'
    },
    shoopingNumber () {
      return this.$store.state.productNum || 0
    }
  },
  methods: {
    myOrder () {
      if (this.isLogin) {
        this.$router.push('/login')
        this.$message({
          'type': 'error',
          'message': '请登录'
        })
      } else {
        this.$router.push('/myOrder')
      }
    },
    logout () {
      this.$store.commit('logout')
      this.$router.push('/home')
    },
    shoppingCart () {
      if (this.isLogin) {
        this.$router.push('/login')
        this.$message({
          'type': 'error',
          'message': '请登录'
        })
      } else {
        this.$router.push('/shoppingCart')
      }
    }
  },
  created () {

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
