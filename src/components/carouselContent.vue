<template>
    <div class="carouselContent">
        <div class="carousel">
          <el-carousel trigger="click" height="510px">
            <el-carousel-item v-for="item in carouselImgList" :key="item">
              <div class="carouselImg">
                <img :src="item" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="categoryMenu">
            <div class="eachCategory" v-for="(item, index) in categoryList" :key="index" :cid="item.cid" @mouseenter="showProductBar(item.cid)" @mouseleave="hideProductBar(item.cid)">
                <span class="glyphicon glyphicon-link"></span>
                <a href="#nowhere">
                    {{item.name}}
                </a>
            </div>
        </div>
        <div class="productsAsideCategorys" v-for="(item, index) in categoryList" :key="index" :cid="item.cid" style="display: none;" @mouseenter="showProductBar(item.cid)" @mouseleave="hideProductBar(item.cid)">
            <div class="row " v-for="(item, index) in item.product" :key="index">
                <a  v-for="(item, index) in item.productRow" :key="index" @click="handleClick(item.pid)" style="cursor:pointer">{{item.productName}}</a>
                <div class="seperator"></div>
            </div>
        </div>
    </div>
</template>

<script>
import categoryList from '@/assets/js/productList.js'
export default {
  data () {
    return {
      carouselImgList: [
        require('../assets/img/carousel1.jpg'),
        require('../assets/img/carousel2.jpg'),
        require('../assets/img/carousel3.jpg'),
        require('../assets/img/carousel4.jpg')
      ],
      categoryList: []
    }
  },
  methods: {
    showProductBar (cid) {
      $('div.eachCategory[cid=' + cid + ']').css('background-color', 'white')
      $('div.eachCategory[cid=' + cid + '] a').css('color', '#ff003e')
      $('div.productsAsideCategorys[cid=' + cid + ']').show()
    },
    hideProductBar (cid) {
      $('div.eachCategory[cid=' + cid + ']').css('background-color', 'rgba(0, 0, 0, 0.55)')
      $('div.eachCategory[cid=' + cid + '] a').css('color', 'white')
      $('div.productsAsideCategorys[cid=' + cid + ']').hide()
    },
    handleClick (pid) {
      console.log(pid)
    }
  },
  created () {
    this.categoryList = categoryList.categoryList
    console.log(this.categoryList)
  }
}
</script>

<style scoped>
.carouselContent {
  background-color: #e8e8e8;
}
.carousel {
  height: 510px;
  width: 1000px;
  margin: 0 auto;
}
.categoryMenu {
  position: absolute;
  left: 17vw;
  top: 38px;
  width: 200px;
  z-index: 2;
}
.categoryMenu a {
  color: #ffffff;
  display: inline-block;
  width: 160px;
}
.categoryMenu a:hover {
  color: #ff003e;
  text-decoration: none;
}
.eachCategory {
  line-height: 32px;
  padding-left: 10px;
  background-color: rgba(0, 0, 0, 0.55)
}
.eachCategory span {
  margin-right: 10px;
}
.eachCategory:hover {
  background-color: white;
  color: #ff003e;
}
.productsAsideCategorys {
  width: 800px;
  height: 510px;
  background-color: white;
  margin-left: 200px;
  position: absolute;
  left: 17vw;
  top: 38px;
  z-index: 2;
}
.row {
  margin: 20px 80px 0 80px;
}
.seperator {
  border: 1px dashed #e7e7e7;
  margin-top: 20px;
}
.productsAsideCategorys a {
  margin: 0 20px;
  color: black;
}
.productsAsideCategorys a:hover {
  color: #ff003e;
  text-decoration: none;
}
</style>
