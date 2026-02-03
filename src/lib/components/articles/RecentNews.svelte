<script>
	import PostList from '$lib/components/content/PostList.svelte';
	import { getPosts } from '$lib/js/posts';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();
</script>

<div class="other-news">
	<h2 style="margin-top: 75px; text-align: center"><em>― Recent other news ―</em></h2>
	{#await getPosts({ page: 1, limit: 3 })}
		<p>Loading...</p>
	{:then sfnPosts}
		<PostList posts={sfnPosts.posts} />
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</div>

<style>
	h2 {
		text-align: center;
	}

	@media print {
		.other-news {
			display: none;
		}
	}
</style>
