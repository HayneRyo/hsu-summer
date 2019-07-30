<template lang='pug'>
  section.container
    h1 Binding Sample
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
.container{
  margin: 10px;
  padding: 5px;
  border: 1px solid #fff;
}
</style>

