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
  data: () => ({
  }),
  methods: {
    getImg () {

    }
  },
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
  background-size: cover

.blog-details
  max-width 800px
  margin 0 auto
  padding-top 350px

.blog-title
  letter-spacing 3px
  font-weight bold
  font-size 40px
  color #FFFFFF
  text-shadow 2px 2px 10px #000000
  cursor default

.details
  margin 10px 0 0 0

.details a
  color #FFFFFF

.details span
  color #FFFFFF
  display inline-block
  vertical-align middle
  text-shadow 2px 2px 10px #000000

.details span:nth-child(2)
  margin-left 5px

.details img
  width 35px
  height 35px
  border-radius 100%
</style>
