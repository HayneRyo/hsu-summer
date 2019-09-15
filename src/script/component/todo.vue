<template lang='pug'>
  section
    #app
      h2 Todo LIST
      form(v-on:submit.prevent)
        input(type="text" v-model="newItem")
        button(v-on:click="addItem") 追加
      ul
        li(v-for="(todo,index) in todos")
          input(type="checkbox" v-model="todo.isDone")
          span(v-bind:class="{done:todo.isDone}") {{todo.item}}
          button(v-on:click="deleteItem(index)") 削除
      <pre>{{$data}}</pre>
</template>

<script>
  export default {
    data: () => ({
      newItem: '',
      todos: []
    }),
    methods: {
      addItem: function(event) {
        // 空ならreturn
        if (this.newItem == '') return;

        var todo = {
          item: this.newItem,
          isDone: false
        }
        this.todos.push(todo);
        this.newItem = '';
      },
      deleteItem: function(index){
        this.todos.splice(index,1)
      }
    }
  }
</script>

<style scoped lang='sass'>
ul
  list-style: none
li > span.done
  text-decoration: line-through
</style>