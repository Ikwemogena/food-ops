<template>
  <div>
    <div class="flex justify-between items-center px-4 py-3">
      <div class="border px-5 py-3 rounded-md font-semibold">
        <p>
          My Queue
          <span class="bg-red text-red-400">10</span>
        </p>
      </div>
      <div class="flex items-center gap-2">
        <div>
          <p>Steward</p>
          <p class="text-sm">Logged in as: jane doe</p>
        </div>
        <div class="bg-black w-10 h-10 rounded-full"></div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full">
      <h1 class="text-3xl py-1 my-2">Select Table</h1>
      <form class="flex">
        <input
          class="input input-bordered w-[61rem]"
          placeholder="Type here"
          type="text" />
      </form>

      <div class="flex gap-4 py-4">
        <div class="flex justify-start items-center gap-2">
          <div class="w-5 h-5 bg-[#d9d9d9] rounded-md"></div>
          <div class="text-black text-md">Vacant</div>
        </div>

        <div class="flex justify-start items-center gap-2">
          <div class="w-5 h-5 bg-[#039855] rounded-md"></div>
          <div class="text-black text-md">Occupied</div>
        </div>

        <div class="flex justify-start items-center gap-2">
          <div class="w-5 h-5 bg-[#dc6803] rounded-md"></div>
          <div class="text-black text-md">Attention</div>
        </div>
      </div>

      <div class="grid-container no-scrollbar">
        <div class="grid grid-cols-5 gap-10 mt-2">
          <div
            v-for="table in tables"
            :key="table.id"
            class="">
            <div class="relative flex items-center justify-center">
              <img
                alt=""
                src="/assets/tablesvg.svg" />

              <div class="absolute w-full h-full flex items-center justify-center">
                <span class="text-xl font-bold">{{ table.id }}</span>
              </div>
              <!-- <span class="text-xl font-bold text-red-400">{{ table.id }}</span> -->
            </div>
          </div>
        </div>
      </div>
      <div class="w-[61rem]">
        <div class="flex justify-end my-4 items-end">
          <button class="btn btn-primary">Next : Take Order</button>
        </div>
        <!-- <div class="flex justify-between my-4 items-center">
          <button class="btn btn-primary">Previous : View Tables</button>
          <button class="btn btn-primary">Next : Take Order</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tables = ref([
  { id: 1, status: 'Vacant' },
  { id: 2, status: 'Occupied' },
  { id: 3, status: 'Attention' },
  { id: 4, status: 'Vacant' },
  { id: 5, status: 'Occupied' },
  { id: 6, status: 'Attention' },
  { id: 7, status: 'Vacant' },
  { id: 8, status: 'Occupied' },
  { id: 9, status: 'Attention' },
  { id: 9, status: 'Attention' },
  { id: 10, status: 'Attention' },
  { id: 11, status: 'Attention' },
  { id: 12, status: 'Attention' }
  // Add more tables as needed
])

</script>

<style scoped>
.grid-container {
  max-height: 450px;
  overflow-y: scroll;
}
</style>
