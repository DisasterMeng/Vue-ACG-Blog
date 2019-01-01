<template lang='pug'>
  ul.link-items
    li.link-item(v-for="(item,index) in friendData" :key="index")
      a(:href="item.webSite" target="_blank")
        img(v-lazy="item.avatar")
        p.link-name(:title="item.name") {{ item.name }}
        div.link-flag(:title="item.flag") {{ item.flag }}
</template>

<script>
export default {
  name: 'friend-item',
  props: {
    friendData: Array
  }
}
</script>

<style lang="stylus" scoped>
.link-items
  margin-top 10px
  width 100%
  display inline-block
  padding-left 0

.link-item
  width 32%
  float left
  border 1px solid rgba(0,0,0,.2)
  padding 10px 18px
  margin 4px
  overflow hidden
  transition all .3s
  position relative
  z-index 1

.link-item:before
  content ''
  top 0
  left -60px
  width 0
  height 100%
  background-color #FFEACC
  transform skew(45deg,0)
  transition all .5s
  position absolute
  z-index -1

.link-name
  color #404040
  font-size 16px
  font-weight bold
  letter-spacing 1px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden

.link-flag
  border-top 1px dashed #333333
  color rgba(0,0,0,.6)
  font-size 13px
  padding-top 15px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden

.link-item img
  float right
  width 65px
  height 65px
  border-radius 100%
  border 1px solid rgba(0,0,0,.1)
  box-shadow inset 0 0 10px #000000
  transition all 1s

.link-item:hover img
  transform rotate(360deg)

.link-item:hover
  border 1px solid orange

.link-item:hover:before
  width 150%

@media screen and (max-width:960px)
  .link-item
    width 100%
</style>
