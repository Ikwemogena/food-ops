import { createClient } from '@supabase/supabase-js'

const { supabaseUrl, supabaseKey } = useRuntimeConfig().public
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
