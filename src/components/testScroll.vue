<template>
  <div>
    <div id="bg" ref="bg" :style="bgStyle" class="animation" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const bgStyle = reactive({
  width: null,
  '--x-offset': null
})
const image = reactive({
  width: 2000,
  height: 720
})
onMounted(() => {
  const fun = () => {
    const clientHeight = document.body.clientHeight | (document.documentElement && document.documentElement.clientHeight)
    const xOffset = parseInt(image.width / image.height * clientHeight)
    bgStyle['--x-offset'] = xOffset + 'px'
    bgStyle.width = document.body.clientWidth + xOffset + 'px'
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
  animation: bg 13s linear infinite;
}
#bg {
  background: url('../assets/carMotion/bg2.png') top left;
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
