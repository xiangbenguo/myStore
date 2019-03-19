<template>
    <div class="myOrder">
        <search-bar></search-bar>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:80px">
            <el-tab-pane label="所有订单" name="first">
                <all-order></all-order>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="second">
                <payment></payment>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="third">
                <despatch></despatch>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="fourth">
                <the-goods></the-goods>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="five">
                <evaluation></evaluation>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import searchBar from '../components/searchBar'
import allOrder from '../components/allOrder'
import payment from '../components/payment'
import despatch from '../components/despatch'
import theGoods from '../components/theGoods'
import evaluation from '../components/evaluation'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    'search-bar': searchBar,
    'all-order': allOrder,
    'payment': payment,
    'despatch': despatch,
    'the-goods': theGoods,
    'evaluation': evaluation
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  created () {
    if (!this.$store.state.isLogin) {
      this.$router.push('login')
      this.$message({
        'type': 'error',
        'message': '请登录'
      })
    }
  }
}
</script>

<style scoped>
    .myOrder {
        max-width: 1013px;
        margin: 30px auto;
    }
</style>

<style>
    .el-tabs__item {
        font-size: 18px
    }
    .el-tabs__item:hover {
        color: #FF003E
    }
    .el-tabs__item.is-active {
        color: #FF003E;
    }
    .el-tabs__active-bar {
        color: #FF003E;
        background-color: #FF003E
    }
</style>
