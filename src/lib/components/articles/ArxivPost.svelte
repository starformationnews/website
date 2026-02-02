<script>
	let { post, reportState, isHidden = false, topLine = true, bottomLine = false } = $props();
	import { formatDate, renderLaTeX } from '$lib/js/format';
	import { dev } from '$app/environment';

	// replaceAll to remove version number (ADS doesn't like them)
	// TODO these should be on everything and added higher up. Here is messy as fuck!
	const allAuthors = $derived(post.authors.map((author) => author.name));
	const displayAuthors = $derived(
		allAuthors.length > 5
			? allAuthors.slice(0, 5).join(', ') + ', <em>et al.</em>'
			: allAuthors.join(', ')
	);
	const displayDate = $derived(formatDate(post.published));
	const deversionedPostID = $derived(post.id.split('/').slice(-1)[0].replaceAll(/v.*/g, ''));
	const nasaADSLink = $derived(`https://ui.adsabs.harvard.edu/abs/arxiv:${deversionedPostID}`);
	const arxivAbsLink = $derived(`http://arxiv.org/abs/${deversionedPostID}`);
	const arxivPDFLink = $derived(`http://arxiv.org/pdf/${deversionedPostID}`);

	let classesOnPost = $derived(isHidden ? 'grey' : '');
	// $effect(() => {
	// 	console.log(isHidden);
	// });
</script>

{#if topLine}
	<div class="line"></div>
{/if}

<!-- Dev-only things -->
{#if dev}
	<div class="editor-controls">
		<label
			><input
				type="checkbox"
				style="width: 20px; height: 20px;"
				onclick={(event) => reportState(event, deversionedPostID)}
				bind:checked={isHidden}
			/> Hide post</label
		>
	</div>
{/if}

<!-- The post itself -->
<div class={classesOnPost}>
	<h4 class="title"><a href={arxivAbsLink} target="_blank">{@html renderLaTeX(post.title)}</a></h4>
	<div style="display: {isHidden ? 'none' : 'block'}">
		<p class="authors">{@html displayAuthors}</p>
		<p class="abstract">{@html renderLaTeX(post.summary)}</p>
		<p style="text-align: left">
			<a href={arxivAbsLink} style="margin: 0px 10px" target="_blank">arXiv</a>
			|
			<a href={arxivPDFLink} style="margin: 0px 10px" target="_blank"> PDF </a>
			|
			<a href={nasaADSLink} style="margin: 0px 10px" target="_blank"> ADS </a>
			|
			<span style="color: var(--color-darkgrey); margin-left: 10px">{displayDate}</span>
		</p>
	</div>
</div>

{#if bottomLine}
	<div class="line"></div>
{/if}

<!-- <button>
    SciX
</button> -->

<!-- {#if line}
	<div class="line"></div>
{/if} -->

<style>
	.line {
		width: 100%;
		height: 0px;
		border-bottom: 1px solid var(--color-lightgrey);
		/* border-top: 1px solid var(--color-lightgrey); */
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.authors {
		font-weight: 600;
		font-size: 20px;
		/* text-align: justify; */
		color: var(--color-darkgrey);
	}
	.title {
		line-height: 1.3;
		font-size: 25px;
		text-align: justify;
	}
	.abstract {
		line-height: 1.4;
		text-align: justify;
	}
	@media screen and (max-width: 800px) {
		.title {
			text-align: left;
		}
		.nophone {
			display: none;
		}
	}
	/* button {
		font-size: 20px;
		padding: 4px 15px 4px 15px;
		margin-right: 5px;
		border: 1px grey solid;
		border-radius: 6px;
		background-color: var(--color-lightergrey);
	} */
	.grey {
		color: pink;
		opacity: 0.5;
	}
	.editor-controls {
		position: absolute;
		margin-left: calc(var(--content-width) + 30px);
		font-size: 20px;
	}
	@media print {
		.editor-controls {
			display: none;
		}
	}
	@media screen and (max-width: 800px) {
		.editor-controls {
			display: none;
		}
	}
</style>
