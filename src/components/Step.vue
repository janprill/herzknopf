<template>
  <div class="mt-12">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>

    <div class="md:flex">
      <div class="md:w-2/12 bg-gray-500 p-2 h-lg">
        <div class="py-2 sm:p-6">
          <div class="relative text-center mx-auto md:ml-0">
            <div class="absolute top-0 left-0">
              <font-awesome :icon="['far', 'heart']" size="10x" style="color: red; filter: drop-shadow(8px 4px 4px #666);" />
            </div>
            <div class="absolute top-13 left-16 pl-2 text-shadow text-4xl font-black font-fira text-red-600">
              {{ counter }}
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-5/12 bg-gray-400 p-2">
        <slot /> 
      </div>
      <div class="md:w-5/12 bg-gray-500 p-2">
        <img :src="uri" class="rounded" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'counter', 'uri'],
}
</script>