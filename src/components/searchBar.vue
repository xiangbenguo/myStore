<template>
    <div class="search-Bar">
      <a href="">
        <img src="../assets/img/tmall.png" class="logo">
      </a>
      <div class="searchDiv">
        <input type="text" v-model="keyword" placeholder="搜索 天猫 商品/品牌/店铺" name="keyword">
        <button class="searchButton" type="submit" @click="search">搜索</button>
        <div class="searchBelow">
          <span> <a href="#nowhere"> 针织衫 </a> <span>|</span> </span>
          <span> <a href="#nowhere" style="color:red"> 连衣裙 </a> <span>|</span> </span>
          <span> <a href="#nowhere"> 四件套 </a> <span>|</span> </span>
          <span> <a href="#nowhere"> 摄像头 </a> <span>|</span> </span>
          <span> <a href="#nowhere" style="color:red"> 口红 </a> <span>|</span> </span>
          <span> <a href="#nowhere"> 手机 </a></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'search-bar',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      var path = window.location.hash.split('#')[1].split('?')[0]
      if (path === '/searchResults') {
        this.$router.push({
          path: '/redirectPage',
          query: {keyword: this.keyword}
        })
      } else {
        this.$router.push({path:'/searchResults', query: {keyword: this.keyword}})
      }
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 240px;
    position: absolute;
    top: 38px;
    left: 16vw;
    z-index: -1;
  }
  .searchDiv {
    width: 580px;
    background-color: #FF003E;
    margin: 50px auto;
    padding: 1px;
    height: 40px
  }
  .searchDiv input {
    width: 440px;
    border: 1px solid transparent;/*将边框设置成透明的*/
    height: 36px;
    margin: 1px;
    outline: none/*去掉输入框轮廓，否则获取焦点的时候会发生颜色变化*/
  }
  .searchButton {
    width: 130px;
    border: 1px solid transparent;
    background-color: #FF003E;
    font-size: 18px;
    height: 36px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 5px;
  }
  .searchBelow {
    margin-top: 5px;
    margin-left: -12px
  }
  .searchBelow a {
    color: #999;
    padding: 0 12px;
    font-size: 14px
  }
  .searchBelow span {
    color: #999
  }
  a:hover {
    text-decoration: none;
    color: #FF003E
  }
</style>
