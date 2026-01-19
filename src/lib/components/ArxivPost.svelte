<script>
	let { post, topLine = true, bottomLine = false } = $props();
	const authors = $derived(post.authors.map((author) => author.name).join(', '));
	const adsLink = $derived(
		'https://ui.adsabs.harvard.edu/abs/arxiv:' +
			post.id.split('/').slice(-1)[0].replaceAll(/v.*/g, '') // replaceAll to remove version number (ADS doesn't like them)
	);
</script>

{#if topLine}
	<div class="line"></div>
{/if}

<h4 class="title">{post.title}</h4>
<p class="authors">{authors}</p>
<p class="abstract">{post.summary}</p>

<a href={post.id} target="_blank">
	<button> arXiv </button>
</a>

<a href={post.id.replace('/abs/', '/pdf/')} target="_blank">
	<button> PDF </button>
</a>

<a href={adsLink} target="_blank">
	<button> ADS </button>
</a>

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
		height: 1px;
		border-bottom: 1px solid var(--color-grey);
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.authors {
		font-weight: 600;
		color: var(--color-accent);
		font-size: 18px;
	}
    .title {
        font-size: 25px;
    }
    .abstract {
        line-height: 1.4;
        text-align: justify;
    }
	button {
		font-size: 20px;
		padding: 4px 15px 4px 15px;
		/* width: 100px; */
		margin-right: 5px;
		border: 1px grey solid;
		border-radius: 6px;
        background-color: var(--color-lightergrey);
	}
</style>
