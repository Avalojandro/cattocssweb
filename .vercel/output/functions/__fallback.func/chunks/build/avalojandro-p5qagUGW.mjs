import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = publicAssetsURL("/avalojandro.jpg");
const _imports_1 = publicAssetsURL("/git.png");
const _imports_2 = publicAssetsURL("/linkedin.png");
const _imports_3 = publicAssetsURL("/yt.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden" }, _attrs))} data-v-c4b80cda><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-c4b80cda><div class="absolute top-1/4 right-10 w-64 h-64 bg-secondary-purple/20 rounded-full blur-3xl animate-pulse-slow" data-v-c4b80cda></div><div class="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-catto/20 rounded-full blur-3xl animate-pulse-slow" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}" data-v-c4b80cda></div></div><div class="relative max-w-7xl mx-auto z-10" data-v-c4b80cda><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-v-c4b80cda><div class="order-2 lg:order-1" data-v-c4b80cda><div class="relative max-w-md mx-auto" data-v-c4b80cda><div class="relative z-20 flex justify-center" data-v-c4b80cda><div class="glass-card p-3 rounded-full" data-v-c4b80cda><img${ssrRenderAttr("src", _imports_0)} class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl" alt="Avalojandro" data-v-c4b80cda></div></div><div class="absolute w-24 h-24 lg:w-32 lg:h-32 bg-secondary-blue rounded-lg blue-sqr shadow-glow-purple" style="${ssrRenderStyle({ "top": "-2rem", "left": "12rem" })}" data-v-c4b80cda></div><div class="absolute triangle red-triangle" style="${ssrRenderStyle({ "top": "90%", "left": "20rem", "transform": "translateY(-50%)" })}" data-v-c4b80cda></div><div class="absolute w-16 h-48 lg:w-20 lg:h-64 bg-accent-green rounded-lg green-sqr shadow-glow" style="${ssrRenderStyle({ "bottom": "-2rem", "left": "-1rem" })}" data-v-c4b80cda></div></div></div><div class="order-1 lg:order-2 text-center lg:text-left space-y-6 fade-in" data-v-c4b80cda><div data-v-c4b80cda><h2 class="text-primary-catto font-bold text-3xl md:text-4xl mb-2" data-v-c4b80cda> I&#39;m </h2><h1 class="gradient-text font-black text-5xl md:text-6xl lg:text-7xl mb-6" data-v-c4b80cda> Avalojandro </h1></div><p class="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0" data-v-c4b80cda> Front-End Developer, gamer, drummer and creator of <span class="gradient-text font-bold" data-v-c4b80cda>cattocss</span> based in LATAM. </p><div class="flex justify-center lg:justify-start space-x-4 pt-4" data-v-c4b80cda><a href="https://github.com/Avalojandro" target="_blank" class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300" data-v-c4b80cda><img${ssrRenderAttr("src", _imports_1)} class="w-8 h-8" alt="GitHub" data-v-c4b80cda></a><a href="https://www.linkedin.com/in/avalojandro" target="_blank" class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300" data-v-c4b80cda><img${ssrRenderAttr("src", _imports_2)} class="w-8 h-8" alt="LinkedIn" data-v-c4b80cda></a><a href="https://www.youtube.com/channel/UCPJ3pqEWlujjmQ28GUD-7kQ" target="_blank" class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300" data-v-c4b80cda><img${ssrRenderAttr("src", _imports_3)} class="w-8 h-8" alt="YouTube" data-v-c4b80cda></a></div><div class="glass-card p-6 rounded-2xl max-w-xl mx-auto lg:mx-0 mt-8" data-v-c4b80cda><h3 class="text-white font-bold text-lg mb-3" data-v-c4b80cda>About cattocss</h3><p class="text-gray-400 leading-relaxed" data-v-c4b80cda> A free, open-source CSS animation library designed to make your web projects more dynamic and engaging. No dependencies, just pure CSS magic! \u{1F431}\u2728 </p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c4b80cda"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutMe = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AboutMe, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/avalojandro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avalojandro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { avalojandro as default };
//# sourceMappingURL=avalojandro-p5qagUGW.mjs.map
