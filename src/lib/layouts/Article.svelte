<!-- The following file defines the layout of a post on the website, controlling
 details like the formatting of the title, header image, category, author, and more.
 It should not need editing except for by maintainers of the site. -->


<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/blocks/Image.svelte';
	import { siteTitle, authorSocialLinks } from '$lib/config.js';
	import { formatDate } from '$lib/js/format.js';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();

	// console.log(props)

	// const metadata = $state(props.metadata);

	// Extract some date information!
	let dateInformation = 'Date undefined';
	if (props.date) {
		dateInformation = formatDate(props.date);
		if (props.updated) {
			dateInformation += ` | Updated: ${formatDate(props.updated)}`;
		}
	}

	// Category info
	let categories = ['Uncategorised'];
	if (props.categories) {
		categories = props.categories;
	}

	// Author info
	let authorInformation = 'Anonymous';
	let authorLinks = [undefined];
	if (props.authors) {
		authorInformation = props.authors;
		authorLinks = authorInformation.map(
			(author) => authorSocialLinks[author.toLowerCase().replaceAll(' ', '_')]
		);
	}
</script>

<article style="margin-top: 20px">
	{#if props.image !== undefined}
		<div class="header-image">
			<Image
				src={props.image}
				alt={'Article header image.'}
				style="margin: auto; width: min(600px, 90vw); height: 250px; object-fit: cover; object-position: 50%"
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
				<a href="/category/{category.toLowerCase()}">{category.replaceAll("-", " ")}</a>
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
			{/each},
			{dateInformation}
		</p>
	</div>

	{@render props.children?.()}
</article>

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
