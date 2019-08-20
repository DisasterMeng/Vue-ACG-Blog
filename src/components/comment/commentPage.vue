<template lang="pug">
    div.comment-page(v-if="blogComment.previous || blogComment.next")
        div.prev(:class="{ disabled: !blogComment.previous }" @click="pageClick('prev')") « older
        div.next(:class="{ disabled: !blogComment.next }" @click="pageClick('next')") newer »
</template>

<script>
import axios from 'axios'

export default {
  name: 'commentPage',
  methods: {
    pageClick (name) {
      const url = name === 'prev' ? this.blogComment.previous : this.blogComment.next
      if (!url) { return }
      axios.get(url).then(res => {
        if (res.data.code === 200) {
          this.$store.dispatch('setComment', res.data.data)
        }
      })
    }
  },
  computed: {
    blogComment () {
      return this.$store.state.comment.comment
    }
  }
}
</script>

<style lang="stylus" scoped>
    .comment-page
        margin-top 10px
        .prev
        .next
            margin-left 10px
            display inline-block
            cursor pointer
            color #e67474
            &:hover
                color #fe9600
    .disabled
        color #ababab !important
</style>
