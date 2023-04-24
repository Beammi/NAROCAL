import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://icxefalrdqdnvotuytck.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeGVmYWxyZHFkbnZvdHV5dGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDM3MzQsImV4cCI6MTk5NzU3OTczNH0.vGUmMkAs85ieBNLzd3NjmZaegk-Zs-1vFQxZ7Xchz7s')