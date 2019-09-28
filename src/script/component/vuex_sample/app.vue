<template lang='pug'>
  section
    p {{count}}
    button(v-on:click="increment") up
    button(v-on:click="decrement") down
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
    	increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      }
    }
  }
</script>

<style scoped lang='sass'>
</style>

