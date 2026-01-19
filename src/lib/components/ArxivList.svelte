<script>
	import ArxivPost from './ArxivPost.svelte';
	import PostList from './PostList.svelte';
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
	{#each Object.values(arxivPosts) as post, index}
		<ArxivPost
			{post}
			topLine={index !== 0}
			bottomLine={index === Object.keys(arxivPosts).length - 1}
		/>
	{/each}
{:else}
	<p>Unable to load arXiv posts for this month.</p>
{/if}
