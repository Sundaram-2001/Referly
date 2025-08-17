<script>
    import { goto } from "$app/navigation";
    let email=''
    let password=''
    let successMesaage=''
    let errorMessage=''
    import { supabase } from "$lib/supabaseClient";

    const login=async()=>{
        const {dat,error}=await supabase.auth.signInWithPassword({
            email,password
        })
        if(error){
            console.error(error)
            errorMessage="Unable to login , please come back later!"
        }
        else{
            goto("/dashboard")
        }
    }
</script>
<main>
    <form action="">
        <label for="email">Email</label>
        <input type="text" name="email" required/>
        <label for="email">Password</label>
        <input type="password" name="password" required/>
        <button type="submit">Login</button>
    </form>
</main>