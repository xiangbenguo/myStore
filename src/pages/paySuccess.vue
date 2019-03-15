<template>
  <div class="paySuccess">
    <div class="aliPayPageLogo">
        <img src="../assets/img/login/tmall.png" class="pull-left" width="190px" height="27px">
        <div style="clear:both"></div>
    </div>
    <div class="payedDiv">
        <div class="payedTextDiv">
            <img src="@/assets/img/buy/paySuccess.png">
            <span>您已成功付款</span>
        </div>
        <div class="payedAddressInfo">
            <ul>
                <li>收货地址： {{this.address}}</li>
                <li>实付款：<span class="payedInfoPrice">
                ￥{{this.$route.query.sumPrice}}
                </span></li>
                <li>预计3天内送达</li>
            </ul>
        </div>
        <div class="payedSeperateLine">
        </div>
        <div class="warningDiv">
            <img src="@/assets/img/buy/warning.png">
            <b>安全提醒：</b>下单后，<span class="redColor boldWord">用QQ给您发送链接办理退款的都是骗子！</span>天猫不存在系统升级，订单异常等问题，谨防假冒客服电话诈骗！
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: ''
    }
  },
  created () {
    this.$axios.get(`${this.restUrl}/order/get?id=${this.$route.query.oid}`).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        this.address = res.data.data.address
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
div.paySuccess {
    width: 1013px;
    margin: 30px auto
}
div.payedDiv{
    border: 1px solid #D4D4D4;
    max-width: 1013px;
    margin: 10px auto 20px auto;
}
div.aliPayPageLogo{
    margin: 20px;
}
div.payedTextDiv{
    height: 61px;
    background-color: #ECFFDC;
    padding: 17px 0px 0px 25px;
}
div.payedTextDiv span{
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
}
div.payedAddressInfo{
    padding: 26px 35px;
}
div.payedAddressInfo li{
    background-image:url('../assets/img/buy/li_dot.png');
    background-repeat: no-repeat;
    background-color: transparent;
    background-attachment: scroll;
    background-position: 0px 13px;
    list-style-type: none;
    color: #333333;
    padding-left: 15px;
    padding-top: 5px;
}
span.payedInfoPrice{
    color: #B10000;
    font-weight: bold;
    font-size: 14px;
    font-family: arial;
}
div.payedSeperateLine{
    border-top: 1px dotted #D4D4D4;
    margin: 0px 31px;
}
div.warningDiv{
    margin: 23px 45px;
    color:black;
}
body{
    font-size: 12px;
    font-family: Arial;
}
.boldWord{
    font-weight: bold;
}
.redColor{
    color: #C40000;
}
</style>
