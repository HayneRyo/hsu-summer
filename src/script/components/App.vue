<template lang='pug'>
  div.app
    .app__inner
      h1.app__title TodoList
      .app__wrap
        AddTodo(@addTodo='addTodo')
        TodoList(title='TODO' v-bind:items.sync='todos' @save='saveTodo' @deleteTodo='deleteTodo' type='todos')
        TodoList(title='DONE' v-bind:items.sync='dones' @save='saveTodo' @deleteTodo='deleteTodo' type='dones')
</template>

<script>
  import pixi from '../scripts/pixi.es6';
  import TodoList from './TodoList.vue';
  import AddTodo  from './AddTodo.vue';

  export default {
    components: {
      TodoList,
      AddTodo,
    },
    data: () => ({
      todos: JSON.parse(localStorage.getItem('todos')) || ['やらなければならないこと', 'なるはやでやること'],
      dones: JSON.parse(localStorage.getItem('dones')) || ['終わったやつ'],
    }),
    methods: {
      addTodo: function(newTask) {
        this.todos.push(newTask);
        this.setLocalStorage();
      },
      deleteTodo: function(type, index) {
        this[type].splice(index, 1);
        this.setLocalStorage();
      },
      saveTodo: function(type, tasks) {
        this[type] = tasks;
        this.setLocalStorage();
      },
      setLocalStorage: function() {
        ['todos', 'dones'].map(x => {
          localStorage.setItem(x, JSON.stringify(this[x]));
        });
      },
    },
  }
</script>

<style module lang='sass'>
.app
  padding: 60px 0
  height: 100vh
  width: 100vw

  color: #fff
  &__inner
    position: relative
    width: 800px
    margin: 0 auto
  &__title
    font-size: 2rem
    font-weight: bold
    text-align: center
  &__wrap
    display: flex
    align-items: flex-start
    justify-content: center
</style>

