<script>
	import { formatDate } from '$lib/js/format';
	import { getAppropriateDefaultImage, convertPathOnLocalImages } from '$lib/js/content';
	let { post, noBottomLine = false } = $props();

	const alt = $derived(`Post thumbnail for blog post ${post.title}`);
	const url = $derived(post.link !== undefined ? post.link : post.url);
	const date = $derived(post.hideDate === undefined ? ' | ' + formatDate(post.date) : ' | (no date)');
</script>

<div class="container" style={noBottomLine ? 'border-bottom: none' : ''}>
	<div class="image-item">
		<a href={url}>
			{#if post.image !== undefined}
				<img src={convertPathOnLocalImages(post.image)} {alt} />
			{:else}
				<img
					src={convertPathOnLocalImages(
						getAppropriateDefaultImage(post.categories[0], post.title).localPath
					)}
					{alt}
				/>
			{/if}
		</a>
	</div>
	<div class="text-item">
		<h3 style="margin-top: 0px; margin-bottom: 10px">
			<a href={url}>{post.title}</a>
		</h3>
		<!-- <div class="red-line"></div> -->
		<p style="margin-top: 0px; margin-bottom: 0px;">
			<span class="category"
				><a href="/category/{post.categories[0].toLowerCase()}"
					>{post.categories[0].replaceAll('-', ' ')}</a
				></span
			>
			<span class="date">
				{date}
				{#if post.hidden}
					<br /><strong>(This post will be hidden on the main site.)</strong>
				{/if}
			</span>
		</p>
	</div>
</div>

<style>
	.container {
		/* background-color: var(--color-offwhite); */
		/* border-radius: 20px; */
		border-bottom: 1px var(--color-lightgrey) solid;
		padding: 30px 20px;
		width: calc(100% - 40px); /* Width - padding */
		margin-bottom: 0px;
	}
	.image-item {
		flex: 0 0 20%;
		padding: 0px;
		height: 120px;
	}
	.text-item {
		flex: 1 1 auto;
		/* max-width: calc(75% - 60px); */
		text-overflow: ellipsis;
	}
	/* .red-line {
		background-color: var(--color-accent);
		height: 3px;
		width: 80px;
		border-radius: 2px;
		margin: 0px;
	} */
	.category {
		color: var(--color-accent);
		text-transform: capitalize;
		font-weight: 750;
		font-size: 16px;
	}
	.date {
		margin-left: 0px;
		font-weight: 500;
		font-size: 16px;
	}
	img {
		object-fit: cover;
		object-position: 50%;
		width: 100%;
	}
	h3 > a {
		color: black;
	}
	a:hover {
		color: var(--color-accent);
	}

	/* Computers */
	@media only screen and (min-width: 800px) {
		.container {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 20px;
		}
		img {
			height: 120px;
		}
	}
	/* Tablets */
	/* @media screen and (min-width: 801px) and (max-width: 999px) {
		.container {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 20px;
		}
		img {
			height: 120px;
		}
	} */
	/* Phones */
	@media screen and (max-width: 800px) {
		.container {
			display: flex;
			flex-flow: column wrap;
			justify-content: flex-start;
			align-items: left;
			gap: 20px;
		}
		img {
			height: 200px;
		}
	}
</style>
