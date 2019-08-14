<template lang='pug'>
  section.click-toggle(v-bind:class="{active:isActive01}")
    div.btn(v-on:click="isActive01=!isActive01")
      <svg class="icn-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></g></svg>
      <svg class="icn-close"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></g></svg>
    div.content
      ul
        li
          a(href="#") New Entry
        li
          a(href="#") PickUp
        li
          a(href="#") Recommend
        li
          a(href="#") SNS
        li
          a(href="#") ABOUT
</template>

<script>
export default {
    data(){
      return {
        isActive01: false
      }
    }
}
</script>

<style scoped>
.click-toggle .btn{
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 2;
}
.click-toggle .btn:hover svg{
  fill: #00c0ff;
}
.click-toggle .btn svg{
  max-width: 100%;
  height: auto;
  fill: #fff;
}
.click-toggle .btn svg.icn-menu{
  display: block;
}
.click-toggle .btn svg.icn-close{
  display: none;
}
.click-toggle .content{
  display: none;
  background: rgba(0,0,0,0.8);
  padding: 8em 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  animation: anm-menulist 300ms ease-out 0s;
}
@keyframes anm-menulist {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.click-toggle .content ul{
  width: 100%;
}
.click-toggle .content li{
  text-align: center;
}
.click-toggle .content a{
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  padding: 1em;
  display: block;
  transition: all 300ms ease-out 0s;
}
.click-toggle .content a:hover{
  color: #00c0ff;
  background: rgba(255,255,255,0.1);
}
/* active */
.click-toggle.active .btn svg.icn-menu{
  display: none;
}
.click-toggle.active .btn svg.icn-close{
  display: block;
  animation: anm-fadein 300ms ease-out 0s;
}
@keyframes anm-fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.click-toggle.active .content{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

