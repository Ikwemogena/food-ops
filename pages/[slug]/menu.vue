<template>
  <div>
    <div class="">
      <h1 class="font-bold">Now Serving: Table {{ slug }}</h1>
      <div>WIP</div>

      <!-- <div class="w-[936px] h-12 justify-start items-start gap-[19px] inline-flex">
        <div class="w-[168px] px-9 py-3 bg-gray-900 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter'] leading-7">Appetizers</div>
        </div>
        <div class="bg-gray-300 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter']">Soups & Salads</div>
        </div>
        <div class="w-[121px] px-9 py-3 bg-gray-300 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter'] leading-7">Pasta</div>
        </div>
        <div class="w-48 px-9 py-3 bg-gray-300 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter'] leading-7">Main Courses</div>
        </div>
        <div class="w-[141px] px-9 py-3 bg-gray-300 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter'] leading-7">Deserts</div>
        </div>
        <div class="w-32 px-9 py-3 bg-gray-300 rounded-md justify-center items-center gap-2.5 flex">
          <div class="text-gray-50 text-lg font-semibold font-['Inter'] leading-7">Drinks</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const { slug } = useRoute().params
</script>

<style scoped></style>
