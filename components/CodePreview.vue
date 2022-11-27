<template>
  <div>
    <div class="text-white text-center text-5xl font-bold">
      {{ animationName || 'float' }}
    </div>
    <div class="m-8 p-2">
      <div class="ide2">
        <pre class="ide">
              <code class="rainbow select-all">
              {{ animationCode || defaultCode }}
              </code>
            </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  props: {
    animationName: null,
    animationCode: null
  },
  data () {
    return {
      defaultCode: `
.float{
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
    }
  },
  watch: {
    // Watch Here
    myWatch (newVal, oldVal) {
      // Code Here on change value
    }
  },
  methods: {
    // Methods Here
  }
}
</script>

<style>
.ide{
  background-color: #1F2937;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 20px;
  max-height: 30rem;
  min-width: 40rem;
  max-width: 40rem;
  overflow-y: auto;
}

.ide2{
    overflow-x: auto;
  background-color: #1F2937;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 10px;
  border-radius: 20px;
}

.rainbow{
    background: linear-gradient(72deg, #e5ff00, #ff57d5, #00d9ff, #00ff00, #ffae00, #e5ff00, #ff57d5, #00d9ff, #00ff00, #ffae00, #e5ff00, #ff57d5, #00d9ff, #00ff00, #ffae00);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 5s ease-in-out infinite;
    background-size: 400% 100%;
}

@keyframes rainbow_animation{
   0%,100% {
        background-position: 0 100%;
    }

    50% {
        background-position: 100% 0;
    }
}

</style>
