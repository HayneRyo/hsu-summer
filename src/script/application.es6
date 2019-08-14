import Vue from 'vue';
import Sample1 from './component/sample1.vue';
import Sample2 from './component/sample2.vue';
import Sample3 from './component/sample3.vue';
<<<<<<< Updated upstream
import Sample4 from './component/sample4.vue';
import ModalSample from './component/modal-sample.vue';
=======
>>>>>>> Stashed changes
import Menu1 from './component/menu1.vue';
import Menu2 from './component/menu2.vue';
import Menu3 from './component/menu3.vue';

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

new Vue({
  el: "#modal-sample",
  components: { ModalSample },
  template: '<ModalSample />'
});

new Vue({
  el: "#menu1",
  components: { Menu1 },
  template: '<Menu1 />'
});

new Vue({
  el: "#menu2",
  components: { Menu2 },
  template: '<Menu2 />'
});

new Vue({
  el: "#menu3",
  components: { Menu3 },
  template: '<Menu3 />'
<<<<<<< Updated upstream
});

new Vue({
  el: "#sample4",
  components: { Sample4 },
  template: '<Sample4 />'
});

new Vue({
  el: "#modal-sample",
  components: { ModalSample },
  template: '<ModalSample />'
});
=======
});
>>>>>>> Stashed changes
