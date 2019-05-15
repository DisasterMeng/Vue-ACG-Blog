<template lang="pug">
    div.content-details
        myheader
        div.container-content
            v-container.v-container
                article#primary(v-html="content")
</template>

<script>
import myheader from './blogHeader'
import hljs from 'highlight.js'
import LineNumbers from '@/utils/lineNumbers'
import ClipboardJS from 'clipboard'
import { blogDetail } from '@/api/index'

export default {
  name: 'blog-details',
  data: () => ({
    content: '',
    lineNumbers: '',
    clipboard: ''
  }),
  methods: {
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
    blogDetail () {
      const id = this.$route.params.page
      blogDetail(id).then(res => {
        this.$store.dispatch('setDetails', res.data)
        this.content = res.data.content
      })
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
  created () {
    this.blogDetail()
  },
  updated () {
    this.hljsCode(document.querySelector('#primary'))
  },
  destroyed () {
    this.clipboard.destroy()
  },
  components: {
    myheader
  }
}
</script>
