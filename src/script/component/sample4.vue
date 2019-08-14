<template lang='pug'>
  section.container
    h2 Youtubeとりにいくでぇ😜
    input.input(type="text", v-model="keyword", placeholder="Enter a keyword to fetch in YouTube")
    button.button(v-on:click="search") 探す
    ul.list
      li.item(v-for="item in items" v-bind:keys="item.id.videoId")
        a.link(v-bind:href="'https://youtube.com/watch?v=' + item.id.videoId" target="_blank")
          img.image(v-bind:src="item.snippet.thumbnails.default.url")
          h2 {{ item.snippet.title }}
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
        const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${this.keyword}&part=snippet`;
        // ajax
        fetch(url)
          .then(res => res.json())
          .then(json => this.items = json.items);
      },
    },
  }
</script>

<style scoped>
  .input {
    width: 500px;
    max-width: 100%;
  }
  .button {
    margin-left: 10px;
  }
  .list {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list:empty {
    margin: 0;
  }
  .item {
    list-style: none;
    margin: 10px 5px;
    padding: 20px;
    width: calc(50% - 20px);
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 2px;
    box-sizing: border-box;
  }
  .link {
    color: #fff;
    text-decoration: none;
    word-break: break-all;
  }
  .image {
    margin: 0 auto
  }
</style>
