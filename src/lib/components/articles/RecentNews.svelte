<script>
	import PostList from '$lib/components/content/PostList.svelte';
	import { getPosts } from '$lib/js/posts';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();

	const thisNewsletter = $derived(new Date(props.date));

	async function getLastNewsletter() {
		const posts = await getPosts({
			limit: 1,
			category: 'newsletters',
			excludedURLs: props.url,
			maxDate: thisNewsletter
		});
		return posts.posts[0].date;
	}
</script>

<div class="other-news">
	<h2 style="margin-top: 75px; text-align: center"><em>― Since the previous SFN ―</em></h2>
	<!-- Todo: this double-await is ugly! -->
	{#await getLastNewsletter()}
		<p>Loading...</p>
	{:then lastNewsletter}
		{#await getPosts( { page: 1, limit: 10, excludeHiddenPosts: true, excludedURLs: props.url, minDate: lastNewsletter, maxDate: thisNewsletter, badCategories: 'newsletters' } )}
			<p>Loading...</p>
		{:then sfnPosts}
			<PostList posts={sfnPosts.posts} />
		{/await}
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
