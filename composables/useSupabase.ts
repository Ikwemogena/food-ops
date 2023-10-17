import { createClient } from '@supabase/supabase-js'

// Define a composable function to retrieve the session data
export const useSupabase = () => {
    // Create a single instance of GoTrueClient
    const { supabaseUrl, supabaseKey } = useRuntimeConfig().public
    const supabase = createClient(supabaseUrl, supabaseKey)
    // Fetch the session data
    const getSessionData = async () => {
        const { data } = await supabase.auth.getSession()
        if (data.session?.user) {
            console.log(data.session)
            return true
        } else {
            return false
        }
    }

    return {
        supabase,
        getSessionData
    }
}
