<template lang="pug">
  div.content-categorys
    myheader(:headerData="headerData")
    div.container-content
      v-container.v-container
        v-timeline(align-top)
          v-timeline-item(v-for="item in timeData" :key="item.time" :color="color" right small)
            span.font-weight-bold(slot="opposite") {{item.time | timeformat}}
            div.py-3
              li.title.categorys-title(v-for="(blog,index) in item.data" :key="index")
                router-link(:to="'/blogs/'+ blog.id") {{blog.title}}
</template>

<script>
import moment from 'moment'
import myheader from './../header/index'
import { categorys } from '@/api/index'

export default {
  name: 'categorys',
  data: () => ({
    headerData: {
      background: require(`./../../assets/imgs/comic/692.png`),
      describe: '归档 | Archives'
    },
    timeData: [],
    color: '#69d2e7'
  }),
  methods: {
    categorys () {
      categorys().then(res => {
        let blogs = []
        for (let item of res.data) {
          blogs.push(...item.blogs)
        }
        blogs = blogs.sort((a, b) => {
          let aStamp = new Date(a.created).getTime()
          let bStamp = new Date(b.created).getTime()
          return aStamp - bStamp
        }).reverse()
        for (let i = 0, len = blogs.length; i < len; i++) {
          let date = moment(blogs[i].created).format('YYYY-MM-DD')
          let timeItem = this.timeData.find(item => { return item.time === date })
          if (!timeItem) {
            this.timeData.push({ time: date, data: [blogs[i]] })
          } else {
            timeItem.data.push(blogs[i])
          }
        }
      })
    }
  },
  created () {
    this.categorys()
  },
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>
.categorys-title
  padding 5px 0
  position relative

.categorys-title:first-child
  margin-top 25px

.categorys-title:before
  content ''
  position absolute
  top 8px
  left -56px
  width 16px
  height 16px
  border-radius 50%
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
  background-color #FFFFFF

.categorys-title:after
  content ''
  position absolute
  margin 2px
  top 8px
  left -56px
  width 12px
  height 12px
  border-radius 50%
  background-color #69d2e7

.categorys-title a
  color #000000

.categorys-title a:hover
  color #69d2e7

</style>
