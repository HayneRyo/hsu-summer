<template lang='pug'>
  header
    div.container
      h1.logo
        router-link(to='/') すんさま会
      div.menu
        router-link.menu__list(to='/sample1') sample1
        router-link.menu__list(to='/sample2') sample2
        router-link.menu__list(to='/sample3') sample3
        router-link.menu__list(to='/sample4') sample4
</template>

<script>
</script>

<style scoped>
header {
  background-color: #eee;
  color: #333;
}
.container {
  width: 1024px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.logo {
  margin: 0;
  font-size: 1.4rem;
}
.menu {
  display: flex;
  height: 100%;
}
.menu__list {
  height: 50px;
  line-height: 50px;
}
.menu__list:hover {
  text-decoration: underline;
}
.menu__list:not(:last-child) {
  margin-right: 24px;
}
</style>
