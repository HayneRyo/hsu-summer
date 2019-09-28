<template lang='pug'>
  .register
    .register__container
      .register__input
        input.register__text(type='text' ref='comment' placeholder='タスクを入力してください')
      .register__submit
        button.register__button(v-on:click='insert') 登録
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
.register
  width: 100%
  padding: 15px
  border-bottom: 1px solid #eee
  &__container
    display: flex
    width: 100%
  &__input
    flex: 1
  &__submit
    width: 60px
  &__text
    width: 100%
    height: 32px
    padding: 8px 10px
    border: none
    border-radius: 16px 0 0 16px
    font-size: 1.6rem
    background: #eee
    &::placeholder
      color: #ccc
  &__button
    width: 100%
    height: 100%
    background: #42b983
    border: none
    text-align: center
    border-radius: 0 16px 16px 0
    color: #fff
    font-size: 1.2rem
    font-weight: bold
</style>
