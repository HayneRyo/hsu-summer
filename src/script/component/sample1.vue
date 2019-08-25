<template lang='pug'>
  div.template-container
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

