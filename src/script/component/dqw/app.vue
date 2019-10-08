<template lang='pug'>
  .c-app
    transition(name="fade")
      .c-app__container(v-if='!height')
        p.c-serif そなたの身長は何センチじゃ？
        .c-field
          .c-field__input
            input.c-field__textarea(type='text' ref='height' :value='height')
          .c-field__unit cm
        nav.c-serif--nav
          button.c-serif__button(v-on:click='insert') 登録

    transition(name="fade")
      .c-app__container(v-if='height')
        p.c-serif(v-if='steps')
          span {{distance}}
          | kmほど歩く必要があるぞ
          br
          | 精進するのじゃぞ
        p.c-serif(v-if='!steps')
          | データを入力するがよい
        .c-field
          .c-field__input
            input.c-field__textarea(v-model='steps')
          .c-field__unit 歩
        .c-field
          .c-field__input
            input.c-field__textarea(v-model='point')
          .c-field__unit P
        .c-field
          .c-field__input
            input.c-field__textarea(v-model='gacha')
          .c-field__unit 回
        nav.c-serif--nav
          button.c-serif__button(v-on:click='reset') もどる
</template>

<script>
  export default {
    data: () => ({
      height:   0,
      length:   0,
      steps:    0,
      point:    0,
      gacha:    0,
      distance: 0,
    }),
    watch: {
      height: function (value) {
        this.length = value * 0.45
      },
      steps: function (value) {
        this.point = value / 1000 * 40
        this.distance = value * this.length / 100 / 1000
      },
      point: function (value) {
        this.steps = value * 1000 / 40;
        this.gacha = value / 1000;
      },
      gacha: function (value) {
        this.point = value * 1000;
      },
    },
    methods: {
      insert: function () {
        this.height = this.$refs.height.value
      },
      reset: function () {
        this.height = 0
      },
    }
  }
</script>

<style scoped lang='sass'>
.c-app
  display: flex
  width: 100%
  height: 100%
  align-items: center
  justify-content: center
  &__container
    width: 90vw

.c-serif
  display: block
  min-height: 5em
  padding: 5px
  background: rgba(0, 0, 0, .7)
  border: 1px solid white
  border-radius: 5px
  color: white
  $self: &
  &--nav
    @extend #{$self}
    width: 30vw
    min-height: 7em
  &__button
    color: white
    font-size: 1.6rem
    &:before
      content: '▶︎ '


.c-field
  display: flex
  align-items: flex-end
  width: 100%
  margin: 30px auto
  padding: 5px 10px
  background: rgba(255, 255, 255, .6)
  border-radius: 5px
  &__input
    flex: 1
  &__textarea
    width: 100%
    border: none
    background: none
    font-size: 5rem
    text-align: right
  &__unit
    width: 2em
    padding-left: 10px
    font-size: 3rem

.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
