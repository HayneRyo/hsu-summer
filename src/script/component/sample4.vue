<template lang='pug'>
  section.container.template-container.youtube(v-bind:class="{active:isSearch}")
    div.overlay
      div.ol-face-wrap
       span.ol-face 😜
    div
      h2 Youtubeとりにいくでぇ
        span.face 😜
      input.input(type="text", v-model="keyword", placeholder="Enter a keyword to fetch in YouTube")
      button.button(v-on:click="search(); isSearch=true") 探す
      ul.list
        li.item(v-for="item in items" v-bind:keys="item.id.videoId")
          a.link(v-bind:href="'https://youtube.com/watch?v=' + item.id.videoId" target="_blank")
            h2 {{ item.snippet.title }}
            div.wrap
              figure
                img.image(v-bind:src="item.snippet.thumbnails.default.url")
              p {{ item.snippet.description }}
</template>

<script>
  export default {
    data: () => ({
      apiKey: 'AIzaSyBWM8sJVyiRQ-1kywgZiGoQEvIZXWv9etE',
      keyword: '',
      items: [],
    }),
    methods: {
      search() {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${this.keyword}&part=snippet&maxResults=12`;
        // ajax
        fetch(url)
          .then(res => res.json())
          .then(json => this.items = json.items);
      },
    },
  }
</script>

<style scoped>
.container.youtube .overlay{
  display: none;
  opacity: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
}
.container.youtube h2{
  overflow: hidden;
}
.container.youtube .list{
  overflow: hidden;
  height: 0;
  margin: 1em 0 -1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container.youtube .list:empty{
  margin: 0;
}
.container.youtube .item{
  display: block;
  opacity: 0;
  list-style: none;
  width: calc(33.333% - 0.5em);
  padding: 1.4em 1.4em 1.6em;
  margin-bottom: 1em;
  background: #efefef;
  border-radius: 3px;
  word-break: break-all;
  animation: itemIn 800ms ease-out 0s forwards;
}
.container.youtube .item:nth-child(1){ animation-delay: 3400ms; }
.container.youtube .item:nth-child(2){ animation-delay: 3500ms; }
.container.youtube .item:nth-child(3){ animation-delay: 3600ms; }
.container.youtube .item:nth-child(4){ animation-delay: 3700ms; }
.container.youtube .item:nth-child(5){ animation-delay: 3800ms; }
.container.youtube .item:nth-child(6){ animation-delay: 3900ms; }
.container.youtube .item:nth-child(7){ animation-delay: 4000ms; }
.container.youtube .item:nth-child(8){ animation-delay: 4100ms; }
.container.youtube .item:nth-child(9){ animation-delay: 4200ms; }
.container.youtube .item:nth-child(10){ animation-delay: 4300ms; }
.container.youtube .item:nth-child(11){ animation-delay: 4400ms; }
.container.youtube .item:nth-child(12){ animation-delay: 4500ms; }
@keyframes itemIn {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
.container.youtube .item .wrap{
  display: flex;
  color: #999;
  font-size: 13px;
}
.container.youtube .item figure{
  margin-right: 1em;
  min-width: 128px;
}
.container.youtube .item figure img{
  width: 100%;
  height: auto;
}
.input {
  width: 500px;
  max-width: 100%;
}
.button {
  margin-left: 10px;
}
.link {
  color: #333;
  text-decoration: none;
}


.container.youtube .ol-face-wrap{
  height: 1.2em;
  overflow: hidden;
}
.container.youtube .ol-face-wrap .ol-face{
  display: block;
  transform: translateY(1em);
  transition: all 800ms ease-out;
}

/*
  active
*/
.container.youtube.active .face{
  display: inline-block;
  transform: translateY(2em);
  transition: all 600ms ease-out;
}
.container.youtube.active .ol-face-wrap .ol-face{
  transform: translateY(1em);
  animation: face-up 800ms ease-out 800ms forwards;
}
@keyframes face-up {
  0% { transform: translateY(1em); }
  100% { transform: translateY(0); }
}
.container.youtube.active .ol-face-wrap{
  animation: face-zoom 1000ms ease-out 2000ms forwards;
}
@keyframes face-zoom {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  80%{
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
}
.container.youtube.active .overlay{
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 100px;
  animation: overlay-fadeout 800ms ease-out 3000ms forwards;
}
@keyframes overlay-fadeout {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
.container.youtube.active .list{
  animation: listIn 1000ms ease-in-out 3400ms forwards;
}
@keyframes listIn {
  0% {
    height: 0;
  }
  99% {
    height: 100vh;
  }
  100% {
    height: auto;
  }
}

/*
  Responcive
*/
@media only screen and (max-width: 1480px){
  .container.youtube .item{
    width: calc(50% - 0.5em);
  }
}
@media only screen and (max-width: 920px){
  .container.youtube .item{
    width: 100%;
  }
}

</style>
