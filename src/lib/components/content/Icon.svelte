<script>
	import { icons } from '$lib/icons';
	let { name, style } = $props();
</script>

<!-- Todo: find an alternative here for svelte:component -->
<svelte:component this={icons[name]} {style} />
