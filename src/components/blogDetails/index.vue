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
import 'highlight.js/styles/atom-one-dark.css'
import { fetchBlogDetailApi } from '@/api/index'

export default {
  name: 'blog-details',
  data: () => ({
    content: ''
  }),
  methods: {
    hljsCode (el) {
      let blocks = el.querySelectorAll('pre code')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    },
    fetchBlogDetail () {
      const id = this.$route.params.page
      fetchBlogDetailApi(id).then(res => {
        this.$store.dispatch('setDetails', res.data)
        this.content = res.data.content
      })
    }
  },
  created () {
    this.fetchBlogDetail()
    this.$nextTick(() => {
      this.hljsCode(document.querySelector('#primary'))
    })
  },
  updated () {
    this.hljsCode(document.querySelector('#primary'))
  },
  components: {
    myheader
  }
}
</script>
