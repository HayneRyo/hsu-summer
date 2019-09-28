<template lang='pug'>
  section
    // 登録用コンポーネント
    regiser
    // TODOリスト表示
    todos
</template>

<script>
  import Regiser from './regiser.vue';
  import Todos from './todos.vue';
  
  export default {
    // コンポーネント
    components: {
      Regiser,
      Todos
    },
  }
</script>

<style scoped lang='sass'>
</style>

