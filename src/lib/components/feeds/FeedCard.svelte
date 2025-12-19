<script>
	import { onMount } from 'svelte';
	import { getFeedInfoSync } from '$lib/js/cache.svelte';
	import { numberFormatter } from '$lib/js/format';
	let { feed } = $props();

	const feedInfo = getFeedInfoSync()[feed];
</script>

<div class="card">
	<a href="/feeds/{feed}">
        <!-- {#if feedInfo} -->
		<div class="container">
			<img class="feed-avatar" src={feedInfo.avatar} alt="{feedInfo.displayName}'s avatar" />
			<!-- <div style="display: flex; align-items: center; margin-left: 10px; height: 100px"> -->
			<h3 style="margin-left: 10px; margin-bottom: 0px; margin-top: 18px; padding: 0px;">
				{feedInfo.displayName}
			</h3>
			<!-- </div> -->
		</div>
		<p style="margin-top: 10px; margin-bottom: 0px">
			{feedInfo.description.split('.')[0].split('!')[0]}.
		</p>
		<p style="margin-top: 5px; color: var(--color-grey)">
			Liked by {numberFormatter.format(feedInfo.likeCount)} users
		</p>
        <!-- {:else}
            <p>Loading...</p>
        {/if} -->
    </a>
</div>

<style>
    a {
        color: black;
    }
	.feed-avatar {
		width: 50px;
		border-radius: 10px;
		margin-top: 20px;
		margin-bottom: 0px;
	}
	.container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
	}
	.card {
		min-height: 157px;
		border-bottom: 1px solid var(--color-lightgrey);
	}
</style>
