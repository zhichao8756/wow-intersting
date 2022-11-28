<template>
  <div style="width: 1000px; overflow: hidden">
    <div id="bg" ref="bg" :style="bgStyle" class="animation" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const bgStyle = reactive({
  width: null,
  '--x-offset': null
})
/* const image = reactive({
  width: 2000,
  height: 720
}) */
onMounted(() => {
  const fun = () => {
    // const clientHeight = document.body.clientHeight | (document.documentElement && document.documentElement.clientHeight)
    // const xOffset = parseInt(image.width / image.height * clientHeight)
    bgStyle['--x-offset'] = 1000 + 'px'
    bgStyle.width = 2000 + 'px'
  }
  window.onresize = () => {
    fun()
    // 重置 animation 保证动画刷新
    this.$refs.bg.classList.remove('animation')
    setTimeout(() => {
      this.$refs.bg.classList.add('animation')
    }, 100)
  }
  fun()
})
</script>

<style scoped>
@keyframes bg {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--x-offset)));
  }
}

.animation {
  animation: bg 5s linear infinite;
}
#bg {
  background: url('../assets/carMotion/grass2.png');
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 150px;
}
</style>
