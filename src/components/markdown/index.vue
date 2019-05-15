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
import hljs from 'highlight.js'
import ClipboardJS from 'clipboard'
import LineNumbers from '@/utils/lineNumbers'

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
    },
    hljsCode (el) {
      let blocks = el.querySelectorAll('pre code')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
      this.lineNumbers = new LineNumbers()
      this.lineNumbers.addStyles()
      this.lineNumbers.initLineNumbersOnLoad({ singleLine: true })
      document.addEventListener('copy', this.copySelection)
      this.codeListener()
    },
    copySelection (e) {
      let selection = window.getSelection()
      if (this.lineNumbers.isHljsLnCodeDescendant(selection.anchorNode)) {
        let selectionText
        if (window.navigator.userAgent.indexOf('Edge') !== -1) {
          selectionText = this.lineNumbers.edgeGetSelectedCodeLines(selection)
        } else {
          selectionText = selection.toString()
        }
        e.clipboardData.setData('text/plain', selectionText)
        e.preventDefault()
      }
    },
    codeListener () {
      let cy = document.querySelectorAll('.copy-code')
      for (let i = 0, len = cy.length; i < len; i++) {
        cy[i].removeEventListener('click', this.copyCode)
        cy[i].addEventListener('click', this.copyCode)
      }
    },
    copyCode (e) {
      for (let i = 0, len = e.path.length; i < len; i++) {
        if (e.path[i].className.indexOf('copy-code') > -1) {
          let tag = e.path[i].getAttribute('data-clipboard-target')
          let code = document.querySelector(tag)
          this.clipboard = new ClipboardJS('.copy-code', { container: code })
          this.clipboard.on('error', e => {
            console.error('Action:', e.action)
            console.error('Trigger:', e.trigger)
          })
          break
        }
      }
    }
  },
  updated () {
    let primary = document.querySelector('#primary')
    if (primary) {
      this.hljsCode(primary)
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
  line-height 30px
  position absolute
  text-align center
  cursor pointer
  width 20px
  height auto
  min-height 50px
  right 4px
  z-index 0
  border 1px solid rgb(173, 216, 230)
  writing-mode vertical-lr
  background-color rgb(173, 216, 230)
  border-top-right-radius 8px
  border-bottom-right-radius 8px
  span
    font-size 14px
    padding-right 8px

.textarea-markdown
  background-color #FFFFFF
</style>
