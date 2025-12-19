<!-- A generic flex container -->
<!-- For params explanation, see https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -->
<script>
	let {
		children,
		justifyContent = 'space-around',
		flexDirection = 'row',
		flexWrap = 'wrap',
		alignItems = 'center',
		alignContent = 'flex-start',
		gap = '5px'
	} = $props();
</script>

<div
	class="flex"
	style="justify-content: {justifyContent}; flex-direction: {flexDirection}; flex-wrap: {flexWrap}; align-items: {alignItems}; align-content: {alignContent}; gap: {gap}"
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.flex {
		display: flex;
	}
</style>
