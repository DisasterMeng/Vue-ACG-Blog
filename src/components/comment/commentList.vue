<template lang="pug">
  div.comment-list
    h2 Comment | {{ commentNum }} 条评论
    div.comment-wrap
      comment(v-for="(item,index) in comment" :key="index" :data="item")
      div.comment-first(v-if="comment.length === 0 ? true : false") 快来做第一个评论的人吧~
</template>

<script>
import comment from './comment'

export default {
  name: 'list',
  data: () => ({
    commentNum: 10,
    comment: []
  }),
  mounted () {
    this.comment.push({
      isAvatar: true,
      isChildren: false,
      title: 'Mashiro',
      img: 'https://cn.gravatar.com/avatar/cd2b3a164c977539712929f66cad335c?s=160&d=mm&r=g',
      ua: 'Mozilla/5.0 (iPhone 6s; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0 MQQBrowser/8.3.0 Mobile/15B87 Safari/604.1 MttCustomUA/2 QBWebViewType/1 WKType/1',
      time: 1559184161,
      position: '广东省深圳市 联通',
      content: `<p>hello world</p>`
    })
  },
  methods: {

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
