<script setup lang="ts">
// import { createClient } from '@supabase/supabase-js'

// const { supabaseUrl, supabaseKey } = useRuntimeConfig().public
// const supabase = createClient(supabaseUrl, supabaseKey)

// console.log('sign out')
const authCookie = useCookie<any>('auth_cookie')

const { supabase } = useSupabase()

const { error } = await supabase.auth.signOut()

if (!error) {
  authCookie.value = {
    user: {},
    isLoggedIn: false
  }
}

// if (error) {
//   console.log(error)
// } else {
//   navigateTo('/auth/sign-in')
// }

// const client = useSupabaseClient()
// // const user = useSupabaseUser()
// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'morgz@to-do.com',
//   password: 'testemail'
// })
// console.log(data)
</script>

<style scoped></style>
