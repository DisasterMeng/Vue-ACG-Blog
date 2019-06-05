<template lang="pug">
  div.message(v-if="visible")
    span(v-html="message" :style="{ backgroundColor }")
</template>

<script>
export default {
  name: 'message',
  data: () => ({
    message: '',
    visible: false,
    backgroundColor: ''
  })
}
</script>

<style lang="stylus" scoped>
  .message
    position fixed
    top 0
    left 0
    right 0
    text-align center
    z-index 9999
    transition all 1s
    span
      padding 12px 25px
      font-size 15px
      border-radius 4px
      color #FFFFFF
      display inline-block
      margin-bottom 0
</style>
