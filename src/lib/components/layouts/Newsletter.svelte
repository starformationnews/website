<!-- Newsletter layout! 
Includes arXiv posts for the month, which must be downloaded and put in an arxiv.json. -->

<script>
	import ArticleContainer from '../articles/ArticleContainer.svelte';
	import ArticleHeading from '../articles/ArticleHeading.svelte';
	import ArxivList from '$lib/components/articles/ArxivList.svelte';
	import RecentNews from '../articles/RecentNews.svelte';
	import { loadArxivData } from '$lib/js/content';
	import { page } from '$app/stores';

	let props = $props();
	let arxivPosts = loadArxivData($page.url.pathname);
</script>

<ArticleContainer>

	<ArticleHeading {...props} />

	{@render props.children?.()}

	{#if arxivPosts}
		<ArxivList {arxivPosts} date={props.date} />
	{:else}
		<p>Unable to load arXiv posts for this month.</p>
	{/if}

	<RecentNews />

</ArticleContainer>
