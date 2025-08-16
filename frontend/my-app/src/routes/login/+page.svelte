<script>
  import { goto } from "$app/navigation";
  let email=''
  let password=''
  let errorMessage=''
  let successMessage=''
  import { supabase } from "$lib/supabaseClient";
  const signIn=async()=>{
    const {data,error}=await supabase.auth.signInWithPassword({
      email,
      password
    })
    if(error){
      console.error(error)
      errorMessage="Unexpected error , kindly try again!!!"
    }
    else{
      await goto("/home")
    }
  }
</script>
<main>
    <form on:submit={signIn}>
  <label>
     Email:
    <input type="email" name="email" bind:value={email} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required/>
    </label>
  <button type="submit">Send</button>
</form>
</main>