<template lang="pug">
  div.comment-reply
    p
      a(:href="markdownUrl" target="_blank")
        img.markdown-icon(:src="markdown")
      span {{ msg }}
    textarea-vue(v-model="comment" :textareaStyle="textareaStyle" :placeholder="placeholder" v-particle)
    div.comment-submit
      img.comment-user-avatar(:src="avatar" :title="avatarMsg" @click="githubLogin")
      input.comment-biu(type="button" value="BiuBiuBiu~" @click="")
</template>

<script>
import { githubLoginUrl } from '@/api/index'

export default {
  name: 'reply',
  data: () => ({
    msg: 'Markdown is Supported',
    markdown: require('@/assets/imgs/markdown.svg'),
    markdownUrl: 'https://segmentfault.com/markdown',
    comment: '',
    textareaStyle: {
      background: `url(${require('./../../assets/imgs/comment-bg.png')}) right bottom / 30% no-repeat`,
      padding: '21px 21px 20px'
    },
    placeholder: '在雪域中遇见自己 ...',
    avatar: require('@/assets/imgs/user.png'),
    avatarMsg: '点击登陆'
  }),
  mounted () {
    // this.$message('我不想工作个世界 <br/><br/>你好这个世界你好这个世界你好这个世界......')
  },
  methods: {
    githubLogin () {
      let url = githubLoginUrl({ current: window.location.href })
      window.location.href = url
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-reply
  margin-top 30px
  p
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
