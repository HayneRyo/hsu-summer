<template lang='pug'>
  .add
    span.add__button(@click='toggleModal') ＋
    .modal(v-show='modalFlg' @click='toggleModal')
      .modal__wrap(@click.stop)
        span.modal__close(@click='toggleModal') ×
        p.modal__face 😖
        h2.modal__title またタスク増えちゃったの？
        input.modal__input(v-model='task' placeholder='タスク名を入力してください')
        a.modal__button(@click='pushTask' :class="{'is-disabled': !task.length}") 追加する
</template>

<script>
  export default {
    data: () => ({
      modalFlg: false,
      task: '',
    }),
    methods: {
      toggleModal() {
        this.modalFlg = !this.modalFlg;
      },
      pushTask: function() {
        this.$emit('addTodo', this.task);
        this.task = '';
        this.toggleModal();
      },
    },
  }
</script>

<style module lang='sass'>
.add
  &__button
    position: absolute
    top: -10px
    right: 0
    background-color: #00ab66
    box-shadow: 0 2px 4px 2px rgba(#000,.1)
    width: 50px
    height: 50px
    line-height: 50px
    border-radius: 50%
    text-align: center
    font-size: 2rem
    cursor: pointer
    transition: all .3s ease
    &:hover
      background-color: lighten(#00ab66, 10%)
.modal
  position: fixed
  top: 0
  left: 0
  right: 0
  background-color: rgba(#fff, .3)
  height: 100vh
  width: 100vw
  padding: 100px 0
  z-index: 10000
  &__wrap
    transition: all .3s ease
    position: relative
    padding: 30px 40px 40px
    margin: auto
    width: 400px
    background-color: #fff
    box-shadow: 0 2px 4px 2px rgba(#000,.1)
    border-radius: 10px
    color: #333
    animation: modalShow .5s cubic-bezier(0.165, 0.84, 0.44, 1)
  &__close
    position: absolute
    top: 15px
    right: 20px
    color: #ddd
    font-weight: bold
    font-size: 2.4rem
    line-height: 1
    transition: all .3s ease
    cursor: pointer
    &:hover
      color: #ccc
  &__face
    font-size: 3rem
    line-height: 1
    text-align: center
  &__title
    margin-top: 4px
    font-size: 1.6rem
    font-weight: bold
    text-align: center
  &__input
    margin-top: 30px
    display: block
    padding: 12px
    width: 100%
    font-size: 1.4rem
    border-radius: 2px
    border: 1px solid #ddd
    &:placeholder-shown
      color: #ccc
  &__button
    display: block
    margin-top: 10px
    height: 48px
    line-height: 48px
    background-color: #00ab66
    color: #fff
    font-weight: bold
    text-align: center
    border-radius: 4px
    cursor: pointer
    box-shadow: 0 2px 4px 2px rgba(#000, .1)
    &:hover
      background-color: lighten(#00ab66, 10%)
    &.is-disabled
      opacity: .4
      pointer-events: none
      cursor: default


@keyframes modalShow
  0%
    opacity: 0
    transform: translateY(10px)
  100%
    opacity: 1
    transform: translateY(0)
</style>

