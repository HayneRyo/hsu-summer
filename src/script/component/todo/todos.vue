<template lang='pug'>
  ul.todos
    todo(v-for='todo in todos' :key='todo.id' :todo='todo')
</template>

<script>
  import Todo from './todo.vue';

  export default {
    // コンポーネント
    components: {
      Todo
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      }
    },
    methods: {
    }
}
</script>

<style scoped lang='sass'>
.todos
  flex: 1
  overflow-y: scroll
  overflow-x: hidden
</style>

