<template>
  <div>
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
            <div
              class="relative flex items-center justify-center cursor-pointer"
              :class="{ 'pointer-events-none': table.status !== 'vacant' }"
              @click="table.status === 'vacant' ? selectTable(table) : selectTable(table, false)">
              <img
                alt=""
                :src="getTableImage(table)" />

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
          <button
            class="btn btn-primary bg-[#101828]"
            :disabled="noTablesSelected"
            @click="nextPage">
            Next : Take Order
          </button>
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
const tables = ref<any>([])

const noTablesSelected = computed(() => {
  return !tables.value.some((table: any) => table.isSelected)
})

const getRandomStatus = () => {
  const statuses = ['vacant', 'occupied', 'attention']
  const randomIndex = Math.floor(Math.random() * statuses.length)
  return statuses[randomIndex]
}

for (let i = 1; i <= 100; i++) {
  tables.value.push({ id: i, status: getRandomStatus(), isSelected: false })
}

const getTableImage = (table: any) => {
  if (table.status === 'vacant' && table.isSelected) {
    return '/assets/selected-table.svg' // Change to your selected table image
  } else if (table.status === 'vacant') {
    return '/assets/tablesvg.svg'
  } else if (table.status === 'occupied') {
    return '/assets/occupied-table.svg'
  } else if (table.status === 'attention') {
    return '/assets/unattended-table.svg'
  }
}

const tablepick = ref<any>(null)

const selectTable = (table: any, vacant = true) => {
  if (vacant) {
    table.isSelected = !table.isSelected
    tablepick.value = table.id
  }
}

const nextPage = () => {
  navigateTo(`/${tablepick.value}/menu`)
}
// const keydownHandler = (e: any) => {
//   if (e.key === 'Enter') {
//     console.log('enter')
//   }
// }
</script>

<style scoped>
.grid-container {
  max-height: 450px;
  overflow-y: scroll;
}

/* .selected-table {
  background-color: lightblue; Change to your desired selected color
} */
</style>
