<!-- Standard heading style for an article. -->
<script>
	import Image from '$lib/components/content/Image.svelte';
	import { page } from '$app/stores';
	import { siteTitle, authorSocialLinks } from '$lib/config.js';
	import { formatDate } from '$lib/js/format.js';
	import { getAppropriateDefaultImage } from '$lib/js/content';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();

	// Extract some date information!
	let dateInformation = $derived(
		props.date
			? props.updated
				? `${formatDate(props.date)} | ${formatDate(props.updated)}`
				: formatDate(props.date)
			: 'Date undefined'
	);

	// Category info
	let categories = $derived(props.categories ? props.categories : ['Uncategorised']);

	// Author info
	let authorInformation = $derived(props.authors ? props.authors : ['The SFN Team']);
	let authorLinks = $derived(
		authorInformation
			? authorInformation.map(
					(author) => authorSocialLinks[author.toLowerCase().replaceAll(' ', '_')]
				)
			: [undefined]
	);

	// Image info
	let defaultImage = $derived(getAppropriateDefaultImage(categories[0], props.title));
	let image = $derived(
		// I am so sorry, this code SUCKS
		props.image
			? // If image defined, we need to convert local paths too
				props.image.slice(0, 2) == './'
				? `/src/routes/(posts)${$page.url.pathname}/${props.image.slice(2)}`
				: props.image
			: defaultImage.localPath
	);
	let imageCredit = $derived(props.image ? props.imageCredit : defaultImage.credit);
	let imageURL = $derived(props.image ? props.imageURL : defaultImage.url);

	let headMetadata = $derived({
		title: props.title,
		description: props.description,
		author: props.authors,
		image: image
	});
</script>

<SiteHeader {...headMetadata} />

{#if image !== undefined}
	<div class="header-image">
		<Image
			src={image}
			alt={'Article header image.'}
			style="margin: auto; width: min(500px, 90vw); height: 320px; object-fit: cover; object-position: 50%"
		/>
	</div>
{/if}

<div class="info">
	<h1 class="heading">{props.title}</h1>
	<p class="category">
		{#each categories as category, i}
			{#if i !== 0}
				,
			{/if}
			<a href="/category/{category.toLowerCase()}">{category.replaceAll('-', ' ')}</a>
		{/each}
	</p>
	<p class="date">
		{#each authorInformation as author, index}
			{#if index !== 0}
				,
			{/if}
			{#if authorLinks[index]}
				<a href={authorLinks[index]} target="_blank">{author}</a>
			{:else}
				{author}
			{/if}
		{/each}
		| {dateInformation}
		{#if imageCredit}
			| Header image:
			{#if imageURL}
				<a href={imageURL} target="_blank">{imageCredit}</a>
			{:else}
				{imageCredit}
			{/if}
		{/if}
	</p>
</div>

<style>
	.header-image {
		text-align: center;
	}
	.info {
		margin-bottom: 50px;
	}
	.heading {
		margin-bottom: 8px;
	}
	.category {
		text-transform: capitalize;
		font-style: italic;
		color: var(--color-accent);
		font-weight: 800;
		font-size: 17px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.date {
		font-weight: 600;
		font-size: 17px;
		margin-top: 5px;
		margin-bottom: 0px;
	}
</style>
