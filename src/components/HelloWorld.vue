<template>
  <div class="container">
    <div ref="car" class="car2" />
    <div class="car">
      <div :ref="setItemRef" class="ball" />
      <div :ref="setItemRef" class="ball" style="margin-left: 100px" />
    </div>

    <div ref="road" class="road">
      <span class="rock" />
    </div>
    <button @click="start">开始</button>
    <button @click="jump">跳跃</button>
  </div>
</template>
<script setup>
import anime from 'animejs'
import { ref, onMounted, nextTick } from 'vue'
const ball = ref([])
const car = ref()
const setItemRef = (el) => {
  ball.value.push(el)
}
const road = ref()
// const timeLine = ref(null)
onMounted(async () => {
  await nextTick()
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
    /* top: [
      { value: 0, easing: 'linear', duration: 500 },
      { value: 5, easing: 'linear', duration: 500, loop: true },
      { value: -5, easing: 'linear', duration: 500, delay: 500, loop: true }
    ] */
  })
  anime({
    targets: car.value,
    keyframes: [
      { top: 30 },
      { top: 40 },
      { top: 35 }
      // { top: 1 }
    ],
    duration: 1500,
    easing: 'linear',
    /* top: [
      { value: 0, easing: 'linear', duration: 500, delay: 500, loop: true },
      { value: 2, easing: 'linear', duration: 500, loop: true },
      { value: -2, easing: 'linear', duration: 500, delay: 1000, loop: true },
      { value: 0, easing: 'linear', duration: 500, delay: 1000, loop: true }
    ], */
    loop: true
  })
  anime({
    targets: road.value,
    easing: 'easeInCubic',
    translateX: [0, -1000],
    duration: 7000
    /* complete: () => {
      console.log(233333)
      speed()
    } */
  })
}
function speed () {
  console.log(9999)
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
.ball {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("../assets/tire.png");
  background-size: 100%;
}
.road {
  width: 2000px;
  height: 3px;
  background: #ddd;
}
.rock {
  display: inline-block;
  height: 20px;
  width: 20px;
  background: red;
}
.container {
  overflow: hidden;
  width: 1000px;
  height: 800px;
  padding-top: 300px;
}
.car {
  display: flex;
  padding-left: 40px;
}
.car2 {
  width: 500px;
  height: 300px;
  background: url("../assets/car.png");
  background-size: 100%;
  position: relative;
  top: 35px;
}
</style>
