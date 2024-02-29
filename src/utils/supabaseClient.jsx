import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zqomegotkigtwjvfhcfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxb21lZ290a2lndHdqdmZoY2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MjMyNzksImV4cCI6MjAyMzk5OTI3OX0.jf28ejku1nqSj3aZKLXqQwOcvoLnH2ALwR30Rpa3HU4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
