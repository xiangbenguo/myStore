<template>
    <div class="pay">
        <div class="aliPayPageLogo">
            <img src="../assets/img/login/tmall.png" class="pull-left" width="190px" height="27px">
            <div style="clear:both"></div>
        </div>
        <div>
            <span class="confirmMoneyText">扫一扫付款（元）</span>
            <span class="confirmMoney">￥{{sumPirce}}</span>
        </div>
        <div>
            <img src="../assets/img/buy/pay.png" class="aliPayImg">
        </div>
        <div>
            <button class="confirmPay" @click="confirmPay">确认支付</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sumPirce: ''
    }
  },
  methods: {
    confirmPay () {
      this.$router.push('/paySuccess')
    }
  },
  created () {
    this.sumPirce = this.$route.query.sumPirce
    console.log(this.$route.query.oid)
  }
}
</script>

<style scoped>
    div.pay{
        text-align: center;
        padding-bottom: 40px;
        max-width: 1013px;
        margin: 10px auto;
    }
    div.aliPayPageLogo{
        margin: 20px;
    }
    span.confirmMoneyText{
        color: #4D4D4D;
    }
    span.confirmMoney{
        display: block;
        color: #FF6600;
        font-weight: bold;
        font-size: 20px;
        margin: 10px;
    }
    button.confirmPay{
        background-color: #00AAEE;
        border: 1px solid #00AAEE;
        text-align: center;
        line-height: 31px;
        font-size: 14px;
        font-weight: 700;
        color: white;
        width: 107px;
    }
</style>
