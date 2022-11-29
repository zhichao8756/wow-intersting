<template>
  <div class="container">
    <div class="road">
      <div ref="background" class="bg" :style="bgStyle" />
    </div>
    <div class="car-container">
      <div ref="car" class="car2" />
      <div class="car">
        <div :ref="setItemRef" class="ball" />
        <div :ref="setItemRef" class="ball" style="margin-left: 55px" />
      </div>
    </div>

    <div ref="road" class="road">
      <div class="road1" :style="bgStyle" />
      <div class="grass" :style="bgStyle" />
    </div>
    <div>
      <button @click="start">开始</button>
      <button @click="jump">跳跃</button>
    </div>
  </div>
</template>
<script setup>
import anime from 'animejs'
import { ref, onMounted, nextTick, reactive } from 'vue'
const ball = ref([])
const car = ref()
const background = ref()
const setItemRef = (el) => {
  ball.value.push(el)
}
const road = ref()
const bgStyle = reactive({
  '--x-offset': null
})

// const timeLine = ref(null)
onMounted(async () => {
  await nextTick()
  bgStyle['--x-offset'] = 1000 + 'px'
  keyDown()
  // init()
})
/* function init () {
  timeLine.value = anime.timeline({
    targets: ball.value,
    easing: 'linear',
    rotate: '1turn',
    loop: true
  })
} */
/* function test () {
  const width = road.value.offsetWidth
  const newWidth = width + 100
  console.log(newWidth)
  road.value.style.width = newWidth
} */
function keyDown () {
  document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      jump()
    }
  })
}
function start () {
  anime({
    targets: ball.value,
    easing: 'easeInCubic',
    rotate: [0, 3600],
    left: 400,
    duration: 7000,
    complete: () => {
      speed()
    }
  })
  anime({
    targets: car.value,
    left: [{
      value: 400, easing: 'easeInCubic', duration: 7000
    }]
  })
  anime({
    targets: car.value,
    keyframes: [
      { top: 15 },
      { top: 18 },
      { top: 20 }
      // { top: 1 }
    ],
    duration: 1500,
    easing: 'linear',
    loop: true
  })
  anime({
    targets: road.value,
    easing: 'easeInCubic',
    translateX: [0, -1000],
    duration: 7000
  })
  anime({
    targets: background.value,
    easing: 'easeInCubic',
    translateX: [0, -1000],
    duration: 7000
  })
}
function speed () {
  anime({
    targets: ball.value,
    easing: 'linear',
    rotate: [0, 3600],
    loop: true,
    duration: 2000
  })
  anime({
    targets: road.value,
    easing: 'linear',
    loop: true,
    translateX: [0, -1000],
    duration: 2000
  })
  anime({
    targets: background.value,
    easing: 'linear',
    loop: true,
    translateX: [0, -1000],
    duration: 2000
  })
}
function jump () {
  anime({
    targets: ball.value,
    easing: 'easeInOutQuad',
    top: [0, -200, 0],
    // translateY: -250,
    duration: 1500
  })
  anime({
    targets: car.value,
    easing: 'easeInOutQuad',
    top: [35, -160, 35],
    // translateY: -250,
    duration: 1500
  })
}
</script>
<style scoped>
:root {
  --x-offset: 2000px;
}
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("../assets/carMotion/tire.png");
  background-size: 100%;

}
.road {
  width: 3000px;
}
.road1 {
  height: 67px;
  background: url("../assets/carMotion/road2.png");
  background-size: var(--x-offset) 100%, 100%;
  background-repeat: repeat-x;
}
.grass {
  display: inline-block;
  height: 135px;
  width: 100%;
  background: url("../assets/carMotion/grass2.png");
  background-repeat: repeat-x;
  background-size: var(--x-offset) 100%, 100%;
  position: relative;
  top: -45px;
}
.bg {
  width: 100%;
  height: 400px;
  background: url("../assets/carMotion/bg2.png");
  background-size: var(--x-offset) 100%, 100%;
  position: relative;
  top: 160px;
  background-repeat: repeat-x;
}
.container {
  overflow: hidden;
  width: 2000px;
  height: 800px;
  padding-top: 200px;
}
.car-container {
  position: relative;
  top: 50px;
  z-index: 999;
}
.car {
  display: flex;
  padding-left: 20px;
}
.car2 {
  width: 200px;
  height: 100px;
  background: url("../assets/carMotion/car.png");
  background-size: 100% 100%;
  position: relative;
  top: 18px;
}
</style>
