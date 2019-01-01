<template lang="pug">
  div.live2d-vue
    div.live2d-panel
        live2d(v-if="islive2d" :modelPath="modelPath" ref="l2dMange")
    div.tools-panel
      live2dTools(v-for="(item,index) in toolsData" :key="index" v-if="item.show" :toolsStyle="toolsStyle"  @click="toolsClick(item)" :width="item.width" :toolsID="item.tabMsg" :tabMsg="item.tabMsg" :customDialogue='item.customDialogue' :backgroundColor="item.backgroundColor" ref='tool')
</template>

<script>
import custom from '@/utils/custom'

export default {
  name: 'live2d-vue',
  data: () => ({
    modelPath: 'http://pjxaahzsk.bkt.clouddn.com/Pio/model.json',
    toolsStyle: {
      color: '#000000'
    },
    toolsData: [
      { tabMsg: 'home', backgroundColor: '#ff0', show: true },
      { tabMsg: 'dialogue', width: 300, customDialogue: custom, show: true },
      { tabMsg: 'change', backgroundColor: '#add8e6', show: true },
      { tabMsg: 'save', backgroundColor: 'green', show: true },
      { tabMsg: 'about', backgroundColor: '#eb7a77', show: true },
      { tabMsg: 'hide', backgroundColor: 'red', show: true }
    ],
    islive2d: true
  }),
  mounted () {
    setInterval(() => {
      fetch('https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json')
        .then(res => res.json())
        .then(data => {
          let tool = this.$refs.tool.filter(item => { return item.customDialogue })
          if (tool && tool.length > 0) { tool[0].showMessage(data.hitokoto) }
        })
    }, 30000)
  },
  methods: {
    toolsClick (item) {
      switch (item.tabMsg) {
        case 'home':
          window.open('https://github.com/LingHanChuJian/live2d-vue')
          break
        case 'change':
          // this.$refs.l2dMange.initL2dMange('http://pjxaahzsk.bkt.clouddn.com/Pio/modelv2.json')
          // this.modelPath = 'http://pjxaahzsk.bkt.clouddn.com/Pio/modelv2.json'
          break
        case 'save':
          window.Live2D.captureName = `live2d-${Date.now()}.png`
          window.Live2D.captureFrame = true
          break
        case 'about':
          window.open('https://github.com/LingHanChuJian/live2d-vue')
          break
        case 'hide':
          this.islive2d = false
          this.toolsDisplay('hide')
          break
        case 'show':
          this.islive2d = true
          this.toolsDisplay('show')
          break
      }
    },
    toolsDisplay (display) {
      for (let i = 0, len = this.toolsData.length; i < len; i++) {
        let tabMsg = this.toolsData[i].tabMsg
        if (display === 'hide') {
          if (tabMsg === 'home' || tabMsg === 'about') { continue }
          this.toolsData[i].show = false
          if (tabMsg === 'hide') {
            this.toolsData[i].show = true
            this.toolsData[i].tabMsg = 'show'
          }
        } else {
          this.toolsData[i].show = true
          if (tabMsg === 'show') { this.toolsData[i].tabMsg = 'hide' }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .live2d-vue
    position relative
    z-index 99
  .tools-panel
    position fixed
    left 0
    bottom 0
    max-width 32px
  .live2d-panel
    position fixed
    height 240px
    left 0
    bottom 0
  .live2d-tools
    margin 2px 0
    writing-mode vertical-lr
    cursor pointer
    text-align center
    min-height 50px
    line-height 35px
    padding 3px 2px
    height auto
    box-shadow 1px 2px 5px rgba(0,0,0,0.3)
    background-color #FFFFFF
    transition all .2s
    border-top-right-radius 8px
    border-bottom-right-radius 8px
</style>
