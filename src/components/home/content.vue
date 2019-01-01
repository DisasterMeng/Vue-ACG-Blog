<template lang="pug">
    div.content-home
        myheader
        div.container-content
            v-container.v-container
                div.notice
                    v-icon.notice-left volume_up
                    div.notice-right {{ notice }}
                div.explore
                    h1
                        i.fa.fa-envira.explore-icon &nbsp;explore
                    blogItem(v-for="(item,index) in getBlogData" :key="index" :blog='item' :Index='index')
</template>

<script>
import myheader from './header'
import blogItem from './blogItem'

export default {
  name: 'content-home',
  data: () => ({
    getBlogData: [{
      id: 1,
      title: '这个是blog标题',
      time: '2017-09-08',
      img: require(`./../../assets/imgs/comic/002.png`),
      excerpt: '这个是blog简介',
      user: {
        username: '凌寒初见',
        icon: require('@/assets/imgs/author.png')
      },
      category: {
        name: '类别'
      },
      commentNum: 55,
      num: 22
    },
    {
      id: 2,
      title: '这个是blog标题2',
      excerpt: '这个是blog简介2',
      time: '2018-09-08',
      img: require(`./../../assets/imgs/comic/005.png`),
      user: {
        username: '凌寒初见',
        icon: require('@/assets/imgs/author.png')
      },
      category: {
        name: '类别'
      },
      commentNum: 25,
      num: 33
    }],
    notice: '这是通知'
  }),
  components: {
    myheader,
    blogItem
  }
}
</script>

<style lang="stylus" scoped>
.notice
  margin 0 auto
  border 1px dashed #6c5b7c
  border-radius 8px
  padding 20px

.notice-left
  padding-right 10px
  display inline-block
  vertical-align middle
  color #6c5b7c

.notice-right
  display inline-block
  vertical-align middle
  color #6c5b7c

.explore
  margin-top 55px

.explore h1
  padding-bottom 5px
  border-bottom 1px dashed #6c5b7c

.explore-icon
  color #6c5b7c
  text-transform capitalize
  padding-left 5px
</style>
