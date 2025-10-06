<script>
  import { goto } from "$app/navigation";
  import { supabase } from "$lib/supabaseClient";
  import { onMount } from "svelte";

  onMount(async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Error fetching session:", error);
      alert("Error in fetching session, redirecting...");
       goto("/")
      return;
    }

    const session = data.session;
    if (!session) {
      alert("No active session found. Redirecting...");
       goto("/");
      return
    }
  });
</script>

<main>
  <h3>Redirecting...</h3>
</main>
