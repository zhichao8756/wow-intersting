<template>
  <div id="navbarContainer">
    <div id="navbar">
      <div id="bubbleWrapper">
        <div id="bubble1" class="bubble">
          <span class="icon"><i class="fas fa-home" /></span>
          <WaveMotion
            :ref="wave"
            :wave1-colors=" ['#ffcc80', '#A0563B']"
            :wave2-colors="['rgba(243, 156, 107, 0.48)', 'rgba(160, 86, 59, 0.48)']"
          />
        </div>
        <div id="bubble2" class="bubble">
          <span class="icon"><i class="fab fa-twitter" /></span>
          <WaveMotion
            :ref="wave"
            :wave1-colors=" ['#81d4fa', '#04acf4']"
            :wave2-colors="['rgba(129, 212, 250, 0.48)', 'rgba(4, 172, 244, 0.48)']"
          />
        </div>
        <div id="bubble3" class="bubble">
          <span class="icon"><i class="fas fa-bell" /></span>
          <WaveMotion
            :ref="wave"
            :wave1-colors=" ['#c5e1a5', '#89e026']"
            :wave2-colors="['rgba(197, 225, 165, 0.48)', 'rgba(137, 224, 38, 0.48)']"
          />
        </div>
        <div id="bubble4" class="bubble">
          <span class="icon"><i class="fas fa-user" /></span>
          <WaveMotion
            :ref="wave"
            :wave1-colors=" ['#ce93d8', '#bd20d8']"
            :wave2-colors="['rgba(206, 147, 216, 0.48)', 'rgba(189, 32, 216, 0.48)']"
          />
        </div>
      </div>
      <div id="menuWrapper">
        <div id="menu1" class="menuElement" @click="move('1', '50px', '#ffcc80')"><i class="fas fa-home" /></div>
        <div id="menu2" class="menuElement" @click="move('2', '150px', '#81d4fa')"><i class="fab fa-twitter" /></div>
        <div id="menu3" class="menuElement" @click="move('3', '250px', '#c5e1a5')"><i class="fas fa-bell" /></div>
        <div id="menu4" class="menuElement" @click="move('4', '350px', '#ce93d8')"><i class="fas fa-user" /></div>
      </div>
    </div>
    <div id="bgWrapper">
      <div id="bg" />
      <div id="bgBubble" />
    </div>
  </div>
  <svg width="0" height="0">
    <defs>
      <filter id="goo">
        <feGaussianBlur id="blurFilter" in="SourceGraphic" stdDeviation="20" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
</template>

<script setup>
import anime from 'animejs'
import WaveMotion from './WaveMotion.vue'
import { ref } from 'vue'
const waveRef = ref([])
const wave = (el) => {
  waveRef.value.push(el)
}
// const wave = ref()
function move (id, position, color) {
  const tl = anime.timeline()
  console.log(waveRef.value)
  for (let i = 0; i < waveRef.value.length; i++) {
    waveRef.value[i].reDraw()
  }
  tl.add({ targets: '#bgBubble', duration: 150, bottom: '-30px', easing: 'easeOutCubic' }, 0)
    .add({ targets: '#bubble1', duration: 100, translateY: ['160%', '160%'], boxShadow: 'none', easing: 'easeOutCubic' }, 0)
    .add({ targets: '#bubble2', duration: 100, translateY: ['160%', '160%'], boxShadow: 'none', easing: 'easeOutCubic' }, 0)
    .add({ targets: '#bubble3', duration: 100, translateY: ['160%', '160%'], boxShadow: 'none', easing: 'easeOutCubic' }, 0)
    .add({ targets: '#bubble4', duration: 100, translateY: ['160%', '160%'], boxShadow: 'none', easing: 'easeOutCubic' }, 0)
    .add({ targets: '.icon', duration: 50, opacity: 0, easing: 'easeOutCubic' }, 0)
    .add({ targets: '#bgBubble', duration: 200, left: position, easing: 'easeInOutCubic' }, 100)
    .add({ targets: '#bgBubble', duration: 150, bottom: '-50px', easing: 'easeInOutCubic' }, '-=200')
    .add({ targets: `#bubble${id}`, duration: 150, translateY: '0%', opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', easing: 'easeOutCubic' }, '-=100')
    .add({ targets: `#bubble${id}> span`, duration: 150, translateY: '0%', opacity: 0.7, ease: 'easeOutCubic' }, '-=100')
    .add({ targets: '#navbarContainer', duration: 300, backgroundColor: color, ease: 'easeInOutCubic' }, 0)
    .add({ targets: '#bg', duration: 300, backgroundColor: color, ease: 'easeInOutCubic' }, 0)
    .add({ targets: '#bgBubble', duration: 300, backgroundColor: color, ease: 'easeInOutCubic' }, 0)

  /*

     */
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
  height: 60px;
  background-color: #fff;
  position: absolute;
}

#bubbleWrapper{
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 25px;
}

.bubble{
  background-color: #fff;
  width: 50px;
  height: 50px;
  bottom: 85px;
  border-radius: 50%;
  z-index: 1;
  transform: translateY(160%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon{
  opacity: 0;
  position: absolute;
}

#bubble1{
  transform: translateY(0%);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > span{
    opacity: 0.7;
  }
}

#bgWrapper{
  filter: url(#goo);
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 60px;
}
#bg{
  background-color: #ffcc80;
  width: 120%;
  height: 100%;
  margin-left: -10%;
}
#bgBubble{
  position: absolute;
  background-color: #ffcc80;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  bottom: -50px;
  left: 50px;
  transform: translateX(-50%);
}

#menuWrapper{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.menuElement{
  opacity: 0.4;
  transform: translateY(100%);
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
}

#contentWrapper{
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    color: #fff;
    font-family: sans-serif;
    font-weight: 400;
  }
}
.content{
  display: none;
  opacity: 0;
}

</style>
