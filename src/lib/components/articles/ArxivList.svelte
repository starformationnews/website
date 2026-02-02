<script>
	import ArxivPost from './ArxivPost.svelte';
	import PostList from '../content/PostList.svelte';
	import { siteFormPaperSubmission } from '$lib/config.js';
	import { page } from '$app/stores';
	let { arxivPosts, date } = $props();

	// Infer which month this is
	const maxDate = $derived(
		Object.values(arxivPosts)
			.map((post) => new Date(post.published))
			.reduce((a, b) => (a > b ? a : b))
			.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
	);

	// Hide a post on the backend
	async function setPostHidden(event, postID) {
		console.log('Hiding post', event.target.checked, postID);

		const response = await fetch('/api/dev/hideArXivPost', {
			method: 'POST',
			body: JSON.stringify({
				postID,
				hidden: event.target.checked,
				path: `/src/routes/(posts)${$page.url.pathname}/hidden.json`
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { success } = await response.json();
		
		if (success) {
			console.log("Success!")
		}
	}

	// console.log()
</script>

{#if arxivPosts}
	<div class="line"></div>
	<p>This edition contains the latest abstracts from {maxDate}.</p>
	{#each Object.values(arxivPosts) as post, index}
		<ArxivPost
			{post}
			reportState={setPostHidden}
			isHidden={false}
			topLine={index === 0}
			bottomLine={true}
		/>
	{/each}

	<p style="">
		Want to see a paper in <em>The Star Formation Newsletter</em> next month?<br />Submit abstracts
		to
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
