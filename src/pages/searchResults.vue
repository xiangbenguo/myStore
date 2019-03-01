<template>
    <div class="searchResults">
        <search-bar></search-bar>
        <div class="searchTip" v-if="hasResults">
            <img src="../assets/img/searchTipCat.png" alt="">
            <h2>喵~没找到相关的 商品 哦，要不您换个关键词我帮您再找找看</h2>
            <h3>建议您：</h3>
            <ol>
                <li>看看输入的文字是否有误</li>
                <li>调整关键词，如“全铜花洒套件”改成“花洒”或“花洒 套件”</li>
            </ol>
        </div>
        <div class="searchProducts" v-else>
            <div class="product" v-for="(item, index) in searchResultsInfo" :key="index">
                <div class="product-iWrap">
                    <div class="productImg">
                        <router-link :to="{path:'/productInfo',query:{pid:item.pid}}">
                            <img :src="item.productImg" alt="" width="205px" height="210px">
                        </router-link>
                    </div>
                    <p class="productPrice">
                        ￥{{item.productPrice}}
                    </p>
                    <p class="productTitle">
                        {{item.productTitle}}
                    </p>
                    <p class="productShop">
                        某某旗舰店
                    </p>
                    <p class="producuStatus">
                        <span class="monthSales">月成交<em style="color:#b57c5b; font-weight:700; font-style:normal;padding-left:7px">{{item.monthSales}}笔</em></span>
                        <span class="evaluation">评价<em style="color:#38b; font-weight:700; font-style:normal;padding-left:7px">{{item.evaluationNum}}</em></span>
                        <span class="wwImg"><img src="../assets/img/wwIcon.png" alt="" width="16px" height="16px"></span>
                    </p>
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
      hasResults: false,
      searchResultsInfo: [{
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 51
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }, {
        pid: 10,
        productImg: require('../assets/img/product/product01.jpg'),
        productPrice: 20,
        productTitle: '电视机罩防尘罩壁挂式液晶32 55英寸50曲面65欧式盖布艺电脑套',
        monthSales: '201',
        evaluationNum: 5
      }]
    }
  }
}
</script>

<style scoped>
    .searchTip {
        width: 1220px;
        margin: 100px auto 30px;
        padding: 8px 20px 20px 115px;
        border: 1px solid #f7eae7;
        background-color: #FFF8F6;
        position: relative
    }
    .searchTip img {
        position: absolute;
        top: 80px;
        left: 20px
    }
    .searchTip h2 {
        font-size: 14px;
        font-weight: 700;
        color: #333;
        line-height: 38px;
    }
    .searchTip h3 {
        line-height: 36px;
        font-size: 100%
    }
    .searchTip li {
        margin-bottom: 5px;
        list-style: decimal inside;
    }
    .searchProducts {
        width: 1220px;
        margin: 100px auto 30px;
        padding: 0 5px;
        display: flex;
        flex-wrap: wrap
    }
    .product {
        height: 345px;
        width: 222px;
        margin: 0 20px 20px 0;
        border: 1px solid #F5F5F5
    }
    .product-iWrap {
        min-height: 98%;
        width: 220px;
        background-color: #ffffff;
        padding: 4px;
        border: 4px solid #ffffff;
        border-radius: 3px
    }
    .product-iWrap:hover {
        border: 4px solid #FF003E
    }
    .productImg {
        height: 210px;
        width: 100%;
        margin: 0 0 5px
    }
    .productPrice {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: left;
        margin: 0 0 5px;
        font-size: 20px;
        font-weight: 400;
        color: #ff0036
    }
    .productTitle {
        color: #666;
        font-size: 12px;
        text-align: left;
        height: 14px;
        line-height: 14px;
        margin-bottom: 3px;
        overflow: hidden
    }
    .productShop {
        height: 22px;
        line-height: 22px;
        margin-bottom: 5px;
        color: #999;
    }
    .productShop:hover {
        color: #ff0036
    }
    .producuStatus {
        height: 32px;
        border-top: 1px solid #eeeeee;
        color: #999;
        margin-bottom: 0
    }
    .monthSales {
        display: inline-block;
        width: 45%;
        border-right: 1px solid #eeeeee;
        padding: 10px 1px;
        margin-right: 6px;
        line-height: 12px;
        font-size: 12px
    }
    .evaluation {
        display: inline-block;
        width: 30%;
        border-right: 1px solid #eeeeee;
        padding: 10px 1px;
        margin-right: 6px;
        line-height: 12px;
        font-size: 12px
    }
    .wwImg {
        display: inline-block;
        width: 15%;
        border-right: 1px solid #eeeeee;
        padding: 8px 1px;
        line-height: 12px;
        font-size: 12px
    }
    .wwImg img {
        width: 16px;
        height: 16px
    }
</style>
