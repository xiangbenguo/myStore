<template>
    <div class="shoppingCart">
        <search-bar></search-bar>
        <div class="cartDiv">
            <div class="cartTitle pull-right">
                <span>已选商品  (不含运费)</span>
                <span class="cartTitlePrice">￥{{productSumPrice}}</span>
                <button class="createOrderButton" @click="buy">结 算</button>
            </div>
            <div style="text-align:center;color:gray" >
                <div class="cartProductList">
                    <table class="cartProductTable">
                        <thead>
                            <tr>
                                <th class="selectAndImage">
                                </th>
                                <th>商品信息</th>
                                <th>单价</th>
                                <th>数量</th>
                                <th width="120px">金额</th>
                                <th class="operation">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr style="height:50px;line-height:50px;font-size:18px" v-if="hasData">
                                    暂无数据
                                </tr>
                                <tr class="cartProductItemTR" v-for="(item, index) in orderList" :key="index">
                                    <td>
                                        <img width="40px" :src="item.productImg" class="cartProductImg">
                                    </td>
                                    <td>
                                        <div class="cartProductLinkOutDiv">
                                            <a class="cartProductLink" href="#nowhere">{{item.productTitle}}</a>
                                            <div class="cartProductLinkInnerDiv">
                                                <img title="支持信用卡支付" src="http://how2j.cn/tmall/img/site/creditcard.png">
                                                <img title="消费者保障服务,承诺7天退货" src="http://how2j.cn/tmall/img/site/7day.png">
                                                <img title="消费者保障服务,承诺如实描述" src="http://how2j.cn/tmall/img/site/promise.png">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="cartProductItemPromotionPrice">￥{{item.productPrice}}</span>
                                    </td>
                                    <td>
                                        <el-input-number v-model="item.productNum" size="mini" @change="handleChange" :min="1" :max="10"></el-input-number>                
                                    </td>
                                    <td>
                                        <span class="cartProductItemSmallSumPrice">￥{{item.productNum*item.productPrice}}</span>
                                    </td>
                                    <td>
                                        <a class="deleteOrderItem" @click="removeProduct(index)" style="cursor:pointer">删除</a>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cartFoot">
                <div class="pull-right">
                    <span>已选商品 <span class="cartSumNumber">{{cartSumNumber}}</span> 件</span>
                    <span>合计 (不含运费): </span>
                    <span class="cartSumPrice">￥{{productSumPrice}}</span>
                    <button class="createOrderButton" @click="buy">结  算</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from '../components/searchBar'
export default {
  components: {
    'search-bar': searchBar
  },
  data () {
    return {
      buyNumber: 1,
      orderList: [
        // {
        //   pid: '12',
        //   productImg: 'http://how2j.cn/tmall/img/productSingle_middle/3665.jpg',
        //   productTitle: '美国iRobot扫地机器人吸尘器全自动家用智能扫地机650 天猫电器城',
        //   productPrice: '5306.0',
        //   productNum: 1
        // }, {
        //   pid: '13',
        //   productImg: 'http://how2j.cn/tmall/img/productSingle_middle/8510.jpg',
        //   productTitle: '阔腿裤三件套装女夏装2016新款大码雪纺时尚休闲气质棉麻九分裤潮',
        //   productPrice: '152.75',
        //   productNum: 1
        // }
      ]
    }
  },
  methods: {
    handleChange() {

    },
    buy () {
      this.$router.push({path:'/confirm-order', query:{ pid:this.orderList[0].pid, productTitle:this.orderList[0].productTitle, num:this.orderList[0].productNum, price:this.orderList[0].productPrice}})
    },
    removeProduct (index) {
      this.orderList.splice(this.orderList[index],1)
      console.log(this.orderList)
      console.log(index)
      window.localStorage.clear()
    }
  },
  computed: {
    productSumPrice() {
      var sum = 0
      console.log(this.orderList)
      if (this.orderList.length > 0) {
        for (var i = 0; i < this.orderList.length; i++) {
          sum = sum + this.orderList[i].productNum*this.orderList[i].productPrice
        }
      }
      return sum
    },
    cartSumNumber () {
      var sum = 0
      if (this.orderList.length > 0) {
        for (var i = 0; i < this.orderList.length; i++) {
          sum = sum + this.orderList[i].productNum
        }
      }
      return sum
    },
    hasData () {
      if (this.orderList.length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  created () {
    var jsonData = window.localStorage.getItem('products')
    var products = JSON.parse(jsonData)
    if (products !== null) {
      this.orderList.push(products)
    }
  }
}
</script>

<style scoped>
div.cartDiv{
    max-width: 1040px;
    margin: 10px auto;
    color: black;
}
div.cartTitle button{
    background-color: #FF003E;
    border: 1px solid #FF003E;
    color: white;
    width: 53px;
    height: 25px;
    border-radius: 2px;
}
span.cartTitlePrice{
    color: #C40000;
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 3px;
}
div.cartFoot{
    background-color: #E5E5E5;
    line-height: 50px;
    height: 50px;
    margin: 20px 0px;
    color: black;
    padding-left: 20px;
}
div.cartFoot button{
    background-color: #FF003E;
    border: 0px solid #FF003E;
    color: white;
    width: 120px;
    height: 50px;
    font-size: 20px;
    text-align: center;
}
img.cartProductItemIfSelected, img.selectAllItem{
    cursor: pointer;
}
span.cartSumNumber{
    color: #C40000;
    font-weight: bold;
    font-size: 16px;
}
span.cartSumPrice{
    color: #C40000;
    font-weight: bold;
    font-size: 20px;
}
table.cartProductTable{
    width: 100%;
    font-size:12px;
}
tr.cartProductItemTR{
    border: 1px solid #CCCCCC;
}
tr.cartProductItemTR td{
    padding: 20px 20px;
}
table.cartProductTable th{
    font-weight: normal;
    color: #3C3C3C;
    padding: 20px 20px;
}
img.cartProductImg{
    padding: 1px;
    border: 1px solid #EEEEEE;
    width: 80px;
    height: 80px;
}
table.cartProductTable th.selectAndImage{
    width:140px;
}
table.cartProductTable th.operation{
    width:70px;
}
div.cartProductLinkOutDiv{
    position: relative;
    height: 80px;
}
a.cartProductLink{
    color: #3C3C3C;
}
a.cartProductLink:hover{
    color: #C40000;
    text-decoration: underline;
}
div.cartProductLinkInnerDiv{
    position: absolute;
    bottom: 0;
    height: 20px;
}
span.cartProductItemPromotionPrice{
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    color: #C40000;
}

span.cartProductItemSmallSumPrice{
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    color: #C40000;
}
img.cartProductItemIfSelected, img.selectAllItem{
    cursor: pointer;
}
</style>
