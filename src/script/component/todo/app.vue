<template lang='pug'>
  .app
    // 登録用コンポーネント
    register
    // TODOリスト表示
    todos
</template>

<script>
  import Register from './register.vue';
  import Todos from './todos.vue';
  
  export default {
    // コンポーネント
    components: {
      Register,
      Todos
    },
  }
</script>

<style scoped lang='sass'>
.app
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
</style>

