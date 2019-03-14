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
export default {
  data () {
    return {
      carouselImgList: [
        require('../assets/img/carousel1.jpg'),
        require('../assets/img/carousel2.jpg'),
        require('../assets/img/carousel3.jpg'),
        require('../assets/img/carousel4.jpg')
      ],
      categoryList: [
        {
          cid: 1,
          name: '女装 /内衣',
          product: [
            {
              productRow: [
                {
                  productName: '女装新品',
                  pid: 1
                }, {
                  productName: '仙女连衣裙',
                  pid: 2
                }, {
                  productName: 'T恤',
                  pid: 3
                }, {
                  productName: '寸衫',
                  pid: 4
                }
              ]
            }, {
              productRow: [
                {
                  productName: '羽绒服',
                  pid: 1
                }, {
                  productName: '卫衣',
                  pid: 2
                }, {
                  productName: '小西装',
                  pid: 3
                }, {
                  productName: '风衣',
                  pid: 4
                }, {
                  productName: '毛衣',
                  pid: 5
                }
              ]
            }, {
              productRow: [
                {
                  productName: '半身裙',
                  pid: 1
                }, {
                  productName: '牛仔裤',
                  pid: 2
                }, {
                  productName: '荷叶边裙',
                  pid: 3
                }, {
                  productName: '百皱裙',
                  pid: 4
                }
              ]
            }, {
              productRow: [
                {
                  productName: '休闲裤',
                  pid: 1
                }, {
                  productName: '阔腿裤',
                  pid: 2
                }, {
                  productName: '打底裤',
                  pid: 3
                }, {
                  productName: '背带裤',
                  pid: 4
                }
              ]
            }, {
              productRow: [
                {
                  productName: '时尚套装',
                  pid: 1
                }, {
                  productName: '休闲套装',
                  pid: 2
                }, {
                  productName: '职业套装',
                  pid: 3
                }, {
                  productName: '婚纱',
                  pid: 4
                }, {
                  productName: '精致礼服',
                  pid: 5
                }
              ]
            }, {
              productRow: [
                {
                  productName: '光面文胸',
                  pid: 1
                }, {
                  productName: '运动文胸',
                  pid: 2
                }, {
                  productName: '大杯文胸',
                  pid: 3
                }, {
                  productName: '美背文胸',
                  pid: 4
                }
              ]
            }, {
              productRow: [
                {
                  productName: '春夏家居服',
                  pid: 1
                }, {
                  productName: '真丝家居服',
                  pid: 2
                }, {
                  productName: '春夏睡裙',
                  pid: 3
                }, {
                  productName: '情侣家居服',
                  pid: 4
                }, {
                  productName: '性感睡裙',
                  pid: 5
                }
              ]
            }, {
              productRow: [
                {
                  productName: '女士内裤',
                  pid: 1
                }, {
                  productName: '女士内裤多条装',
                  pid: 2
                }, {
                  productName: '莫代尔内裤',
                  pid: 3
                }
              ]
            }
          ]
        }, {
          cid: 2,
          name: '男装 /运动户外'
        }, {
          cid: 3,
          name: '女鞋 /男鞋 /箱包'
        }, {
          cid: 4,
          name: '美妆 /个人护理'
        }, {
          cid: 5,
          name: '腕表 /眼镜 /珠宝饰品'
        }, {
          cid: 6,
          name: '手机 /数码 /电脑办公'
        }, {
          cid: 7,
          name: '母婴玩具'
        }, {
          cid: 8,
          name: '零食 /茶酒 /进口食品电视'
        }, {
          cid: 9,
          name: '生鲜水果'
        }, {
          cid: 10,
          name: '大家电 /生活电器'
        }, {
          cid: 11,
          name: '家具建材'
        }, {
          cid: 12,
          name: '汽车 /配件 /用品'
        }, {
          cid: 13,
          name: '家纺 /家饰 /鲜花'
        }, {
          cid: 14,
          name: '医药保健'
        }, {
          cid: 15,
          name: '厨具 /收纳 /宠物'
        }, {
          cid: 16,
          name: '图书音像'
        }
      ]
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
