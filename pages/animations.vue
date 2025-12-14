<template>
  <div class="min-h-screen pt-8 pb-20">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-12 fade-in">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          <span class="text-white">CSS </span>
          <span class="gradient-text">Animations</span>
        </h1>
        <p class="text-gray-400 text-lg">Choose an animation to see the code</p>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        <!-- Left Side: Animation Categories and Demos -->
        <div class="space-y-6">
          <!-- Category Navigation -->
          <nav
            class="glass-card p-2 flex justify-center space-x-2 sticky top-24 z-40"
          >
            <button
              v-for="(type, index) in types"
              :key="type"
              :class="selectedItemStyle(index)"
              @click="itemIndex(index)"
              class="flex-1 px-6 py-3 font-bold rounded-lg transition-all duration-300"
            >
              {{ type }}
              <span class="ml-2 text-xs opacity-75">
                ({{ index === 0 ? "25" : "8" }})
              </span>
            </button>
          </nav>

          <!-- Animations Grid -->
          <div
            class="h-[calc(100vh-16rem)] overflow-y-auto overflow-x-visible px-8 py-4 space-y-4"
          >
            <HoverAnimations
              v-if="selectedItem === 0"
              @getAnimationName="listDataName"
              @getAnimationCode="listDataCode"
            />
            <LoopsAnimations
              v-if="selectedItem === 1"
              @getAnimationName="listDataName"
              @getAnimationCode="listDataCode"
            />
          </div>
        </div>

        <!-- Right Side: Code Preview -->
        <div
          class="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] flex items-start"
        >
          <div class="w-full slide-in-right">
            <CodePreview
              :animation-name="animationName"
              :animation-code="animationCode"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationName: null,
      selectedItem: 0,
      animationCode: null,
      types: ["Hover", "Loops"],
    };
  },
  methods: {
    selectedItemStyle(index) {
      const baseClass = "transition-all duration-300 ease-in-out";
      return index === this.selectedItem
        ? `${baseClass} bg-gradient-primary text-white shadow-glow`
        : `${baseClass} text-gray-400 hover:text-white hover:bg-white/5`;
    },
    listDataName(value) {
      this.animationName = value;
    },
    listDataCode(value) {
      this.animationCode = value;
    },
    itemIndex(i) {
      this.selectedItem = i;
    },
  },
};
</script>

<style scoped>
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ff4800, #a855f7);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
}
</style>
