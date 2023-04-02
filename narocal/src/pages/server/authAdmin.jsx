
import { createClient } from '@supabase/supabase-js'
// const supabaseClient = useSupabaseClient()

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin

const { data: { users }, error } = await supabase.auth.admin.listUsers()
