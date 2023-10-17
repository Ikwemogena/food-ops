<template>
  <div></div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'

const { supabaseUrl, supabaseKey } = useRuntimeConfig().public
const supabase = createClient(supabaseUrl, supabaseKey)

// console.log('sign out')
const authCookie = useCookie<any>('auth_cookie')

// const { supabase } = useSupabase()

const { error } = await supabase.auth.signOut()

if (error) {
  console.log(error)
} else {
  authCookie.value = {
    user: {},
    isLoggedIn: false
  }
  navigateTo('/auth/sign-in')
}
</script>

<style scoped></style>
