<template lang='pug'>
  article
    h1 １ページ
    button(v-on:click="$emit('linkTo', 2)") go to 2
</template>
