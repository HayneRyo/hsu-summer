<template lang='pug'>
  section.container
    h2 Action Sample
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
</style>

