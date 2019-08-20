<template lang="pug">
  div.comment
    commentList
    commentPage
    commentReply
</template>

<script>
import commentList from './commentList'
import commentPage from './commentPage'
import commentReply from './commentReply'

export default {
  name: 'comment',
  components: {
    commentList,
    commentPage,
    commentReply
  }
}
</script>

<style lang="stylus" scoped>
.comment
  margin-top 50px
</style>
