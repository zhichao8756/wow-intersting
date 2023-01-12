<template>
  <div style="position: relative; width: 1000px; height: 500px">
    <div class="stage1" />
    <div class="stage2" />
    <div ref="ball" class="ball" />
  </div>
</template>

<script setup>
/*eslint-disable*/
import anime from 'animejs'
import { ref, onMounted, nextTick } from 'vue'
const ball = ref()
onMounted(async () => {
  await nextTick()
  start()
})
function start () {
  anime({
    targets: ball.value,
    easing: 'linear',
    translateX: 180,
    translateY: 0,
    rotate: [0, 3600],
    duration: 2000,
    complete: () => {
      drop()
    }
  })
}
function drop () {
  /*anime({
    targets: ball.value,
    easing: 'linear',
    rotate: [0, 3600],
    duration: 2000
  })*/
  anime({
    targets: ball.value,
    // rotate: [0, 3600],
    translateX: {
      value: '+=110',
      easing: 'linear',
      duration: 1000
    },
    translateY: {
      value: '200',
      easing: 'cubicBezier(.29, 0, .61, .23)',
      duration: 1000
    },
    rotate: {
      value: [0, 360],
      duration: 1000
    },
    complete: () => {
      bounce1()
    }
  })
}
// first bounce
function bounce1 () {
  anime({
    targets: ball.value,
    translateX: {
      value: '+=30',
      easing: 'linear',
      duration: 500
    },
    translateY: {
      value: '-=100',
      // easing: 'cubicBezier(.25, 0, .85, .36)',
      easing: 'cubicBezier(.05,.44,.12,.99)',
      duration: 500
    },
    rotate: {
      value: [360, 0],
      duration: 500
    },
    complete: () => {
      bounce2()
    }
  })
}
function bounce2 () {
  anime({
    targets: ball.value,
    translateX: {
      value: '+=30',
      easing: 'linear',
      duration: 500
    },
    translateY: {
      value: '+=100',
      easing: 'cubicBezier(.29, 0, .61, .23)',
      // easing: 'cubicBezier(.05,.44,.12,.99)',
      duration: 500
    },
    rotate: {
      value: [0, 120],
      duration: 500
    },
    complete: () => {
      bounce3()
    }
  })
}
// second bounce
function bounce3 () {
  anime({
    targets: ball.value,
    translateX: {
      value: '+=30',
      easing: 'linear',
      duration: 500
    },
    translateY: {
      value: '-=50',
      // easing: 'cubicBezier(.25, 0, .85, .36)',
      easing: 'cubicBezier(.05,.44,.12,.99)',
      duration: 500
    },
    rotate: {
      value: [0, 120],
      duration: 500
    },
    complete: () => {
      bounce4()
    }
  })
}
function bounce4 () {
  anime({
    targets: ball.value,
    translateX: {
      value: '+=30',
      easing: 'linear',
      duration: 500
    },
    translateY: {
      value: '+=50',
      easing: 'cubicBezier(.29, 0, .61, .23)',
      duration: 500
    },
    rotate: {
      value: [0, 120],
      duration: 500
    },
    complete: () => {
      roll()
    }
  })
}
function roll () {
  anime({
    targets: ball.value,
    translateX: {
      value: '+=30',
      easing: 'linear',
      duration: 500
    },
    rotate: {
      value: [0, 130],
      duration: 500
    },
    complete: () => {
      // bounce3()
    }
  })
}
</script>
<style scoped lang="scss">
.stage1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 50px;
  border: 1px solid #ddd;
  background: repeating-linear-gradient(-45deg, grey 0 1.4px, transparent 0 7px);
}
.stage2 {
  position: absolute;
  top: 200px;
  left: 300px;
  width: 200px;
  height: 50px;
  border: 1px solid #ddd;
  background: repeating-linear-gradient(-45deg, grey 0 1.4px, transparent 0 7px);
}
.ball {
  position: absolute;
  top: -58px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ddd;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
</style>
