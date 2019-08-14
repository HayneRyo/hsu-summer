<template lang='pug'>
  section.container.youtube
    h2 Youtubeとりにいくでぇ😜
    input.input(type="text", v-model="keyword", placeholder="Enter a keyword to fetch in YouTube")
    button.button(v-on:click="search") 探す
    ul.list
      li.item(v-for="item in items" v-bind:keys="item.id.videoId")
        a.link(v-bind:href="'https://youtube.com/watch?v=' + item.id.videoId" target="_blank")
          h2 {{ item.snippet.title }}
          div.wrap
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
.container.youtube .list{
  margin: 1em 0 -1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container.youtube .list:empty{
  margin: 0;
}
.container.youtube .item{
  opacity: 0;
  list-style: none;
  width: calc(50% - 0.5em);
  padding: 1.4em 1.4em 1.6em;
  margin-bottom: 1em;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  animation: itemIn 600ms ease-out 0s forwards;
}
.container.youtube .item:nth-child(2){ animation-delay: 100ms; }
.container.youtube .item:nth-child(3){ animation-delay: 200ms; }
.container.youtube .item:nth-child(4){ animation-delay: 300ms; }
.container.youtube .item:nth-child(5){ animation-delay: 400ms; }
.container.youtube .item:nth-child(6){ animation-delay: 500ms; }
.container.youtube .item:nth-child(7){ animation-delay: 600ms; }
.container.youtube .item:nth-child(8){ animation-delay: 700ms; }
.container.youtube .item:nth-child(9){ animation-delay: 800ms; }
.container.youtube .item:nth-child(10){ animation-delay: 900ms; }
.container.youtube .item:nth-child(11){ animation-delay: 1000ms; }
.container.youtube .item:nth-child(12){ animation-delay: 1100ms; }
@keyframes itemIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.container.youtube .item .wrap{
  display: flex;
  color: #999;
  font-size: 13px;
}
.container.youtube .item img{
  margin-right: 1em;
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
.image {
  margin: 0 auto
}
</style>
