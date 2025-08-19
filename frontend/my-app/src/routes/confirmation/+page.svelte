<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const hash = window.location.hash.substring(1); 
    const params = new URLSearchParams(hash);

    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token
      });

      if (!error) {
        goto('/dashboard');
      } else {
        console.error(error);
      }
    } else {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        goto('/dashboard');
      }
    }
  });
</script>

<main>
  <p>Confirming your email... Please wait.</p>
</main>
