// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tbhwdwkbfhhgumjxzgtw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaHdkd2tiZmhoZ3Vtanh6Z3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzUyNTMsImV4cCI6MjA1NDk1MTI1M30.cnc_3xdsZgvrdrylWLtDNu7XaeFAE0ICvuCYORstSHs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);