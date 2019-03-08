<template>
    <div class="confirm-order">
        <div class="headerCon">
            <div class="mallLogo">
                <img src="../assets/img/login/tmall.png" alt="" width="100%">
            </div>
            <div class="stepBar">
                <img src="../assets/img/buy/liucheng.png" alt="" width="100%" height="100%">
            </div>
        </div>
        <div class="address">
            <div class="addressTip">输入收货地址</div>
            <div>
                <table class="addressTable">
                    <tbody><tr>
                        <td class="firstColumn">详细地址<span class="redStar">*</span></td>
                        <td><textarea placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息" name="address" v-model="address"></textarea></td>
                    </tr>
                    <tr>
                        <td>邮政编码</td>
                        <td><input type="text" placeholder="请输入邮政编码" name="post" v-model="post"></td>
                    </tr>
                    <tr>
                        <td>收货人姓名<span class="redStar">*</span></td>
                        <td><input type="text" placeholder="长度不超过25个字符" name="receiver" v-model="receiver"></td>
                    </tr>
                    <tr>
                        <td>手机号码 <span class="redStar">*</span></td>
                        <td><input type="text" placeholder="请输入11位手机号码" name="mobile" v-model="phoneNumber"></td>
                    </tr>
                </tbody></table>
            </div>
        </div>
        <div class="buyPageDiv">
            <div class="productList">
                <div class="productListTip">确认订单信息</div>
                <table class="productListTable">
                    <thead>
                        <tr>
                            <th class="productListTableFirstColumn" colspan="2">
                                <img src="../assets/img/buy/tmallbuy.png" class="tmallbuy" width="15px">
                                <a href="#nowhere" class="marketLink">店铺：天猫店铺</a>
                                <a href="#nowhere" class="wangwanglink"> <span class="wangwangGif"></span> </a>
                            </th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                        </tr>
                        <tr class="rowborder">
                            <td colspan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody class="productListTableTbody">
                            <tr class="orderItemTR">
                                <td class="orderItemFirstTD"><img width="20px"  src="http://how2j.cn/tmall/img/productSingle_middle/4206.jpg" class="orderItemImg"></td>
                                <td class="orderItemProductInfo">
                                    <a class="orderItemProductLink" href="#nowhere">
                                        {{productTitle}}
                                    </a>
                                    <img title="支持信用卡支付" src="../assets/img/buy/creditcard.png">
                                    <img title="消费者保障服务,承诺7天退货" src="../assets/img/buy/7day.png">
                                    <img title="消费者保障服务,承诺如实描述" src="../assets/img/buy/promise.png">
                                </td>
                                <td>
                                    <span class="orderItemProductPrice">￥{{productPrice}}</span>
                                </td>
                                <td>
                                    <span class="orderItemProductNumber">{{productNumber}}</span>
                                </td>
                                <td>
                                    <span class="orderItemUnitSum">￥{{priceSum}}</span>
                                </td>
                            </tr>
                    </tbody>
                </table>
                <div class="orderItemSumDiv">
                    <div class="pull-left">
                        <span class="leaveMessageText">给卖家留言:</span>
                    </div>
                    <span class="leaveMessageTextareaSpan" style="margin-left:10px">
                            <textarea class="leaveMessageTextarea" name="userMessage"></textarea>
                        </span>
                    <span class="pull-right">店铺合计(含运费): ￥{{priceSum}}</span>
                </div>
            </div>
            <div class="orderItemTotalSumDiv">
                <div class="pull-right">
                    <span>实付款：</span>
                    <span class="orderItemTotalSumSpan">￥{{priceSum}}</span>
                </div>
            </div>
            <div class="submitOrderDiv">
                <button @click="submitOrder" class="submitOrderButton" type="button">提交订单</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      productTitle: '',
      productPrice: '',
      productNumber: '',
      address: '',
      post: '',
      receiver: '',
      phoneNumber: ''
    }
  },
  methods: {
    submitOrder () {
      this.$router.push({path: '/pay', query: {oid: '123', sumPirce: this.priceSum}})
    }
  },
  computed: {
    priceSum () {
      return this.productPrice * this.productNumber
    }
  },
  created () {
    console.log(this.$route.query)
    this.productTitle = this.$route.query.productTitle
    this.productPrice = this.$route.query.price
    this.productNumber = this.$route.query.num
  }
}
</script>

<style scoped>
.confirm-order {
    font-size: 12px
}
.headerCon {
  width: 990px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.mallLogo {
  float: left;
  padding-top: 28px;
  z-index: 9;
  width: 190px;
  height: 28px;
}
.stepBar {
  width: 600px;
  height: 90px;
}
.address {
  width: 990px;
  margin: 10px auto;
}
.addressTip {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}
.addressTable {
  margin: 20px;
  width: 600px;
  font-size: 12px;
}
.firstColumn {
  width: 100px;
}
.addressTable td {
  color: #333;
  text-align: left;
  vertical-align: top;
  height: 30px;
}
.addressTable textarea {
  width: 450px;
  margin-bottom: 10px;
}
.addressTable input {
  width: 200px;
}
span.redStar {
  color: red;
  font-size: 8px;
}
.buyPageDiv {
    margin: 20px auto;
    max-width: 1013px;
}
.productListTip {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px
}
.productListTable {
    width: 100%;
    border-collapse: separate;
    font-size: 12px
}
.productListTable th {
    color: #999999;
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    padding-bottom: 5px
}
.rowborder {
    background-color: #b2d1ff;
    border-right: 2px solid #ffffff;
    height: 3px
}
.productListTableFirstColumn {
    text-align: left !important
}
a.marketLink {
    color: black;
    font-size: 12px;
    font-weight: normal
}
.wangwangGif {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url('../assets/img/buy/wangwang.gif');
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: -83px -0px;
    position: relative;
    top: 8px;
    left: 2px
}
.productListTableTbody td {
    text-align: center
}
.productListTableTbody  {
    text-align: left
}
.orderItemTR td {
    padding: 10px 0px;
    border-bottom: 1px solid #e5e5e5
}
.orderItemImg {
    width: 50px;
    height: 50px;
    border: 1px solid #e9e9e9
}
.orderItemProductLink {
    display: block;
    color: #666666;
}
.orderItemProductInfo {
    text-align: left !important
}
.orderItemProductInfo img {
    height: 16px
}
.orderItemUnitSum {
    color: #FF003E;
    font-weight: bold
}
.orderItemSumDiv {
    padding: 20px;
    border-top: 2px solid #b4d0ff;
    background-color: #f2f6ff;
    height: 100px;
    width: 100%
}
.orderItemSumDiv {
    display: inline-block;
    margin-right: 10px;
}
.orderItemTotalSumDiv  {
    margin: 40px;
    height: 40px
}
.orderItemTotalSumDiv span{
    color: #999999
}
.orderItemTotalSumSpan {
    color: #FF003E !important;
    font-size: 22px;
    font-weight: bold
}
.submitOrderDiv {
    height: 40px;
    margin: 20px 0;
    float: right
}
.submitOrderButton {
    border: 1px solid #FF003E;
    background-color: #FF003E;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    display: inline-block;
    margin: 0px 10px;
    width: 180px;
    height: 40px
}
</style>
