<template lang='pug'>
  section
    h2.title This is a component using Vue.js
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

<style scoped>
  .title {
    border-bottom: 1px dotted #000;
  }
</style>
