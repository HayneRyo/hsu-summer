<template lang='pug'>
  section.container
    h2 Dialog Sample
    p
      span Please click this button　→　
      button(v-on:click='open') open modal
    // モーダル
    .modal(v-show='active')
      .modal__container
        Scene1(v-show='page == 1', v-on:linkTo='linkTo')
        Scene2(v-show='page == 2', v-on:linkTo='linkTo')
        Scene3(v-show='page == 3', v-on:linkTo='linkTo')
        button(v-on:click='close') close modal
</template>

<script>
  import Scene1 from './scene1.vue';
  import Scene2 from './scene2.vue';
  import Scene3 from './scene3.vue';

  export default {
    components: {
      Scene1,
      Scene2,
      Scene3
    },
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

