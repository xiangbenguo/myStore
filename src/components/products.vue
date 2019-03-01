<template>
    <div class="mainContainer">
        <div class="categoryProduct" v-for="(item,index) in categoryProduct" :key="index">
            <div class="categoryTitle">
               <i class="color-mark"></i>{{item.categoryTitle}}
            </div>
            <div class="productContent">
                <div class="leftImg">
                    <img :src="item.categoryAsideImg" alt="" width="100%" height="100%">
                </div>
                <div class="rightProduct">
                    <div class="singleProduct" v-for="(item,index) in item.categoryProductInfo" :key="index">
                        <router-link :to="{path:'/productInfo',query:{pid:item.pid}}">
                            <div class="productImg">
                                <img :src="item.img" alt="" width="185px" height="185px">
                            </div>
                            <div class="productTitle">
                                {{item.productTitle}}
                            </div>
                            <div class="productPrice">
                                {{item.productPrice}}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
          <img src="../assets/img/home/end.png" alt="" width="110px" height="100%" style="margin:50px auto 0;display:block">
    </div>
</template>

<script>
export default {
    data () {
    return {
      categoryProduct: [{
        categoryTitle: '天猫超市  TMALL.MART',
        categoryAsideImg: require('../assets/img/home/categoryAsideImg1.jpg'),
        categoryProductInfo: [
          {
            pid: 1,
            img: require('../assets/img/home/categoryProduct1001.jpg'),
            productTitle: '蓝月亮洗手液 芦荟抑菌500g瓶+野菊花500g瓶装 厨卫两用',
            productPrice: '￥19.8'
          }, {
            pid: 2,
            img: require('../assets/img/home/categoryProduct1002.jpg'),
            productTitle: '荷美尔Hormel经典黑椒猪排 100g 猪肉 调味猪排 方便速食',
            productPrice: '￥11.9'
          }, {
            pid: 3,
            img: require('../assets/img/home/categoryProduct1003.jpg'),
            productTitle: '南孚电池5号电池碱性五号电池6粒装鼠标遥控器玩具话金棒电池批发',
            productPrice: '¥ 12.9'
          }, {
            pid: 4,
            img: require('../assets/img/home/categoryProduct1004.jpg'),
            productTitle: '西班牙进口红酒爱之湾6支装起泡葡萄酒混搭750*6',
            productPrice: '￥178'
          }, {
            pid: 5,
            img: require('../assets/img/home/categoryProduct1005.jpg'),
            productTitle: '清扬 男士洗发水 750g 海藻菁萃 去屑 控油清爽无硅氨基酸 洗发露',
            productPrice: '￥99.9 '
          }, {
            pid: 6,
            img: require('../assets/img/home/categoryProduct1006.jpg'),
            productTitle: '智利冷冻帝王蟹1-1.2kg 大螃蟹帝王蟹海鲜',
            productPrice: '￥368'
          }, {
            pid: 7,
            img: require('../assets/img/home/categoryProduct1007.jpg'),
            productTitle: '三只松鼠 年货坚果大礼包1373g 每日坚果礼盒零食组合混合装7袋装',
            productPrice: '￥98'
          }, {
            pid: 8,
            img: require('../assets/img/home/categoryProduct1008.jpg'),
            productTitle: '加量不加价维达抽纸细韧3层xs码130抽18+6包加量整箱卫生纸巾餐巾',
            productPrice: '￥49.9'
          }
        ]
      }, {
        categoryTitle: '天猫国际  TMALL.HK',
        categoryAsideImg: require('../assets/img/home/categoryAsideImg2.jpg'),
        categoryProductInfo: [
          {
            pid: 9,
            img: require('../assets/img/home/categoryProduct2001.jpg'),
            productTitle: 'COOP进口阿拉比卡速溶咖啡100g罐装 咖啡粉冲煮摩卡速溶咖啡特浓',
            productPrice: '￥67.5'
          }, {
            pid: 10,
            img: require('../assets/img/home/categoryProduct2002.jpg'),
            productTitle: '2只装 泰国Mistine大草莓小草莓唇膏 粉色变色自然红润滋润保',
            productPrice: '￥39'
          }, {
            pid: 11,
            img: require('../assets/img/home/categoryProduct2003.jpg'),
            productTitle: '美国 Vaseline/凡士林润肤霜 防干裂护手足防冻疮 100ml',
            productPrice: '¥ 29'
          }, {
            pid: 12,
            img: require('../assets/img/home/categoryProduct2004.jpg'),
            productTitle: '日本COSME大赏Rosette露姬婷海泥洗面奶去角质男女洁面 绿色',
            productPrice: '￥52'
          }, {
            pid: 13,
            img: require('../assets/img/home/categoryProduct2005.jpg'),
            productTitle: '日本花王Curel/珂润面霜 润浸保湿滋养乳霜补水保湿滋润 40g 不油',
            productPrice: '￥124 '
          }, {
            pid: 14,
            img: require('../assets/img/home/categoryProduct2006.jpg'),
            productTitle: '日本进口 WADAKAN/和田宽 八甲田伏流水本酿造酱油1L*2瓶',
            productPrice: '￥19.9'
          }, {
            pid: 15,
            img: require('../assets/img/home/categoryProduct2007.jpg'),
            productTitle: '荷兰本土白金版HeroBaby天赋力4段奶粉700克',
            productPrice: '￥105'
          }, {
            pid: 16,
            img: require('../assets/img/home/categoryProduct2008.jpg'),
            productTitle: '德国Herbacin 小甘菊经典护手霜小柑橘20ml铁罐75ml补水滋润',
            productPrice: '￥23'
          }
        ]
      }, {
        categoryTitle: '美丽人生  FASHION & BEAUTY',
        categoryAsideImg: require('../assets/img/home/categoryAsideImg3.jpg'),
        categoryProductInfo: [
          {
            pid: 9,
            img: require('../assets/img/home/categoryProduct2001.jpg'),
            productTitle: 'COOP进口阿拉比卡速溶咖啡100g罐装 咖啡粉冲煮摩卡速溶咖啡特浓',
            productPrice: '￥67.5'
          }, {
            pid: 10,
            img: require('../assets/img/home/categoryProduct2002.jpg'),
            productTitle: '2只装 泰国Mistine大草莓小草莓唇膏 粉色变色自然红润滋润保',
            productPrice: '￥39'
          }, {
            pid: 11,
            img: require('../assets/img/home/categoryProduct2003.jpg'),
            productTitle: '美国 Vaseline/凡士林润肤霜 防干裂护手足防冻疮 100ml',
            productPrice: '¥ 29'
          }, {
            pid: 12,
            img: require('../assets/img/home/categoryProduct2004.jpg'),
            productTitle: '日本COSME大赏Rosette露姬婷海泥洗面奶去角质男女洁面 绿色',
            productPrice: '￥52'
          }, {
            pid: 13,
            img: require('../assets/img/home/categoryProduct2005.jpg'),
            productTitle: '日本花王Curel/珂润面霜 润浸保湿滋养乳霜补水保湿滋润 40g 不油',
            productPrice: '￥124 '
          }, {
            pid: 14,
            img: require('../assets/img/home/categoryProduct2006.jpg'),
            productTitle: '日本进口 WADAKAN/和田宽 八甲田伏流水本酿造酱油1L*2瓶',
            productPrice: '￥19.9'
          }, {
            pid: 15,
            img: require('../assets/img/home/categoryProduct2007.jpg'),
            productTitle: '荷兰本土白金版HeroBaby天赋力4段奶粉700克',
            productPrice: '￥105'
          }, {
            pid: 16,
            img: require('../assets/img/home/categoryProduct2008.jpg'),
            productTitle: '德国Herbacin 小甘菊经典护手霜小柑橘20ml铁罐75ml补水滋润',
            productPrice: '￥23'
          }
        ]
      }],
    }
  }
}
</script>


