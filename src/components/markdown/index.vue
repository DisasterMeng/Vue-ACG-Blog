<template lang="pug">
  div.content-markdown
    myheader(:headerData="headerData")
    div.container-content
      v-container.v-container
        div.show-markdown(@click="markdownClick")
          span {{msg}}
        textarea-vue.textarea-markdown(v-if="!isArticle" v-model="message" minHeight="500px" :textareaStyle="textareaStyle" v-particle)
        article#primary(v-if="isArticle" v-html="content")
</template>

<script>
import myheader from './../header/index'
import { blogMD } from '@/api/index'
import Markdown from '@/utils/markdown'

export default {
  name: 'markdown',
  data: () => ({
    headerData: {
      background: require('./../../assets/imgs/comic/175.png'),
      describe: 'markdown'
    },
    message: '',
    textareaStyle: {
      background: `url(${require('./../../assets/imgs/comment-bg.png')}) right bottom / 50% no-repeat`
    },
    content: '',
    isArticle: false,
    msg: '展示'
  }),
  methods: {
    markdownClick () {
      if (!this.isArticle && this.message) {
        blogMD({ content: this.message }).then(res => {
          if (res.code === 200) {
            this.content = res.data
            this.isArticle = true
            this.msg = '编辑'
          }
        })
      } else {
        this.isArticle = false
        this.msg = '展示'
      }
    }
  },
  updated () {
    let primary = document.querySelector('#primary')
    if (primary) {
      const markdown = new Markdown(primary)
      markdown.hljsCode()
    }
  },
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>
.v-container
  min-height 500px
  position relative

.show-markdown
  position absolute
  text-align center
  cursor pointer
  width 20px
  height auto
  min-height 50px
  right 4px
  z-index 0
  border 1px solid rgb(173, 216, 230)
  background-color rgb(173, 216, 230)
  border-top-right-radius 8px
  border-bottom-right-radius 8px
  span
    font-size 14px

.textarea-markdown
  background-color #FFFFFF
</style>
