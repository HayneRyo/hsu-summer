<template lang='pug'>
  nav.menu(v-bind:class="{active:isActive01}")
    div.btn(v-on:click="isActive01=!isActive01")
      <svg class="icn-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></g></svg>
      <svg class="icn-close"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></g></svg>
    ul
      li
        a(href="#")
          span New Entry
      li
        a(href="#")
          span PickUp
      li
        a(href="#")
          span Recommend
      li
        a(href="#")
          span SNS
      li
        a(href="#")
          span About
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
.menu{
  position: absolute;
  top: 0;
  right: -240px;
  display: flex;
  width: calc(60px + 240px);
  transition: all 300ms cubic-bezier(.25,0,.18,1) 0s;
}
.menu .btn{
  width: 60px;
  height: 60px;
  padding: 14px;
  cursor: pointer;
}
.menu .btn:hover svg{
  fill: #00c0ff;
  transition: all 300ms cubic-bezier(.25,0,.18,1) 0s;
}
.menu .btn svg{
  max-width: 100%;
  height: auto;
  fill: #fff;
}
.menu .btn svg.icn-menu{
  display: block;
}
.menu .btn svg.icn-close{
  display: none;
}
.menu ul{
  width: 240px;
  background: #333;
  min-height: 100vh;
}
.menu li a{
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  position: relative;
  transition: all 200ms cubic-bezier(.25,0,.18,1) 0s;
}
.menu li a:hover{
  color: #00c0ff;
  padding-left: 1.5em;
}
.menu li a span{
  position: relative;
  height: 30px;
  line-height: 30px;
  overflow: hidden;

}
.menu li a span::before{
  content: "";
  width: 0;
  height: 2px;
  background: #fff;
  top: calc(0.5em - 2px);
  left: 0;
  position: absolute;
  z-index: 2;
}
.menu li a span::after{
  display: none;
  content: "";
  width: 100%;
  height: 200%;
  background: #333;
  top: -50%;
  left: 0;
  position: absolute;
  z-index: 1;
}

/* active */
.menu.active{
  right: 0;
}
.menu.active .btn{
  background: #272727;
}
.menu.active .btn svg.icn-menu{
  display: none;
}
.menu.active .btn svg.icn-close{
  display: block;
}
.menu.active li a span::before{
  animation: anm-line 600ms cubic-bezier(0.095, 0.760, 0.460, 0.995) 200ms forwards;
}
.menu.active li a span::after{
  display: block;
  animation: anm-cover 600ms cubic-bezier(0.095, 0.760, 0.460, 0.995) 200ms forwards;
}
@keyframes anm-line {
  0% {
    width: 0;
    margin-left: 0;
  }
  50%{
    width: 100%;
    margin-left: 0;
  }
  100% {
    width: 0;
    margin-left: 100%;
  }
}
@keyframes anm-cover {
  0% {
    width: 100%;
    margin-left: 0;
  }
  50%{
    width: 100%;
    margin-left: 0;
  }
  100% {
    width: 0;
    margin-left: 100%;
  }
}
</style>

