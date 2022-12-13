<template>
  <!--  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">&lt;!&ndash;! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. &ndash;&gt;
      <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
    </svg>
  </div>-->
  <div id="navbarContainer">
    <div id="navbar">
      <div id="bubbleWrapper">
        <div class="bubble" @click="test('#ffcc80', 'user')">
          <span class="icon">
            <svg
              :ref="(el) => svgIcon(el,'user')" class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </span>
        </div>
        <div class="bubble" @click="test('#81d4fa', 'message')">
          <span class="icon">
            <svg
              :ref="(el) => svgIcon(el,'message')" class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
            </svg>
          </span>
        </div>
        <div class="bubble" @click="test('#c5e1a5', 'bell')">
          <span class="icon">
            <svg
              :ref="(el) => svgIcon(el,'bell')" class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
            </svg>
          </span>
        </div>
        <div class="bubble" @click="test('#ce93d8', 'heart')">
          <span class="icon">
            <svg
              :ref="(el) => svgIcon(el,'heart')" class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
          </span>
        </div>
      </div>
      <!--      <div id="menuWrapper">
        <div id="menu1" class="menuElement" @click="move('1', '50px', '#ffcc80')"><i class="fas fa-home" /></div>
        <div id="menu2" class="menuElement" @click="move('2', '150px', '#81d4fa')"><i class="fab fa-twitter" /></div>
        <div id="menu3" class="menuElement" @click="move('3', '250px', '#c5e1a5')"><i class="fas fa-bell" /></div>
        <div id="menu4" class="menuElement" @click="move('4', '350px', '#ce93d8')"><i class="fas fa-user" /></div>
      </div>-->
    </div>
    <!--    <div id="bgWrapper">
      <div id="bg" />
      <div id="bgBubble" />
    </div>-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs'
const svgRef = ref([])
const isActive = ref('')
const svgIcon = (el, type) => {
  svgRef.value.push({ element: el, type })
}
function test (background, type) {
  if (isActive.value === type) return
  isActive.value = type
  for (let i = 0; i < svgRef.value.length; i++) {
    const element = svgRef.value[i].element
    element.style.fill = '#000'
    element.style.stroke = '#000'
    if (svgRef.value[i].type === type) {
      element.style.fill = 'none'
      anime({
        targets: '#navbarContainer',
        duration: 300,
        backgroundColor: background,
        ease: 'easeInOutCubic'
      })
      anime({
        targets: element,
        strokeDashoffset: ['1600', 0],
        duration: 600,
        easing: 'linear',
        complete: function () {
          fill(element, background)
        }
      })
    }
  }
}
function fill (svgRef, background) {
  anime({
    targets: svgRef,
    fill: ['none', background],
    stroke: ['#000', background],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .1)',
    complete: function () {
      shake(svgRef)
    }
  })
}
function shake (svgRef) {
  anime({
    targets: svgRef,
    rotate: [0, -20, 20, 0],
    duration: 700,
    easing: 'easeOutQuart'
  })
}
</script>

<style scoped lang="scss">

body {
  background: #37474f;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}

#navbarContainer{
  width: 400px;
  min-width: 400px;
  height: 70vh;
  background-color: #ffcc80;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

#navbar{
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: absolute;
}

#bubbleWrapper{
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.bubble{
  background-color: #fff;
  width: 55px;
  height: 55px;
  // bottom: 85px;
  //border-radius: 50%;
  z-index: 999;
  // transform: translateY(160%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon{
  //opacity: 0;
  position: absolute;
}
.svgIcon {
  fill: #000;
  stroke: #000;
  stroke-dasharray: 1600, 1600;
  stroke-width: 3;
  stroke-dashoffset: 0;
  stroke-linecap: round;
}
</style>
