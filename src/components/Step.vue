<template>
  <div class="mt-12">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>

    <div class="lg:flex">
      <div class="lg:w-2/12 h-sm">
        <div class="py-1">
          <div class="relative text-center mx-auto lg:ml-0">
            <div class="absolute top-0 left-0">
              <div class="hidden lg:block">
                <i class="far fa-heart fa-10x" style="color: #771d1d; filter: drop-shadow(8px 4px 4px #666);"></i>
              </div>
              <div class="block lg:hidden">
                <i class="far fa-heart fa-6x" style="color: #771d1d; filter: drop-shadow(8px 4px 4px #666);"></i>
              </div>
            </div>
            <div class="absolute top-5 left-7 lg:top-13 lg:left-16 pl-2 text-shadow text-4xl font-black font-fira text-red-900">
              {{ counter }}
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-5/12 p-2 font-fira text-xl">
        <slot /> 
      </div>
      <div class="lg:w-5/12 p-2">
        <img :src="uri" class="rounded shadow-2xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'counter', 'uri'],
}
</script>