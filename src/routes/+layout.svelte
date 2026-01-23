<script>
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/* SITEWIDE CSS IMPORTS */
	import '$lib/css/main.css';
	import '$lib/css/variables.css';
	import '$lib/css/fonts.css';
	import '$lib/css/code.css';

	/* DYNAMIC WEBSITE TITLE */
	// From https://github.com/sveltejs/kit/issues/1540#issuecomment-2029016082
	// import { page } from '$app/stores';
	// import { siteTitle, siteURL, siteDescription } from '$lib/config.js';
	// import { convertPathOnLocalImages } from '$lib/js/content';
	// import { siteHead } from '$lib/js/page.svelte';
	// let head = $state({});
	// let defaultKeywords = ['Astronomy', 'Machine Learning', 'Space', 'Science', 'Programming'];
	// let defaultImage = '/src/lib/assets/images/pipe_nebula_eso_2009.webp'; // TODO: change

	// function setHead() {
	// 	// Default settings
	// 	head.title = [
	// 		siteTitle,
	// 		...$page.url.pathname
	// 			.split('/')
	// 			.slice(1)
	// 			.filter((value) => value !== 'category')
	// 			// TODO: could make it all upper case instead of just the first bit
	// 			.map((word) => (word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('%20', ' '))
	// 	]
	// 		.reverse()
	// 		.filter(Boolean)
	// 		.join(' - ');
	// 	head.description = siteDescription;
	// 	head.keywords = defaultKeywords;
	// 	head.author = siteTitle;
	// 	head.image = siteURL + convertPathOnLocalImages(defaultImage);
	// 	head.url = siteURL + $page.url.pathname;

	// 	// Custom settings
	// 	if ($page.data.pageMeta === undefined) {
	// 		return;
	// 	}
	// 	if ($page.data.pageMeta.title) {
	// 		head.title = $page.data.pageMeta.title + ' - ' + siteTitle;
	// 	}
	// 	if ($page.data.pageMeta.description) {
	// 		head.description = $page.data.pageMeta.description;
	// 	}
	// 	if ($page.data.pageMeta.keywords) {
	// 		head.keywords = [...defaultKeywords, ...($page.data.pageMeta.keywords || [])];
	// 	}
	// 	if ($page.data.pageMeta.image) {
	// 		head.image = siteURL + $page.data.pageMeta.image;
	// 	}
	// }

	// setHead();
	// $effect(setHead);
	// $effect(() => console.log(siteHead));
</script>

<Header />

<div class="slot-container">
	{@render children()}
</div>

<Footer />

<style>
	.slot-container {
		margin-left: auto;
		margin-right: auto;
		width: var(--content-width); /* PAGE WIDTH */
	}
</style>
