import Vue from 'vue';
import Layout from './component/layout.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout />'
})
