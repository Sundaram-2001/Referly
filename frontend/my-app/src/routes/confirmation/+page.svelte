<script>
    import { onMount } from "svelte";
    import { supabase } from "$lib/supabaseClient";
    import { goto } from "$app/navigation";
    let message='confirming you email...'
    onMount(async()=>{
        const {data,error}=await supabase.auth.getSession()
        if(error){
            console.error(error)
            message="error confirming your email , kindly signup again"
            return
        }
        if(data.session){
            message="Email , confirmed , redirecting to onboarding page.."
            setTimeout(() => {
        goto("/onboard")
      }, 2000);
        } else{
            message = 'No active session found. Please log in.';
        }
    })
</script>
<main>
  <p>{message}</p>
</main>