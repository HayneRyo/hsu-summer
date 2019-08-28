<template lang='pug'>
  section.container
    h2 Dialog Sample
    p
      span Please click this button　→　
      button(v-on:click='open') open modal
    // モーダル
    .modal(v-show='active')
      .modal__container
        article(v-show='page == 1')
          h1 １ページ
          button(v-on:click='linkTo(2)') go to 2
        article(v-show='page == 2')
          h1 ２ページ
          button(v-on:click='linkTo(1)') go to 1
          button(v-on:click='linkTo(3)') go to 3
        article(v-show='page == 3')
          h1 ３ページ
          button(v-on:click='linkTo(2)') go to 2
        button(v-on:click='close') close modal
</template>

<script>
  export default {
    data: () => ({
      active: false,
      page: 1,
    }),
    methods: {
      open () {
        this.active = true
      },
      close () {
        this.active = false
      },
      linkTo (page) {
        this.page = page
      }
    }
  }
</script>

<style module lang='sass'>
.modal
  position: fixed
  top: 0
  left: 0
  display: flex
  width: 100%
  height: 100%
  justify-content: center
  align-items: center
  background: rgba(255,255,255, 0.3)
  &__container
    display: block
    width: 80%
    height: 80%
    padding: 10px 20px
    background: #fff
    color: #000
</style>

