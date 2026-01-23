<script>
	import PostList from '$lib/components/PostList.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	let { data } = $props();
</script>

<SiteHeader />
<PostList posts={data.posts} page={data.page} total={data.total} category={'all'} />
