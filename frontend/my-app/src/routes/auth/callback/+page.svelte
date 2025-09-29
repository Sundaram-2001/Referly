<script>
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient";
    import { onMount } from "svelte";

    onMount(async()=>{
        const {data:{session},error}=await supabase.auth.getSession()
        
        // This block handles errors caused by supabase
        if(error){
            console.error("Error fetching session:", error);
            alert("Unexpected error in fetching session. Redirecting you..");
            await goto("/"); 
            return;
        }

        // This block handles successful session creation.
        if(session){
            await goto("/home");
        } 
        
        // handling unexpected errors
        else {
            console.warn("No session found. This might be due to an expired magic link or already used token.");
            alert("The login link is no longer valid. Please request a new one.");
            await goto("/"); 
        }
    })
</script>
<main>
    <h3>Redirecting...</h3>
</main>