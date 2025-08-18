<script>
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient";
    import { error } from "@sveltejs/kit";
    let email=''
    let password=''
    let successMesaage=''
    let errorMessage=''
    let name=''    
    const signUpUser=async()=>{
        const {data,error}=await supabase.auth.signUp({
            email,password,options:{
                emailRedirectTo:"http://localhost:5173/confirmation"
            }
        })
        if(error){
            console.error(error)
            errorMessage=error.message
        }
        else{
            successMesaage="Awesome , kindly check your email for next steps!"
        }
    }
</script>
<main>
    <form on:submit={signUpUser}>
        <label for="name">Your Name</label>
        <input type="text" name="name" bind:value={name} required/>
        <label for="email">Your Email</label>
        <input type="text" name="email" bind:value={email} required/>
        <label for="password">Your Password</label>
        <input type="password" name="password" bind:value={password} required />
        <button>SignUp</button>
        {#if error}
            <p style="color: red;">{errorMessage}</p>
        {/if}
        {#if successMesaage}
            <p style="color: green;">{successMesaage}</p>
        {/if}
    </form>
</main>