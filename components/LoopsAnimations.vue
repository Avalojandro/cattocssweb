<template>
  <div class="a-jello">
    <div class="text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-32">
      <div v-for="animation of animations" :key="animation" class="p-10 text-center items-center">
        <div :class="getAnimation(animation.class)" @click="sendData(animation.name, animation.code)">
          <span>{{ animation.name }}</span>
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
          name: 'i-shake', onDiv: false, id: 0, class: 'i-bounce', code: `
.i-shake{
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
        }
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
