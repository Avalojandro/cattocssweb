import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './CodePreview-CyAiXqHN.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      animationName: null,
      selectedItem: 0,
      animationCode: null,
      types: ["Hover", "Loops"]
    };
  },
  methods: {
    selectedItemStyle(index2) {
      const baseClass = "transition-all duration-300 ease-in-out";
      return index2 === this.selectedItem ? `${baseClass} bg-gradient-primary text-white shadow-glow` : `${baseClass} text-gray-400 hover:text-white hover:bg-white/5`;
    },
    listDataName(value) {
      this.animationName = value;
    },
    listDataCode(value) {
      this.animationCode = value;
    },
    itemIndex(i) {
      this.selectedItem = i;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HoverAnimations = __nuxt_component_0;
  const _component_LoopsAnimations = __nuxt_component_1;
  const _component_CodePreview = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-8 pb-20" }, _attrs))} data-v-753f3f00><div class="container mx-auto px-4" data-v-753f3f00><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12" data-v-753f3f00><div class="space-y-6" data-v-753f3f00><nav class="glass-card p-2 flex justify-center space-x-2 sticky top-24 z-40" data-v-753f3f00><!--[-->`);
  ssrRenderList($data.types, (type, index2) => {
    _push(`<button class="${ssrRenderClass([$options.selectedItemStyle(index2), "flex-1 px-6 py-3 font-bold rounded-lg transition-all duration-300"])}" data-v-753f3f00>${ssrInterpolate(type)} <span class="ml-2 text-xs opacity-75" data-v-753f3f00> (${ssrInterpolate(index2 === 0 ? "25" : "8")}) </span></button>`);
  });
  _push(`<!--]--></nav><div class="h-[calc(100vh-16rem)] overflow-y-auto overflow-x-visible px-8 py-4 space-y-4" data-v-753f3f00>`);
  if ($data.selectedItem === 0) {
    _push(ssrRenderComponent(_component_HoverAnimations, {
      onGetAnimationName: $options.listDataName,
      onGetAnimationCode: $options.listDataCode
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.selectedItem === 1) {
    _push(ssrRenderComponent(_component_LoopsAnimations, {
      onGetAnimationName: $options.listDataName,
      onGetAnimationCode: $options.listDataCode
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] flex items-start" data-v-753f3f00><div class="w-full slide-in-right" data-v-753f3f00>`);
  _push(ssrRenderComponent(_component_CodePreview, {
    "animation-name": $data.animationName,
    "animation-code": $data.animationCode
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-753f3f00"]]);

export { index as default };
//# sourceMappingURL=index-CPYLfPKF.mjs.map
