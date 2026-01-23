<script>
	import PostList from '../../lib/components/PostList.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { siteFormPhDSubmission } from '$lib/config';

	let { data, children } = $props();

	// let categoryDisplayName = $derived(
	// 	data.category.endsWith('s')
	// 		? data.category.replaceAll('-', ' ')
	// 		: data.category.replaceAll('-', ' ') + 's'
	// );
	let categoryDisplayName = $derived(data.category.replaceAll('-', ' ').replace('phds', 'PhDs'));
</script>

<SiteHeader />

<!-- Title display special cases -->
{#if data.category === 'all'}
	<h1>All Posts</h1>
{:else}
	<!-- Add category name. It's capitalized with https://stackoverflow.com/a/38530325 -->
	<h1><span class="category">{categoryDisplayName}</span></h1>
{/if}

<!-- Information special cases -->

{#if data.category === 'phds'}
	<p style="margin-top: -20px; margin-bottom: 40px">
		<em
			>Have you recently defended your PhD? Let us know with <a
				href={siteFormPhDSubmission}
				target="_blank">this form</a
			>.</em
		>
	</p>
{/if}

{@render children()}

<PostList
	posts={data.posts}
	page={data.page}
	total={data.total}
	category={data.category.replaceAll('-', ' ')}
/>

<style>
	.category {
		text-transform: capitalize;
	}
</style>
