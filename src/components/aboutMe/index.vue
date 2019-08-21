<template lang="pug">
    div.content-about
        myheader(:headerData="headerData")
        div.container-content.revision
            v-container.v-container
                article#abount
                    div.dialogue
                        div.dialogue-title 与&nbsp;
                            ruby 凌寒初见
                                rt こんにちは
                            span &nbsp;对话
                        div.dialogue-message
                            div.send-message(v-for="(item,index) in dialogueMessage" :key="index" :class="item.class")
                                span {{ item.message }}
                            v-btn.choice-button(v-for="(item,index) in dialogueButton" :key="item.message" @click="choice(item)") {{item.message}}
                article#primary.revision(v-if="content" v-html="content")
</template>

<script>
import { about } from '@/api/index'
import Markdown from '@/utils/markdown'
import myheader from './../header/index'

export default {
  name: 'about-me',
  data: () => ({
    content: '',
    headerData: {
      background: require(`./../../assets/imgs/comic/690.png`),
      describe: '关于我'
    },
    dialogueMessage: [],
    dialogueButton: [],
    snackbarConfig: {
      time: 4000,
      color: 'success',
      show: false,
      text: ''
    }
  }),
  methods: {
    getAbout () {
      about().then(res => {
        if (res.code === 200) {
          this.content = res.data.content
        }
      })
    },
    next (message, time = 0, choice = false) {
      setTimeout(_ => {
        if (!choice) {
          this.dialogueMessage.push(message)
        } else {
          this.dialogueButton = message
        }
      }, time)
    },
    choice (item) {
      this.dialogueButton = []
      this.next({ message: item.message, class: 'you' })
      switch (item.id) {
        case 1:
          this.next({ message: '我会一点点JavaScript、python、vue、electron', class: 'me' }, 1000)
          this.next({ message: '喜欢动漫、沉迷Galgame、梦想去一趟日本', class: 'me' }, 2000)
          this.next({ message: '然后得过且过', class: 'me' }, 3000)
          this.next({ message: '人生远不止眼前的苟且', class: 'me' }, 4000)
          this.next([{ message: '为啥取名叫凌寒初见?', id: 3 }], 5000, true)
          break
        case 2:
          this.next({ message: '告辞', class: 'me' }, 1000)
          break
        case 3:
          this.next({ message: '这个名字对我来说有很重要的意义', class: 'me' }, 1000)
          this.next({ message: '具体不方便多说了', class: 'me' }, 2000)
          this.next({ message: '但是如果你从哪里看见这个名字，那么不用怀疑就是我', class: 'me' }, 3000)
          this.next({ message: '那么请仔细研究下我的blog吧！', class: 'me' }, 4000)
          break
      }
    }
  },
  created () {
    this.next({ message: 'Hi,Wanderer!', class: 'me' })
    this.next({ message: '我是凌寒初见', class: 'me' }, 1000)
    this.next({ message: '我就是一个死宅 !!', class: 'me' }, 2000)
    this.next([{ message: '然后呢?', id: 1 }, { message: '少废话', id: 2 }], 3000, true)
    this.getAbout()
  },
  updated () {
    const primary = document.querySelector('#primary')
    if (primary) {
      const markdown = new Markdown(primary)
      markdown.hljsCode()
    }
  },
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>
.dialogue
  padding 10px 20px
  width 100%
  height auto
  border-radius 10px
  background-color #F8F8F8

.dialogue-title
  text-align center
  font-size 18px
  color #404040
  font-weight bold

.dialogue-title ruby,.dialogue-title span
  font-size 18px
  color #404040
  font-weight bold

.dialogue-message
  margin-top 20px
  min-height 200px
  position relative

.send-message
  margin 10px 0

.send-message span
  padding 5px 10px
  border-radius 10px
  background-color #EBEBEB
  font-size 14px
  display inline-block

.me
  text-align left

.you
  text-align right

.me span
  animation leftMove .5s

.you span
  animation rightMove .5s
  background-color #919292
  color #FFFFFF

.choice-button
  background-color #EBEBEB !important
  animation leftMove .5s

.revision
  padding-bottom 10px !important

@keyframes leftMove
  from
    transform: translateX(-15px)
    opacity: 0
  to
    transform: translateX(0)
    opacity: 1

@keyframes rightMove
  from
    transform: translate(15px)
    opacity: 0
  to
    transform: translateX(0)
    opacity: 1
</style>
