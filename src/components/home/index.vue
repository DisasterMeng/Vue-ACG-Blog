<template lang="pug">
  v-app.wrap
    Nav
    navDrawer
    goTop.container-right
    router-view
    live2dVue
    v-footer.footer
        Footer
</template>

<script>
import Nav from './navbar'
import myheader from './header'
import Footer from './footer'
import goTop from './../goTop/index'
import navDrawer from './navdrawer'
import live2dVue from './../live2d/index'

export default {
  name: 'home',
  data: () => ({
  }),
  components: {
    Nav,
    navDrawer,
    goTop,
    myheader,
    live2dVue,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.container-right
  position fixed
  right 25px
  height 900px
  width 70px
  z-index 1

.footer
  height auto !important
</style>
