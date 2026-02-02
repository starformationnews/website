<script>
	import PostList from '$lib/components/content/PostList.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	let { data } = $props();
</script>

<SiteHeader />
<PostList posts={data.posts} page={data.page} total={data.total} category={'all'} />
