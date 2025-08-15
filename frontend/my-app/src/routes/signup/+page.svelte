<script>
    import { supabase } from "$lib/supabaseClient";

    let email = '';
    let password = '';
    let successMessage = '';
    let errorMessage = '';

    const signUpNewUser = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:5173/confirmation',
            }
        });

        if (error) {
          console.error(error)
            errorMessage = "Unexpected error: " + error.message;
            successMessage = '';
        } else {
            successMessage = "Kindly check your mail for the next steps!";
            errorMessage = '';
        }
    };
</script>

<main>
    <form on:submit|preventDefault={signUpNewUser}>
        <label>
            Your email:
            <input type="email" bind:value={email} required />
        </label>
        <label>
            Your Password:
            <input type="password" bind:value={password} required />
        </label>
        <button type="submit">Sign Up</button>
    </form>

    {#if successMessage}
        <p style="color: green;">{successMessage}</p>
    {/if}
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
</main>
