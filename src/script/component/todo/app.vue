<template lang='pug'>
  .app
    // 登録用コンポーネント
    register
    // ゲージ
    gauge
    // TODOリスト表示
    todos
</template>

<script>
  import Register from './register.vue';
  import Todos from './todos.vue';
  import Gauge from './gauge.vue';
  
  export default {
    // コンポーネント
    components: {
      Register,
      Todos,
      Gauge,
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

