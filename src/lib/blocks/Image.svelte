<script>
	import { convertPathOnLocalImages } from "$lib/js/content";
	let { src = '/assets/default.webp', caption = '', alt = '', style = '' } = $props();

	// If no alt text is set, default to just setting it to the caption
	let altText = $derived(alt ? alt : caption);
</script>

<!-- <p>{imagePath}</p> -->

<!-- <img class={revealClass} style={style} src={imagePath} alt={altText}/> -->

<div>
	<img {style} src={convertPathOnLocalImages(src)} alt={altText} />

	{#if caption}
		<p class="caption">{caption}</p>
	{/if}
</div>

<style>
	.caption {
		color: var(--color-lightgrey);
		font-size: 15pt;
		text-align: center;
		margin-top: -15pt;
	}
</style>
