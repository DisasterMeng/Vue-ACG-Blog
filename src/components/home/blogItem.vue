<template lang='pug'>
  article.blog-article
    v-flex.blog-picture(xs7 :class="Index % 2 ? 'itemLeft':'itemRight'")
      a(:href="'/blogs/'+ blog.id")
        img(v-lazy="blog.summary_img")
    v-flex.blog-content-wrap(xs5 :class="Index % 2 ? 'itemRight':'itemLeft'")
      div.blog-content
        div.blog-date
          v-icon schedule
          span 发布于{{blog.created | timeformat }}
        div.blog-title
          a(:href="'/blogs/'+ blog.id")
            span {{blog.title}}
        div.blog-meta
          span
            v-icon visibility
            span {{blog.page_view}} 热度
          span.comment(v-if='false')
            v-icon chat_bubble_outline
            span {{blog.commentNum}} 条评论
          span.category
            v-icon folder_open
            span {{blog.category}}
        div.blog-excerpt
          p {{blog.desc}}
        div.blog-bottom
          a(:href="'/blogs/'+ blog.id")
            v-icon more_horiz
</template>
<script>
export default {
  name: 'blogItem',
  mounted () {
  },
  data: () => ({
  }),
  methods: {},
  props: {
    blog: Object,
    Index: Number
  }
}
</script>

<style scoped lang='stylus'>
.itemLeft
  float left
  text-align left
  border-radius 10px 0 0 10px
  position relative

.itemRight
  float right
  text-align right
  border-radius 0 10px 10px 0
  position relative

.itemLeft .blog-bottom
  bottom 30px
  left 35px
  position absolute

.itemRight .blog-bottom
  bottom 30px
  right 35px
  position absolute

.blog-article
  margin 35px 0
  width 100%
  height 300px
  border-radius 10px
  box-shadow 0 1px 20px -8px rgba(0,0,0,.5)
  transition box-shadow .3s
  animation list-show .5s

.blog-picture
  height 300px
  overflow hidden
  cursor pointer

.blog-article img
  width 100%
  height 100%
  object-fit cover
  transition transform .6s

.blog-date span,.blog-meta span
  margin-left 8px
  font-size 13px
  color rgba(0,0,0,.8)
  display inline-block
  vertical-align middle
  cursor default

.blog-date i,.blog-meta i
  font-size 18px
  color rgba(0,0,0,.66)
  display inline-block
  vertical-align middle

.comment span,.category span
  transition color .3s
  cursor pointer

.blog-title
  margin .8em 0
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden

.blog-title span
  font-weight bold
  cursor pointer
  font-size 18px
  color #504e4e
  transition color .3s

.blog-title span:hover,.comment span:hover,.category span:hover
  color #69D2E7

.blog-article:hover
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)

.blog-article:hover img
  overflow hidden
  transform scale(1.1)

.blog-excerpt
  margin 1em 0 0 0

.blog-excerpt p
  color rgba(0,0,0,.8)
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 3
  overflow hidden

.blog-bottom i
  font-size 30px

.blog-bottom i:hover
  color #69D2E7
  cursor pointer

.blog-content-wrap
  padding 20px 35px 0 35px
  width 100%
  height 100%

@keyframes list-show
  0%
    opacity 0
    transform translateY(80px)
  100%
    opacity 1
    transform translateY(0)

@media screen and (max-width:960px)
  .itemLeft
    float none

  .itemRight
    float none

  .blog-article
    height auto
    box-shadow none

  .blog-picture
    max-width 100%
    height auto

  .blog-picture img
    height 210px
    border-radius 10px

  .blog-content-wrap
    padding 10px 0 0 15px
    max-width 100%
    text-align left

  .blog-bottom
    display none
</style>
