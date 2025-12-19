<script>
	import PostList from '../../lib/components/PostList.svelte';

	let { data, children } = $props();
</script>

{#if data.category === 'all'}
	<h1>News & Updates</h1>
{:else}
	<!-- Add category name. It's capitalized with https://stackoverflow.com/a/38530325 -->
	<h1>Category: <span class="category">{data.category.replaceAll("-", " ")}</span></h1>
	<p style="text-align: left; margin: 30px 0px 30px 0px">
		<a href="/blog">↻ Return to main news page</a>
	</p>
{/if}

{@render children()}

<PostList posts={data.posts} page={data.page} total={data.total} category={data.category.replaceAll("-", " ")} />

<style>
	.category {
		text-transform: capitalize;
	}
</style>
