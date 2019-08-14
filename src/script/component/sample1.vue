<template lang='pug'>
  div
    h1 {{ greeting }} {{ name }}!
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
</style>

