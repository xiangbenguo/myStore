<template>
    <div class="footerContainer">
        <div class="tmall-ensure">
            <img src="../assets/img/home/footer.png" alt="" width="100%" height="100%">
        </div>
        <div class="tmall-desc">
            <div class="descColumn">
                <span class="descColumnTitle">购物指南</span>
                <a href="#nowhere">免费注册</a>
                <a href="#nowhere">开通支付宝</a>
                <a href="#nowhere">支付宝充值</a>
            </div>
            <div class="descColumn">
                <span class="descColumnTitle">天猫保障</span>
                <a href="#nowhere">发票保障</a>
                <a href="#nowhere">售后规则</a>
                <a href="#nowhere">缺货赔付</a>
            </div>
            <div class="descColumn">
                <span class="descColumnTitle">支付方式</span>
                <a href="#nowhere">快捷支付</a>
                <a href="#nowhere">信用卡</a>
                <a href="#nowhere">蚂蚁花呗</a>
                <a href="#nowhere">货到付款</a>
            </div>
            <div class="descColumn">
                <span class="descColumnTitle">商家服务</span>
                <a href="#nowhere">商家入驻</a>
                <a href="#nowhere">商家中心</a>
                <a href="#nowhere">天猫智库</a>
                <a href="#nowhere">天猫规则</a>
                <a href="#nowhere">物流服务</a>
                <a href="#nowhere">喵言喵语</a>
                <a href="#nowhere">运营服务</a>
            </div>
            <div class="descColumn">
                <span class="descColumnTitle">手机天猫</span>
                <a href="#nowhere"><img src="http://how2j.cn/tmall/img/site/ma.png" width="100px" height="100px"></a>
            </div>
        </div>
        <div class="tmall-copyright">
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
                <span style="color:#686868;font-size:400">© 2003-2018 TMALL.COM 版权所有</span><br>
                <div class="bottomImg">
                    <span><img src="../assets/img/home/footer-img1.jpg" alt="" width="73px" height="30px"></span>
                    <span style="margin-left: -50px"><img src="../assets/img/home/footer-img2.jpg" alt="" width="73px" height="30px"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footerContainer {
        border-top: 2px solid #D0D6DB
    }
    .tmall-ensure {
        width: 1190px;
        height: 100px;
        margin: 25px auto;
        border-bottom: 1px solid #D0D6DB
    }
    .tmall-desc {
        margin: auto;
        width: 1190px;
        padding-top: 22px;
        height: 213px;
        display: flex;
        background: url('../assets/img/home/cateye.png') 45px bottom no-repeat;
        background-size: 68px 26px
    }
    .descColumn {
        width: 238px;
        height: 90px;
        padding-left: 52px
    }
    .descColumnTitle {
        color: #646464;
        font-size: 16px;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
        text-align: left;
    }
    .descColumn a {
        width: 100px;
        text-align: left;
        height: 20px;
        line-height: 20px;
        color: #8b8b8b;
        display: block;
        font-size: 12px;
        text-decoration: none
    }
    .tmall-copyright {
        border-top: 2px solid #FF0036;
        background: #000;
        text-align: left;
        min-height: 177px
    }
    .footer-tmallinfo {
        width: 1190px;
        margin: 0 auto;
        padding: 5px 0;
        line-height: 25px
    }
    .footer-tmallinfo a {
        color: #ffffff;
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
        color: #ffffff;
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
        color: #a4a4a4
    }
    .footer-copyright span {
        margin-right: 65px;
        font-size: 12px
    }
    .bottomImg {
        padding: 20px 0
    }
</style>
