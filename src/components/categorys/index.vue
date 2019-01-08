<template lang="pug">
  div.content-categorys
    myheader(:headerData="headerData")
    div.container-content
      v-container.v-container
        v-timeline(dense)
          v-timeline-item(small)
</template>

<script>
import myheader from './../header/index'
import { fetchCategorysApi } from '@/api/index'

export default {
  name: 'categorys',
  data: () => ({
    headerData: {
      background: require(`./../../assets/imgs/comic/692.png`),
      describe: '归档 | Archives'
    }
  }),
  methods: {
    fetchCategorys () {
      fetchCategorysApi().then(res => {
        console.log(res.data)
      })
    }
  },
  created () {
    this.fetchCategorys()
  },
  components: {
    myheader
  }
}
</script>

<style lang="stylus" scoped>

</style>
