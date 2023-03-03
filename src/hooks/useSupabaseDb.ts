import { createClient } from '@supabase/supabase-js';
import { Database } from '@/schema';

export default function useSupabaseDb() {
  return createClient<Database>(
    'https://fnwragqteguxaoxrrsku.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZud3JhZ3F0ZWd1eGFveHJyc2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3Mjk5NzAsImV4cCI6MTk5MzMwNTk3MH0.MoptPMtN4ncx45UolG1mH0fh0V6wnS2sC0TXgYdXk4w'
  );
}
