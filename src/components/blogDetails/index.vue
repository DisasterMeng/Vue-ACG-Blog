<template lang="pug">
  div.content-details
      myheader
      div.container-content
          v-container.v-container
              article#primary(v-html="content")
              footer.sign
                a(ref="license" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank")
                  i.fa.fa-creative-commons
                  span 本作品采用知识共享署名-非商业性使用 4.0 国际许可协议进行许可。
              section.blog-section
                div.blog-pre-next(v-for="(item, index) in pre_next_data" :key="index")
                  router-link(:to="'/blogs/'+ item.id")
                    img.blog-show(v-lazy="item.summary_img")
                    div.blog-info(:class="index == 0 ? 'blog-info-left':'blog-info-right'")
                      span {{ index == 0 ? 'previous': 'next' }}
                      h3 {{ item.title }}
              comment
</template>

<script>
import myheader from './blogHeader'
import comment from './../comment/index'
import Markdown from '@/utils/markdown'
import { blogDetail, commentUser, blogComment } from '@/api/index'

export default {
  name: 'blog-details',
  data: () => ({
    content: '',
    lineNumbers: '',
    clipboard: '',
    pre_next_data: []
  }),
  methods: {
    getBlogDetails () {
      blogDetail(this.$route.params.page).then(res => {
        if (res.code === 200) {
          this.$store.dispatch('setDetails', res.data)
          this.content = res.data.content
          this.pre_next_data = []
          if (res.data.pre_blog) this.pre_next_data.push(res.data.pre_blog)
          if (res.data.next_blog) this.pre_next_data.push(res.data.next_blog)
        }
      })
    },
    getCommentUsers () {
      commentUser().then(res => {
        if (res.code === 200) {
          this.$store.dispatch('setCommentUser', res.data)
        }
      })
    },
    getComments () {
      blogComment(this.$route.params.page).then(res => {
        if (res.code === 200) {
          this.$store.dispatch('setComment', res.data)
        }
      })
    }
  },
  created () {
    this.getBlogDetails()
    this.getCommentUsers()
    this.getComments()
  },
  updated () {
    Markdown.getInstance(document.querySelector('#primary'))
  },
  beforeRouteUpdate (to, from, next) {
    next()
    // this.$router.replace(from.path)
    // 这个地方写的还有点问题, 最好还是调用 this.blogDetail() 但是有bug
    window.location.reload()
  },
  components: {
    myheader,
    comment
  }
}
</script>

<style lang="stylus" scoped>
  .sign
    margin 10px 0
    border-top 1px dashed #ddd
    border-bottom 1px dashed #ddd
    padding 20px 0
    text-align center
    a
      color #b3b3b3
      transition color .3s
      &:hover
        color #888888
  .blog-section
    margin-top 50px
    width 100%
    height 150px
    display inline-flex
    overflow hidden
    position relative
  .blog-pre-next
    flex 1
    background-color #000000
    overflow hidden
    a
      display inline-block
      height 150px
      overflow hidden
      &:hover .blog-show
        opacity 0.6
      .blog-show
        width 100%
        height 100%
        opacity 0.4
        object-fit cover
        pointer-events none
        transition opacity .3s
  .blog-info
    position absolute
    top 40px
    span
      font-size 15px
      text-transform uppercase
      color rgba(255,255,255,.7)
    h3
      font-size 15px
      font-weight bold
      color rgba(255,255,255,.9)
      white-space nowrap
      text-overflow ellipsis
      line-height 30px
  .blog-info-left
    text-align left
    left 50px
  .blog-info-right
    text-align right
    right 50px
</style>
