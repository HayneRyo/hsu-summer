<template lang='pug'>
  section
    #app
      header
        h2 TODO LIST
        form(v-on:submit.prevent)
          input(type="text" v-model="newItem")
          button(v-on:click="addItem")
            i(class="fas fa-plus-circle")
            span 追加
      div#lists
        ul
          li(v-for="(todo,index) in todos" v-bind:class="{done:todo.isDone}")
            label(class="checkbox")
              input(type="checkbox" v-model="todo.isDone")
              span {{todo.item}}
            label(class="button")
              button(v-on:click="deleteItem(index)") 削除
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
body
  padding: 100px
li > span.done
  text-decoration: line-through
</style>