<!-- The following file defines the layout of a post on the website, controlling
 details like the formatting of the title, header image, category, author, and more.
 It should not need editing except for by maintainers of the site. -->

<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/components/content/Image.svelte';
	import ArxivList from '$lib/components/articles/ArxivList.svelte';
	import PostList from '$lib/components/content/PostList.svelte';
	import ArticleContainer from '../articles/ArticleContainer.svelte';
	import ArticleHeading from '../articles/ArticleHeading.svelte';
	import { getPosts } from '$lib/js/posts';
	import { page } from '$app/stores';
	import { siteTitle, authorSocialLinks } from '$lib/config.js';
	import { formatDate } from '$lib/js/format.js';
	import { getAppropriateDefaultImage, loadArxivData } from '$lib/js/content';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();

	// Arxiv info
	let arxivPosts = {};
	if (props.arxiv) {
		arxivPosts = loadArxivData($page.url.pathname);
	}
</script>

<article style="margin-top: 20px">
	<ArticleHeading {...props} />

	{@render props.children?.()}

	{#if props.arxiv}
		<!-- <h2 style="margin-top: 50px">― The latest papers ―</h2> -->
		{#if arxivPosts}
			<ArxivList {arxivPosts} date={props.date} />
		{:else}
			<p>Unable to load arXiv posts for this month.</p>
		{/if}

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
	{/if}
</article>

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
