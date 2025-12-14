import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = {
  setup() {
  },
  data() {
    return {
      animations: [
        {
          name: "float",
          onDiv: false,
          id: 0,
          class: "h-float",
          code: `
.float{
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
}
.float:hover{
    box-shadow: 0 8px 8px 0 #000000,0 8px 8px 0 #000000;
    transform: translate(0px,5px);
    -webkit-transform: translate(0px,5px);
    -moz-transform:translate(0px,5px);
}`
        },
        {
          name: "rotate180",
          onDiv: true,
          id: 1,
          class: "h-rotate-180",
          code: `
.rotate-180{
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
}
.rotate-180:hover{
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
}`
        },
        {
          name: "rotate360",
          onDiv: true,
          id: 2,
          class: "h-rotate-360",
          code: `
.rotate-360{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.rotate-360:hover{
    transform: rotateZ(360deg);
        -webkit-transform: rotateZ(360deg);
        -moz-transform: rotateZ(360deg);
}`
        },
        {
          name: "flex",
          onDiv: false,
          id: 3,
          class: "h-flex",
          code: `
.flex{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flex:hover{
    transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
        -webkit-transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
        -moz-transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
}`
        },
        {
          name: "transLeft",
          onDiv: false,
          id: 4,
          class: "h-transLeft",
          code: `
.transLeft{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transLeft:hover{
    transform: translatex(-20px);
        -webkit-transform: translatex(-20px);
        -moz-transform: translatex(-20px);
}`
        },
        {
          name: "transRight",
          onDiv: false,
          id: 5,
          class: "h-transRight",
          code: `
.transRight{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transRight:hover{
    transform: translatex(20px);
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
}`
        },
        {
          name: "transUp",
          onDiv: false,
          id: 6,
          class: "h-transUp",
          code: `
.transUp{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transUp:hover{
    transform: translatey(-20px);
        -webkit-transform: translatey(-20px);
        -moz-transform: translatey(-20px);
}`
        },
        {
          name: "transDown",
          onDiv: false,
          id: 7,
          class: "h-transDown",
          code: `
.transDown{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;    
}
.transDown:hover{
    transform: translatey(20px);
        -webkit-transform: translatey(20px);
        -moz-transform: translatey(20px);
}`
        },
        {
          name: "toStretch",
          onDiv: true,
          id: 8,
          class: "h-toStretch",
          code: `
.toStretch{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.toStretch:hover{
    transform: scale(2, 0.5);
        -webkit-transform: scale(1.2, 0.5);
        -moz-transform: scale(1.2, 0.5);
}`
        },
        {
          name: "skew",
          onDiv: false,
          id: 9,
          class: "h-skew",
          code: `
.skew{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.skew:hover{
    transform: skew(30deg, 20deg);
        -webkit-transform: skew(30deg, 20deg);
        -moz-transform: skew(30deg, 20deg);
}`
        },
        {
          name: "skewX",
          onDiv: false,
          id: 10,
          class: "h-skewX",
          code: `
.skewX{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.skewX:hover{
    transform: skewX(30deg);
        -webkit-transform: skewX(30deg);
        -moz-transform: skewX(30deg);
}`
        },
        {
          name: "skewY",
          onDiv: true,
          id: 11,
          class: "h-skewY",
          code: `
.skewY{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.skewY:hover{
    transform: skewY(1.07rad);
        -webkit-transform: skewY(15deg);
        -moz-transform: skewY(15deg);
}`
        },
        {
          name: "floatFluid",
          onDiv: true,
          id: 12,
          class: "h-float-fluid",
          code: `
.float-fluid{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.float-fluid:hover{
    transform: translate3d(12px, 50%, 3em);
        -webkit-transform: translate3d(12px, 50%, 3em);
        -moz-transform: translate3d(12px, 50%, 3em);
    box-shadow: 0 8px 8px 0 #000000,0 8px 8px 0 #000000;
}`
        },
        {
          name: "grow",
          onDiv: false,
          id: 13,
          class: "h-grow",
          code: `
.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.grow:hover{
    transform: scale3d(1.5, 1.5, 0.3);
        -webkit-transform: scale3d(1.5, 1.5, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
}`
        },
        {
          name: "flipUp360",
          onDiv: false,
          id: 14,
          class: "h-flipUp-360",
          code: `
.flipUp-360{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipUp-360:hover{
    transform: rotateX(360deg);
        -webkit-transform: rotateX(360deg);
        -moz-transform: rotateX(360deg);
}`
        },
        {
          name: "flipUp180",
          onDiv: false,
          id: 15,
          class: "h-flipUp-180",
          code: `
.flipUp-180{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipUp-180:hover{
    transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
        -moz-transform: rotateX(180deg);
}`
        },
        {
          name: "flipSide180",
          onDiv: false,
          id: 16,
          class: "h-flipSide-180",
          code: `
.flipSide-180{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipSide-180:hover{
    transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
}`
        },
        {
          name: "flipSide360",
          onDiv: false,
          id: 17,
          class: "h-flipSide-360",
          code: `
.flipSide-360{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipSide-360:hover{
    transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
}`
        },
        {
          name: "shake",
          onDiv: false,
          id: 18,
          class: "h-shake",
          code: `
.shake:hover{
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
          name: "shakeFix",
          onDiv: false,
          id: 19,
          class: "h-shakeFix",
          code: `
.shakeFix:hover{
    animation-name: shakefix;
        -webkit-animation-name: shakefix;
        -moz-animation-name: shakefix;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
    animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
}

    @keyframes shakefix {
        0%  {transform: translate(1px, 1px);}
        10% {transform: translate(-1px, -2px);}
        20% {transform: translate(-3px, 0px);}
        30% {transform: translate(3px, 2px);}
        40% {transform: translate(1px, -1px);}
        50% {transform: translate(-1px, 2px);}
        60% {transform: translate(-3px, 1px);}
        70% {transform: translate(3px, 1px);}
        80% {transform: translate(-1px, -1px);}
        90% {transform: translate(1px, 2px);}
        100% {transform: translate(1px, -2px);}
    }`
        },
        {
          name: "bounceShakeX",
          onDiv: true,
          id: 20,
          class: "h-bounceShakeX",
          code: `
.bounceShakeX:hover{
    animation-name: bounce-shakeX;
        -webkit-animation-name: bounce-shakeX;
        -moz-animation-name: bounce-shakeX;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
}

    @keyframes bounce-shakeX{
        0% {transform: translateX(-50%);}
        12% {transform: translateX(50%);}
        24% {transform: translateX(-20%);}
        36% {transform: translateX(20%);}
        48% {transform: translateX(-10%);}
        60% {transform: translateX(10%);}
        72% {transform: translateX(-5%);}
        84% {transform: translateX(5%);}
        96% {transform: translateX(0%);}
        100% {transform: translateX(0%);}
    }`
        },
        {
          name: "bounceShakeY",
          onDiv: true,
          id: 21,
          class: "h-bounceShakeY",
          code: `
.bounceShakeY:hover{
    animation-name: bounce-shakeY;
        -webkit-animation-name: bounce-shakeY;
        -moz-animation-name: bounce-shakeY;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
}

    @keyframes bounce-shakeY{
        0%  {transform: translateY(-50%);}
        12% {transform: translateY(50%);}
        24% {transform: translateY(-20%);}
        36% {transform: translateY(20%);}
        48% {transform: translateY(-10%);}
        60% {transform: translateY(10%);}
        72% {transform: translateY(-5%);}
        84% {transform: translateY(5%);}
        96% {transform: translateY(0%);}
        100% {transform: translateY(0%);}
    }`
        },
        {
          name: "surprise",
          onDiv: false,
          id: 22,
          class: "h-surprise",
          code: `
.surprise:hover{
    animation-name: surprise;
        -webkit-animation-name: surprise;
        -moz-animation-name: surprise;
    animation-duration: .8s;
        -webkit-animation-duration: .8s;
        -moz-animation-duration: .8s;
}

    @keyframes surprise
    {
        0% {transform: rotate(0deg) scale(1,1);;}
        10% {transform: rotate(7deg) scale(2,2);}
        20% {transform: rotate(-7deg) scale(2,2);}
        30% {transform: rotate(7deg) scale(2,2);}
        40% {transform: rotate(-7deg) scale(2,2);}
        50% {transform: rotate(7deg) scale(2,2);}
        60% {transform: rotate(-7deg) scale(2,2);}
        70% {transform: rotate(7deg) scale(2,2);}
        80% {transform: rotate(-7deg) scale(2,2);}
        90% {transform: rotate(7deg) scale(2,2);}
        100% {transform: rotate(0deg) scale(1,1);}
    }`
        },
        {
          name: "jello",
          onDiv: false,
          id: 23,
          class: "h-jello",
          code: `
.jello:hover {
    animation-name: jello;
        -webkit-animation-name: jello;
        -moz-animation-name: jello;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
    transform-origin: center;
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
}

    @keyframes jello {
        from,11.1%,to {transform: translate3d(0, 0, 0);}
        22.2% {transform: skewX(-12.5deg) skewY(-12.5deg);}
        33.3% {transform: skewX(6.25deg) skewY(6.25deg);}
        44.4% {transform: skewX(-3.125deg) skewY(-3.125deg);}
        55.5% {transform: skewX(1.5625deg) skewY(1.5625deg);}
        66.6% {transform: skewX(-0.78125deg) skewY(-0.78125deg);}
        77.7% {transform: skewX(0.390625deg) skewY(0.390625deg);}
        88.8% {transform: skewX(-0.1953125deg) skewY(-0.1953125deg);}
    }`
        },
        {
          name: "swing",
          onDiv: false,
          id: 24,
          class: "h-swing",
          code: `
.swing:hover{
    animation-name: swing;
        -webkit-animation-name: swing;
        -moz-animation-name: swing;
    animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
}

    @keyframes swing {
        20% {transform: rotate3d(0, 0, 1, 15deg);}
        40% {transform: rotate3d(0, 0, 1, -10deg);}
        60% {transform: rotate3d(0, 0, 1, 5deg);}
        80% {transform: rotate3d(0, 0, 1, -5deg);}
        to  {transform: rotate3d(0, 0, 1, 0deg);}
    }`
        }
      ]
    };
  },
  computed: {},
  methods: {
    getAnimation(animationClass) {
      const className = "glass-card p-6 cursor-pointer text-white text-center rounded-xl border border-primary-catto/30 transition-all duration-300 hover:border-primary-catto hover:shadow-glow min-h-[100px] flex items-center justify-center";
      return `${className} ${animationClass}`;
    },
    sendData(name, code) {
      this.$emit("getAnimationName", name);
      this.$emit("getAnimationCode", code);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-24"><!--[-->`);
  ssrRenderList($data.animations, (animation) => {
    _push(`<div class="group"><div class="${ssrRenderClass([$options.getAnimation(animation.class), "relative overflow-hidden"])}"><span class="relative z-10 font-semibold">${ssrInterpolate(animation.name)}</span><div class="absolute inset-0 bg-gradient-to-r from-primary-catto/20 to-secondary-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HoverAnimations.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  setup() {
  },
  data() {
    return {
      animations: [
        {
          name: "shake",
          onDiv: false,
          id: 0,
          class: "i-shake",
          code: `
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
          name: "pulse",
          onDiv: false,
          id: 0,
          class: "i-pulse",
          code: `
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
          name: "bounce",
          onDiv: false,
          id: 0,
          class: "i-bounce",
          code: `
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
          name: "heartbeat",
          onDiv: false,
          id: 0,
          class: "i-heartbeat",
          code: `
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
          name: "slide",
          onDiv: false,
          id: 0,
          class: "i-slide",
          code: `
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
          name: "flicker",
          onDiv: false,
          id: 0,
          class: "i-flicker",
          code: `
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
          name: "rotate",
          onDiv: false,
          id: 0,
          class: "i-rotate",
          code: `
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
          name: "wobble",
          onDiv: false,
          id: 0,
          class: "i-wobble",
          code: `
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
        }
      ]
    };
  },
  computed: {},
  methods: {
    getAnimation(animationClass) {
      const className = "glass-card p-6 cursor-pointer text-white text-center rounded-xl border border-primary-catto/30 transition-all duration-300 hover:border-primary-catto hover:shadow-glow min-h-[100px] flex items-center justify-center";
      return `${className} ${animationClass}`;
    },
    sendData(name, code) {
      this.$emit("getAnimationName", name);
      this.$emit("getAnimationCode", code);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-24"><!--[-->`);
  ssrRenderList($data.animations, (animation) => {
    _push(`<div class="group"><div class="${ssrRenderClass([$options.getAnimation(animation.class), "relative overflow-hidden"])}"><span class="relative z-10 font-semibold">${ssrInterpolate(animation.name)}</span><div class="absolute inset-0 bg-gradient-to-r from-primary-catto/20 to-secondary-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoopsAnimations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "CodePreview",
  props: {
    animationName: {
      type: String,
      default: null
    },
    animationCode: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      copied: false,
      defaultCode: `.float{
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
}
.float:hover{
    box-shadow: 0 8px 8px 0 #bebbbc,0 8px 8px 0 #adadab;
    transform: translate(0px,5px);
    -webkit-transform: translate(0px,5px);
    -moz-transform:translate(0px,5px);
}`
    };
  },
  methods: {
    async copyCode() {
      const code = this.animationCode || this.defaultCode;
      try {
        await (void 0).clipboard.writeText(code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2e3);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-443acb88><div class="text-center mb-8 fade-in" data-v-443acb88><h2 class="text-4xl md:text-5xl font-bold gradient-text mb-2" data-v-443acb88>${ssrInterpolate($props.animationName || "float")}</h2><p class="text-gray-400 text-sm" data-v-443acb88>Click to copy the code</p></div><div class="relative glass-card max-w-2xl mx-auto" data-v-443acb88><button class="${ssrRenderClass([{ "bg-accent-green hover:bg-accent-green": $data.copied }, "absolute top-4 right-4 z-10 px-4 py-2 bg-primary-catto/80 hover:bg-primary-catto text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"])}" data-v-443acb88>`);
  if (!$data.copied) {
    _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-443acb88><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-v-443acb88></path></svg>`);
  } else {
    _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-443acb88><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-443acb88></path></svg>`);
  }
  _push(`<span class="font-semibold" data-v-443acb88>${ssrInterpolate($data.copied ? "Copied!" : "Copy")}</span></button><div class="code-container" data-v-443acb88><pre class="code-block" data-v-443acb88><code class="rainbow-code select-all" data-v-443acb88>${ssrInterpolate($props.animationCode || $data.defaultCode)}</code></pre></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CodePreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-443acb88"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_2 as b };
//# sourceMappingURL=CodePreview-CyAiXqHN.mjs.map
