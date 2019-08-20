<template lang="pug">
  div.comment-list
    h2 Comment | {{ blogComment.count }} 条评论
    div.comment-wrap
      comment(v-for="(item,index) in blogComment.results" :key="index" :data="item")
      div.comment-first(v-if="!blogComment.results || blogComment.results.length === 0") 快来做第一个评论的人吧~
</template>

<script>
import comment from './comment'

export default {
  name: 'list',
  mounted () {
  },
  computed: {
    blogComment () {
      return this.$store.state.comment.comment
    }
  },
  components: {
    comment
  }
}
</script>

<style lang="stylus" scoped>
  .comment-list
    h2
      font-size 16px
  .comment-wrap
    padding-top 20px
    .comment-first
      width 100%
      text-align center
      font-size 16px
</style>
