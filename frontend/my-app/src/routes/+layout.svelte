<script>
	import favicon from '$lib/assets/favicon.svg';
    import { ClerkProvider } from 'svelte-clerk';
	let { children } = $props();
	const publishableKey=import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY
</script>
<ClerkProvider publishablekey={publishableKey} children={children}/>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


