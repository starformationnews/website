<script>
	import { icons } from '$lib/icons';
	let { name, style } = $props();
</script>

<!-- Todo: find an alternative here for svelte:component -->
<!-- svelte-ignore svelte_component_deprecated -->
<svelte:component this={icons[name]} {style} />
