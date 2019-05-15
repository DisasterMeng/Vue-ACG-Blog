<template lang="pug">
  div.comment
    p {{ msg }}
    textarea-vue(v-model="comment" :textareaStyle="textareaStyle" :placeholder="placeholder" v-particle)
    div.comment-info
      div.comment-info-avatar
        img(v-lazy:)
</template>

<script>
export default {
  name: 'reply',
  data: () => ({
    msg: '',
    comment: '',
    placeholder: '在雪域中遇见自己 ...'
  })
}
</script>

<style lang="stylus" scoped>

</style>
