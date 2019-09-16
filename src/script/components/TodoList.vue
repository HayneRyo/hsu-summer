<template lang='pug'>
  .todo
    h2.todo__title {{ title }}
    draggable.todo__list(v-model='tasks' group='tasks' tag='ul' @start='onDragStart' @end='onDragEnd')
      li.todo__item(v-for='(item, index) in tasks' :key='index' :class="{'is-done': title == 'DONE'}")
        p {{ item }}
        span.todo__delete(@click='deleteTask(index)') ×
      .todo__empty(v-if='!tasks.length') タスクがありません！
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    components: {
      draggable
    },
    props: {
      type: String,
      title: String,
      items: Array,
    },
    data: function() {
      return {
        tasks: this.items,
      }
    },
    methods: {
      deleteTask: function(index) {
        if (window.confirm(`「${this.items[index]}」を削除しますか？`)) this.$emit('deleteTodo', this.type, index);
      },
      onDragStart() {
        this.drag = true;
        this.$emit('save', this.type, this.tasks);
      },
      onDragEnd() {
        this.drag = false;
        this.$emit('save', this.type, this.tasks);
      },
    }
  }
</script>

<style module lang='sass'>
.todo
  margin: 30px 15px
  width: 300px
  background-color: #efefef
  border-radius: 10px
  padding: 25px 20px 30px
  &__title
    font-weight: bold
    color: #333
    text-align: center
  &__list
    margin-top: 20px
    list-style: none
  &__item
    position: relative
    display: flex
    align-items: center
    background-color: #ddd
    border-radius: 4px
    padding: 10px 15px
    color: #333
    transition: all .3s ease
    cursor: pointer
    &::before
      content: ''
      display: block
      width: 10px
      height: 5px
      border-left: 3px solid #efefef
      border-bottom: 3px solid #efefef
      transform: rotate(-45deg)
      margin-right: 8px
      margin-bottom: 4px
    &.is-done::before
      animation: check 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
    &:not(:last-child)
      margin-bottom: 15px
    &:hover
      background-color: rgba(#00ab66,.3)
      .todo__delete
        visibility: visible
    > p
      flex: 1
  &__delete
    position: absolute
    right: 10px
    visibility: hidden
    color: #666
    padding: 2px 4px
    border-radius: 4px
    &:hover
      background-color: rgba(#00ab66,.5)
  &__empty
    margin-top: 20px
    padding: 10px 15px
    color: #333
    text-align: center
    animation: blink 1s step-end infinite

@keyframes blink
  75%
    opacity: 0

@keyframes check
  0%
    border-left-color: #00ab66
  50%
    border-bottom-color: #00ab66
  100%
    border-color: #00ab66
</style>

