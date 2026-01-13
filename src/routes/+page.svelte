<script>
	import PostList from '$lib/components/PostList.svelte';
	let { data } = $props();
</script>

<PostList posts={data.posts} page={data.page} total={data.total} category={'all'} />
