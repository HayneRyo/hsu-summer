<template lang='pug'>
  .gauge
    dl.gauge__container
      dt.gauge__heading 達成率
      dd.gauge__graph
        .gauge__graphDenominator
          .gauge__graphMolecule(v-bind:style="{right: graph}")
      dd
        span.gauge__value {{molecule}}
        | /{{denominator}}
</template>

<script>
  export default {
    computed: {
      denominator() {
        return this.$store.state.todos.length;
      },
      molecule() {
        return this.$store.state.todos.filter(({status}) => status).length;
      },
      graph() {
        return `${100 - (this.$store.state.todos.filter(({status}) => status).length / this.$store.state.todos.length * 100)}%`
      },
    },
    methods: {
    }
}
</script>

<style scoped lang='sass'>
.gauge
  display: flex
  justify-content: center
  align-items: center
  border-bottom: 1px solid #eee
  width: 100%
  padding: 5px 15px 10px
  &__container
    display: flex
    align-items: center
    width: 90%
    font-size: 1.2rem
  &__heading
    font-weight: bold
  &__graph
    flex: 1
    padding: 0 8px
    &Denominator
      position: relative
      height: 10px
      width: 100%
      border: 1px solid #eee
      border-radius: 5px
    &Molecule
      position: absolute
      top: 0
      bottom: 0
      left: 0
      background: #42b983
      border-radius: 5px
      transition: all 300ms 0s ease
  &__value
    color: red
    font-size: 1.4rem
    font-weight: bold
</style>

