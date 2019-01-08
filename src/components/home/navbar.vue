<template lang='pug'>
    v-toolbar.navToolbar(fixed app)
      v-toolbar-side-icon.mobile-mune(@click.stop="setDrawer")
      v-toolbar-title.mobile-title
        a.pc-a(href='/')
          span.toolbarTitle
            ruby 凌
              rt こん
            ruby 寒
              rt にちは
          ruby 初见
        a.mobile-a(href='/')
          span 凌寒初见
      v-spacer.pc-spacer
      v-toolbar-items.pc-items
        nav.navRight
          ul.menu
              li(v-for="(item,index) in menu" :key="index")
                router-link(:to="item.path")
                  v-icon.toolbar-icon {{item.icon}}
                  span {{item.span}}
      v-toolbar-items.toolbarRight.pc-items
        v-icon.toolbar-icon youtube_searched_for
        v-icon.toolbar-icon account_circle
</template>

<script>
import { addClass, removeClass } from '@/utils/class'

export default {
  name: 'navbar',
  props: {
  },
  mounted () {
  },
  data: () => (
    {
      menu: [
        { icon: 'home', span: '首页', path: '/' },
        { icon: 'loyalty', span: '归档', path: '/categorys' },
        { icon: 'link', span: '友人帐', path: '/friend' },
        { icon: 'restaurant', span: '投食', path: '/feed' },
        { icon: 'near_me', span: '关于', path: '/about' }
      ]
    }
  ),
  methods: {
    setDrawer () {
      this.$store.dispatch('setDrawer', true)
    }
  },
  computed: {
    offsetTop () {
      return this.$store.state.goTop.offsetTop
    }
  },
  watch: {
    offsetTop (a, b) {
      let navToolbar = document.querySelector('.navToolbar')
      if (a === 0) {
        removeClass(navToolbar, 'toggle-navToolbar')
      } else {
        addClass(navToolbar, 'toggle-navToolbar')
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.avatar
  display block
  margin 20px auto 15px

.avatar-style
  height 120px
  width 120px
  border-radius 60px

.navToolbar
  position fixed
  left 0
  background transparent
  box-shadow 0 0

.navToolbar:hover
  background rgba(255,255,255,.95)
  box-shadow 0 1px 40px -8px rgba(0,0,0,.5)

.toggle-navToolbar
  background rgba(255,255,255,.95)
  box-shadow 0 1px 40px -8px rgba(0,0,0,.5)

.navToolbar a
  color #464646

.toolbarTitle
  background-color rgba(255,255,255,.5)
  border-radius 5px
  color #464646
  margin-right 0
  padding-bottom 0
  padding-top 1px

.mobile-a
  display none

.navRight
  padding-top 21px
  animation menu .2s

.toolbarRight .toolbar-icon
  margin-left 10px
  font-size 38px
  cursor pointer

.toolbarRight .toolbar-icon:first-child
  margin-left 25px

.toolbarRight .toolbar-icon:first-child:hover
  color #69d2e7

.toolbarRight .toolbar-icon:nth-child(2):hover
  animation icon-one 2.5s ease infinite

.mobile-mune
  display none

.menu
  margin 0
  padding 0
  list-style none
  display inline-block

.menu li
  display inline-block
  margin-left 28px
  position relative
  cursor pointer

.menu li:hover .toolbar-icon, .menu li:hover,.menu li:hover span, .pc-a:hover, .pc-a:hover .toolbarTitle rt
  color #69d2e7

.pc-a:hover .toolbarTitle
  color #FFFFFF
  background-color rgba(105,210,231,.5)

.menu li:hover .toolbar-icon
  animation icon-one 2.5s ease infinite

.menu li:first-child:hover .toolbar-icon
  animation icon-two 2.5s ease infinite

.menu li:nth-child(4):hover .toolbar-icon
  animation icon-three 2.5s ease infinite

.menu li::before
  content ''
  position absolute
  background-color #69d2e7
  width 100%
  max-width 0
  transition max-width .25s ease-in-out
  height 5px
  bottom -16.5px

.menu li:hover::before
  max-width 100%

.menu li:first-child
  margin-left 0px

.menu li .toolbar-icon
  display inline-block
  vertical-align  middle

.menu li span
  margin-left 3px
  display inline-block
  vertical-align middle

@keyframes menu
  0%
    opacity 0
    -webkit-transform translateX(30px)
    -ms-transform translateX(30px)
    transform translateX(30px)
  100%
    opacity 1
    -webkit-transform translateX(0)
    -ms-transform translateX(0)
    transform translateX(0)

@keyframes icon-one
  0%
    -webkit-transform rotate(-12deg)
    -ms-transform rotate(-12deg)
    transform rotate(-12deg)
  8%
    -webkit-transform rotate(12deg)
    -ms-transform rotate(12deg)
    transform rotate(12deg)
  10%
    -webkit-transform rotate(24deg)
    -ms-transform rotate(24deg)
    transform rotate(24deg)
  18%, 20%
    -webkit-transform rotate(-24deg)
    -ms-transform rotate(-24deg)
    transform rotate(-24deg)
  28%, 30%
    -webkit-transform rotate(24deg)
    -ms-transform rotate(24deg)
    transform rotate(24deg)
  38%, 40%
    -webkit-transform rotate(-24deg)
    -ms-transform rotate(-24deg)
    transform rotate(-24deg)
  48%, 50%
    -webkit-transform rotate(24deg)
    -ms-transform rotate(24deg)
    transform rotate(24deg)
  58%, 60%
    -webkit-transform rotate(-24deg)
    -ms-transform rotate(-24deg)
    transform rotate(-24deg)
  68%
    -webkit-transform rotate(24deg)
    -ms-transform rotate(24deg)
    transform rotate(24deg)
  100%, 75%
    -webkit-transform rotate(0)
    -ms-transform rotate(0)
    transform rotate(0)

@keyframes icon-two
  0%
    -webkit-transform translateX(0)
    -ms-transform translateX(0)
    transform translateX(0)
  6%
    -webkit-transform translateX(5px)
    -ms-transform translateX(5px)
    transform translateX(5px)
  12%
    -webkit-transform translateX(0)
    -ms-transform translateX(0)
    transform translateX(0)
  18%
    -webkit-transform translateX(5px)
    -ms-transform translateX(5px)
    transform translateX(5px)
  24%
    -webkit-transform translateX(0)
    -ms-transform translateX(0)
    transform translateX(0)
  30%
    -webkit-transform translateX(5px)
    -ms-transform translateX(5px)
    transform translateX(5px)
  100%, 36%
    -webkit-transform translateX(0)
    -ms-transform translateX(0)
    transform translateX(0)

@keyframes icon-three
  0%
    -webkit-transform scale(1.1)
    -ms-transform scale(1.1)
    transform scale(1.1)
  50%
    -webkit-transform scale(0.8)
    -ms-transform scale(0.8)
    transform scale(0.8)
  100%
    -webkit-transform scale(1.1)
    -ms-transform scale(1.1)
    transform scale(1.1)

@media screen and (max-width:960px)
  .mobile-mune
    display block
    margin-left 5px !important

  .pc-items,.pc-spacer
    display none

  .navToolbar
    background-color transparent
    box-shadow 0 0 0 0 transparent
    position absolute

  .navToolbar:hover
    background-color transparent
    box-shadow 0 0 0 0 transparent

  .mobile-title
    animation mobileTitle 1s
    position absolute
    right 10px

  .mobile-a
    display block

  .pc-a
    display none

@keyframes mobileTitle
  0%
    opacity 0
    transform translateX(-30px)
  100%
    opacity 1
    transform translateX(0px)
</style>
