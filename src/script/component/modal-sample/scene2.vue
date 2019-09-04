<template lang='pug'>
  article
    h1 ２ページ
    button(v-on:click="$emit('linkTo', 1)") go to 1
    button(v-on:click="$emit('linkTo', 3)") go to 3
</template>
