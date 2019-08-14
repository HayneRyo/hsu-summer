<template lang='pug'>
  section.container
    h1 Youtubeとりにいくでぇ😜
    input(type="text", v-model="keyword", placeholder="Enter a keyword to fetch in YouTube", class="input")
    button(v-on:click="search") 探す
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
  .container {
    margin: 10px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 2px;
    background-color: #fff;
    color: #333;
  }
  .input {
    min-width: 500px;
  }
  .list {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item {
    list-style: none;
    margin: 5px;
    padding: 20px;
    width: calc(50% - 20px);
    box-shadow: rgba(0,0,0,0.2) 0 2px 2px;
    border-radius: 2px;
    box-sizing: border-box;
  }
  .link {
    color: #333;
    text-decoration: none;
  }
  .image {
    margin: 0 auto
  }
</style>
