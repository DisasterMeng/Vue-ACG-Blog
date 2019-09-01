<template lang="pug">
  div.blog-header(v-lazy:background-image="details.summary_img")
    div.blog-details
      h1.blog-title {{details.title}}
      p.details
        span
          a(href='/')
            img(src='@/assets/imgs/author.png')
        span
          a(href='/') 凌寒初见
        span · {{details.created}} · {{details.page_view}}次阅读
</template>

<script>
export default {
  name: 'blog-header',
  computed: {
    details () {
      return this.$store.state.details.details
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-header
  width 100%
  height 475px
  background-size cover
  background-position center center
  position relative

.blog-details
  max-width 800px
  position absolute
  bottom 30px
  left 360px

.blog-title
  letter-spacing 3px
  font-weight bold
  font-size 32px
  color #FFFFFF
  text-shadow 2px 2px 10px #000000
  cursor default

.details
  margin 10px 0 0 0
  a
    color #FFFFFF
  span
    color #FFFFFF
    display inline-block
    vertical-align middle
    text-shadow 2px 2px 10px #000000
  img
    width 35px
    height 35px
    border-radius 100%

.details span:nth-child(2)
  margin-left 5px
</style>
