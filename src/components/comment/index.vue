<template lang="pug">
  div.comment
    commentList
    commentReply
</template>

<script>
import commentList from './commentList'
import commentReply from './commentReply'

export default {
  name: 'comment',
  components: {
    commentList,
    commentReply
  }
}
</script>

<style lang="stylus" scoped>
.comment
  margin-top 50px
</style>
