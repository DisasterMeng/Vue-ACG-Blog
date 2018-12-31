<template lang='pug'>
    v-layout.goTop(v-scroll="onScroll")
      div.scroll-image(@click="setScrollTop")
      div.mbScroll-image(@click="setScrollTop")
</template>

<script>
import { getScrollHeight, getWindowHeight } from '@/utils/index'
import nprogress from 'nprogress'

export default {
  name: 'goTop',
  data: () => ({
    offsetTop: 0
  }),
  mounted () {
    this.$nextTick(() => {
      nprogress.configure({ trickle: false, minimum: 0 })
      this.listener = window.addEventListener('scroll', this.setScroll)
    })
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    setScroll () {
      this.$store.dispatch('setScroll', this.offsetTop)
      if (this.offsetTop > 50) {
        document.querySelector('.scroll-image').style.top = '-200px'
        document.querySelector('.mbScroll-image').style.bottom = '25px'
      } else {
        document.querySelector('.scroll-image').style.top = '-900px'
        document.querySelector('.mbScroll-image').style.bottom = '-100px'
      }
      let result = this.offsetTop / (getScrollHeight() - getWindowHeight())
      if (result >= 1) {
        nprogress.set(0.99)
      } else {
        nprogress.set(result)
      }
    },
    setScrollTop () {
      let scrollTopTime = setInterval(_ => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        window.scrollTo(0, scrollTop - 100)
        if (scrollTop <= 0) {
          nprogress.set(0)
          clearInterval(scrollTopTime)
        }
      }, 10)
    }
  },
  destroyed () {
    this.listener && window.removeEventListener(this.listener)
  }
}
</script>

<style scoped lang='stylus'>
.scroll-image
  position: fixed
  top: -900px
  right: 25px
  height: 900px
  width: 70px
  cursor: pointer
  background: url('./../../assets/imgs/scroll.png') no-repeat center
  background-size: contain
  transition: all .5s ease-in-out
  animation: bounce 2s linear infinite

.mbScroll-image
  position: fixed
  bottom: -100px
  right: 0px
  width: 48px
  height: 48px
  background: url('./../../assets/imgs/goTop.png') no-repeat center
  background-size: contain
  transition: all .5s ease-in-out
  display: none

@keyframes bounce
  0%
    transform: translateY(0)
  50%
    transform: translateY(-6px)
  100%
    transform: translateY(0)

@media screen and (max-width:960px)
  .scroll-image
    display: none

  .mbScroll-image
    display: inline
</style>
