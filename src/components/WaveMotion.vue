<template>
  <canvas ref="canvas" />
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import Wave from './wave.js'
const props = defineProps({
  wave1Colors: {
    type: Array,
    default: () => ['#ffcc80', '#A0563B']
  },
  wave2Colors: {
    type: Array,
    default: () => ['rgba(243, 156, 107, 0.48)', 'rgba(160, 86, 59, 0.48)']
  }
})
const canvas = ref()
// const xOffset = ref(0) // 初始偏移
// const speed = ref(0.1) // 偏移速度
const isDrawCircle = ref(false)
const rangeValue = ref(50)
const nowRange = ref(0)
const wave1 = ref()
const wave2 = ref()

onMounted(async () => {
  await nextTick()
  // const ctx = canvas.value.getContext('2d')
  canvas.value.height = 55
  canvas.value.width = 55
  wave1.value = new Wave({
    canvasWidth: canvas.value.width, // 轴长
    canvasHeight: canvas.value.height, // 轴高
    waveWidth: 0.055, // 波浪宽度,数越小越宽
    waveHeight: 4, // 波浪高度,数越大越高
    colors: props.wave1Colors, // 波浪颜色
    xOffset: 0, // 初始偏移
    speed: 0.04 // 速度
  })
  wave2.value = new Wave({
    canvasWidth: canvas.value.width, // 轴长
    canvasHeight: canvas.value.height, // 轴高
    waveWidth: 0.04, // 波浪宽度,数越小越宽
    waveHeight: 3, // 波浪高度,数越大越高
    colors: props.wave2Colors, // 波浪颜色
    xOffset: 2, // 初始偏移
    speed: 0.08 // 速度
  })
  draw()
  // drawSin(ctx)
  // requestAnimationFrame(draw)
})
function reDraw () {
  nowRange.value = 0
}
/* function getChartColor (ctx) {
  const radius = canvas.value.width / 2
  const grd = ctx.createLinearGradient(radius, radius, radius, canvas.value.height)
  const colors = ['#DBB77A', '#BF8F3B']
  grd.addColorStop(0, colors[0])
  grd.addColorStop(1, colors[1])
  return grd
} */
function draw () {
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  if (!isDrawCircle.value) {
    drawCircle(ctx)
  }
  // this.drawBackground(ctx);
  if (nowRange.value < rangeValue.value) {
    nowRange.value += 1
  }
  if (nowRange.value > rangeValue.value) {
    nowRange.value -= 1
  }
  wave2.value.update({
    nowRange: nowRange.value
  })
  wave2.value.draw(ctx)
  wave1.value.update({
    nowRange: nowRange.value
  })
  wave1.value.draw(ctx)
  requestAnimationFrame(draw)
  /* const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  if (isDrawCircle.value) {
    drawCircle(ctx)
  }
  // 曲线绘制
  drawSin(ctx, xOffset.value, nowRange.value)
  xOffset.value += speed.value
  if (nowRange.value < rangeValue.value) {
    nowRange.value += 0.01
  }
  requestAnimationFrame(draw) */
}
/* function drawSin (ctx, xOffset = 0, nowRange = 0) {
  const points = []
  const canvasWidth = canvas.value.width
  const canvasHeight = canvas.value.height
  const startX = 0
  const waveWidth = 0.05 // 波浪宽度,数越小越宽
  const waveHeight = 20 // 波浪高度,数越大越高

  ctx.beginPath()
  for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
    const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset)
    points.push([x, (1 - nowRange) * canvasHeight + y])
    // points.push([x, (canvasHeight / 2) + y])
    // ctx.lineTo(x, (canvasHeight / 2) + y)
    ctx.lineTo(x, (1 - nowRange) * canvasHeight + y)
  }
  ctx.lineTo(canvasWidth, canvasHeight)
  ctx.lineTo(startX, canvasHeight)
  ctx.lineTo(points[0][0], points[0][1])
  ctx.fillStyle = getChartColor(ctx)
  // ctx.stroke()
  ctx.fill()
  ctx.restore()
} */
function drawCircle (ctx) {
  const canvasWidth = canvas.value.width
  const r = canvasWidth / 2
  const lineWidth = 4
  const cR = r - (lineWidth)
  ctx.lineWidth = lineWidth
  ctx.beginPath()
  ctx.arc(r, r, cR, 0, 2 * Math.PI)
  ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)'
  ctx.stroke()
  ctx.clip()
  isDrawCircle.value = true
}
defineExpose({
  reDraw
})
</script>

<style scoped>

</style>
