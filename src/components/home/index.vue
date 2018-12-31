<template lang="pug">
  v-app.wrap
    Nav
    navDrawer
    goTop.container-right
    myheader
    div.container-content
      v-container.v-container
        div.notice
          v-icon.notice-left volume_up
          div.notice-right {{ notice }}
        div.explore
          h1
            i.fa.fa-envira.explore-icon &nbsp;explore
          blogItem(v-for="(item,index) in getBlogData" :key="index" :blog='item' :currentIndex='index')
    v-footer
        Footer
</template>

<script>
import Nav from './navbar'
import myheader from './header'
import Footer from './footer'
import goTop from './../goTop/index'
import navDrawer from './navdrawer'
import blogItem from './blogItem'

export default {
  name: 'home',
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
    Nav,
    navDrawer,
    goTop,
    myheader,
    blogItem,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.container-right
  position: fixed
  right: 25px
  height: 900px
  width: 70px
  z-index: 1

.container-content
  background-color: #FFFFFF
  z-index: 0

.v-container
  margin-top: 30px
  max-width: 850px

</style>
