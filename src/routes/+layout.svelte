<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeState } from '$lib/theme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Ensures theme is correctly initialized and applied on mount
		themeState.apply();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Kulveer Singh | Technical Project Manager & Senior Full Stack Developer</title>
</svelte:head>

<div class="min-h-screen bg-app-bg text-app-text-primary transition-colors duration-300 font-geist antialiased">
	{@render children()}
</div>
