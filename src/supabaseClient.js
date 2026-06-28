import { createClient } from '@supabase/supabase-js';

// Vercel reads these variables directly from your environment settings
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || window._env_?.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || window._env_?.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
