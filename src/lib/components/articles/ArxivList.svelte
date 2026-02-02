<script>
	import ArxivPost from './ArxivPost.svelte';
	import PostList from '../content/PostList.svelte';
	import { siteFormPaperSubmission } from '$lib/config.js';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	let { arxivPosts, date } = $props();

	// Infer which month this is
	const maxDate = $derived(
		arxivPosts
			.map((post) => new Date(post.published))
			.reduce((a, b) => (a > b ? a : b))
			.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
	);

	// Hide a post on the backend
	let showPostHideResult = $state(undefined); // Stores the SetTimeout ID of the
	let postHideResultMessage = $state('');
	let postHideResultSuccess = $state(true);

	async function setPostHidden(event, postID) {
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
		const { success, message } = await response.json();

		// Update all of the relevant states
		const postTitle = arxivPosts.filter((post) => post.idShort === postID)[0].title;

		postHideResultSuccess = success;
		postHideResultMessage = `${message}<br>(${postTitle.slice(0, 55)}...)`;
		clearTimeout(showPostHideResult);
		showPostHideResult = setTimeout(() => {
			showPostHideResult = undefined;
		}, 5000);
	}
</script>

{#if showPostHideResult}
	<div class="post-hide-container" out:fade={{ duration: 2500 }}>
		<p
			class="post-hide-result"
			style="background-color: {postHideResultSuccess
				? postHideResultMessage.slice(0, 3) === 'Hid'
					? '#befbbd'
					: '#fbebbd'
				: '#fbbdbd'}"
		>
			{@html postHideResultMessage}
		</p>
	</div>
{/if}

{#if arxivPosts}
	<div class="line"></div>
	<p>This edition contains the latest abstracts from {maxDate}.</p>
	{#each arxivPosts as post, index}
		<ArxivPost
			{post}
			reportState={setPostHidden}
			isHidden={post.hidden}
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

	.post-hide-container {
		position: fixed;
		left: 0px;
		bottom: 10px;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 1000;
	}

	.post-hide-result {
		/* margin: 0px; */
		background-color: #fbbdbd;
		border-radius: 10px;
		padding: 10px;
		font-size: 20px;
		text-align: center;
		margin: 0px;
		font-weight: 600;
		/* font-style: italic; */
		/* font-family: monospace; */
	}
</style>
