<template>
  <div class="relative">
    <!-- Animation Name Header -->
    <div class="text-center mb-8 fade-in">
      <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {{ animationName || "float" }}
      </h2>
      <p class="text-gray-400 text-sm">Click to copy the code</p>
    </div>

    <!-- Code Container -->
    <div class="relative glass-card max-w-2xl mx-auto">
      <!-- Copy Button -->
      <button
        @click="copyCode"
        class="absolute top-4 right-4 z-10 px-4 py-2 bg-primary-catto/80 hover:bg-primary-catto text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
        :class="{ 'bg-accent-green hover:bg-accent-green': copied }"
      >
        <svg
          v-if="!copied"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span class="font-semibold">{{ copied ? "Copied!" : "Copy" }}</span>
      </button>

      <!-- Code Display -->
      <div class="code-container">
        <pre
          class="code-block"
        ><code class="rainbow-code select-all">{{ animationCode || defaultCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodePreview",
  props: {
    animationName: {
      type: String,
      default: null,
    },
    animationCode: {
      type: String,
      default: null,
    },
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
}`,
    };
  },
  methods: {
    async copyCode() {
      const code = this.animationCode || this.defaultCode;
      try {
        await navigator.clipboard.writeText(code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    },
  },
};
</script>

<style scoped>
.code-container {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  overflow: hidden;
}

.code-block {
  background: transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 32rem;
  overflow-y: auto;
  overflow-x: auto;
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
}

.rainbow-code {
  background: linear-gradient(
    72deg,
    #e5ff00,
    #ff57d5,
    #00d9ff,
    #00ff00,
    #ffae00,
    #e5ff00,
    #ff57d5,
    #00d9ff,
    #00ff00,
    #ffae00,
    #e5ff00,
    #ff57d5,
    #00d9ff,
    #00ff00,
    #ffae00
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 8s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
  0%,
  100% {
    background-position: 0 100%;
  }

  50% {
    background-position: 100% 0;
  }
}

/* Custom Scrollbar for Code Block */
.code-block::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.code-block::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 10px;
}

.code-block::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ff4800, #ff6b35);
  border-radius: 10px;
}
</style>
