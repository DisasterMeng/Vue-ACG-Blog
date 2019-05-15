<template lang="pug">
    div.feed
        myheader(:headerData="headerData")
        div.container-content
            v-container.v-container
                article#feed
                    p 有钱的话,那就请我喝杯咖啡吧! （づ￣3￣）づ╭❤～
                    p 没有的话,我也不介意,多多捧场就好。
                    h2 投食
                    div.appreciate
                        a#github.pos-f.tr3(href="https://github.com/LingHanChuJian" target="_blank" title="github")
                        div#DonateText.tr3 Donate
                        ul#donateBox.list.pos-f.tr3
                            li(v-for="(item,index) in appreciate" :key="index" :id="item.id" @click="showQR(item)") {{item.name}}
                        div#QRBox.pos-f.left-100
                            div#MainBox(:style="mainBoxStyle"  @click="mainBoxClick")
</template>

<script>
import myheader from './../header/index'
import { addClass, removeClass } from '@/utils/class'

export default {
  name: 'feed',
  data: () => ({
    headerData: {
      background: require('./../../assets/imgs/comic/691.png'),
      describe: '喂食'
    },
    mainBoxStyle: {
      'background-image': ''
    },
    appreciate: [
      { name: 'AliPay', id: 'AliPay', imgUrl: require('./../../assets/imgs/payment/AliPayQR.png') },
      { name: 'WeChat', id: 'WeChat', imgUrl: require('./../../assets/imgs/payment/WeChanQR.png') }
    ]
  }),
  methods: {
    showQR (item) {
      this.mainBoxStyle['background-image'] = `url(${item.imgUrl})`
      addClass(document.querySelector('#DonateText'), 'blur')
      addClass(document.querySelector('#donateBox'), 'blur')
      addClass(document.querySelector('#github'), 'blur')
      document.querySelector('#QRBox').style.display = 'block'
      addClass(document.querySelector('#MainBox'), 'showQR')
    },
    mainBoxClick () {
      removeClass(document.querySelector('#MainBox'), 'showQR')
      addClass(document.querySelector('#MainBox'), 'hideQR')
      setTimeout(_ => {
        this.mainBoxStyle['background-image'] = ''
        document.querySelector('#QRBox').style.display = 'none'
        removeClass(document.querySelector('#MainBox'), 'hideQR')
        removeClass(document.querySelector('#DonateText'), 'blur')
        removeClass(document.querySelector('#donateBox'), 'blur')
        removeClass(document.querySelector('#github'), 'blur')
      }, 600)
    }
  },
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>

#feed p,#feed h2
  margin 24px 0

#feed h2
  font-size 20px
  font-weight bold
  color #404040

.appreciate
  width auto
  height 240px
  position relative

.pos-f
  position absolute

.left-100
  width 100%
  height 100%

.blur
  -webkit-filter blur(3px)
  filter blur(3px)

.tr3
  transition all .3s

#DonateText
  position absolute
  font-size 12px
  width 70px
  height 70px
  line-height 70px
  color #FFFFFF
  background #FFD886 url(./../../assets/imgs/payment/like.svg) no-repeat center 10px
  background-size 20px
  border-radius 35px
  text-align center
  left calc(42%)
  top calc(50% - 60px)
  transform rotatez(-15deg)

#donateBox
    padding 0
    left calc(41%)
    top calc(50% - 15px)
    background-color #FFFFFF
    border 1px solid #DDDDDD
    border-radius 6px
    width auto
    height 28px
    float left
    z-index 1

#donateBox li
    width 74px
    float left
    text-align center
    border-left 1px solid #ddd
    background no-repeat center center
    background-color rgba(204, 217, 220,0.1)
    background-size 45px
    transition all .3s
    cursor pointer
    overflow hidden
    line-height 600px
    height 28px
    -webkit-filter grayscale(1)
    filter grayscale(1)
    opacity 0.5

#donateBox li:hover
    background-color rgba(204, 217, 220,0.3)
    -webkit-filter grayscale(0)
    filter grayscale(0)
    opacity 1

#donateBox li:first-child
  border-width 0

#donateBox a
  display block

#donateBox #PayPal
  background-image url(./../../assets/imgs/payment/paypal.svg)

#donateBox>#BTC
  background-image url(./../../assets/imgs/payment/bitcoin.svg)
  line-height 28px

#donateBox>#BTC:hover
  overflow hidden

#BTC>button
  opacity 0
  cursor pointer

#donateBox #AliPay
  background-image url(./../../assets/imgs/payment/alipay.svg)

#donateBox #WeChat
  background-image url(./../../assets/imgs/payment/wechat.svg)

#QRBox
    top 0
    left 0
    z-index 1
    background-color rgba(255,255,255,0.3)
    display none
    perspective 400px

#MainBox
  cursor pointer
  position absolute
  text-align center
  width 200px
  height 200px
  left calc(50% - 100px)
  top calc(50% - 100px)
  background #FFFFFF no-repeat center center
  background-size 190px
  border-radius 6px
  box-shadow 0px 2px 7px rgba(0,0,0,0.3)
  opacity 0
  transition all 1s ease-in-out
  transform-style preserve-3d
  transform-origin center center
  overflow hidden

#btc-key
    opacity 0
    width 2px
    height 8px
    overflow hidden
    left -2px
    top -8px

#github
    width 24px
    height 24px
    left calc(57% + 5px)
    top calc(50% - 30px)
    background no-repeat center center url(./../../assets/imgs/payment/github.svg)
    background-size contain
    opacity 0.3
    transform rotatez(15deg)

[data-footnote]
    position relative
    overflow hidden

[data-footnote]:hover
  overflow hidden

[data-footnote]:before, [data-footnote]:after
    position absolute
    transition all .3s
    transform translate3d(-50%,0,0)
    opacity 0
    left 37px
    z-index 10

[data-footnote]:before
    content attr(data-footnote)
    border-radius 6px
    background-color rgba(100,100,100,0.8)
    color #fff
    height 24px
    line-height 24px
    padding 0 6px
    font-size 12px
    white-space nowrap
    top -24px
    left 37px

[data-footnote]:after
    content ''
    border 5px solid #333
    border-color rgba(100,100,100,0.8) transparent transparent transparent
    top 0
    left 37px

[data-footnote]:hover:before,[data-footnote]:hover:after
  opacity 1

[data-footnote]:hover:before,[data-footnote]:hover:after
  transform translate3d(-50%,-7px,0)

.showQR
  opacity 1
  animation showQR 3s ease-in-out 0s 1 normal forwards

.hideQR
  opacity 1
  animation hideQR .5s ease-in-out 0s 1 normal forwards

@keyframes showQR
    from
        transform rotateX(90deg);
    8%
        opacity 1
        transform rotateX(-60deg)
    18%
        opacity 1
        transform rotateX(40deg)
    34%
        opacity 1
        transform rotateX(-28deg)
    44%
        opacity 1
        transform rotateX(18deg)
    58%
        opacity 1
        transform rotateX(-12deg)
    72%
        opacity 1
        transform rotateX(9deg)
    88%
        opacity 1
        transform rotateX(-5deg)
    96%
        opacity 1
        transform rotateX(2deg)
    to
        opacity 1

@keyframes hideQR
    20%,50%
        transform scale(1.08,1.08)
        opacity 1
    to
        opacity 0
        transform rotateZ(40deg) scale(0.6,0.6)
</style>