<style scoped>
    .mainContainer {
        width: 1250px;
        margin: 20px auto 0;
        background-color: #F5F5F5
    }
    .categoryProduct {
        height: 665px;
        width: 100%;
        margin-top: 20px;
        padding-top: 10px;
        background-color: #F5F5F5
    }
    .categoryTitle {
        height: 30px;
        font-size: 18px;
        margin: 30px 0 10px
    }
    .color-mark {
        display: inline-block;
        background-color: #333;
        width: 5px;
        height: 18px;
        vertical-align: middle;
        margin-right: 15px
    }
    .productContent {
        display: flex
    }
    .leftImg {
        width: 235px;
        height: 618px
    }
    .rightProduct {
        width: 995px;
        height: 618px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap
    }
    .singleProduct {
        width: 234px;
        height: 295px;
        margin-left: 14px;
        margin-bottom: 14px;
        padding-top: 20px;
        background-color: white
    }
    .singleProduct:hover {
        border: 1px solid #FF0036
    }
    .productImg {
        display: flex;
        justify-content: center
    }
    .productTitle {
        width: 135px;
        height: 40px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        overflow: hidden;
        margin: 8px auto;
    }
    .productPrice {
        font-size: 18px;
        color: #FF0036;
        line-height: 18px;
        margin: 10px auto;
        text-align: center
    }
    a:hover {
      text-decoration: none
    }
</style>
