<template lang='pug'>
    div.header-carousel(ref='container')
      div.header-background(v-lazy:background-image="background" :key="background" :style='backgroundStyle')
        div.header-container
          div.header-slogan
            h1 Hi,Wanderer!
          div.header-info
            p
              i.fa.fa-quote-left
              span &nbsp; If the heart does not have a place to rest, wherever it goes, it will be wandering. &nbsp;
              i.fa.fa-quote-right
            div.share-list
              li(@click="upper")
                i.fa.fa-chevron-left.fa-lg
              li
                a(href="https://github.com/LingHanChuJian" target="_blank")
                  i.fa.fa-github.fa-lg
              li
                a(href="https://twitter.com/5wHHx3QAsNNxhYd?lang=zh-tw" target="_blank")
                  i.fa.fa-twitter.fa-lg
              li.wechat
                i.fa.fa-wechat.fa-lg
                div.wechat-inner
                  img(src="./../../assets/imgs/wenchat.png")
              li
                a(href="tencent://message/?uin=2739069093&Site=凌寒初见&Menu=yes" target="_blank")
                  i.fa.fa-qq.fa-lg
              li
                a(href="https://music.163.com/#/user/home?id=105202297" target="_blank")
                  img(src="./../../assets/imgs/yunmusic.png")
              li
                a(href="mailto:linghanchujian@gmail.com" target="_blank")
                  i.fa.fa-envelope.fa-lg
              li(@click="lower")
                i.fa.fa-chevron-right.fa-lg
      div.video-container(:style='backgroundStyle')
        video.video(preload="auto" width="auto" :style='videoStyle' name="从零开始的异世界生活" src="./../../assets/lib/video.mp4"  type="video/mp4") 你的浏览器不支持 video
        v-icon.video-btn(@click="videoClick") {{videoico}}
        div.video-notes {{notes}}
</template>

<script>
import { getWindowHeight, getRandomStr } from '@/utils/index'
import { addClass, removeClass } from '@/utils/class'

