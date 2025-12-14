<template>
  <footer
    class="relative bg-gradient-to-br from-dark-800 to-dark-900 border-t border-white/10"
  >
    <div class="max-w-7xl px-6 py-12 mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="text-center md:text-left">
          <div
            class="flex items-center justify-center md:justify-start space-x-2 mb-4"
          >
            <img src="/catto3.png" class="w-10 h-10" alt="cattocss" />
            <span class="text-2xl font-black">
              <span class="text-white">catto</span>
              <span class="gradient-text">css</span>
            </span>
          </div>
          <p class="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
            Free CSS animations library for modern web development. No
            dependencies, just pure CSS magic.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center">
          <h3 class="text-white font-bold mb-4">Quick Links</h3>
          <div class="space-y-2">
            <div>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-primary-catto transition-colors duration-300"
              >
                Home
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/animations"
                class="text-gray-400 hover:text-primary-catto transition-colors duration-300"
              >
                Animations
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/avalojandro"
                class="text-gray-400 hover:text-primary-catto transition-colors duration-300"
              >
                About
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Social & Support -->
        <div class="text-center md:text-right">
          <h3 class="text-white font-bold mb-4">Connect & Support</h3>
          <div class="flex justify-center md:justify-end space-x-4 mb-4">
            <a
              href="https://github.com/Avalojandro"
              target="_blank"
              class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://ko-fi.com/avalojandro"
              target="_blank"
              class="glass-card px-4 py-2 rounded-lg hover-lift text-sm font-semibold text-white"
            >
              ☕ Support
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 pt-8">
        <!-- Bottom Bar -->
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-gray-400 text-sm text-center md:text-left">
            <span>{{ new Date().getFullYear() }}</span>
            <span class="mx-2">•</span>
            <span class="gradient-text font-bold">cattocss</span>
            <span class="mx-2">by</span>
            <span class="font-bold text-white">Avalojandro</span>
          </p>

          <p class="text-gray-500 text-sm italic">
            "More animations soon!" - IDK
          </p>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-catto via-secondary-purple to-secondary-cyan"
    ></div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Additional footer-specific styles if needed */
</style>
