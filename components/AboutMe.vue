<template>
  <section
    class="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 right-10 w-64 h-64 bg-secondary-purple/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-catto/20 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1.5s"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- Left Side: Profile Image with Animated Shapes -->
        <div class="order-2 lg:order-1">
          <div class="relative max-w-md mx-auto">
            <!-- Profile Image -->
            <div class="relative z-20 flex justify-center">
              <div class="glass-card p-3 rounded-full">
                <img
                  src="/avalojandro.jpg"
                  class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
                  alt="Avalojandro"
                />
              </div>
            </div>

            <!-- Animated Geometric Shapes -->
            <!-- Blue Square - Top Left -->
            <div
              class="absolute w-24 h-24 lg:w-32 lg:h-32 bg-secondary-blue rounded-lg blue-sqr shadow-glow-purple"
              style="top: -2rem; left: 12rem"
            ></div>
            <!-- Red Triangle - Middle Left -->
            <div
              class="absolute triangle red-triangle"
              style="top: 90%; left: 20rem; transform: translateY(-50%)"
            ></div>
            <!-- Green Rectangle - Bottom Left -->
            <div
              class="absolute w-16 h-48 lg:w-20 lg:h-64 bg-accent-green rounded-lg green-sqr shadow-glow"
              style="bottom: -2rem; left: -1rem"
            ></div>
          </div>
        </div>

        <!-- Right Side: Text Content -->
        <div
          class="order-1 lg:order-2 text-center lg:text-left space-y-6 fade-in"
        >
          <div>
            <h2 class="text-primary-catto font-bold text-3xl md:text-4xl mb-2">
              I'm
            </h2>
            <h1
              class="gradient-text font-black text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              Avalojandro
            </h1>
          </div>

          <p
            class="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Front-End Developer, gamer, drummer and creator of
            <span class="gradient-text font-bold">cattocss</span>
            based in LATAM.
          </p>

          <!-- Social Media Links -->
          <div class="flex justify-center lg:justify-start space-x-4 pt-4">
            <a
              href="https://github.com/Avalojandro"
              target="_blank"
              class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300"
            >
              <img src="/git.png" class="w-8 h-8" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/avalojandro"
              target="_blank"
              class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300"
            >
              <img src="/linkedin.png" class="w-8 h-8" alt="LinkedIn" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPJ3pqEWlujjmQ28GUD-7kQ"
              target="_blank"
              class="glass-card p-3 rounded-lg hover-lift hover:shadow-glow transition-all duration-300"
            >
              <img src="/yt.png" class="w-8 h-8" alt="YouTube" />
            </a>
          </div>

          <!-- Additional Info Card -->
          <div class="glass-card p-6 rounded-2xl max-w-xl mx-auto lg:mx-0 mt-8">
            <h3 class="text-white font-bold text-lg mb-3">About cattocss</h3>
            <p class="text-gray-400 leading-relaxed">
              A free, open-source CSS animation library designed to make your
              web projects more dynamic and engaging. No dependencies, just pure
              CSS magic! 🐱✨
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid #ff4800;
  border-radius: 8px;
}

.blue-sqr {
  animation: animation 50s ease-in-out infinite;
}

.green-sqr {
  animation: animation2 27s ease-in-out infinite;
}

.red-triangle {
  animation: animation3 10s ease-in-out infinite;
}

@keyframes animation {
  0% {
    transform: rotate3d(0, 0, 1, 15deg) translateX(6rem) translateY(-6rem);
  }
  25% {
    transform: rotate3d(0, 0, 1, -10deg) translateX(7rem) translateY(-6rem);
  }
  50% {
    transform: rotate3d(0, 0, 1, 5deg) translateX(8rem) translateY(-6rem);
  }
  75% {
    transform: rotate3d(0, 0, 1, -5deg) translateX(7rem) translateY(-6rem);
  }
  100% {
    transform: rotate3d(0, 0, 1, 15deg) translateX(6rem) translateY(-6rem);
  }
}

@keyframes animation2 {
  0% {
    transform: rotate3d(0, 0, 10, -10deg) translateX(-6rem);
  }
  25% {
    transform: rotate3d(0, 0, 1, 5deg) translateX(-6rem);
  }
  50% {
    transform: rotate3d(0, 0, 1, 0deg) translateX(-6rem);
  }
  75% {
    transform: rotate3d(0, 0, 1, 5deg) translateX(-6rem);
  }
  100% {
    transform: rotate3d(0, 0, 10, -10deg) translateX(-6rem);
  }
}

@keyframes animation3 {
  0% {
    transform: rotate3d(0, 0, 10, -10deg) translateX(8rem);
  }
  25% {
    transform: rotate3d(0, 0, 1, 5deg) translateX(8rem);
  }
  50% {
    transform: rotate3d(0, 0, 1, 0deg) translateX(8rem);
  }
  75% {
    transform: rotate3d(0, 0, 1, 5deg) translateX(8rem);
  }
  100% {
    transform: rotate3d(0, 0, 10, -10deg) translateX(8rem);
  }
}
</style>
