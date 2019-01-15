<template lang="pug">
  div.content-markdown
    myheader(:headerData="headerData")
    div.container-content
      v-container.v-container
</template>

<script>
import myheader from './../header/index'
// import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: 'markdown',
  data: () => ({
    headerData: {
      background: require('./../../assets/imgs/comic/175.png'),
      describe: 'markdown'
    }
  }),
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>
.v-container
  min-height 900px
</style>
