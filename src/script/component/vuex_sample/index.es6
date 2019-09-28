import Vue from 'vue';
import store from './store.es6';
import App from './app.vue';

new Vue({
  el: '#todo',
  store,
  components: { App },
  template: '<App />'
});
