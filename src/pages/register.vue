<template>
    <div class="registerPage">
        <div class="registerHeader">
            <router-link to="/login">
                <img src="../assets/img/login/tmall.png" alt="" class="tmall-logo">
            </router-link>
        </div>
        <div class="registerDiv" v-if="isShow">
            <table align="center" class="registerTable">
                <tbody>
                    <tr>
                        <td class="registerTip registerTableLeftTD">设置登陆密码</td>
                        <td class="registerTableRightTD">登陆时验证，保护账号信息</td>
                    </tr>
                    <tr>
                        <td class="registerTableLeftTD">登陆密码</td>
                        <td class="registerTableRightTD"><input type="password" placeholder="设置你的登陆密码" name="password" v-model="passWord"> </td>
                    </tr>
                    <tr>
                        <td class="registerTableLeftTD">密码确认</td>
                        <td class="registerTableRightTD"><input type="password" placeholder="请再次输入你的密码" v-model="confirmPassWord"> </td>
                    </tr>
                    <tr>
                        <td class="registerTip registerTableLeftTD">设置会员名</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="registerTableLeftTD">登陆名</td>
                        <td class="registerTableRightTD"><input placeholder="会员名一旦设置成功，无法修改" name="name" id="name" v-model="userName"> </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button style="font-size:16px;font-weight:700" @click="submit">提   交</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="registerSuccess" v-else>
            <img src="../assets/img/login/registerSuccess.png" alt="">恭喜注册成功
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true,
      userName: '',
      passWord: '',
      confirmPassWord: ''
    }
  },
  methods: {
    submit () {
      if (this.userName === '' || this.passWord === '' || this.confirmPassWord === '') {
        this.$alert('请输入相关信息', '提示', {
          confirmButtonText: '确认',
          type: 'warning'
        })
        return
      }
      if (this.passWord !== this.confirmPassWord) {
        this.$alert('两次密码不一致', '提示', {
          confirmButtonText: '确认',
          type: 'warning'
        })
        return
      }
      const data = {
        'username': this.userName,
        'password': this.passWord
      }
      this.$axios.post('http://localhost:8080/user/add', data).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          this.isShow = false
        } else {
          this.$alert(res.data.msg, '提示', {
            confirmButtonText: '确认',
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
    .registerHeader {
        margin: 22px auto;
        height: 44px;
        width: 1190px;
    }
    .tmall-logo {
        margin-top: 8px;
        width: 190px
    }
    .registerDiv {
        margin: 50px 20px;
        text-align: center
    }
    registerTable{
        color: #3C3C3C;
        font-size: 16px;
        table-layout: fixed;
        margin-top: 50px;
    }
    .registerTable td {
        padding: 20px 30px;
    }
    .registerTable input{
        border: 1px solid #DEDEDE;
        width: 213px;
        height: 36px;
        font-size: 14px
    }
    .registerTable button{
        width: 170px;
        height: 36px;
        border-radius: 2px;
        color: white;
        background-color: #FF003E;
        border-width: 0px
    }
    .registerTip{
        font-weight: bold;
    }
    .registerTableLeftTD{
        width: 200px;
        text-align: right
    }
    .registerTableRightTD{
        width: 300px;
        text-align: left;
    }
    .registerSuccess {
        margin: 50px 20px;
        background-color: #f3fdf6;
        border: 1px solid #def3e6;
        font-size: 16px;
        color: #3C3C3C;
        padding: 20px 130px
    }
</style>
