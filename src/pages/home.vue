<template>
  <div class="homeContainer">
    <search-bar></search-bar>
    <div class="categoryWithCarousel">
      <div class="headbar">
        <div class="head ">
            <span class="glyphicon glyphicon-th-list" style="margin-left:10px"></span>
            <span style="margin-left:10px">商品分类</span>
        </div>
        <div class="rightMenu">
            <span><a href="#nowhere"><img src="../assets/img/tmallgj.png"></a></span>
            <span><a href="#nowhere"><img src="../assets/img/tmallcs.png"></a></span>
            <span><a href="#nowhere">天猫会员</a></span>
            <span><a href="#nowhere">电器城</a></span>
            <span><a href="#nowhere">喵鲜生</a></span>
            <span><a href="#nowhere">医药馆</a></span>
            <span><a href="#nowhere">营业厅</a></span>
            <span><a href="#nowhere">魅力惠</a></span>
            <span><a href="#nowhere">飞猪旅行</a></span>
            <span><a href="#nowhere">苏宁易购</a></span>
        </div>
      </div>
      <carouselContent></carouselContent>
      <products></products>
    </div>
  </div>
</template>

<script>
import searchBar from '../components/searchBar'
import carouselContent from '../components/carouselContent'
import products from '../components/products'
export default {
  name: 'home',
  components: {
    'search-bar': searchBar,
    'carouselContent': carouselContent,
    'products': products
  },
  data () {
    return {
      carouselImgList: [
        require('../assets/img/carousel1.jpg'),
        require('../assets/img/carousel2.jpg'),
        require('../assets/img/carousel3.jpg'),
        require('../assets/img/carousel4.jpg')
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homeContainer {
    margin-top: 33px;
    width: 100%  !important
  }

  .categoryWithCarousel {
    width: 100%;
    position: relative
  }
  .headbar {
    border-bottom: 2px solid #FF003E;
    display: flex
  }
  .head {
    width: 200px;
    background-color: #FF003E;
    color: #ffffff;
    font-weight: bold;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    margin-left: 17vw;

  }
  .rightMenu {
    height: 36px;
    line-height: 36px
  }
  .rightMenu a {
    margin: 0 8px;
    font-size: 16px;
    color: #333;
    font-weight: 500
  }
  .rightMenu a:hover {
    text-decoration: none;
    color: #FF003E
  }
  .rightMenu img{
    height: 30px
  }
</style>
