<script>
	import Image from '$lib/blocks/Image.svelte';
	let {
		swap = false,
		src = '/assets/default.webp',
		caption = '',
		alt = '',
		style = 'width: 100%; max-width: 350px',
		children,
		margin = '50px',
		fullHeight = false
	} = $props();

	const heightStyle = fullHeight ? 'min-height: calc(100vh - 200px);' : '';
	const marginStyle = fullHeight
		? 'margin-top: 60px; margin-bottom: 60px;'
		: `margin-top: ${margin}; margin-bottom: ${margin};`;
</script>

<div class="flex-container" style="{marginStyle} {heightStyle}">
	{#if !swap && children}
		<div class="flex-child">
			{@render children()}
		</div>
	{/if}
	<div class="flex-child flex-image">
		<Image {src} {caption} {alt} {style} />
	</div>
	{#if swap && children}
		<div class="flex-child">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.flex-container {
		display: flex;
		align-items: center;
	}
	/* Computers */
	@media only screen and (min-width: 1000px) {
		.flex-container {
			justify-content: space-between;
			flex-flow: row wrap;
			gap: 50px;
		}
		.flex-child {
			flex: 0 0 50%;
			max-width: 375px;
		}
		.flex-image {
			order: 0;
		}
	}
	/* Tablets */
	@media screen and (min-width: 801px) and (max-width: 999px) {
		.flex-container {
			justify-content: space-between;
			flex-flow: column wrap;
			gap: 50px;
		}
		.flex-child {
			flex: 0 0 auto;
			max-width: 100%;
		}
		.flex-image {
			order: -1;
		}
	}
	/* Phones */
	@media screen and (max-width: 800px) {
		.flex-container {
			flex-flow: column;
			gap: 0px;
		}
		.flex-child {
			flex: 0 0 auto;
			max-width: 100%;
		}
		.flex-image {
			order: -1;
			max-width: 80vw !important;
			margin-bottom: 25px;
		}
	}
</style>
