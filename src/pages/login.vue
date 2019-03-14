<template>
    <div class="loginPage">
        <div class="loginHeader">
            <router-link to="/">
                <img src="../assets/img/login/tmall.png" alt="" class="tmall-logo">
            </router-link>
        </div>
        <div class="loginBanner">
            <div class="inner">
                <img src="../assets/img/login/bg.jpg" alt="">
            </div>
            <div class="loginFormDiv">
                <div class="login_acount_text">密码登录</div>
                <div class="loginInput">
                    <span class="loginInputIcon ">
                        <span class=" glyphicon glyphicon-user"></span>
                    </span>
                    <input type="text" placeholder="手机/会员名/邮箱" name="name" v-model="userName">
                </div>
                <div class="loginInput ">
                    <span class="loginInputIcon ">
                        <span class=" glyphicon glyphicon-lock"></span>
                    </span>
                    <input type="password" placeholder="密码" name="password" v-model="password">
                </div>
                <div style="margin-top:20px">
                    <button type="button" class="redButton" @click="login">登录</button>
                </div>
                <div class="registerDiv">
                    <router-link to="/register">免费注册</router-link>
                </div>
            </div>
        </div>
        <div class="loginFooter">
            <div class="footer-tmallinfo">
                <a href="#nowhere">关于天猫</a>
                <a href="#nowhere"> 帮助中心</a>
                <a href="#nowhere">开放平台</a>
                <a href="#nowhere">  诚聘英才</a>
                <a href="#nowhere">联系我们</a>
                <a href="#nowhere">网站合作</a>
                <a href="#nowhere">法律声明</a>
                <a href="#nowhere">法律声明</a>
                <a href="#nowhere">隐私全政策</a>
                <a href="#nowhere">  廉正举报 </a>
                <a href="#nowhere">规则意见收集</a>
            </div>
            <div class="footer-otherlink">
                <a href="#nowhere"> 阿里巴巴集团</a><span class="slash">|</span>
                <a href="#nowhere"> 淘宝网</a><span class="slash">|</span>
                <a href="#nowhere">天猫</a><span class="slash">|</span>
                <a href="#nowhere">聚划算</a><span class="slash">|</span>
                <a href="#nowhere">全球速卖通</a><span class="slash">|</span>
                <a href="#nowhere">阿里巴巴国际交易市场</a><span class="slash">|</span>
                <a href="#nowhere">1688</a><span class="slash">|</span>
                <a href="#nowhere">阿里妈妈</a><span class="slash">|</span>
                <a href="#nowhere">飞猪</a><span class="slash">|</span>
                <a href="#nowhere">阿里云计算</a><span class="slash">|</span>
                <a href="#nowhere">AliOS</a><span class="slash">|</span>
                <a href="#nowhere">阿里通信</a><span class="slash">|</span>
                <a href="#nowhere">万网</a><span class="slash">|</span>
                <a href="#nowhere">高德</a><span class="slash">|</span>
                <a href="#nowhere">UC</a><span class="slash">|</span>
                <a href="#nowhere">友盟</a><span class="slash">|</span>
                <a href="#nowhere">虾米</a><span class="slash">|</span>
                <a href="#nowhere">钉钉</a><span class="slash">|</span>
                <a href="#nowhere">支付宝</a>
            </div>
            <div class="footer-copyright">
                <span>增值电信业务经营许可证： 浙B2-20110446</span>
                <span>市场名称登记证：工商网市字3301004119号</span>
                <span>出版物网络交易平台服务经营备案证： 新出发浙备字第001号 </span><br>
                <span>互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com</span>
                <span>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005</span>
                <span><img src="../assets/img/home/footer-police.png" alt=""> 浙公网安备 33010002000120号</span><br>
                <span>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span>
                <span>互联网药品交易服务资格证书：国A20150001</span><br>
                <span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>
                <span>12318举报</span><br>
                <span style="color:#999;font-size:400">© 2003-2018 TMALL.COM 版权所有</span><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.userName === '') {
        this.$alert('请输入账号', '提示', {
          confirmButtonText: '确认',
          type: 'warning'
        })
        return
      }
      if (this.password === '') {
        this.$alert('请输入密码', '提示', {
          confirmButtonText: '确认',
          type: 'warning'
        })
        return
      }

      const data = {
        'username': this.userName,
        'password': this.password
      }
      this.$axios.post('http://localhost:8080/login/loginVerify', data).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          this.$store.commit('login')
          this.$message({
            'type': 'success',
            'message': '登录成功'
          })
          window.localStorage.setItem('status', 1)
          this.$router.push('/home')
        } else {
          this.$message({
            'type': 'error',
            'message': res.data.msg
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    //   this.$store.state.isLogin = true
    //   this.$store.state.userName = this.userName
    }
  }
}
</script>

<style scoped>
    .loginHeader {
        margin: 22px auto;
        height: 44px;
        width: 1190px;
    }
    .tmall-logo {
        margin-top: 8px;
        width: 190px
    }
    .loginBanner {
        position: relative;
        width: 100%;
        background-color: rgb(49, 7, 5);
        margin-bottom: 40px
    }
    .inner {
        width: 1190px;
        margin: auto
    }
    .inner img {
        display: block
    }
    .loginFormDiv {
        width: 350px;
        height: 404px;
        background-color: #ffffff;
        position: absolute;
        top: 91px;
        right: 22%;
        padding: 25px 25px 80px
    }
    .login_acount_text {
        margin-top: 15px;
        font-size: 16px;
        height: 18px;
        line-height: 18px;
        color: #3c3c3c;
        font-weight: 700
    }
    .loginInput {
        border: 1px solid #cbcbcb;
        margin: 20px 0
    }
    .loginInputIcon {
        background: #cbcbcb;
        width: 40px;
        height: 40px;
        display: inline-block;
        margin: 0px
    }
    .loginInputIcon span {
        position: relative;
        top: 9px;
        left: 9px;
        font-size: 22px;
        color: #606060
    }
    .loginInput input {
        display: inline-block;
        border: 0px solid transparent;
        width: 244px;
        height: 30px;
        position: relative;
        top: 6px;
        left: 6px
    }
    .redButton {
        width: 300px;
        height: 42px;
        line-height: 42px;
        color: white;
        background-color: #FF003E;
        font-size: 16px;
        font-weight: bold;
        border: 0px solid transparent;
        border-radius: 4px
    }
    .registerDiv {
        margin-top: 25px
    }
    .registerDiv a {
        float: right;
        font-size: 12px;
        color: #6C6C6C
    }
    .footer-tmallinfo {
        width: 1190px;
        margin: 0 auto;
        padding: 5px 0;
        line-height: 25px
    }
    .footer-tmallinfo a {
        color: #000;
        margin-right: 3px;
        font-size: 12px;
        text-decoration: none
    }
    .footer-otherlink {
        width: 1190px;
        margin: 0 auto;
        padding:  5px 0;
        line-height: 25px
    }
    .footer-otherlink a {
        margin-right: 3px;
        color: #000;
        font-size: 12px;
        text-decoration: none
    }
    .slash {
        color: #ffffff
    }
    .footer-copyright {
        width: 1190px;
        margin: 0 auto;
        line-height: 20px;
        color: #666
    }
    .footer-copyright span {
        margin-right: 65px;
        font-size: 12px
    }
</style>
