<template lang='pug'>
  li
    p ID{{todo.id}}:{{todo.comment}}
    p {{todo.status}}
    button(v-show='!todo.status' v-on:click=`achieved`) 完了
    button(v-show='todo.status' v-on:click=`unachieved`) 未完了
    button(v-on:click=`remove`) 削除
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
    	remove() {
        // タスクの削除
        this.$store.dispatch('remove', this.todo.id);
      },
      achieved() {
        // タスクが完了
        this.$store.dispatch('achieved', this.todo.id);
      },
      unachieved() {
        // タスクが完了
        this.$store.dispatch('unachieved', this.todo.id);
      }
    }
  }
</script>

<style scoped lang='sass'>
</style>

