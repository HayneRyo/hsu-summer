<template lang='pug'>
  div.menu2-main
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
.main{
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: -4em;
  left: -4em;
}
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
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: visibility 400ms;
}
.click-toggle .content ul{
  width: 100%;
  height: 100%;
  display: flex;
}
.click-toggle .content li{
  overflow: hidden;
  text-align: center;
  height: 100%;
  visibility: hidden;
  width: 0;
  margin-right: 20vw;
  transition:
    width 400ms cubic-bezier(0.095, 0.760, 0.460, 0.995),
    margin-right 400ms cubic-bezier(0.095, 0.760, 0.460, 0.995),
    visibility 400ms cubic-bezier(0.095, 0.760, 0.460, 0.995);
}
.click-toggle .content li:nth-child(2){
  transition-delay: 60ms;
}
.click-toggle .content li:nth-child(3){
  transition-delay: 120ms;
}
.click-toggle .content li:nth-child(4){
  transition-delay: 180ms;
}
.click-toggle .content li:nth-child(5){
  transition-delay: 240ms;
}
.click-toggle .content a{
  background: rgba(0, 0, 0, 0.7);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  width: 20vw;
  height: 100%;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  letter-spacing: 0.02em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: all 300ms ease-out 0s;
}
.click-toggle .content a:hover{
  background: rgba(0, 0, 0, 0.9);
  color: #00c0ff;
  letter-spacing: 0.16em;
}
/* active */
.click-toggle.active .btn svg.icn-menu{
  display: none;
}
.click-toggle.active .btn svg.icn-close{
  display: block;
  animation: anm-close 300ms ease-out 0s;
}
@keyframes anm-close {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.click-toggle.active .content{
  visibility: visible;
}
.click-toggle.active .content li{
  visibility: visible;
  width: 20vw;
  margin-right: 0;
}
</style>

