<template lang="pug">
  div.comment-contents-wrap
    div.comment-contents(:class="{ children: isChildren }")
      section.comment-info
        div.comment-info-left
          a(:href="data.user.github" target="_blank")
            img.avatar(v-lazy="data.user.icon" :alt="data.title")
        div.comment-info-right
          div.comment-info-right-top
            a(:href="data.user.github" target="_blank")
              span.master(v-if="data.user.is_superuser" title="凌寒初见") 博主
              span.comment-name {{ data.user.username }}
          div.comment-info-right-bottom
            div.comment-info-right-bottom-left
              span.comment-time 发布于 {{ data.submit_date }}
              span.comment-useragent &nbsp;&nbsp;(&nbsp;
                img(:src="getBrowserSvg(cur_browser)")
                span &nbsp;{{ cur_browser.name }} {{ cur_browser.version }}&nbsp;
                img(:src="getOSSvg(cur_OS)")
                span &nbsp;{{ cur_OS.name}} {{ cur_OS.version }} )
              span.comment-position &nbsp;来自: {{ data.ip_address }} {{ data.ip_position }}
            div.comment-info-right-bottom-right
              span.comment-reply-button(@click="replyClick") Reply
      div.comment-body(v-html="getCommentBody()")
      commentReply(:parent="data.id" :key="data.id")
      tree-comment(v-if="isDescendants" v-for="item in data.descendants" :data="item" :isChildren="true" :key="item.id")
</template>

<script>
import Markdown from '@/utils/markdown'
import UAParser from '@/utils/uaParser'
import commentReply from './commentReply'
import { browser, os } from '@/utils/browser'

export default {
  name: 'treeComment',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isChildren: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    cur_browser: {},
    cur_OS: {}
  }),
  mounted () {
    this.getInfo(this.data)
  },
  methods: {
    getCommentBody () {
      if (this.data.parent_user) {
        return `<a class='comment-at'>@${this.data.parent_user.username}</a> ` + this.data.comment
      }
      return this.data.comment
    },
    replyClick () {
      this.$store.dispatch('setParent', this.data.id)
    },
    getInfo (data) {
      let parser = UAParser.getInstance(data.user_agent)
      this.cur_browser = parser.getBrowser()
      this.cur_OS = parser.getOS()
    },
    getBrowserSvg (param) {
      let browserSvg = browser.default
      for (let item in browser) {
        if (item === param.name) {
          browserSvg = browser[item]
        }
      }
      return browserSvg
    },
    getOSSvg (param) {
      let OSSvg = os.default
      let name = param.name
      if (name && name.indexOf('Windows') > -1) {
        OSSvg = os['Windows_10']
        name = `${param.name}_${param.version}`
      }
      for (let item in os) {
        if (item === name) {
          OSSvg = os[item]
        }
      }
      return OSSvg
    }
  },
  updated () {
    Markdown.getInstance(document.querySelector('.comment-body'))
  },
  computed: {
    isDescendants () {
      return this.data.descendants && this.data.descendants.length
    }
  },
  components: {
    commentReply
  }
}
</script>

<style lang="stylus" scoped>
  .children
    padding-left 40px !important
  .comment-contents
    margin-top 30px
    padding 3px
    padding-bottom 15px
    position relative
    transition all 1s
  .comment-info
    display inline-flex
    &:hover
      .avatar
        transform rotate(360deg)
      .comment-reply-button
        opacity 1
    .comment-info-left
      width 50px
    .comment-info-right
      flex 1
      .comment-info-right-bottom
        display inline-flex
  .avatar
    transform rotate(0deg)
    transition all .8s ease
    box-shadow 0 1px 10px -6px rgba(0,0,0,.5)
    width 100%
    max-width 40px
    height 40px
    border-radius 100%
  .master
    color #fb7299
    border 1px solid #fb7299
    text-align center
    font-size 13px
    border-radius 3px
    min-width 30px
    padding 1px
    margin-right 5px
  .comment-name
    font-size 14px
    color #29d
  .comment-info-right-bottom-left
    flex 1
  .comment-time, .comment-position, .comment-useragent span, .comment-reply-button
    font-size 13px
  .comment-useragent
    display inline-flex
    align-items center
    img
      width 16px
      height 16px
  .comment-reply-button
    background-color #29d
    display block
    padding 0 4px
    border-radius 3px
    cursor pointer
    color #FFFFFF
    right 3px
    opacity 0
  .comment-body
    margin-top 15px
    color #63686d
    padding 0 0 10px 0px
    border-bottom 1px dashed #ddd
  .comment-at
    color #99ce00
  @media screen and (max-width: 960px)
    .comment-useragent span
      display none
</style>
