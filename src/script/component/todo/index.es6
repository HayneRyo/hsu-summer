import Vue from 'vue';
import store from './store.es6';
import App from './app.vue';


/**
 *  Vue
 *  @version 2019/10/01
 *  @author ryo-as
 */
new Vue({
  el: '#todo',
  store,
  components: { App },
  template: '<App />'
});
