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
                    blogItem(v-for="(item,index) in blogData" :key="index" :blog='item' :Index='index')
                    div#pagination(v-if="next")
                      span(@click="lower") lower
</template>

<script>
import myheader from './header'
import blogItem from './blogItem'
import { fetchBlogsApi } from '@/api/index'

export default {
  name: 'content-home',
  data: () => ({
    blogData: [],
    next: '',
    notice: '项目已经开源,欢迎下载试玩'
  }),
  methods: {
    fetchBlogs (page = 1) {
      fetchBlogsApi({ page }).then(res => {
        this.next = res.data.next
        for (let i = 0, len = res.data.results.length; i < len; i++) {
          this.blogData.push(res.data.results[i])
        }
      })
    },
    lower () {
      if (this.next) {
        let url = new URL(this.next)
        let page = url.search.match(/page=(\d+)/)
        if (page && page.length > 0) {
          page = page[1]
          this.fetchBlogs(page)
        }
      }
    }
  },
  created () {
    this.fetchBlogs()
  },
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

#pagination
  margin-top 50px
  text-align center

#pagination span
  padding 10px 30px
  border 1px solid #d6d6d6
  color #adadad
  border-radius 50px
  cursor pointer
  transition all .3s

#pagination span:hover
  color #69d2e7
  border 1px solid #69d2e7
  box-shadow: 0 0 2px rgba(105,210,231,.85)
</style>
