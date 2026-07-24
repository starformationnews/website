<script>
	let { children } = $props();
	import { page } from '$app/state';
	import Header from '$lib/components/site/Header.svelte';
	import Footer from '$lib/components/site/Footer.svelte';

	/* SITEWIDE CSS IMPORTS */
	import '$lib/css/main.css';
	import '$lib/css/variables.css';
	import '$lib/css/fonts.css';
	import '$lib/css/code.css';

	const width = $derived(page.data.fullWidth ? 'full-width' : 'readable-width');
</script>

<Header />

<div class={width}>
	{@render children()}
</div>

<Footer />

<style>
	/* Class for full-width pages. */
	.full-width {
		width: max(var(--content-width), 98%);
		margin-left: auto;
		margin-right: auto;
	}
	/* Class for most types of content, making it fill a nicely readable page width. */
	.readable-width {
		margin-left: auto;
		margin-right: auto;
		width: var(--content-width);
	}
</style>
