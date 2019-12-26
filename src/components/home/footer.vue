<template lang='pug'>
    v-flex.footer-center
      p.snow
      p 月影流花花不语，梦入烟水水不兴
      p &copy; 2019 · myrove ·
        a(href="http://beian.miit.gov.cn/") 粤ICP备19031539号
      p
        span.my-presence (ง •̀_•́)ง
        span {{liveTime}}
      p 托管于
        a.upyun(href='https://developer.qiniu.com' target='_blank') 七牛云
</template>

<script>
export default {
  name: 'footer-home',
  mounted () {
    let _this = this
    this.timer = setInterval(() => {
      _this.liveTime = _this.live()
    }, 1000)
  },
  data: () => ({
    liveTime: '',
    timer: ''
  }),
  methods: {
    live () {
      let cTime = new Date()
      let liveTime = new Date('2019/8/20 00:00:00')
      let Timeold = cTime.getTime() - liveTime.getTime()
      let msPerDay = 24 * 60 * 60 * 1000
      let eDaysold = Timeold / msPerDay
      let daysold = Math.floor(eDaysold)
      let eHrsold = (eDaysold - daysold) * 24
      let hrsold = Math.floor(eHrsold)
      let eMinsold = (eHrsold - hrsold) * 60
      let minsold = Math.floor((eHrsold - hrsold) * 60)
      let seconds = Math.floor((eMinsold - minsold) * 60)
      return ` myrove 成功存活：${daysold}天 ${hrsold}小时 ${minsold}分 ${seconds} 秒`
    }
  },
  beforeDestroy () {
    if (this.timer) clearTimeout(this.timer)
  }
}
</script>

<style scoped lang='stylus'>
.upyun
  color #6C5B7C

.footer-center
  background-color #FFFFFF
  text-align center
  position relative

.footer-center p
  margin-bottom 5px
  font-size 15px
  color #6C5B7C
  text-shadow 0 0 1px rgba(0, 0, 0, 0.1)

.footer-center p:last-child a:hover
  color #00A0FF

.snow
  margin 0 auto
  width 30px
  height 30px
  background url(./../../assets/imgs/snow.svg) no-repeat
  animation csnow 12s infinite linear

.my-presence
  animation presence 5s infinite ease-in-out
  display inline-block
  white-space nowrap

@keyframes csnow
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

@keyframes presence
  2%, 24%, 80%
    -webkit-transform translate(0, 1.5px) rotate(1.5deg)
    transform translate(0, 1.5px) rotate(1.5deg)

  4%, 68%, 98%
    -webkit-transform translate(0, -1.5px) rotate(-0.5deg)
    transform translate(0, -1.5px) rotate(-0.5deg)

  38%, 6%
    -webkit-transform translate(0, 1.5px) rotate(-1.5deg)
    transform translate(0, 1.5px) rotate(-1.5deg)

  8%, 86%
    -webkit-transform translate(0, -1.5px) rotate(-1.5deg)
    transform translate(0, -1.5px) rotate(-1.5deg)

  10%, 72%
    -webkit-transform translate(0, 2.5px) rotate(1.5deg)
    transform translate(0, 2.5px) rotate(1.5deg)

  12%, 64%, 78%, 96%
    -webkit-transform translate(0, -0.5px) rotate(1.5deg)
    transform translate(0, -0.5px) rotate(1.5deg)

  14%, 54%
    -webkit-transform translate(0, -1.5px) rotate(1.5deg)
    transform translate(0, -1.5px) rotate(1.5deg)

  16%
    -webkit-transform translate(0, -0.5px) rotate(-1.5deg)
    transform translate(0, -0.5px) rotate(-1.5deg)

  18%, 22%
    -webkit-transform translate(0, 0.5px) rotate(-1.5deg)
    transform translate(0, 0.5px) rotate(-1.5deg)

  20%, 36%, 46%
    -webkit-transform translate(0, -1.5px) rotate(2.5deg)
    transform translate(0, -1.5px) rotate(2.5deg)

  26%, 50%
    -webkit-transform translate(0, 0.5px) rotate(0.5deg)
    transform translate(0, 0.5px) rotate(0.5deg)

  28%
    -webkit-transform translate(0, 0.5px) rotate(1.5deg)
    transform translate(0, 0.5px) rotate(1.5deg)

  30%, 40%, 62%, 76%, 88%
    -webkit-transform translate(0, -0.5px) rotate(2.5deg)
    transform translate(0, -0.5px) rotate(2.5deg)

  32%, 34%, 66%
    -webkit-transform translate(0, 1.5px) rotate(-0.5deg)
    transform translate(0, 1.5px) rotate(-0.5deg)

  42%
    -webkit-transform translate(0, 2.5px) rotate(-1.5deg)
    transform translate(0, 2.5px) rotate(-1.5deg)

  44%, 70%
    -webkit-transform translate(0, 1.5px) rotate(0.5deg)
    transform translate(0, 1.5px) rotate(0.5deg)

  48%, 74%, 82%
    -webkit-transform translate(0, -0.5px) rotate(0.5deg)
    transform translate(0, -0.5px) rotate(0.5deg)

  52%, 56%, 60%
    -webkit-transform translate(0, 2.5px) rotate(2.5deg)
    transform translate(0, 2.5px) rotate(2.5deg)

  58%
    -webkit-transform translate(0, 0.5px) rotate(2.5deg)
    transform translate(0, 0.5px) rotate(2.5deg)

  84%
    -webkit-transform translate(0, 1.5px) rotate(2.5deg)
    transform translate(0, 1.5px) rotate(2.5deg)

  90%
    -webkit-transform translate(0, 2.5px) rotate(-0.5deg)
    transform translate(0, 2.5px) rotate(-0.5deg)

  92%
    -webkit-transform translate(0, 0.5px) rotate(-0.5deg)
    transform translate(0, 0.5px) rotate(-0.5deg)

  94%
    -webkit-transform translate(0, 2.5px) rotate(0.5deg)
    transform translate(0, 2.5px) rotate(0.5deg)

  0%, 100%
    -webkit-transform translate(0, 0) rotate(0)
    transform translate(0, 0) rotate(0)

</style>
