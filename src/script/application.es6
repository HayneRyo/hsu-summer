import Vue from 'vue';
import Sample from './component/sample.vue';
import Todo from './component/todo.vue';

new Vue({
  el: '#sample',
  components: { Sample },
  template: '<Sample />'
});

var app = new Vue({
  el: '#todo',
  components: { Todo },
  template: '<Todo />'
});

