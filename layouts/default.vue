<template>
  <div v-if="isDesktop || isTablet">
    <slot />
  </div>

  <div v-else>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="text-2xl font-bold">Please use a desktop or tablet to view this page</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDesktop, isTablet } = useDevice()
console.log(isTablet)

console.log(isDesktop)

</script>

<style scoped></style>
