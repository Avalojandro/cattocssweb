<template>
  <section
    class="relative w-full min-h-screen px-6 pb-12 flex items-center justify-center overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary-catto/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-secondary-purple/20 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-cyan/20 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl z-10">
      <!-- Main Hero Content -->
      <div class="container max-w-5xl px-4 py-20 mx-auto text-center fade-in">
        <!-- Main Heading -->
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-8"
        >
          <span class="block text-white mb-2">
            Animate <span class="gradient-text">your</span> web
          </span>
          <span class="block mt-4">
            <span class="text-white">using </span>
            <span
              class="gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            >
              <span class="text-white">catto</span>css
            </span>
          </span>
        </h1>

        <!-- Cat Logo with Float Animation -->
        <div class="flex justify-center my-12">
          <div class="relative">
            <img
              src="/catto3.png"
              class="w-32 h-32 md:w-40 md:h-40 floating drop-shadow-2xl"
              alt="cattocss logo"
            />
            <div
              class="absolute inset-0 bg-primary-catto/30 rounded-full blur-2xl animate-pulse-slow"
            ></div>
          </div>
        </div>

        <!-- Description -->
        <p
          class="mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed"
        >
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!
        </p>

        <!-- CTA Section -->
        <div class="flex flex-col items-center space-y-6">
          <div class="relative inline-flex">
            <NuxtLink to="/animations">
              <button
                class="btn-primary text-lg md:text-xl px-10 py-5 relative overflow-hidden group"
              >
                <span class="relative z-10">Get started!</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
            </NuxtLink>

            <!-- Badge -->
            <span
              class="absolute -top-3 -right-6 px-3 py-1 text-xs font-bold leading-tight text-white bg-gradient-to-r from-secondary-blue to-secondary-cyan rounded-full shadow-lg animate-bounce-slow"
            >
              Everything is free
            </span>
          </div>

          <!-- GitHub Link -->
          <a
            href="https://github.com/Avalojandro/cattocss"
            target="_blank"
            class="text-primary-catto hover:text-primary-light transition-colors duration-300 font-semibold flex items-center space-x-2 group"
          >
            <svg
              class="w-5 h-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>

        <!-- Stats or Features (Optional) -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          <div class="glass-card text-center p-6 hover-lift">
            <div class="text-4xl font-bold gradient-text mb-2">33+</div>
            <div class="text-gray-400">Animations</div>
          </div>
          <div class="glass-card text-center p-6 hover-lift">
            <div class="text-4xl font-bold gradient-text mb-2">100%</div>
            <div class="text-gray-400">Free & Open Source</div>
          </div>
          <div class="glass-card text-center p-6 hover-lift">
            <div class="text-4xl font-bold gradient-text mb-2">0</div>
            <div class="text-gray-400">Dependencies</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
