<template lang='pug'>
  section.template-container
    div
      h2 Binding Sample
      p Hello! {{name}}!
      input(type="text", v-model="name", placeholder="enter a name here")
</template>

<script>
  export default {
    data: () => ({
      name: '',
    })
  }
</script>

<style scoped>
</style>

