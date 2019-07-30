import Vue from 'vue';
import Sample1 from './component/sample1.vue';
import Sample2 from './component/sample2.vue';
import Sample3 from './component/sample3.vue';

new Vue({
  el: "#sample1", // アプリをマウントする要素(セレクタで指定)
  components: { Sample1 }, // Appというコンポーネントを使うよ、という宣言
  template: '<Sample1 />' // el(今回は#app)の中に表示する内容
});

new Vue({
  el: "#sample2",
  components: { Sample2 },
  template: '<Sample2 />'
});

new Vue({
  el: "#sample3",
  components: { Sample3 },
  template: '<Sample3 />'
});