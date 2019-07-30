<template lang='pug'>
  div
    h1.title {{ greeting }} {{ name }}!
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
    border-bottom: 1px dotted #fff;
  }
</style>

