<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-4xl font-black font-fira leading-relaxed tracking-wide inline-block mr-4 py-2 whitespace-no-wrap text-white" href="/">
          <div class="flex w-full">
            <div class="mt-2">
              <img src="/img/Icon.png" alt="Herzbutton Icon" class="w-14 h-14" />
            </div>
            <div>
              <div>
                Herzbutton
              </div>
              <div class="text-sm font-light font-fira-cond -mt-2 tracking-tight">
                Kontakt zu Pflegebedürftigen in der Krise
              </div>
            </div>
          </div>
        </a>
        <button
          class="cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <font-awesome :icon="['fas', 'bars']" size="1x" color="white" />
        </button>
      </div>
      <div class="-mt-4 lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" v-bind:class="{ hidden: !showMenu, block: showMenu }">
        <div class="flex flex-col lg:ml-auto justify-end">
          <div class="flex text-gray-300 font-fira-cond text-sm">
            made with
            <font-awesome :icon="['far', 'heart']" size="lg" class="mx-1" />
            by
            avodaq 
            and 
            cisco
          </div>
        </div>
        <ul class="flex flex-col lg:flex-row list-none">
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo">
              <font-awesome :icon="['fab', 'github']" size="2x" />
              <i class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
