<template lang='pug'>
  div
    input(type='text' ref='comment' placeholder='タスクを入力してください')
    button(v-on:click='insert') 登録
</template>

<script>
  export default {
    methods: {
    	insert() {
        // 入力の有無を評価
        if (!this.$refs.comment.value) return false;
        // タスクの追加
        this.$store.dispatch('insert', this.$refs.comment.value);
        // フォームを削除
        this.$refs.comment.value = null;
      },
    }
  }
</script>

<style scoped lang='sass'>
</style>
