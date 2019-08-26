<template lang="pug">
  div.error
    div(v-lazy:background-image="background")
    div.error-button
      a(@click="back") 返回上一页
      a(href="/") 返回首页
</template>

<script>
export default {
  name: 'error-404',
  data: () => ({
    background: require('./../../assets/imgs/404.png')
  }),
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.error
  position absolute
  width 100%
  height 100%

.error div:first-child
  width 100%
  height 100%
  background-size cover

.error-button
  margin-top -150px
  text-align center

.error-button  a
  padding 10px 30px
  margin 0 20px
  border 1px solid #FFFFFF
  color #FFFFFF
  cursor pointer
  transition all .3s

.error-button  a:hover
  box-shadow: 0 0 4px rgba(255,253,251,.85)
  color #000000
  border 1px solid #FFFDFB
  background-color #FFFDFB
</style>
