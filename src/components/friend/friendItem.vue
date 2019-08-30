<template lang="pug">
  ul.list
    li(v-for='(item,index) in harem' :key='index')
      a.box(:href='item.link' target="_blank")
        div.friend-img
          img(v-lazy='item.image')
        div.friend-info
          h5 {{item.name}}
          p {{item.desc}}
          div.time-box
            em {{item.created | timeformat}}
</template>

<script>
export default {
  name: 'friend',
  created () {
    console.log(this.harem)
  },
  computed: {
    harem () {
      return this.$store.state.friend.harem
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    margin-top 25px
    padding 0
  li
    font-size 14px
    width 30%
    display inline-block
    box-sizing border-box
    margin-bottom 20px
    vertical-align middle
  .box
    margin 0 auto
    display block
    border-radius 4px
    -webkit-transition all .3s
    transition all .3s
    width 200px
    height 300px
    box-shadow 0 1px 2px rgba(0,0,0,.1)
    border-radius 4px
    border 1px solid #ededed
    position relative
    &:hover
      background-color #24ade4
      border solid 1px transparent
      box-shadow 0 6px 12px 0 rgba(36,173,228,.4)
      h5, p, em
        color #FFFFFF
  .friend-img
    width 100px
    height 100px
    border-radius 8px
    position relative
    overflow hidden
    background-repeat no-repeat
    background-position center
    box-sizing border-box
    display block
    margin 30px auto 18px
  img
    display block
    width 100%
    height 100%
    position absolute
    left 50%
    top 50%
    z-index 1
    transform translate(-50%,-50%)
  h5
    font-size 18px
    color #333
    font-weight 400
    line-height 16px
    margin-bottom 10px
    padding 0 10px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    transition color .2s
    text-align center
  p
    padding 0 16px
    font-size 12px
    color #949494
    line-height 1.2
    overflow hidden
    text-overflow ellipsis
    margin-bottom 16px
    height 28px
    word-wrap break-word
    text-align center
  .time-box
    font-size 0
    position absolute
    bottom 0
    left 0
    width 100%
    margin-bottom 30px
  em
    color #fb7299
    margin-right 10px
    font-size 12px
    line-height 1
    display block
    text-align center
</style>
