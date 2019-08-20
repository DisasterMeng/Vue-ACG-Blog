<template lang="pug">
  div.comment-reply(v-if="isParent")
    div.comment-reply-title(v-if="parent !== -1")
      span(@click="cancelReplyClick") Cancel Reply
    p
      a(href="https://segmentfault.com/markdown" target="_blank")
        img.markdown-icon(:src="markdown")
      span Markdown is Supported
    textarea-vue(v-model="comment" :textareaStyle="textareaStyle" placeholder="在雪域中遇见自己 ..." v-particle)
    div.comment-submit
      img.comment-user-avatar(:src="userData.icon" :title="userData.username" @click="login")
      input.comment-biu(type="button" value="BiuBiuBiu~" @click="sendComment")
</template>

<script>
import { githubLoginUrl, addComment, blogComment } from '@/api/index'

export default {
  name: 'reply',
  props: {
    parent: {
      type: Number,
      default: -1
    }
  },
  data: () => ({
    markdown: require('@/assets/imgs/markdown.svg'),
    comment: '',
    textareaStyle: {
      background: `url(${require('@/assets/imgs/comment-bg.png')}) right bottom / 30% no-repeat`,
      padding: '21px 21px 20px'
    }
  }),
  methods: {
    login () {
      if (!this.userData.username) {
        const url = githubLoginUrl({ current: window.location.href })
        window.location.href = url
      }
    },
    sendComment () {
      if (!this.comment) {
        return this.$message('评论不能为空 !!')
      }
      this.$message('正在提交中...')
      const data = {
        object_pk: this.$route.params.page,
        comment: this.comment,
        parent: this.parent !== -1 ? String(this.parent) : ''
      }
      addComment(data).then(res => {
        if (res.code === 200 || res.code === 201) {
          this.$message('评论成功 !!')
          blogComment(data.object_pk).then(res => {
            console.log(res)
            if (res.code === 200) {
              this.$store.dispatch('setComment', res.data)
            }
          })
        }
      })
    },
    cancelReplyClick () {
      this.$store.dispatch('setParent', -1)
    }
  },
  computed: {
    userData () {
      return this.$store.state.comment.user
    },
    isParent () {
      return this.$store.state.comment.parent === this.parent
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-reply
  margin-top 15px
  .comment-reply-title
    text-align center
    span
      padding 12px 25px
      background-color #f4f6f8
      color #454545
      cursor pointer
      display inline-block
  p
    margin-top 30px
    font-size 16px
    a
      display inline-block
      vertical-align middle
      .markdown-icon
        width 18px
    span
      margin-left 5px

.comment-submit
  margin-top 30px
  .comment-user-avatar
    display inline-flex
    vertical-align middle
    width 50px
    height 50px
    border-radius 50%
    cursor pointer
    transition all 1s
    &:hover
      transform rotate(360deg)
  .comment-biu
    width calc(100% - 70px)
    margin-left 20px
    border 1px solid #CCCCCC
    color #535a63
    text-align center
    padding 15px 25px
    border-radius 3px
    transition all 1s
    &:hover
      color #dd3333
      border 1px solid #dd3333
    &:active, &:focus
      outline 0
</style>
