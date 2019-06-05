<template lang="pug">
    div.header(v-lazy:background-image="headerData.background")
      div.details
        p {{ headerData.describe }}
</template>

<script>
export default {
  name: 'headers',
  props: {
    headerData: Object
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 475px
  position relative
  background-size cover
  background-position center center

.details
  position absolute
  top 50%
  width 100%
  text-shadow 2px 2px 10px #000

.details p
  color #FFFFFF
  font-size 40px
  text-align center
</style>
