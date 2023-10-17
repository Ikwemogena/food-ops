<template>
  <div v-if="isDesktop || isTablet">
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
          <p class="text-sm">Logged in as: {{ email }}</p>
        </div>
        <!-- <div class="bg-black w-10 h-10 rounded-full"></div> -->

        <div class="dropdown dropdown-bottom dropdown-end">
          <label
            class="btn bg-black w-10 h-10 rounded-full"
            tabindex="0"></label>
          <ul
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            tabindex="0">
            <li><Icon name="gg:log-out" /> <NuxtLink to="/auth/sign-out">Sign Out</NuxtLink></li>
            <li><a>Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-6">
      <slot />
    </div>
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

const authCookie = useCookie<any>('auth_cookie')
const email = authCookie.value.user.email
console.log(authCookie.value.user.email)
</script>

<style scoped></style>
