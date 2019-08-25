import Vue from 'vue';
import Router from 'vue-router';
import Home from '../component/home.vue';
import Sample1 from '../component/sample1.vue';
import Sample2 from '../component/sample2.vue';
import Sample3 from '../component/sample3.vue';
import Sample4 from '../component/sample4.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sample1',
      name: 'sample1',
      component: Sample1,
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: Sample2,
    },
    {
      path: '/sample3',
      name: 'sample3',
      component: Sample3,
    },
    {
      path: '/sample4',
      name: 'sample4',
      component: Sample4,
    },
  ]
})
export default router;
