<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <form @submit.prevent="signIn">
        <div class="flex flex-col">
          <h1 class="text-4xl py-2">Sign in to your account</h1>
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Username</span>
              <span class="label-text-alt">Error handler</span>
            </label>
            <input
              v-model="signInDetails.email"
              class="input input-bordered w-full max-w-md"
              placeholder="Username"
              required
              type="text" />
          </div>

          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Password</span>
              <span class="label-text-alt">Error handler</span>
            </label>
            <input
              v-model="signInDetails.password"
              class="input input-bordered w-full max-w-md"
              placeholder="Password"
              required
              type="password" />
          </div>
          <button class="btn rounded-md my-4 text-white bg-[#101828]">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { Auth } from '~/types/auth'
definePageMeta({
  layout: false
})

const { supabase } = useSupabase()
// const authCookie = useCookie<Auth>('auth_cookie')
const authCookie = useCookie<any>('auth_cookie')

const signInDetails = reactive({
  email: '',
  password: ''
})

const signIn = async () => {
  const { data } = await supabase.auth.signInWithPassword(signInDetails)

  // const auth = useAuth()

  if (data.user) {
    authCookie.value = {
      user: data.user,
      // accessToken: response._data.access_token,
      isLoggedIn: true
    }

    // auth.value = authCookie.value
    navigateTo('/')
  }
}
</script>

<style scoped></style>
