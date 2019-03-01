<template>
    <div class="detailAndEvaluation">
        <div class="productDetailDiv" v-if="isVisible">
            <div class="titleBar">
                <a class="selected" @click="changeDetail">商品详情</a>
                <a class="productEvaluation" @click="changeEvaluation">累计评价 <span class="productEvaluationNumber">19</span> </a>
            </div>
            <div class="productParamterPart">
                <div class="productParamter">产品参数：</div>
                <div class="productParamterList">
                        <span>材质成分:  聚酯纤维100% </span>
                        <span>品牌:  Emyche/艾米秋 </span>
                        <span>货号:  129668 </span>
                        <span>尺码:  L M S XL X </span>
                        <span>上市年份季节:  2016年夏季 </span>
                        <span>颜色分类:  白色 黑色 浅蓝 </span>
                        <span>适用年龄:  18-25周岁 </span>
                </div>
            </div>
            <div class="productDetailImagesPart">
                <img src="http://how2j.cn/tmall/img/productDetail/8626.jpg">
            </div>
        </div>
        <div class="productEvaluationDiv" v-else>
            <div class="titleBar">
                <a class="productDetail" @click="changeDetail" >商品详情</a>
                <a class="selected" @click="changeEvaluation">累计评价 <span class="productEvaluationNumber">19</span> </a>
            </div>
            <div class="productEvaluationContent">
                <div class="productEvaluationItem">
                    <div class="evaluationAndDate">
                        <div class="evaluationContent">
                            不错的购物，包装很精细，布料也不错舒服，因为之前一直购买品牌装，很好的一次网购，生完宝宝刚刚一个多月我一百五十斤穿2XL不错
                        </div>
                        <div class="evaluationDate">2016-08-10</div>
                    </div>
                    <div class="evaluationUserInfo">
                        哀****莉<span class="userInfoGrayPart">（匿名）</span>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div class="productEvaluationItem">
                    <div class="evaluationAndDate">
                        <div class="evaluationContent">
                            面料很好，大小也刚刚好，本来买之前还担心，犹豫，等货到了，比我心中想象的好很多，大家放心购买，很满意的购物，以后还会来??
                        </div>
                        <div class="evaluationDate">2016-08-23</div>
                    </div>
                    <div class="evaluationUserInfo">
                        贤*闲<span class="userInfoGrayPart">（匿名）</span>
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
      isVisible: true
    }
  },
  methods: {
    changeDetail () {
      this.isVisible = true
    },
    changeEvaluation () {
      this.isVisible = false
    }
  },
  created () {
    console.log(this.$route.query.pid)
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

