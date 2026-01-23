<script>
	import { siteHead, resetSiteHeader } from '$lib/js/page.svelte';
	import { page } from '$app/state';

    let lastPage = $state();
	$effect(() => {
        if (page.url !== lastPage) {
            resetSiteHeader();
            lastPage = page.url;
        }
    })
</script>

<svelte:head>
	<title>{siteHead.title}</title>
	<meta name="title" content={siteHead.title} />
	<meta name="description" content={siteHead.description} />
	<meta name="keywords" content={siteHead.keywords} />
	<meta name="author" content={siteHead.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteHead.url} />
	<meta property="og:title" content={siteHead.title} />
	<meta property="og:description" content={siteHead.description} />
	<meta property="og:image" content={siteHead.image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteHead.url} />
	<meta name="twitter:title" content={siteHead.title} />
	<meta name="twitter:description" content={siteHead.description} />
	<meta name="twitter:image" content={siteHead.image} />
</svelte:head>
