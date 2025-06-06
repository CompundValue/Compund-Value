import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const supabase = createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    });

    console.log("Supabase initialized:", supabase);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Compound Value</h1>
      <p>App conectada con Supabase correctamente 🟢</p>
    </div>
  );
}
