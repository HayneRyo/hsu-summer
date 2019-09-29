<template lang='pug'>
  li.todo(v-bind:class="{ active: todo.status }")
    .todo__container
      .todo__data(v-on:click=`toggle`)
        .todo__check
          span(v-show="todo.status") ✔︎
        .todo__comment {{todo.id}}.{{todo.comment}}
      .todo__ctrl
        button.todo__remove(v-on:click=`remove`) ×
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
    	remove() {
        // タスクの削除
        this.$store.dispatch('remove', this.todo.id);
      },
      toggle() {
        console.log('hoge')
        // タスクが未完了
        if (this.todo.status) return this.$store.dispatch('unachieved', this.todo.id);
        // タスクが完了
        this.$store.dispatch('achieved', this.todo.id);
      }
    }
  }
</script>

<style scoped lang='sass'>
.todo
  position: relative
  border-bottom: 1px solid #eee
  transition: all 300ms 0s ease
  &.active
    background: rgba(#42b983, .2)
  &__container
    position: relative
    display: flex
    height: 60px
    justify-content: center
    align-items: center
    animation: todo 1s ease
  &__check
    position: relative
    height: 15px
    width: 15px
    border: 1px solid #ccc
    > span
      position: absolute
      top: -21px
      font-size: 2.4rem
      color: #42b983
  &__comment
    padding-left: 10px
  &__data
    flex: 1
    display: flex
    align-items: center
    padding: 8px 20px
    font-size: 1.4rem
    font-weight: bold
  &__ctrl
    padding: 8px
  &__remove
    display: flex
    justify-content: center
    align-items: center
    height: 24px
    width: 24px
    // font-size: 1.8rem
    font-weight: bold
    color: #fff
    background: #42b983
    border: none
    border-radius: 50%

@keyframes todo
  0%
    height: 0px
    left: 100%
  50%
    height: 60px
    left: 100%
  100%
    left: 0
</style>

