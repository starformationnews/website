<script>
	import { renderLaTeX } from '$lib/js/format.js';
	let props = $props();
	let showAbstract = $state(false);
</script>

{#if props.children}
	{#if showAbstract}
		<p style="margin-bottom: -20px">
			<strong>Abstract:</strong>
		</p>
		{@render props.children?.()}
	{:else}
		<p>
			<strong>Abstract:</strong>
			<button
				onclick={() => {
					showAbstract = true;
				}}>(show abstract)</button
			>
		</p>
	{/if}
{/if}

<style>
	button {
		border: none;
		display: inline;
		background: none;
		color: var(--color-accent);
		cursor: pointer;
		font-size: 20px;
	}
	button:hover {
		color: var(--color-accent-hover);
	}
</style>
