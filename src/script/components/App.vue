<template lang='pug'>
  div.app
    .app__inner
      img(src='images/img_slime.png' class='app__slime')
      h1.app__title DQ Walk
      .form
        label.form__label 歩数
        .form__field
          input(type='number' v-model='steps' class='form__input')
          span.form__unit 歩
        label.form__label ポイント
        .form__field
          input(type='number' v-model='points' class='form__input')
          span.form__unit PT
        label.form__label ガチャ
        .form__field
          input(type='number' v-model='gachas' class='form__input')
          span.form__unit 回
      .balloon
        |身長
        input(type='number' v-model='heights' class='balloon__input')
        |cmだと
        br
        |約
        strong.balloon__strong(v-model='distance') {{ distance.toFixed(1) }}
        |kmになるよ！
        p.balloon__note(v-if='Math.floor(earths)') 地球約{{ earths.toFixed(1) }}周できるね🌏

</template>

<script>
  import particlesjs from '../scripts/particlesjs.es6';

  export default {
    data: () => ({
      steps: 0,
      points: 0,
      gachas: 0,
      heights: 160,
      distance: 0,
      earths: 0,
    }),
    methods: {
      calculateDistance: function () {
        this.distance = (this.heights * 0.45 * 0.00001) * this.steps;
        this.earths = this.distance / 12742;
      },
    },
    watch: {
      steps: function (steps) {
        this.points = (steps / 1000) * 40;
        this.gachas = this.points / 1000;
        this.calculateDistance();
      },
      points: function (points) {
        this.steps =  (points / 40) * 1000;
        this.gachas = points / 1000;
        this.calculateDistance();
      },
      gachas: function (gachas) {
        this.points = gachas * 1000;
        this.steps = (this.points / 40) * 1000;
        this.calculateDistance();
      },
      heights: function (heights) {
        this.calculateDistance();
      },
    }
  }
</script>

<style module lang='sass'>
.app
  padding: 60px 0
  &__inner
    padding: 25px 25px 30px
    background-color: rgba(#fff, .9)
    border-radius: 10px
    max-width: 300px
    margin: 0 auto
    box-shadow: 0 2px 3.7px .3px rgba(#333, .2)
  &__slime
    display: block
    width: 30px
    height: 30px
    margin: 0 auto
    filter: drop-shadow(0 4px 4px rgba(#333,.3)) brightness(120%)
    animation: slimeJump 2s linear infinite
  &__title
    margin-top: 6px
    font-size: 1.6rem
    font-weight: bold
    text-align: center
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-size: 200% 100%
    background-position: left center
    animation: textGradient 2s linear alternate infinite
.form
  margin: 14px auto
  max-width: 160px
  &__label
    font-size: 1.2rem
    font-weight: bold
  &__field
    display: flex
    margin-bottom: 10px
  &__input
    flex: 1
  &__unit
    width: 1.6em
    font-size: 1.2rem
    text-align: right

.balloon
  margin-top: 20px
  padding: 10px
  border-radius: 40px
  background-color: #f7fafc
  text-align: center
  &__input
    margin: 0 2px
    width: 40px

@keyframes slimeJump
  0%, 40%
    transform: translateY(0) rotateY(0deg)
    filter: drop-shadow(0 4px 4px rgba(#333,.3)) brightness(120%)
  50%
    transform: translateY(-4px) rotateY(180deg)
    filter: drop-shadow(0 8px 2px rgba(#333,.4))
  60%, 100%
    transform: translateY(0) rotateY(360deg)
    filter: drop-shadow(0 4px 4px rgba(#333,.3)) brightness(120%)

@keyframes textGradient
  0%
    background-position: left center
  50%
    background-position: center center
  100%
    background-position: right center
</style>

