<template lang='pug'>
  section.container
    h1 Action Sample
    p Current is {{count}}.
    button(v-on:click="increment") increment
    button(v-on:click="decrement") decrement
</template>

<script>
  export default {
    data: () => ({
      count: 0,
    }),
    methods: {
      increment () {
        this.count += 1
      },
      decrement () {
        this.count -= 1
      },
    }
  }
</script>

<style scoped>
.container{
  margin: 10px;
  padding: 5px;
  border: 1px solid #fff;
}
</style>

