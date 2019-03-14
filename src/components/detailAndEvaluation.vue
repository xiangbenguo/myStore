<template>
    <div class="detailAndEvaluation">
        <div class="productDetailDiv" v-if="isVisible">
            <div class="titleBar">
                <a class="selected" @click="changeDetail">商品详情</a>
                <a class="productEvaluation" @click="changeEvaluation">累计评价 <span class="productEvaluationNumber">{{evaluationNum}}</span> </a>
            </div>
            <div class="productParamterPart">
                <div class="productParamter">产品参数：</div>
                <div class="productParamterList">
                        <span v-for="(item,index) in property.propertyName" :key="index">{{property.propertyName[index]}}:  {{property.propertyValue[index]}}</span>
                </div>
            </div>
            <div class="productDetailImagesPart">
                <img v-for="(item, index) in detailImgList" :key="index" :src="url(item)">
            </div>
        </div>
        <div class="productEvaluationDiv" v-else>
            <div class="titleBar">
                <a class="productDetail" @click="changeDetail" >商品详情</a>
                <a class="selected" @click="changeEvaluation">累计评价 <span class="productEvaluationNumber">{{evaluationNum}}</span> </a>
            </div>
            <div class="productEvaluationContent">
                <div class="productEvaluationItem" v-for="(item,index) in previewObj" :key="index">
                    <div class="evaluationAndDate">
                        <div class="evaluationContent">
                            {{item.content}}
                        </div>
                        <div class="evaluationDate">{{item.time}}</div>
                    </div>
                    <div class="evaluationUserInfo">
                        {{item.userName}}<span class="userInfoGrayPart"></span>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: true,
      evaluationNum: '',
      previewObj: [],
      property: {
        propertyName: [],
        propertyValue: []
      },
      detailImgList: []
    }
  },
  methods: {
    changeDetail () {
      this.isVisible = true
    },
    changeEvaluation () {
      this.isVisible = false
    },
    getProductInfo () {
      this.$axios.get(`http://localhost:8080/product/get?id=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        if (res.data.data === 200) {
          this.evaluationNum = res.data.data.evaluationNum === null ? 0 : res.data.data.evaluationNum
        }
        this.getProperty(res.data.data.cid)
      }).catch((err) => {
        console.log(err)
      })
    },
    getEvaluationInfo () {
      this.$axios.get(`http://localhost:8080/evaluation/getPidList?pid=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          for (var i = 0; i < res.data.data.length; i++) {
            var obj = {
              content: res.data.data[i].content,
              userName: res.data.data[i].uid,
              time: res.data.data[i].createtime.split('T')[0]
            }
            this.previewObj.push(obj)
          }
        }
        console.log(this.previewObj)
      }).catch((err) => {
        console.log(err)
      })
    },
    getProperty (cid) {
      this.$axios.get(`http://localhost:8080/property/getCidList?cid=${cid}`).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          for (var i = 0; i < res.data.data.length; i++) {
            this.property.propertyName.push(res.data.data[i].name)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getPropertyValue () {
      this.$axios.get(`http://localhost:8080/propertyValue/getPidValueList?pid=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          for (var i = 0; i < res.data.data.length; i++) {
            this.property.propertyValue.push(res.data.data[i].value)
          }
        }
        console.log(this.property)
      }).catch((err) => {
        console.log(err)
      })
    },
    getProductImg () {
      this.$axios.get(`http://localhost:8080/productImg/getPidList?pid=${this.$route.query.pid}`).then((res) => {
        console.log(res)
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].type === 2) {
            this.detailImgList.push(res.data.data[i].url)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    url (src) {
      return require(`E://upload/${src}`)
    }
  },
  created () {
    console.log(this.$route.query.pid)
    this.getProductInfo()
    this.getEvaluationInfo()
    this.getPropertyValue()
    this.getProductImg()
  }
}

</script>

<style scoped>
    .detailAndEvaluation {
        width: 790px;
        margin: 40px auto;
    }
    .titleBar {
        border: 1px solid #dfdfdf;
        font-size: 12px
    }
    .titleBar a:hover {
        cursor: pointer
    }
    a.selected {
        border-left: 1px solid #cfbfb1;
        border-right: 1px solid #cfbfb1;
        color: #FF003E;
        display: inline-block;
        font-weight: bold;
        line-height: 46px;
        width: 90px;
        text-align: center;
        position: relative
    }
    a.selected:before {
        content: '';
        display: block;
        border: 1px solid #FF003E;
        width: 90px;
        height: 0;
        position: absolute;
        top: -1px;
        left: -1px
    }
    a.selected:after {
        content: '';
        display: block;
        border-color:#FF003E transparent transparent;
        border-style: solid;
        border-width: 6px;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -1px;
        left: 39px;
    }
    .productEvaluation {
        padding: 0px 20px;
        border-right: 1px dotted #d2d2d2;
        color: #333333
    }
    .productEvaluationNumber {
        color: #38b
    }
    .productParamterPart {
        border: 1px solid #dfdfdf;
        padding: 40px;
        height: 230px;
        font-size: 12px
    }
    .productParamter {
        color: #999999;
        font-weight: bold;
        margin-bottom: 20px
    }
    .productParamterList span {
        display: block;
        width: 220px;
        float: left;
        padding: 8px 0;
        color: #666666
    }
    .productDetailImagesPart {
        display: block;
        width: 790px;
        margin: 20px 0;
        text-align: center
    }
    .productDetailImagesPart img {
        max-width: 760px;
        margin: 10px 0
    }
    .productDetail {
        padding: 0px 20px;
        border-right: 1px dotted #d2d2d2;
        color: #333333
    }
    .productEvaluationContent {
        padding-top: 50px
    }
    .productEvaluationItem {
        border-bottom: 1px solid #e3e3e3;
        margin: 10px 0
    }
    .evaluationAndDate {
        width: 80%;
        display: inline-block;
        color: #333333;
        margin: 10px 20px;
        font-size: 12px
    }
    .evaluationDate {
        margin: 15px 0 0;
        color: #cccccc
    }
    .evaluationUserInfo {
        float: right;
        color: #404040;
        margin: 0 10px;
        padding: 20px 0;
        font-size: 12px
    }
    .userInfoGrayPart {
        color: #999999
    }
    a:hover {
        text-decoration: none;
        color: #FF003E
    }
</style>
