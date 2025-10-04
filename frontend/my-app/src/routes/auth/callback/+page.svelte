<script>
	import { goto } from "$app/navigation";
	import { supabase } from "$lib/supabaseClient";
	import { onMount } from "svelte";

	onMount(async () => {
		const { data: { session }, error } = await supabase.auth.getSession();

		// supabase errors in fetching the session
		if (error) {
			console.error("Error fetching session:", error);
			alert("Unexpected error while fetching session. Redirecting...");
			await goto("/");
			return;
		}

		// profile check
		if (session) {
			const user = session.user;

			// session exists, nowcheck if profile exists
			const { data: profile, error: profileError } = await supabase
				.from("user_details")
				.select("*")
				.eq("id", user.id)
				.single();
            //error in fetching the profile
			if (profileError && profileError.code !== "PGRST116") {
				// PGRST116 means "No rows found"
				console.error("Error fetching profile:", profileError);
				alert("Error checking profile. Redirecting...");
				await goto("/");
				return;
			}
            //profile does not exists, that means its a new user
			if (!profile) {
				await goto("/onboarding");
			} else {
				// Existing user, route to the dashboard
				await goto("/dashboard");
			}
		} else {
			// No session found
			console.warn("No session found. Possibly expired or invalid link.");
			alert("The login link is no longer valid. Please request a new one.");
			await goto("/");
		}
	});
</script>

<main>
	<h3>Redirecting...</h3>
</main>