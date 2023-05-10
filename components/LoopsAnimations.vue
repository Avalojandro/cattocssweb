<template>
  <div class="a-jello">
    <div class="text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-32">
      <div v-for="animation of animations" :key="animation" class="p-10 text-center items-center">
        <div :class="getAnimation(animation.class)" @click="sendData(animation.name, animation.code)">
          <span>{{animation.name}}</span>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  setup () {},
  data () {
    return {
      animations: [
        {
          name: 'shake', onDiv: false, id: 0, class: 'i-shake', code: `
.shake{
        animation-name: shake;
        -webkit-animation-name: shake;
        -moz-animation-name: shake;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
    animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        }
        
    @keyframes shake {
        0%  {transform: translate(1px, 1px) rotate(0deg);}
        10% {transform: translate(-1px, -2px) rotate(-1deg);}
        20% {transform: translate(-3px, 0px) rotate(1deg);}
        30% {transform: translate(3px, 2px) rotate(0deg);}
        40% {transform: translate(1px, -1px) rotate(1deg);}
        50% {transform: translate(-1px, 2px) rotate(-1deg);}
        60% {transform: translate(-3px, 1px) rotate(0deg);}
        70% {transform: translate(3px, 1px) rotate(-1deg);}
        80% {transform: translate(-1px, -1px) rotate(1deg);}
        90% {transform: translate(1px, 2px) rotate(0deg);}
        100% {transform: translate(1px, -2px) rotate(-1deg);}
    }`
        },
        {
          name: 'pulse', onDiv: false, id: 0, class: 'i-pulse', code: `
.pulse {
    animation-name: pulse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
  }`
        },
        {
          name: 'bounce', onDiv: false, id: 0, class: 'i-bounce', code: `
.bounce {
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes bounce {
      0% {transform: translateY(0);}
      50% {transform: translateY(-10px);}
      100% {transform: translateY(0);}
  }`
        },
        {
          name: 'heartbeat', onDiv: false, id: 0, class: 'i-heartbeat', code: `
.heartbeat {
    animation-name: heartbeat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes heartbeat {
    0% {transform: scale(1);}
    25% {transform: scale(1.3);}
    50% {transform: scale(1);}
    75% {transform: scale(0.7);}
    100% {transform: scale(1);}
  }`
        },
        {
          name: 'slide', onDiv: false, id: 0, class: 'i-slide', code: `
.slide {
    animation-name: slide;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes slide {
    0% {transform: translateX(0);}
    50% {transform: translateX(20px);}
    100% {transform: translateX(0);}
  }`
        },
        {
          name: 'flicker', onDiv: false, id: 0, class: 'i-flicker', code: `
.flicker {
    animation-name: flicker;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes flicker {
    0% {opacity: 1;}
    25% {opacity: 0.5;}
    50% {opacity: 1;}
    75% {opacity: 0.5;}
    100% {opacity: 1;}
  }`
        },
        {
          name: 'rotate', onDiv: false, id: 0, class: 'i-rotate', code: `
.rotate {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes rotate {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }`
        },
        {
          name: 'wobble', onDiv: false, id: 0, class: 'i-wobble', code: `
.wobble {
    animation-name: wobble;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  @keyframes wobble {
    0% {transform: translateX(0) rotate(0deg);}
    15% {transform: translateX(-30px) rotate(-5deg);}
    30% {transform: translateX(15px) rotate(3deg);}
    45% {transform: translateX(-15px) rotate(-3deg);}
    60% {transform: translateX(9px) rotate(2deg);}
    75% {transform: translateX(-6px) rotate(-1deg);}
    100% {transform: translateX(0) rotate(0deg);}
  }`
        },                                        
      ]
    }
  },
  computed: {

  },
  methods: {
    getAnimation (animationClass) {
      const className = 'p-5 cursor-pointer bg-transparent border border-primary-catto bg-primary-catto text-white font-bold rounded wrp'
      return `${className} ${animationClass}`
    },

    sendData (name, code) {
      this.$emit('getAnimationName', name)
      this.$emit('getAnimationCode', code)
    }
  }
}
</script>
