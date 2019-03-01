<template>
    <div class="evaluation">
        <div class="orderListTitle">
            <table class="orderListTitleTable">
                <tbody><tr>
                    <td>宝贝</td>
                    <td width="100px">单价</td>
                    <td width="100px">数量</td>
                    <td width="120px">实付款</td>
                    <td width="100px">交易操作</td>
                </tr>
            </tbody></table>
        </div>
        <div class="boughtDiv">
            <div class="orderListItem">
                    <div style="height:50px;line-height:50px;font-size:18px" v-if="hasData">
                        暂无数据
                    </div>
                    <table class="orderListItemTable" v-for="(item, index) in orderList" :key="index">
                        <tbody>
                            <tr class="orderListItemFirstTR">
                                <td colspan="2">
                                    <b>{{item.time}}</b>
                                    <span>{{item.orderNumber}}</span>
                                </td>
                                <td colspan="2">
                                    <img width="13px" src="http://how2j.cn/tmall/img/site/orderItemTmall.png">天猫商场
                                </td>
                                <td colspan="1">
                                    <a href="#nowhere" class="wangwanglink">
                                        <div class="orderItemWangWangGif"></div>
                                    </a>
                                </td>
                                <td class="orderItemDeleteTD">
                                    <a href="#nowhere" class="deleteOrderLink">
                                        <span class="orderListItemDelete glyphicon glyphicon-trash"></span>
                                    </a>
                                </td>
                            </tr>
                            <tr class="orderItemProductInfoPartTR">
                                <td class="orderItemProductInfoPartTD"><img width="80" height="80" :src="item.productImg"></td>
                                <td class="orderItemProductInfoPartTD">
                                    <div class="orderListItemProductLinkOutDiv">
                                        <a href="#nowhere">{{item.productTitle}}</a>
                                        <div class="orderListItemProductLinkInnerDiv">
                                                    <img title="支持信用卡支付" src="http://how2j.cn/tmall/img/site/creditcard.png">
                                                    <img title="消费者保障服务,承诺7天退货" src="http://how2j.cn/tmall/img/site/7day.png">
                                                    <img title="消费者保障服务,承诺如实描述" src="http://how2j.cn/tmall/img/site/promise.png">                    
                                        </div>
                                    </div>
                                </td>
                                <td width="100px" class="orderItemProductInfoPartTD">
                                    <div class="orderListItemProductPrice">￥{{item.productPrice}}</div>
                                </td>
                                <td width="100px" valign="top" class="orderListItemNumberTD orderItemOrderInfoPartTD" rowspan="1">
                                    <span class="orderListItemNumber">{{item.productNum}}</span>
                                </td>
                                <td width="120px" valign="top" class="orderListItemProductRealPriceTD orderItemOrderInfoPartTD" rowspan="1">
                                    <div class="orderListItemProductRealPrice">￥{{item.productSumPrice}}</div>
                                    <div class="orderListItemPriceWithTransport">(含运费：￥0.00)</div>
                                </td>
                                <td width="100px" valign="top" class="orderListItemButtonTD orderItemOrderInfoPartTD" rowspan="1">
                                    <a>
                                        <button class="orderListItemConfirm" @click="operation(item)">{{item.operation}}</button>
                                    </a>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          time: '2016-09-12 17:00:41',
          orderNumber: '20160912170041674794',
          productImg: 'http://how2j.cn/tmall/img/productSingle_middle/3796.jpg',
          productTitle: '公众智能扫地机器人家用全自动电动清洁地毯擦拖地一体机吸尘器',
          productPrice: '2,124.15',
          productNum: 1,
          productSumPrice: '2,124.15',
          operation: '评价'
        }, {
          time: '2016-09-12 17:00:41',
          orderNumber: '20160912170041674794',
          productImg: 'http://how2j.cn/tmall/img/productSingle_middle/6651.jpg',
          productTitle: 'ULIFE原创信封包男个性真皮手包男士手拿包休闲男包手抓包拉链潮',
          productPrice: '1,128.60',
          productNum: 1,
          productSumPrice: '1,128.60',
          operation: '评价'
        }
      ]
    }
  },
  computed: {
    hasData () {
      if (this.orderList.length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    operation () {
      this.$prompt('请输入评价内容', '评价', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern:  /\S/,
        inputErrorMessage: '评价内容不能为空'
      }).then(({ value }) => {
        console.log('传入oid和评价内容：' + value)
        this.$message({
          type: 'success',
          message: '评价成功' 
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消评价'
        })   
      })
    }
  }
}
</script>

<style scoped>
    .evaluation {
        width: 100%
    }
    table.orderListTitleTable{
        border: 1px solid #E8E8E8;
        width: 100%;
        margin: 20px 0px;
        background-color: #F5F5F5;
        text-align: center;
        font-size:12px;
    }
    table.orderListTitleTable td{
        padding: 12px 0px;
    }
    div.boughtDiv{
        max-width: 1013px;
        margin: 10px auto;
    }
    table.orderListItemTable{
        border: 2px solid #ECECEC;
        width: 100%;
        margin: 20px 0px;
        font-size:12px;
    }
    table.orderListItemTable:hover{
        border: 2px solid #aaa !important;
    }
    table.orderListItemTable td{
        padding: 8px 10px;
    }
    tr.orderListItemFirstTR{
        background-color: #F1F1F1;
    }
    div.orderItemWangWangGif{
        display: inline-block;
        width: 67px;
        height: 22px;
        background-image:url('../assets/img/buy/wangwang.gif');
        background-repeat: no-repeat;
        background-color: transparent;
        background-attachment: scroll;
        background-position: -0px -0px;
        position: relative;
        top: 0px;
        left: 2px;
    }
    td.orderItemDeleteTD{
        text-align: right;
    }
    span.orderListItemDelete{
        display: inline-block;
        margin: 0px 10px;
        color: #999999;
        font-size: 16px;
    }
    div.orderListItemProductLinkOutDiv{
        position: relative;
        height: 80px;
    }
    div.orderListItemProductLinkInnerDiv{
        position: absolute;
        bottom: 0px;
    }
    div.orderListItemProductPrice{
        color: #3C3C3C;
        font-size: 14px;
    }
    td.orderListItemNumberTD{
        text-align: center;
        vertical-align: middle
    }
    td.orderItemOrderInfoPartTD{
        border: solid 1px #ECECEC;
    }
    span.orderListItemNumber{
        color: #3C3C3C;
    }
    td.orderListItemProductRealPriceTD{
        text-align: center;
        vertical-align: middle
    }
    div.orderListItemProductRealPrice{
        color: #3C3C3C;
        font-size: 14px;
        font-weight: bold;
    }
    div.orderListItemPriceWithTransport{
        color: #6C6C6C;
        font-size: 12px;
    }
    td.orderListItemButtonTD{
        text-align: center;
        vertical-align: middle
    }
    button.orderListItemConfirm{
        background-color: #66B6FF;
        border-radius: 2px;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border-width: 0px;
        padding: 6px 12px;
    }
    button.orderListItemConfirm:hover{
        background-color: #118ADB;
    }
    a{
        color:#999;
    }
    a:hover{
        text-decoration:none;
        color: #FF003E;
    }
</style>
