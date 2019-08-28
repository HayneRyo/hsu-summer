<template lang='pug'>
  section
    h2.title
      | This is a component using 
      span.title__emphasis Vue.js
    p.message {{ greeting }} {{ name }}!
</template>

<script>
  export default {
    data: () => ({
      greeting: 'Hello,',
      name: 'Vue Component'
    })
  }
</script>

<style scoped lang='sass'>
.title
  border-bottom: 1px dashed #000
  &__emphasis
    color: red
</style>

