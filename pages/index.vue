<template>
  <div>
    <div class="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-2 py-12 pl-0 2xl:pl-12">
      <!-- Demo view -->
      <div class="h-72 lg:h-screen overflow-auto mr-5">
        <nav class="py-4 space-x-4 text-center bg-gray-900 top-0 sticky">
          <a v-for="(type, index) in types" :key="type" :class="selectedItemStyle(index)" @click="itemIndex(index)">{{ type }}</a>
        </nav>
        <HoverAnimations v-if="selectedItem === 0" @getAnimationName="listDataName" @getAnimationCode="listDataCode" />
        <!-- <OneTimeAnimations v-if="selectedItem === 1" @getAnimationName="listDataName" @getAnimationCode="listDataCode" />
        <LoopsAnimations v-if="selectedItem === 2" @getAnimationName="listDataName" @getAnimationCode="listDataCode" />
        <AnimatedButtons v-if="selectedItem === 3" @getAnimationName="listDataName" @getAnimationCode="listDataCode" /> -->
      </div>

      <!-- Code view -->
      <div class="text-white items-center justify-center xl:flex overflow-auto">
        <CodePreview :animation-name="animationName" :animation-code="animationCode" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animationName: null,
      selectedItem: 0,
      animationCode: null,
      types: ['Hover']
    }
  },
  methods: {
    selectedItemStyle (index) {
      const className = 'p-2 target font-bold inline-block cursor-pointer transition-all duration-200 ease-in-out'
      return (index === this.selectedItem) ? `${className} border-b-4 text-primary-catto border-primary-catto` : `${className} border-b text-white border-white`
    },
    listDataName (value) {
      this.animationName = value
    },
    listDataCode (value) {
      this.animationCode = value
    },
    itemIndex (i) {
      this.selectedItem = i
    }
  }

}
</script>

<style scoped>

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-track {
  background: #ffffff96;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f71e1e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f71e1e;
}

:target{
  @apply text-primary-catto;
}

</style>
