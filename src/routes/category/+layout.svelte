<script>
	import PostList from '../../lib/components/PostList.svelte';

	let { data, children } = $props();

	let categoryDisplayName = $derived(
		data.category.endsWith('s')
			? data.category.replaceAll('-', ' ')
			: data.category.replaceAll('-', ' ') + 's'
	);
</script>

{#if data.category === 'all'}
	<h1>All Posts</h1>
{:else}
	<!-- Add category name. It's capitalized with https://stackoverflow.com/a/38530325 -->
	<h1><span class="category">{categoryDisplayName}</span></h1>
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
