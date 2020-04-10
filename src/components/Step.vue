<template>
  <div class="mt-12">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Headline
    </h3>
    <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="relative px-4 py-5 sm:p-6 h-40">
          <div class="absolute top-0 left-0">
            <font-awesome :icon="['far', 'heart']" size="10x" style="color: red; filter: drop-shadow(8px 4px 4px #666);" />
          </div>
          <div class="absolute top-15 left-15 text-shadow text-3xl">
            Moin
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          copy text
        </div>
      </div>
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          Image
        </div>
      </div>
    </div>
  </div>
</template>