export default {
  name: 'header-home',
  mounted () {
    let video = document.querySelector('.video')
    let _this = this
    video.addEventListener('ended', _ => {
      _this.videoico = 'play_circle_outline'
      video.style.zIndex = -1
      removeClass(document.querySelector('.header-container'), 'header-play')
      video.load()
    })
    window.addEventListener('resize', _ => {
      _this.backgroundStyle.height = `${getWindowHeight()}px`
      _this.videoStyle['min-height'] = `${getWindowHeight()}px`
    })
  },
  data: () => ({
    notes: '载入视频...',
    videoico: 'play_circle_outline',
    background: require(`./../../assets/imgs/comic/001.png`),
    backgroundStyle: {
      height: `${getWindowHeight()}px`
    },
    videoStyle: {
      'min-height': `${getWindowHeight()}px`,
      'min-width': '100%'
    }
  }),
  methods: {
    upper () {
      let random = getRandomStr()
      this.background = require(`./../../assets/imgs/comic/${random}.png`)
    },
    lower () {
      let random = getRandomStr()
      this.background = require(`./../../assets/imgs/comic/${random}.png`)
    },
    videoClick () {
      let video = document.querySelector('.video')
      let heaerContainer = document.querySelector('.header-container')
      let videoNotes = document.querySelector('.video-notes')
      if (this.videoico === 'play_circle_outline') {
        this.videoico = 'pause_circle_outline'
        video.style.zIndex = 0
        addClass(heaerContainer, 'header-play')
        removeClass(videoNotes, 'video-notes-play')
        video.play()
      } else {
        this.videoico = 'play_circle_outline'
        this.notes = '已暂停'
        removeClass(heaerContainer, 'header-play')
        addClass(videoNotes, 'video-notes-play')
        video.pause()
      }
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
.header-carousel:after
  content ''
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index 0
  background-attachment fixed
  background-image url('./../../assets/imgs/dot.gif')

.header-background
  background-attachment fixed
  justify-content center
  align-items center
  display flex

.header-container
  max-width 800px
  z-index 1
  transform translateY(0)
  -webkit-transform translateY(0)
  -ms-transform translateY(0)
  -moz-transform translateY(0)
  -o-transform translateY(0)
  transition all 0.4s ease
  -webkit-transition all 0.4s ease

.header-play
  transform translateY(-999px)
  -webkit-transform translateY(-999px)
  -ms-transform translateY(-999px)
  -moz-transform translateY(-999px)
  -o-transform translateY(-999px)

.header-slogan h1
  margin 0 auto
  text-transform uppercase
  text-align center
  font-family Consolas, Monaco, monospace
  font-size 80px
  width 56ch
  max-width 520px
  color #FFFFFF
  white-space nowrap
  overflow hidden
  cursor default
  text-shadow 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0
  animation typing 12s steps(56)
  -webkit-animation typing 12s steps(56)

.header-info
  max-width 800px
  width auto
  height auto
  padding 20px 10px 10px 10px
  border-radius 15px
  background-color rgba(0, 0, 0, 0.5)

.header-info:before
  content ''
  position absolute
  margin-top -50px
  margin-left 100px
  border-width 15px
  border-style solid
  border-color transparent transparent rgba(0, 0, 0, 0.5) transparent

.header-info p
  color #FFFFFF
  font-weight 700

.header-info p span
  font-weight 700

.share-list
  margin-top 15px
  text-align center

.share-list li
  margin-left 45px
  display inline-block

.share-list li:nth-child(1)
  margin-left 0px

.share-list li:nth-child(1) i, .share-list li:nth-child(8) i
  color #1296DB
  cursor pointer

.share-list li:nth-child(2) i
  color #000000

.share-list li:nth-child(3) i
  color #1AB2E8

.share-list li:nth-child(4) i
  color #02BB0E

.share-list li:nth-child(5) i
  color #3A99CE

.share-list li:nth-child(6) a img
  width 25px
  height 25px
  display inline-block
  vertical-align middle

.share-list li:nth-child(7) i
  color #ffbf00

.wechat:hover .wechat-inner
  opacity 1
  transform translate3d(0, 0, 0)
  -webkit-transform translate3d(0, 0, 0)
  -ms-transform translate3d(0, 0, 0)
  -moz-transform translate3d(0, 0, 0)
  -o-transform translate3d(0, 0, 0)

.wechat-inner
  margin-top 27px
  margin-left -50px
  width 131px
  height 131px
  padding 8px
  opacity 0
  position absolute
  background-color rgba(0, 0, 0, 0.5)
  border-radius 8px
  transform translate3d(0, 50px, 0)
  -webkit-transform translate3d(0, 50px, 0)
  -ms-transform translate3d(0, 50px, 0)
  -moz-transform translate3d(0, 50px, 0)
  -o-transform translate3d(0, 50px, 0)
  transition all 0.7s ease
  -webkit-transition all 0.7s ease
  -moz-transition all 0.7s ease
  -o-transition all 0.7s ease

.wechat-inner:before
  content ''
  position absolute
  margin-top -38px
  margin-left 40px
  border-width 15px
  border-style solid
  border-color transparent transparent rgba(0, 0, 0, 0.5) transparent

.wechat-inner img
  width 115px
  height auto

.video-container
  top 0
  position absolute
  width 100%
  overflow hidden

.video
  top 0
  position absolute
  z-index -1

.video-btn
  position absolute
  font-size 40px
  right 10px
  bottom 0px
  z-index 1
  cursor pointer
  color #FFFFFF
  animation videBtn 0.5s linear infinite alternate

.video-notes
  width 100%
  height auto
  position absolute
  background-color rgba(0, 0, 0, 0.8)
  color #FFFFFF
  text-align center
  font-size 18px
  bottom -30px
  transition all 0.4s ease
  -webkit-transition all 0.4s ease
  -moz-transition all 0.4s ease
  -o-transition all 0.4s ease

.video-notes-play
  bottom 0px

@keyframes videBtn
  0%
    transform translate(0, 0)

  50%
    transform translate(0, -3px)

  100%
    transform translate(0, 0)

@keyframes typing
  from
    width 0

@media screen and (max-width: 960px)
  .header-container
    display none

  .video-container
    display none
</style>
