<script>
	import ArxivPost from './ArxivPost.svelte';
	import PostList from './PostList.svelte';
	import { siteFormPaperSubmission } from '$lib/config.js';
	let { arxivPosts, date } = $props();

	// Infer which month this is
	const maxDate = $derived(
		Object.values(arxivPosts)
			.map((post) => new Date(post.published))
			.reduce((a, b) => (a > b ? a : b))
			.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
	);
</script>

{#if arxivPosts}
<div class="line"></div>
	<p>This edition contains the latest abstracts from {maxDate}.</p>
	{#each Object.values(arxivPosts) as post, index}
		<ArxivPost {post} topLine={index === 0} bottomLine={true} />
	{/each}

	<p style="">
		Want to see a paper in <em>The Star Formation Newsletter</em> next month?<br />Submit papers to
		<a href={siteFormPaperSubmission} target="_blank">our submission form.</a>
	</p>

	<div class="line"></div>
{:else}
	<p>Unable to load arXiv posts for this month.</p>
{/if}

<style>
	p {
		text-align: center; 
		font-size: 24px;
	}
</style>
