<script>
  import { supabase } from "$lib/supabaseClient";

  let email = '';
  let password = '';
  let name = '';
  let successMessage = '';
  let errorMessage = '';

  const signUpUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, 
        emailRedirectTo: `${import.meta.env.PUBLIC_SITE_URL}/confirmation`
      }
    });

    if (error) {
      console.error(error);
      errorMessage = error.message;
    } else {
      successMessage = "Awesome, kindly check your email for next steps!";
    }
  };
</script>

<main>
  <form on:submit|preventDefault={signUpUser}>
    <label for="name">Your Name</label>
    <input type="text" name="name" bind:value={name} required />

    <label for="email">Your Email</label>
    <input type="email" name="email" bind:value={email} required />

    <label for="password">Your Password</label>
    <input type="password" name="password" bind:value={password} required />

    <button type="submit">Sign Up</button>

    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
    {#if successMessage}
      <p style="color: green;">{successMessage}</p>
    {/if}
  </form>
</main>
