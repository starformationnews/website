<script>
	import { formatDate } from '$lib/js/format';

	// import { renderMathInElement } from 'katex/contrib/auto-render/auto-render.js';
	import katex from 'katex';
	import Footer from './Footer.svelte';
	let { post, topLine = true, bottomLine = false } = $props();
	const allAuthors = $derived(post.authors.map((author) => author.name));
	const displayAuthors = $derived(
		allAuthors.length > 5
			? allAuthors.slice(0, 5).join(', ') + ', <em>et al.</em>'
			: allAuthors.join(', ')
	);
	const displayDate = $derived(formatDate(post.published));

	// replaceAll to remove version number (ADS doesn't like them)
	const deversionedPostID = $derived(post.id.split('/').slice(-1)[0].replaceAll(/v.*/g, ''));
	const nasaADSLink = $derived(`https://ui.adsabs.harvard.edu/abs/arxiv:${deversionedPostID}`);
	const arxivAbsLink = $derived(`http://arxiv.org/abs/${deversionedPostID}`);
	const arxivPDFLink = $derived(`http://arxiv.org/pdf/${deversionedPostID}`);

	function renderLaTeX(text) {
		return text
			.replaceAll(' -- ', ' – ')
			.replaceAll('--', '—')
			.replaceAll(/\$\$(.*?)\$\$/g, function (outer, inner) {
				return katex.renderToString(inner, { displayMode: true, throwOnError: false });
			})
			.replaceAll(/\$(.*?)\$/g, function (outer, inner) {
				return katex.renderToString(inner, { displayMode: false, throwOnError: false });
			})
			.replaceAll(/\\\[(.*?)\\\]/g, function (outer, innner) {
				return katex.renderToString(inner, { displayMode: true, throwOnError: false });
			})
			.replaceAll(/\\\((.*?)\\\)/g, function (outer, innner) {
				return katex.renderToString(inner, { displayMode: false, throwOnError: false });
			});
	}

	let hidden = $state(false);
	let classes = $derived(hidden ? 'grey' : '');
</script>

{#if topLine}
	<div class="line"></div>
{/if}

<div class="checkbox">
	<label><input type="checkbox" style="width: 20px; height: 20px;" bind:checked={hidden} /> Hide post</label>
</div>
<div class={classes}>
	<h4 class="title"><a href={arxivAbsLink} target="_blank">{@html renderLaTeX(post.title)}</a></h4>
	<div style="display: {hidden ? 'none' : 'block'}">
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

<!-- <a href={post.id} target="_blank">
	<button> arXiv </button>
</a>

<a href={post.id.replace('/abs/', '/pdf/')} target="_blank">
	<button> PDF </button>
</a>

<a href={adsLink} target="_blank">
	<button> ADS </button>
</a> -->
<!-- <a class="button" href={arxivAbsLink} target="_blank"> arXiv </a>

<a class="button" href={arxivPDFLink} target="_blank"> PDF </a>

<a class="button" href={nasaADSLink} target="_blank"> ADS </a> -->

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
	.checkbox {
		position: absolute;
		right: 3vw;
		width: 15vw;
		font-size: 20px;
	}
</style>
