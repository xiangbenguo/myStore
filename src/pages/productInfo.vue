<template>
    <div class="productInfo">
        <search-bar></search-bar>
        <div class="detail">
            <div class="imgAndInfo">
                <div class="leftImgDiv">
                    <div class="bigImgDiv">
                        <img class="bigImg" :src="bigImgSrc">
                    </div>
                    <div class="smallImgDiv">
                        <img class="smallImg" v-for="(item, index) in smallImgList" :src="require(`E://upload/${item}`)" @mouseenter="changeBigImg($event)" :key="index">
                    </div>
                </div>
                <div class="rightDiv">
                    <div class="productTitle">
                        {{productTitle}}
                    </div>
                    <div class="productPriceDiv">
                        <div class="vouchersDiv">
                            <img src="../assets/img/vouchers.png" alt="" height="16px">
                            <span>全天猫实物商品通用</span>
                        </div>
                        <div class="price">
                            <span style="color:#999999;display:inline-block;width:68px;position:relative;top:-5px;font-size:12px">价格</span>
                            <span style="font-size:18px;color:#c40000">￥</span>
                            <span style="font-size:30px;font-weight:bold;color:#c40000">{{productPrice}}</span>
                        </div>
                        <div class="freight">
                            <span style="color:#999999;display:inline-block;width:68px;font-size:12px">运费</span>
                            <span style="color:#999999;font-size:12px">免邮费</span>
                        </div>
                    </div>
                    <ul class="tm-ind-panel">
                        <li class="tm-ind-item">
                            <div class="tm-indcon">
                                <span class="tm-label">月销量</span>
                                <span class="tm-count">{{monthSales}}</span>
                            </div>
                        </li>
                        <li class="tm-ind-item">
                            <div class="tm-indcon">
                                <span class="tm-label">累积评价</span>
                                <span class="tm-count">{{evaluationNum}}</span>
                            </div>
                        </li>
                        <li class="tm-ind-item">
                            <div class="tm-indcon">
                                <span class="tm-label">送天猫积分</span>
                                <span class="tm-count" style="color:#280">100</span>
                            </div>
                        </li>
                    </ul>
                    <div class="productNumber">
                        <span style="color:#999999;display:inline-block;width:60px;font-size:12px">数量</span>
                        <el-input-number v-model="buyNumber" size="small" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        <span style="color:#999999;font-size:12px;display:inline-block;width:40px">件</span>
                        <span style="color:#999999;font-size:12px">库存{{stock}}件</span>
                    </div>
                    <div class="buyAndShoppingCart">
                        <button class="buyButton" @click="buy">立即购买</button>
                        <button class="shoppingCart" @click="addCart"><span class="glyphicon glyphicon-shopping-cart" style="margin-right:8px;font-size:12px"></span>加入购物车</button>
                    </div>
                    <div class="serverCommitment">
                        <span style="color:#999999">服务承诺</span>
                        <span>正品保证</span>
                        <span>急速退款</span>
                        <span>七天无理由退换</span>
                    </div>
                </div>
            </div>
        </div>
        <detailAndEvaluation></detailAndEvaluation>
    </div>
</template>

