<template>
  <section class="w-full h-screen px-6 pb-12 antialiased bg-gray-900">
    <div class="mx-auto max-w-7xl">
      <!-- Main Hero Content -->
      <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center bg-gray-900">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-center md:text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span class="inline md:block text-white">Animate <span class="text-primary-catto">your</span> web</span> <span class="relative mt-2 text-transparent text-primary-catto bg-clip-text bg-gradient-to-br from-red-600 to-red-500 md:inline-block">using <span class="text-white">catto</span>css</span>
        </h1>
        <center class="">
          <img src="/catto3.png" class="w-32 my-6" alt="">
        </center>
        <div class="mx-auto md:max-w-lg text-center lg:text-lg text-white">
          Simplifying the creation of landing pages, blog pages, application pages and so much more!
        </div>
        <div class="flex flex-col items-center mt-12 text-center">
          <span class="relative inline-flex">
            <nuxt-link to="/animations">
              <a routerLink="" type="button" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary-catto border border-transparent md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-full">Get started!</a>
            </nuxt-link>
            <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-blue-600 rounded-full">Everything is free</span>
          </span>
          <a href="#" class="mt-3 text-sm text-primary-catto">GitHub</a>
        </div>
      </div>
      <!-- End Main Hero Content -->
    </div>
  </section>
</template>

<style>

</style>
