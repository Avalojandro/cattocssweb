<template>
  <nav class="md:bg-transparent relative z-50 h-16 md:h-24 select-none">
    <div class="container relative flex flex-wrap items-center justify-between h-16 md:h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center px-4 md:px-2">
      <div class="flex items-center justify-start w-1/4 h-full pr-4">
        <a class="inline-block py-4 md:py-0">
          <NuxtLink to="/">
            <img src="/catto3.png" class="hidden md:inline w-12 md:w-10 align-middle" alt="">
            <span class=" md:inline align-middle p-1 text-2xl font-black leading-none text-gray-900"><span class="text-white">catto</span><span class="text-primary-catto">css</span></span>
          </NuxtLink>
        </a>
      </div>
      <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4  lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
        <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
          <div class="flex items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center" />
          <div class="flex items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
             <NuxtLink class="w-full px-6 py-2 mr-0 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto text-white hover:text-primary-catto transition ease-out" to="/avalojandro">
              Avalojandro?
            </NuxtLink> 
            <a href="https://ko-fi.com/avalojandro" target="_blank" class="h-shake">
              <img class="w-40 rounded-3xl" src="/coffee.png" alt="">
            </a>
          </div>
        </div>
      </div>

      <div class="items-center md:hidden align-middle right-0 ">
        <router-link to="/avalojandro">
          <a href="https://ko-fi.com/avalojandro" target="_blank" class="align-middle">
            <img class="w-9 inline rounded-full " src="/emoji.png" alt="">
          </a>
        </router-link>
        &nbsp;
        <a href="https://ko-fi.com/avalojandro" target="_blank" class="h-shake align-middle">
          <img class="w-10 inline " src="/kofiPhone.png" alt="">
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
</style>