<script>
import searchBar from '../components/searchBar'
import detailAndEvaluation from '../components/detailAndEvaluation'
export default {
  data () {
    return {
      bigImgSrc: '',
      buyNumber: 1,
      smallImgList: [],
      productTitle: '',
      productPrice: '',
      stock: '',
      monthSales: '',
      evaluationNum: ''
    }
  },
  components: {
    'search-bar': searchBar,
    'detailAndEvaluation': detailAndEvaluation
  },
  methods: {
    changeBigImg (e) {
      console.log(e.target.src)
      this.bigImgSrc = e.target.src
    },
    handleChange (value) {
      console.log(value)
    },
    buy () {
      if (!this.$store.state.isLogin) {
        this.$router.push('/login')
        this.$message({
          'type': 'error',
          'message': '请登录'
        })
        return
      }
      this.$router.push({path: '/confirm-order', query: {pid: this.$route.query.pid, productTitle: this.productTitle, num: this.buyNumber, price: this.productPrice}})
    },
    addCart () {
      var products = {
        pid: this.$route.query.pid,
        productImg: this.bigImgSrc,
        productTitle: this.productTitle,
        productPrice: this.productPrice,
        productNum: this.buyNumber
      }
      var data = JSON.stringify(products)
      window.localStorage.setItem('products', data)
      this.$message({
        'type': 'success',
        'message': '已成功加入购物车'
      })
      this.$store.state.productNum = products.productNum
    },
    getProductInfo () {
      this.$axios.get(`http://localhost:8080/product/get?id=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        this.productTitle = res.data.data.name
        this.productPrice = res.data.data.price
        this.stock = res.data.data.stock
        this.monthSales = res.data.data.monthSales === null ? 0 : res.data.data.monthSales
        this.evaluationNum = res.data.data.evaluationNum === null ? 0 : res.data.data.evaluationNum
      }).catch((err) => {
        console.log(err)
      })
    },
    getProductImg () {
      this.$axios.get(`http://localhost:8080/productImg/getPidList?pid=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].type === 1) {
            this.smallImgList.push(res.data.data[i].url)
          }
        }
        this.bigImgSrc = require(`E://upload/${this.smallImgList[0]}`)
        console.log(this.smallImgList)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    console.log(this.$route.query.pid)
    this.getProductInfo()
    this.getProductImg()
  }
}
</script>

<style scoped>
    .detail {
        width: 1020px;
        margin: 100px auto 30px
    }
    .imgAndInfo {
        width: 970px;
        margin: 40px 20px;
        display: flex
    }
    leftImgDiv {
        width: 400px
    }
    .bigImg {
        width: 400px;
        height: 400px;
        padding: 20px;
        border: 1px solid #f2f2f2
    }
    .smallImgDiv {
        width: 80%;
        margin: 20px auto
    }
    .smallImg {
        width: 60px;
        height: 60px;
        border: 2px solid white
    }
    .smallImg:hover {
        border: 2px solid black
    }
    .rightDiv {
        width: 570px;
        padding: 0 20px
    }
    .productTitle {
        color: black;
        font-size: 16px;
        font-weight: bold;
        margin: 0px 10px 20px;
    }
    .productPriceDiv {
        background-image: url('../assets/img/productPriceBG.png');
        height: 130px;
        padding: 10px;
        color: #666666
    }
    .vouchersDiv {
        margin-top: 8px
    }
    .price {
        margin-top: 15px
    }
    .freight {
        margin-top: 5px
    }
    .tm-ind-panel {
        border: 1px dotted #c9c9c9;
        border-width: 1px 0;
        margin: 25px 10px 15px;
        padding: 10px 0;
        position: relative;
        overflow: hidden;
        clear: both;
        display: flex
    }
    .tm-ind-item {
        float: left;
        width: 33%;
        text-align: center;
        position: relative;
        left: -1px;
        border-left: 1px solid #e5dfda;
        flex: 1;
        line-height: 16px;
        list-style: none
    }
    .tm-label {
        display: inline-block;
        line-height: 16px;
        height: 16px;
        color: #999;
        font-size: 12px
    }
    .tm-count {
        display: inline-block;
        line-height: 16px;
        height: 16px;
        color: #FF0036;
        font-weight: 700;
        margin-left: 3px;
        font-size: 12px
    }
    .productNumber {
        margin-top: 10px;
        padding: 10px
    }
    .buyAndShoppingCart {
        margin: 20px auto;
        text-align: center
    }
    .buyButton {
        display: inline-block;
        margin: 0px 10px;
        width: 180px;
        height: 40px;
        border: 1px solid #FF0036;
        background-color: #FFEDED;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #FF0036;
        outline: none
    }
    .shoppingCart {
        display: inline-block;
        margin: 0px 10px;
        width: 180px;
        height: 40px;
        border: 1px solid #FF0036;
        background-color: #FF0036;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: white;
        outline: none
    }
    .serverCommitment {
        margin-top: 30px;
        padding: 10px
    }
    .serverCommitment span {
        font-size: 12px;
        color: #666;
        display: inline-block;
        margin-right: 20px
    }
</style>

<style>
    .el-input-number--small {
        width: 90px
    }
</style>
