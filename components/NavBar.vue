<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10"
  >
    <div
      class="container relative flex flex-wrap items-center justify-between h-20 mx-auto px-4 md:px-6 lg:px-8"
    >
      <!-- Logo Section -->
      <div class="flex items-center space-x-3">
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <img
            src="/catto3.png"
            class="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            alt="cattocss"
          />
          <span class="text-2xl font-black leading-none">
            <span class="text-white">catto</span>
            <span class="gradient-text">css</span>
          </span>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink
          to="/avalojandro"
          class="text-white/80 hover:text-primary-catto transition-colors duration-300 font-medium"
        >
          Avalojandro?
        </NuxtLink>

        <a
          href="https://ko-fi.com/avalojandro"
          target="_blank"
          class="hover-scale"
        >
          <img
            class="h-10 rounded-full shadow-lg hover:shadow-glow transition-shadow duration-300"
            src="/coffee.png"
            alt="Support on Ko-fi"
          />
        </a>
      </div>

      <!-- Mobile Navigation -->
      <div class="flex md:hidden items-center space-x-3">
        <NuxtLink to="/avalojandro">
          <img
            class="w-9 h-9 rounded-full hover-scale"
            src="/emoji.png"
            alt="Avalojandro"
          />
        </NuxtLink>

        <a href="https://ko-fi.com/avalojandro" target="_blank">
          <img class="w-10 h-10 hover-scale" src="/kofiPhone.png" alt="Ko-fi" />
        </a>
      </div>
    </div>
  </nav>

  <!-- Spacer to prevent content from going under fixed navbar -->
  <div class="h-20"></div>
</template>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
  color: #ff4800;
}
</style>
