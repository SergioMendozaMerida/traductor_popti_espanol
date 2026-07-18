import { createClient } from '@supabase/supabase-js'

const projectUrl = 'https://ycsjimenijmdprmcxmot.supabase.co'
const apiKey = 'sb_publishable_vh_R5HaZ_jz1pnAF1AlwMg_tKqFfAwu'

// Create a single supabase client for interacting with your database
export const supabase = createClient(projectUrl, apiKey)