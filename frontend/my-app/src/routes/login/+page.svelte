<script>
	import { goto } from "$app/navigation";
	import { supabase } from "$lib/supabaseClient";

	let email = "";
	let password = "";
	let successMessage = "";
	let errorMessage = "";

	const login = async (e) => {
		e.preventDefault(); // stop page refresh
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			console.error(error);
			errorMessage = "Unable to login, please try again!";
		} else {
			successMessage = "Login successful!";
			goto("/dashboard");
		}
	};
</script>

<main>
	<form on:submit={login}>
		<label for="email">Email</label>
		<input type="email" name="email" bind:value={email} required />

		<label for="password">Password</label>
		<input type="password" name="password" bind:value={password} required />

		<button type="submit">Login</button>
	</form>

	{#if errorMessage}
		<p style="color: red">{errorMessage}</p>
	{/if}
	{#if successMessage}
		<p style="color: green">{successMessage}</p>
	{/if}
</main>
